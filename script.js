const STORAGE_KEYS = {
  auctions: "reverse-auction-desk.auctions",
  profile: "reverse-auction-desk.profile",
  selected: "reverse-auction-desk.selected",
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const els = {
  statusBanner: document.getElementById("statusBanner"),
  openCount: document.getElementById("openCount"),
  bestBid: document.getElementById("bestBid"),
  averageReduction: document.getElementById("averageReduction"),
  currentBoardCode: document.getElementById("currentBoardCode"),
  createAuctionForm: document.getElementById("createAuctionForm"),
  joinAuctionForm: document.getElementById("joinAuctionForm"),
  auctionList: document.getElementById("auctionList"),
  selectedTitle: document.getElementById("selectedTitle"),
  selectedSubtitle: document.getElementById("selectedSubtitle"),
  detailStatus: document.getElementById("detailStatus"),
  detailCode: document.getElementById("detailCode"),
  detailBestBid: document.getElementById("detailBestBid"),
  detailLeadBidder: document.getElementById("detailLeadBidder"),
  detailNextBid: document.getElementById("detailNextBid"),
  selectedAuctionRules: document.getElementById("selectedAuctionRules"),
  bidHistoryBody: document.getElementById("bidHistoryBody"),
  bidForm: document.getElementById("bidForm"),
  bidBidderName: document.getElementById("bidBidderName"),
  bidAmount: document.getElementById("bidAmount"),
  bidNote: document.getElementById("bidNote"),
  bidSubmitButton: document.getElementById("bidSubmitButton"),
  joinAuctionCode: document.getElementById("joinAuctionCode"),
  joinBidderName: document.getElementById("joinBidderName"),
  auctionTitle: document.getElementById("auctionTitle"),
  auctionHost: document.getElementById("auctionHost"),
  auctionCategory: document.getElementById("auctionCategory"),
  auctionStartingPrice: document.getElementById("auctionStartingPrice"),
  auctionMinimumStep: document.getElementById("auctionMinimumStep"),
  auctionDeadline: document.getElementById("auctionDeadline"),
  auctionDetails: document.getElementById("auctionDetails"),
};

const state = {
  auctions: loadAuctions(),
  selectedAuctionId: loadSelectedAuctionId(),
  profile: loadProfile(),
  notice: "",
};

initialize();

function initialize() {
  setDefaultDeadline();
  bindEvents();
  normalizeExpiredAuctions();
  ensureSelection();
  render();
}

function bindEvents() {
  els.createAuctionForm.addEventListener("submit", handleCreateAuction);
  els.joinAuctionForm.addEventListener("submit", handleJoinAuction);
  els.bidForm.addEventListener("submit", handleSubmitBid);
}

function loadAuctions() {
  const raw = localStorage.getItem(STORAGE_KEYS.auctions);

  if (!raw) {
    return seedAuctions();
  }

  try {
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed) || parsed.length === 0) {
      return seedAuctions();
    }

    return parsed.map(normalizeAuction);
  } catch {
    return seedAuctions();
  }
}

function loadProfile() {
  const raw = localStorage.getItem(STORAGE_KEYS.profile);

  if (!raw) {
    return { bidderName: "" };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      bidderName: typeof parsed.bidderName === "string" ? parsed.bidderName : "",
    };
  } catch {
    return { bidderName: "" };
  }
}

function loadSelectedAuctionId() {
  return localStorage.getItem(STORAGE_KEYS.selected) || "";
}

function seedAuctions() {
  const now = Date.now();

  return [
    normalizeAuction({
      id: makeId(),
      code: "RA-8A2K41",
      title: "Office cleaning contract",
      host: "Procurement desk",
      category: "Facilities",
      startingPrice: 12800,
      minimumStep: 150,
      deadlineAt: new Date(now + 54 * 60 * 60 * 1000).toISOString(),
      createdAt: new Date(now - 8 * 60 * 60 * 1000).toISOString(),
      notes: "Quarterly cleaning across two floors and a shared lobby.",
      bids: [
        {
          id: makeId(),
          bidder: "Northline Services",
          amount: 12100,
          note: "Includes weekend window cleaning.",
          createdAt: new Date(now - 5 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: makeId(),
          bidder: "Metro Building Care",
          amount: 11750,
          note: "Extended after-hours support included.",
          createdAt: new Date(now - 3 * 60 * 60 * 1000).toISOString(),
        },
      ],
    }),
    normalizeAuction({
      id: makeId(),
      code: "RA-4F7K2P",
      title: "Fleet maintenance package",
      host: "Operations team",
      category: "Logistics",
      startingPrice: 9600,
      minimumStep: 100,
      deadlineAt: new Date(now + 36 * 60 * 60 * 1000).toISOString(),
      createdAt: new Date(now - 6 * 60 * 60 * 1000).toISOString(),
      notes: "Service plan for six vans and two light trucks.",
      bids: [
        {
          id: makeId(),
          bidder: "Prime Garage",
          amount: 9150,
          note: "Parts and labor included.",
          createdAt: new Date(now - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
    }),
    normalizeAuction({
      id: makeId(),
      code: "RA-2C9M8V",
      title: "Corporate event catering",
      host: "Events office",
      category: "Events",
      startingPrice: 8400,
      minimumStep: 120,
      deadlineAt: new Date(now + 72 * 60 * 60 * 1000).toISOString(),
      createdAt: new Date(now - 4 * 60 * 60 * 1000).toISOString(),
      notes: "Plated lunch service for 160 guests.",
      bids: [],
    }),
  ];
}

function normalizeAuction(auction) {
  const deadlineAt = toIsoDate(auction.deadlineAt || auction.deadline || new Date().toISOString());
  const bids = Array.isArray(auction.bids)
    ? auction.bids.map(normalizeBid).filter(Boolean)
    : [];
  const baseStartingPrice = Number(auction.startingPrice ?? auction.ceilingPrice ?? 0);
  const startingPrice = Number.isFinite(baseStartingPrice) && baseStartingPrice > 0 ? baseStartingPrice : 1;
  const minimumStepValue = Number(auction.minimumStep ?? auction.minStep ?? 1);
  const minimumStep = Number.isFinite(minimumStepValue) && minimumStepValue > 0 ? minimumStepValue : 1;

  return {
    id: String(auction.id || makeId()),
    code: normalizeCode(auction.code || makeCode()),
    title: String(auction.title || "Untitled auction"),
    host: String(auction.host || "Unknown host"),
    category: String(auction.category || "General"),
    startingPrice,
    minimumStep,
    deadlineAt,
    createdAt: toIsoDate(auction.createdAt || new Date().toISOString()),
    notes: String(auction.notes || auction.note || ""),
    bids,
    status: Date.now() >= new Date(deadlineAt).getTime() || auction.status === "closed" ? "closed" : "open",
  };
}

function normalizeBid(bid) {
  if (!bid || typeof bid !== "object") {
    return null;
  }

  const amount = Number(bid.amount);

  if (!Number.isFinite(amount) || amount <= 0) {
    return null;
  }

  return {
    id: String(bid.id || makeId()),
    bidder: String(bid.bidder || "Anonymous bidder"),
    amount,
    note: String(bid.note || ""),
    createdAt: toIsoDate(bid.createdAt || new Date().toISOString()),
  };
}

function normalizeExpiredAuctions() {
  let changed = false;

  state.auctions = state.auctions.map((auction) => {
    if (auction.status === "closed") {
      return auction;
    }

    if (Date.now() >= new Date(auction.deadlineAt).getTime()) {
      changed = true;
      return {
        ...auction,
        status: "closed",
      };
    }

    return auction;
  });

  if (changed) {
    saveAuctions();
  }
}

function ensureSelection() {
  const selectionExists = state.auctions.some((auction) => auction.id === state.selectedAuctionId);

  if (selectionExists) {
    return;
  }

  const firstOpen = state.auctions.find((auction) => auction.status === "open");
  const fallback = firstOpen || state.auctions[0] || null;

  state.selectedAuctionId = fallback ? fallback.id : "";
  persistSelectedAuctionId();
}

function render() {
  normalizeExpiredAuctions();
  ensureSelection();
  renderProfileDefaults();
  renderMarketSummary();
  renderAuctionList();
  renderSelectedAuction();
  renderNotice();
}

function renderProfileDefaults() {
  if (!els.joinBidderName.value && state.profile.bidderName) {
    els.joinBidderName.value = state.profile.bidderName;
  }

  if (!els.bidBidderName.value && state.profile.bidderName) {
    els.bidBidderName.value = state.profile.bidderName;
  }
}

function renderMarketSummary() {
  const openAuctions = state.auctions.filter((auction) => auction.status === "open");
  const currentBids = openAuctions.map((auction) => getCurrentBestBid(auction));
  const lowestLiveBid = currentBids.length ? Math.min(...currentBids) : null;

  els.openCount.textContent = String(openAuctions.length);
  els.bestBid.textContent = lowestLiveBid ? formatMoney(lowestLiveBid) : "No live bid";
  els.averageReduction.textContent = openAuctions.length
    ? `${averageReductionPercent(openAuctions).toFixed(1)}%`
    : "0%";

  const selected = getSelectedAuction();
  els.currentBoardCode.textContent = selected ? selected.code : "None selected";
}

function renderAuctionList() {
  const sortedAuctions = [...state.auctions].sort(compareAuctions);

  if (!sortedAuctions.length) {
    els.auctionList.innerHTML = '<div class="no-data">No auctions have been created yet.</div>';
    return;
  }

  els.auctionList.innerHTML = sortedAuctions
    .map((auction) => {
      const isActive = auction.id === state.selectedAuctionId;
      const bestBid = getCurrentBestBid(auction);
      const leadBid = getBestBidRecord(auction);
      const statusLabel = auction.status === "open" ? "Open" : "Closed";
      const statusClass = auction.status === "open" ? "open" : "closed";
      const nextAllowed = auction.status === "open" ? Math.max(1, bestBid - auction.minimumStep) : 0;

      return `
        <article class="auction-card ${isActive ? "is-active" : ""}" data-auction-id="${auction.id}">
          <div class="card-top">
            <div>
              <h3 class="card-title">${escapeHtml(auction.title)}</h3>
              <p class="card-subtitle">${escapeHtml(auction.host)} · ${escapeHtml(auction.category)}</p>
            </div>
            <span class="badge ${statusClass}">${statusLabel}</span>
          </div>
          <div class="card-meta">
            <div>
              <span>Current offer</span>
              <strong>${formatMoney(bestBid)}</strong>
            </div>
            <div>
              <span>Code</span>
              <strong>${escapeHtml(auction.code)}</strong>
            </div>
            <div>
              <span>Lead bidder</span>
              <strong>${escapeHtml(leadBid ? leadBid.bidder : "None yet")}</strong>
            </div>
            <div>
              <span>Next allowed</span>
              <strong>${auction.status === "open" ? formatMoney(nextAllowed) : "Closed"}</strong>
            </div>
          </div>
          <div class="card-actions">
            <button class="card-button secondary" type="button" data-action="copy" data-code="${escapeHtml(auction.code)}">Use code</button>
            <button class="card-button" type="button" data-action="open" data-id="${auction.id}">Open board</button>
          </div>
        </article>
      `;
    })
    .join("");

  els.auctionList.querySelectorAll('[data-action="open"]').forEach((button) => {
    button.addEventListener("click", () => {
      selectAuction(button.dataset.id);
    });
  });

  els.auctionList.querySelectorAll('[data-action="copy"]').forEach((button) => {
    button.addEventListener("click", async () => {
      const code = button.dataset.code || "";
      await copyCodeToClipboard(code);
      setNotice(`Board code ${code} copied to the clipboard.`);
    });
  });
}

function renderSelectedAuction() {
  const auction = getSelectedAuction();

  if (!auction) {
    els.selectedTitle.textContent = "No auction selected";
    els.selectedSubtitle.textContent = "Choose a board to review bids and submit a lower offer.";
    els.detailStatus.textContent = "Idle";
    els.detailStatus.className = "badge";
    els.detailCode.textContent = "-";
    els.detailBestBid.textContent = "-";
    els.detailLeadBidder.textContent = "-";
    els.detailNextBid.textContent = "-";
    els.selectedAuctionRules.textContent = "Open a board to see bidding rules.";
    els.bidHistoryBody.innerHTML = '<tr><td colspan="4"><div class="no-data">No board is currently selected.</div></td></tr>';
    setBidFormEnabled(false);
    return;
  }

  const bestBid = getCurrentBestBid(auction);
  const leadBid = getBestBidRecord(auction);
  const nextAllowed = auction.status === "open" ? Math.max(1, bestBid - auction.minimumStep) : 0;
  const leadingText = leadBid ? `${leadBid.bidder} at ${formatMoney(leadBid.amount)}` : "No bids yet";
  const openForText = auction.status === "open" ? `Open until ${formatDateTime(auction.deadlineAt)}` : `Closed on ${formatDateTime(auction.deadlineAt)}`;

  els.selectedTitle.textContent = auction.title;
  els.selectedSubtitle.textContent = `${auction.host} · ${auction.category} · Starting at ${formatMoney(auction.startingPrice)}`;
  els.detailStatus.textContent = auction.status === "open" ? "Open" : "Closed";
  els.detailStatus.className = `badge ${auction.status === "open" ? "open" : "closed"}`;
  els.detailCode.textContent = auction.code;
  els.detailBestBid.textContent = formatMoney(bestBid);
  els.detailLeadBidder.textContent = leadBid ? leadBid.bidder : "None yet";
  els.detailNextBid.textContent = auction.status === "open" ? formatMoney(nextAllowed) : "Closed";
  els.selectedAuctionRules.innerHTML = auction.status === "open"
    ? `This board is live. The next accepted bid must be <strong>${formatMoney(nextAllowed)}</strong> or lower.`
    : `This board is closed. The winning bid is <strong>${formatMoney(bestBid)}</strong>.`;

  const openText = auction.notes ? `${openForText} · ${auction.notes}` : openForText;
  els.selectedSubtitle.textContent = `${auction.host} · ${auction.category} · ${openText}`;

  const historyRows = [...auction.bids]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .map((bid) => {
      return `
        <tr>
          <td>${formatTime(bid.createdAt)}</td>
          <td>${escapeHtml(bid.bidder)}</td>
          <td>${formatMoney(bid.amount)}</td>
          <td>${escapeHtml(bid.note || "-")}</td>
        </tr>
      `;
    });

  if (!historyRows.length) {
    els.bidHistoryBody.innerHTML = '<tr><td colspan="4"><div class="no-data">No bids have been submitted yet.</div></td></tr>';
  } else {
    els.bidHistoryBody.innerHTML = historyRows.join("");
  }

  els.bidBidderName.value = els.bidBidderName.value || state.profile.bidderName || "";
  els.bidAmount.value = "";
  els.bidNote.value = "";

  if (auction.status === "open") {
    els.bidAmount.placeholder = String(Math.max(1, nextAllowed));
  } else {
    els.bidAmount.placeholder = "Closed";
  }

  setBidFormEnabled(auction.status === "open" && nextAllowed >= 1);
  els.bidAmount.setAttribute("max", String(Math.max(1, nextAllowed)));
  els.bidAmount.setAttribute("min", "1");
  els.bidAmount.setAttribute("step", "1");
}

function renderNotice() {
  if (!state.notice) {
    els.statusBanner.hidden = true;
    els.statusBanner.textContent = "";
    return;
  }

  els.statusBanner.hidden = false;
  els.statusBanner.textContent = state.notice;
}

function handleCreateAuction(event) {
  event.preventDefault();

  const title = els.auctionTitle.value.trim();
  const host = els.auctionHost.value.trim();
  const category = els.auctionCategory.value.trim();
  const startingPrice = Number(els.auctionStartingPrice.value);
  const minimumStep = Number(els.auctionMinimumStep.value);
  const deadlineValue = els.auctionDeadline.value;
  const notes = els.auctionDetails.value.trim();

  if (!title || !host || !category || !Number.isFinite(startingPrice) || startingPrice <= 0 || !Number.isFinite(minimumStep) || minimumStep <= 0 || !deadlineValue) {
    setNotice("Please complete every required field before publishing the board.");
    return;
  }

  const deadlineAt = new Date(deadlineValue);

  if (Number.isNaN(deadlineAt.getTime()) || deadlineAt.getTime() <= Date.now()) {
    setNotice("Choose a closing time in the future.");
    return;
  }

  const code = generateUniqueCode();
  const auction = normalizeAuction({
    id: makeId(),
    code,
    title,
    host,
    category,
    startingPrice,
    minimumStep,
    deadlineAt: deadlineAt.toISOString(),
    createdAt: new Date().toISOString(),
    notes,
    bids: [],
  });

  state.auctions.unshift(auction);
  state.selectedAuctionId = auction.id;
  persistSelectedAuctionId();
  saveAuctions();
  setNotice(`Auction ${auction.code} published successfully.`);
  els.joinAuctionCode.value = auction.code;
  els.auctionTitle.closest("form").reset();
  els.auctionTitle.focus();
  setDefaultDeadline();
  render();
  scrollToDetailPanel();
}

function handleJoinAuction(event) {
  event.preventDefault();

  const code = normalizeCode(els.joinAuctionCode.value);
  const bidderName = els.joinBidderName.value.trim();
  const auction = findAuctionByCode(code);

  if (!auction) {
    setNotice(`No board was found for code ${els.joinAuctionCode.value.trim() || code || "entered"}.`);
    return;
  }

  if (!bidderName) {
    setNotice("Enter a bidder name before opening the board.");
    return;
  }

  saveProfile({ bidderName });
  state.selectedAuctionId = auction.id;
  persistSelectedAuctionId();
  setNotice(`Board ${auction.code} opened for ${bidderName}.`);
  els.bidBidderName.value = bidderName;
  render();
  scrollToDetailPanel();
}

function handleSubmitBid(event) {
  event.preventDefault();

  const auction = getSelectedAuction();

  if (!auction) {
    setNotice("Select a board before submitting a bid.");
    return;
  }

  if (auction.status !== "open") {
    setNotice("This board is closed and no longer accepts bids.");
    return;
  }

  const bidderName = els.bidBidderName.value.trim();
  const bidAmount = Number(els.bidAmount.value);
  const note = els.bidNote.value.trim();
  const currentBest = getCurrentBestBid(auction);
  const nextAllowed = Math.max(1, currentBest - auction.minimumStep);

  if (!bidderName) {
    setNotice("Enter a bidder name before submitting a bid.");
    return;
  }

  if (!Number.isFinite(bidAmount) || bidAmount <= 0) {
    setNotice("Enter a valid bid amount.");
    return;
  }

  if (bidAmount > nextAllowed) {
    setNotice(`Your bid must be ${formatMoney(nextAllowed)} or lower.`);
    return;
  }

  auction.bids.push({
    id: makeId(),
    bidder: bidderName,
    amount: bidAmount,
    note,
    createdAt: new Date().toISOString(),
  });

  saveProfile({ bidderName });
  saveAuctions();
  setNotice(`${bidderName} is now leading with ${formatMoney(bidAmount)}.`);
  els.bidAmount.value = "";
  els.bidNote.value = "";
  render();
}

function setBidFormEnabled(enabled) {
  els.bidBidderName.disabled = !enabled;
  els.bidAmount.disabled = !enabled;
  els.bidNote.disabled = !enabled;
  els.bidSubmitButton.disabled = !enabled;
}

function selectAuction(id) {
  state.selectedAuctionId = id;
  persistSelectedAuctionId();
  render();
  scrollToDetailPanel();
}

function getSelectedAuction() {
  return state.auctions.find((auction) => auction.id === state.selectedAuctionId) || null;
}

function getCurrentBestBid(auction) {
  if (!auction) {
    return 0;
  }

  if (!auction.bids.length) {
    return auction.startingPrice;
  }

  return Math.min(auction.startingPrice, ...auction.bids.map((bid) => bid.amount));
}

function getBestBidRecord(auction) {
  if (!auction || !auction.bids.length) {
    return null;
  }

  return [...auction.bids].sort((a, b) => a.amount - b.amount || new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())[0];
}

function averageReductionPercent(auctions) {
  const totals = auctions.reduce(
    (accumulator, auction) => {
      const currentBest = getCurrentBestBid(auction);
      const reduction = Math.max(0, auction.startingPrice - currentBest);
      accumulator.reduction += reduction;
      accumulator.starting += auction.startingPrice;
      return accumulator;
    },
    { reduction: 0, starting: 0 }
  );

  if (!totals.starting) {
    return 0;
  }

  return (totals.reduction / totals.starting) * 100;
}

function compareAuctions(a, b) {
  const aClosed = a.status === "closed";
  const bClosed = b.status === "closed";

  if (aClosed !== bClosed) {
    return aClosed ? 1 : -1;
  }

  const bestA = getCurrentBestBid(a);
  const bestB = getCurrentBestBid(b);

  if (bestA !== bestB) {
    return bestA - bestB;
  }

  return new Date(a.deadlineAt).getTime() - new Date(b.deadlineAt).getTime();
}

function findAuctionByCode(code) {
  const normalized = normalizeCode(code);
  return state.auctions.find((auction) => normalizeCode(auction.code) === normalized) || null;
}

function generateUniqueCode() {
  let candidate = makeCode();

  while (state.auctions.some((auction) => normalizeCode(auction.code) === normalizeCode(candidate))) {
    candidate = makeCode();
  }

  return candidate;
}

function makeCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";

  for (let index = 0; index < 6; index += 1) {
    suffix += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return `RA-${suffix}`;
}

function normalizeCode(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

function makeId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `auction-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function toIsoDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function formatMoney(amount) {
  return currency.format(Math.max(0, Math.round(amount)));
}

function formatTime(value) {
  return new Date(value).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDateTime(value) {
  return new Date(value).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function setNotice(message) {
  state.notice = message;
  renderNotice();
}

function saveAuctions() {
  localStorage.setItem(STORAGE_KEYS.auctions, JSON.stringify(state.auctions));
}

function saveProfile(profile) {
  state.profile = {
    bidderName: profile.bidderName || "",
  };

  localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(state.profile));
}

function persistSelectedAuctionId() {
  if (state.selectedAuctionId) {
    localStorage.setItem(STORAGE_KEYS.selected, state.selectedAuctionId);
    return;
  }

  localStorage.removeItem(STORAGE_KEYS.selected);
}

async function copyCodeToClipboard(code) {
  if (!code) {
    return;
  }

  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    await navigator.clipboard.writeText(code);
    return;
  }

  const tempInput = document.createElement("input");
  tempInput.value = code;
  tempInput.setAttribute("readonly", "readonly");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function setDefaultDeadline() {
  if (els.auctionDeadline.value) {
    return;
  }

  const future = new Date(Date.now() + 72 * 60 * 60 * 1000);
  future.setMinutes(future.getMinutes() - future.getTimezoneOffset());
  els.auctionDeadline.value = future.toISOString().slice(0, 16);
}

function scrollToDetailPanel() {
  const detailPanel = document.getElementById("detail-panel");

  if (!detailPanel) {
    return;
  }

  detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
