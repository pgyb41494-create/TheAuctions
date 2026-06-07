const STORAGE_KEY = "apex-reverse-auctions:v1";
const ACTIVE_KEY = "apex-reverse-auctions:active";
const LAST_ALIAS_KEY = "apex-reverse-auctions:last-alias";

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

const createForm = document.getElementById("create-form");
const joinForm = document.getElementById("join-form");
const auctionList = document.getElementById("auction-list");
const activeEmpty = document.getElementById("active-empty");
const activeAuction = document.getElementById("active-auction");
const toast = document.getElementById("toast");
const metricOpenRooms = document.getElementById("metric-open-rooms");
const metricOfferCount = document.getElementById("metric-offer-count");
const metricBestOffer = document.getElementById("metric-best-offer");

const state = {
  auctions: loadAuctions(),
  activeId: localStorage.getItem(ACTIVE_KEY),
  lastAlias: localStorage.getItem(LAST_ALIAS_KEY) || "",
};

if (!state.auctions.length) {
  state.auctions = seedAuctions();
}

state.auctions = state.auctions.map(normalizeAuction);
state.activeId = state.activeId && state.auctions.some((auction) => auction.id === state.activeId) ? state.activeId : state.auctions[0]?.id ?? null;

bindEvents();
render();
setInterval(render, 1000);

function bindEvents() {
  createForm.addEventListener("submit", handleCreateAuction);
  joinForm.addEventListener("submit", handleJoinAuction);
  auctionList.addEventListener("click", handleAuctionListClick);
}

function handleCreateAuction(event) {
  event.preventDefault();

  const formData = new FormData(createForm);
  const title = String(formData.get("title") || "").trim();
  const buyer = String(formData.get("buyer") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const ceiling = Number(formData.get("ceiling"));
  const step = Number(formData.get("step"));
  const durationMinutes = Number(formData.get("duration"));

  if (!title || !buyer || !category) {
    showToast("Fill in the title, company, and category.", "error");
    return;
  }

  if (!Number.isFinite(ceiling) || ceiling <= 0 || !Number.isFinite(step) || step <= 0 || step >= ceiling || !Number.isFinite(durationMinutes) || durationMinutes < 15) {
    showToast("Enter a valid ceiling, minimum decrease, and duration.", "error");
    return;
  }

  const createdAt = Date.now();
  const auction = normalizeAuction({
    id: generateId(),
    code: generateCode(),
    title,
    buyer,
    category,
    ceiling,
    step,
    durationMinutes,
    createdAt,
    endAt: createdAt + durationMinutes * 60 * 1000,
    bids: [],
  });

  state.auctions = [auction, ...state.auctions];
  state.activeId = auction.id;
  persistState();
  createForm.reset();
  createForm.querySelector("#auction-duration").value = "60";
  render();
  showToast(`Auction room created. Code: ${auction.code}`);
}

function handleJoinAuction(event) {
  event.preventDefault();

  const formData = new FormData(joinForm);
  const code = String(formData.get("code") || "").trim().toUpperCase();
  const name = String(formData.get("name") || "").trim() || "Anonymous Vendor";
  const auction = state.auctions.find((entry) => entry.code === code);

  if (!auction) {
    showToast("No room found for that code.", "error");
    return;
  }

  state.activeId = auction.id;
  state.lastAlias = name;
  localStorage.setItem(LAST_ALIAS_KEY, name);
  persistState();
  render();

  const bidderField = document.getElementById("offer-bidder");
  if (bidderField) {
    bidderField.value = name;
  }

  showToast(`Entered ${auction.title}.`);
  document.getElementById("active")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleAuctionListClick(event) {
  const button = event.target.closest("[data-action='enter-auction']");
  if (!button) {
    return;
  }

  const auctionId = button.getAttribute("data-auction-id");
  if (!auctionId) {
    return;
  }

  state.activeId = auctionId;
  persistState();
  render();
  const activeAuctionPanel = document.getElementById("active");
  activeAuctionPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function render() {
  state.auctions = state.auctions.map(normalizeAuction);
  persistState(false);

  renderMetrics();
  renderAuctionList();
  renderActiveAuction();
}

function renderMetrics() {
  const openAuctions = state.auctions.filter((auction) => auction.status === "open");
  const offerCount = state.auctions.reduce((total, auction) => total + auction.bids.length, 0);
  const bestOffer = openAuctions.reduce((lowest, auction) => {
    const currentOffer = auction.bids.length ? auction.lowestOffer : auction.ceiling;
    return Math.min(lowest, currentOffer);
  }, Number.POSITIVE_INFINITY);

  metricOpenRooms.textContent = String(openAuctions.length);
  metricOfferCount.textContent = String(offerCount);
  metricBestOffer.textContent = Number.isFinite(bestOffer) ? formatMoney(bestOffer) : "—";
}

function renderAuctionList() {
  const sortedAuctions = [...state.auctions].sort((left, right) => {
    if (left.status !== right.status) {
      return left.status === "open" ? -1 : 1;
    }

    return right.createdAt - left.createdAt;
  });

  if (!sortedAuctions.length) {
    auctionList.innerHTML = '<p class="empty-list">No auction rooms exist yet.</p>';
    return;
  }

  auctionList.innerHTML = sortedAuctions.map((auction) => {
    const currentOffer = auction.bids.length ? auction.lowestOffer : auction.ceiling;
    const currentOfferLabel = auction.bids.length ? "Current offer" : "Ceiling";
    const statusLabel = auction.status === "open" ? "Open" : "Closed";
    const statusClass = auction.status === "open" ? "open" : "closed";

    return `
      <article class="auction-card ${auction.id === state.activeId ? "active" : ""}" data-auction-id="${auction.id}">
        <div class="card-top">
          <div>
            <span class="pill ${statusClass}">${statusLabel}</span>
            <h3>${escapeHtml(auction.title)}</h3>
            <div class="card-meta">
              <span>${escapeHtml(auction.category)} · Buyer ${escapeHtml(auction.buyer)}</span>
              <span>Room code ${escapeHtml(auction.code)}</span>
            </div>
          </div>
          <div class="room-code">
            <span>${currentOfferLabel}</span>
            <strong>${formatMoney(currentOffer)}</strong>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-meta">
            <span>Minimum decrease ${formatMoney(auction.step)}</span>
            <span>${auction.bids.length ? `${auction.bids.length} offers submitted` : "No offers yet"}</span>
          </div>
          <button class="button button-secondary" type="button" data-action="enter-auction" data-auction-id="${auction.id}">Enter room</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderActiveAuction() {
  const activeAuctionData = getActiveAuction();

  if (!activeAuctionData) {
    activeEmpty.hidden = false;
    activeAuction.hidden = true;
    activeAuction.innerHTML = "";
    return;
  }

  activeEmpty.hidden = true;
  activeAuction.hidden = false;

  const referenceOffer = activeAuctionData.bids.length ? activeAuctionData.lowestOffer : activeAuctionData.ceiling;
  const nextAllowedOffer = Math.max(0, referenceOffer - activeAuctionData.step);
  const statusLabel = activeAuctionData.status === "open" ? "Open room" : "Closed room";
  const statusClass = activeAuctionData.status === "open" ? "open" : "closed";
  const offerCountLabel = activeAuctionData.bids.length ? `${activeAuctionData.bids.length} recorded offers` : "No offers submitted yet";

  activeAuction.innerHTML = `
    <div class="room-header">
      <div>
        <span class="pill ${statusClass}">${statusLabel}</span>
        <h2 class="room-title">${escapeHtml(activeAuctionData.title)}</h2>
        <p class="room-subtitle">${escapeHtml(activeAuctionData.category)} · Buyer ${escapeHtml(activeAuctionData.buyer)}</p>
      </div>
      <div class="room-code">
        <span>Room code</span>
        <strong>${escapeHtml(activeAuctionData.code)}</strong>
      </div>
    </div>

    <div class="room-stats">
      <div class="stat">
        <span>Ceiling price</span>
        <strong>${formatMoney(activeAuctionData.ceiling)}</strong>
        <p>Opening budget</p>
      </div>
      <div class="stat">
        <span>Current low offer</span>
        <strong>${formatMoney(referenceOffer)}</strong>
        <p>${activeAuctionData.bids.length ? "Best live bid" : "Awaiting first offer"}</p>
      </div>
      <div class="stat">
        <span>Minimum decrease</span>
        <strong>${formatMoney(activeAuctionData.step)}</strong>
        <p>Each bid must lower the price</p>
      </div>
      <div class="stat">
        <span>Closes</span>
        <strong>${activeAuctionData.status === "open" ? formatTimeRemaining(activeAuctionData.endAt) : "Closed"}</strong>
        <p>${formatClock(activeAuctionData.endAt)}</p>
      </div>
    </div>

    <form id="offer-form" class="offer-form">
      <div class="section-head">
        <div>
          <p class="eyebrow">Submit an offer</p>
          <h4>Bid lower than the current price</h4>
        </div>
        <p class="section-note">${offerCountLabel}</p>
      </div>

      <div class="offer-form-grid">
        <div class="field">
          <label for="offer-bidder">Bidder name</label>
          <input id="offer-bidder" name="bidder" type="text" value="${escapeHtml(state.lastAlias)}" placeholder="Cedar Supply Co." required ${activeAuctionData.status === "open" ? "" : "disabled"} />
        </div>

        <div class="field">
          <label for="offer-amount">Offer amount</label>
          <input id="offer-amount" name="amount" type="number" min="0" max="${nextAllowedOffer}" step="0.01" placeholder="${nextAllowedOffer ? nextAllowedOffer.toFixed(2) : "0.00"}" required ${activeAuctionData.status === "open" ? "" : "disabled"} />
        </div>
      </div>

      <p class="offer-helper">Next acceptable offer: ${formatMoney(nextAllowedOffer)} or lower.</p>
      <button type="submit" ${activeAuctionData.status === "open" ? "" : "disabled"}>Submit offer</button>
    </form>

    <div>
      <div class="section-head">
        <div>
          <p class="eyebrow">Offer history</p>
          <h4>Latest submissions</h4>
        </div>
        <p class="section-note">${activeAuctionData.bids.length ? "Newest offer last" : "No bids yet."}</p>
      </div>
      <div id="bid-history" class="timeline"></div>
    </div>
  `;

  const offerForm = document.getElementById("offer-form");
  offerForm?.addEventListener("submit", handleOfferSubmit);

  const history = document.getElementById("bid-history");
  if (!history) {
    return;
  }

  if (!activeAuctionData.bids.length) {
    history.innerHTML = '<p class="empty-list">The room is waiting for its first offer.</p>';
    return;
  }

  const orderedBids = [...activeAuctionData.bids].sort((left, right) => right.time - left.time);
  history.innerHTML = orderedBids.map((bid) => `
    <article class="bid">
      <div>
        <strong>${escapeHtml(bid.bidder)}</strong>
        <p>${formatClock(bid.time)}</p>
      </div>
      <strong>${formatMoney(bid.amount)}</strong>
    </article>
  `).join("");
}

function handleOfferSubmit(event) {
  event.preventDefault();

  const activeAuctionData = getActiveAuction();
  if (!activeAuctionData) {
    showToast("Select an auction room first.", "error");
    return;
  }

  if (activeAuctionData.status !== "open") {
    showToast("This auction room is already closed.", "error");
    return;
  }

  const formData = new FormData(event.currentTarget);
  const bidder = String(formData.get("bidder") || "").trim();
  const amount = Number(formData.get("amount"));

  if (!bidder) {
    showToast("Add a bidder name.", "error");
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    showToast("Enter a valid offer amount.", "error");
    return;
  }

  const referenceOffer = activeAuctionData.bids.length ? activeAuctionData.lowestOffer : activeAuctionData.ceiling;
  const nextAllowedOffer = referenceOffer - activeAuctionData.step;

  if (amount > nextAllowedOffer) {
    showToast(`Offer must be ${formatMoney(nextAllowedOffer)} or lower.`, "error");
    return;
  }

  const bid = {
    bidder,
    amount,
    time: Date.now(),
  };

  state.auctions = state.auctions.map((auction) => {
    if (auction.id !== activeAuctionData.id) {
      return auction;
    }

    const bids = [...auction.bids, bid].sort((left, right) => left.time - right.time);
    return normalizeAuction({
      ...auction,
      bids,
      lowestOffer: Math.min(auction.lowestOffer, amount),
      participantCount: countParticipants(bids),
    });
  });

  state.lastAlias = bidder;
  localStorage.setItem(LAST_ALIAS_KEY, bidder);
  persistState();
  render();
  showToast(`Offer recorded at ${formatMoney(amount)}.`);
}

function getActiveAuction() {
  return state.auctions.find((auction) => auction.id === state.activeId) || null;
}

function persistState(writeFullState = true) {
  localStorage.setItem(ACTIVE_KEY, state.activeId || "");

  if (writeFullState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.auctions));
  }
}

function loadAuctions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function seedAuctions() {
  const now = Date.now();

  return [
    normalizeAuction({
      id: generateId(),
      code: generateCode(),
      title: "Regional Freight Contract",
      buyer: "Meridian Foods",
      category: "Logistics",
      ceiling: 85000,
      step: 500,
      durationMinutes: 90,
      createdAt: now - 28 * 60 * 1000,
      endAt: now + 62 * 60 * 1000,
      bids: [
        { bidder: "Arrow Haulage", amount: 81200, time: now - 20 * 60 * 1000 },
        { bidder: "Civic Logistics", amount: 79800, time: now - 9 * 60 * 1000 },
      ],
    }),
    normalizeAuction({
      id: generateId(),
      code: generateCode(),
      title: "Office Fit-Out Program",
      buyer: "Hawthorne Group",
      category: "Facilities",
      ceiling: 142000,
      step: 1000,
      durationMinutes: 120,
      createdAt: now - 13 * 60 * 1000,
      endAt: now + 107 * 60 * 1000,
      bids: [
        { bidder: "Mason Interiors", amount: 137500, time: now - 6 * 60 * 1000 },
      ],
    }),
    normalizeAuction({
      id: generateId(),
      code: generateCode(),
      title: "Managed IT Support",
      buyer: "North Point Health",
      category: "Technology",
      ceiling: 96000,
      step: 750,
      durationMinutes: 75,
      createdAt: now - 4 * 60 * 1000,
      endAt: now + 71 * 60 * 1000,
      bids: [],
    }),
  ];
}

function normalizeAuction(rawAuction) {
  const createdAt = Number(rawAuction.createdAt) || Date.now();
  const durationMinutes = Math.max(15, Number(rawAuction.durationMinutes) || 60);
  const endAt = Number(rawAuction.endAt) || createdAt + durationMinutes * 60 * 1000;
  const ceiling = toMoney(rawAuction.ceiling, 0);
  const step = Math.max(1, toMoney(rawAuction.step, 50));
  const bids = Array.isArray(rawAuction.bids)
    ? rawAuction.bids
        .map((bid) => ({
          bidder: String(bid.bidder || "Anonymous Vendor").trim() || "Anonymous Vendor",
          amount: toMoney(bid.amount, ceiling),
          time: Number(bid.time) || createdAt,
        }))
        .filter((bid) => Number.isFinite(bid.amount) && bid.amount > 0)
        .sort((left, right) => left.time - right.time)
    : [];
  const lowestOffer = bids.length ? bids.reduce((lowest, bid) => Math.min(lowest, bid.amount), ceiling) : ceiling;
  const participants = countParticipants(bids);
  const status = Date.now() >= endAt ? "closed" : "open";

  return {
    id: String(rawAuction.id || generateId()),
    code: String(rawAuction.code || generateCode()).toUpperCase(),
    title: String(rawAuction.title || "Untitled auction").trim(),
    buyer: String(rawAuction.buyer || "Buyer").trim(),
    category: String(rawAuction.category || "General").trim(),
    ceiling,
    step,
    durationMinutes,
    createdAt,
    endAt,
    bids,
    lowestOffer,
    participantCount: participants,
    status,
  };
}

function countParticipants(bids) {
  return new Set(bids.map((bid) => String(bid.bidder || "").trim().toLowerCase()).filter(Boolean)).size;
}

function formatMoney(value) {
  return moneyFormatter.format(Number(value) || 0);
}

function formatClock(value) {
  return timeFormatter.format(new Date(value));
}

function formatTimeRemaining(endAt) {
  const remaining = Math.max(0, endAt - Date.now());
  const totalMinutes = Math.max(0, Math.floor(remaining / 60000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0 && minutes === 0) {
    return "Closing soon";
  }

  if (hours === 0) {
    return `${minutes}m left`;
  }

  return `${hours}h ${minutes}m left`;
}

function toMoney(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Number(parsed.toFixed(2)) : fallback;
}

function generateId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `auc_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

function generateCode() {
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let code = "";

  for (let index = 0; index < 6; index += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return code;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function showToast(message, tone = "info") {
  toast.textContent = message;
  toast.dataset.tone = tone;
  toast.classList.add("show");

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}
