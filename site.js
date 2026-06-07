const STORAGE_KEYS = {
  auctions: "apex-reverse-auctions.auctions.v3",
  activeCode: "apex-reverse-auctions.active-code.v3",
  language: "apex-reverse-auctions.language.v2",
  bidder: "apex-reverse-auctions.bidder.v3",
  adminEmail: "apex-reverse-auctions.admin-email.v1",
};

const PAGE_TITLES = {
  home: { en: "Apex Reverse Auctions", es: "Subastas Reversas Apex" },
  create: { en: "Create room", es: "Crear sala" },
  join: { en: "Join room", es: "Entrar a una sala" },
  auctions: { en: "Open rooms", es: "Salas abiertas" },
  room: { en: "Auction room", es: "Sala de subasta" },
  admin: { en: "Admin", es: "Administración" },
};

const TRANSLATIONS = {
  en: {
    "brand.kicker": "Procurement platform",
    "brand.name": "Apex Reverse Auctions",
    "nav.home": "Home",
    "nav.create": "Create",
    "nav.join": "Join",
    "nav.auctions": "Rooms",
    "nav.room": "Room",
    "nav.admin": "Admin",
    "lang.toEnglish": "Switch to English",
    "lang.toSpanish": "Cambiar a español",
    "common.openRooms": "Open rooms",
    "common.enterRoom": "Enter room",
    "common.openRoom": "Open room",
    "common.backToRooms": "Back to rooms",
    "common.copyCode": "Copy code",
    "common.code": "Code",
    "common.roomCode": "Room code",
    "common.currentOffer": "Current offer",
    "common.nextAllowed": "Next allowed",
    "common.leadBidder": "Lead bidder",
    "common.offers": "Offers",
    "common.ceiling": "Ceiling",
    "common.minimumStep": "Minimum drop",
    "common.closes": "Closes",
    "common.participants": "Participants",
    "common.statusOpen": "Open",
    "common.statusClosed": "Closed",
    "common.noResults": "No rooms match this filter.",
    "common.noBids": "No bids yet.",
    "common.noneYet": "None yet",
    "category.professional": "Professional Services",
    "category.facilities": "Facilities",
    "category.logistics": "Logistics",
    "category.technology": "Technology",
    "category.events": "Events",
    "category.other": "Other",
    "home.eyebrow": "Reverse auction workspace",
    "home.title": "Run reverse bids with a clean, professional workspace.",
    "home.lede": "Create a room, enter by code, and keep every bid in one place.",
    "home.createCta": "Create room",
    "home.joinCta": "Enter room",
    "home.roomsCta": "Browse rooms",
    "home.statsTitle": "Market overview",
    "home.statsSubtitle": "At a glance",
    "home.metric.openRooms": "Open rooms",
    "home.metric.openRoomsHint": "Ready for bidding",
    "home.metric.offers": "Live offers",
    "home.metric.offersHint": "Across all rooms",
    "home.metric.bestOffer": "Best active offer",
    "home.metric.bestOfferHint": "Lowest current price",
    "home.metric.nextClose": "Next close",
    "home.metric.nextCloseHint": "Nearest deadline",
    "home.processTitle": "How it works",
    "home.processSubtitle": "Three simple steps",
    "home.step1Title": "Create",
    "home.step1Body": "Set the ceiling price, the minimum drop, and the closing time.",
    "home.step2Title": "Invite",
    "home.step2Body": "Share the room code with bidders and let them open the room.",
    "home.step3Title": "Award",
    "home.step3Body": "The lowest acceptable bid stays in front until the room closes.",
    "home.featuredTitle": "Featured rooms",
    "home.featuredSubtitle": "Live boards ready to open",
    "home.rulesTitle": "Publishing notes",
    "home.rulesSubtitle": "Keep it professional",
    "home.rule1": "Use clear scope notes and a realistic ceiling.",
    "home.rule2": "Pick a minimum decrement that matches the market.",
    "home.rule3": "Keep the closing time visible so bidders can react.",
    "create.eyebrow": "Create room",
    "create.title": "Publish a new reverse auction.",
    "create.lede": "Set the ceiling, the step, and the deadline before you invite bidders.",
    "create.formTitle": "Create form",
    "create.formSubtitle": "Publish the room details.",
    "create.helper": "The room opens immediately after publish.",
    "create.fieldTitle": "Auction title",
    "create.fieldBuyer": "Buyer or company",
    "create.fieldCategory": "Category",
    "create.fieldCeiling": "Ceiling price",
    "create.fieldStep": "Minimum decrease",
    "create.fieldDuration": "Duration in minutes",
    "create.fieldNotes": "Notes",
    "create.placeholderTitle": "Office cleaning contract",
    "create.placeholderBuyer": "Northstar Holdings",
    "create.placeholderCategory": "Facilities",
    "create.placeholderCeiling": "125000",
    "create.placeholderStep": "500",
    "create.placeholderDuration": "60",
    "create.placeholderNotes": "Add scope notes, service expectations, or compliance details.",
    "create.submit": "Publish room",
    "create.button": "Publish room",
    "create.previewTitle": "Room snapshot",
    "create.previewBody": "Quick overview before you publish.",
    "create.previewTip": "Live rooms already stored in this browser.",
    "create.checklistTitle": "Room checklist",
    "create.checklistSubtitle": "Keep each launch consistent",
    "create.recentTitle": "Recent rooms",
    "create.recentSubtitle": "Open an existing room.",
    "create.noRooms": "No rooms yet.",
    "join.eyebrow": "Join room",
    "join.title": "Enter a room code and begin bidding.",
    "join.lede": "Use the code you received from the buyer or the procurement team.",
    "join.formTitle": "Join form",
    "join.formSubtitle": "Open the room by code.",
    "join.helper": "If the code exists, the room opens right away.",
    "join.fieldCode": "Room code",
    "join.fieldName": "Your name or company",
    "join.placeholderCode": "RA-4F7K2P",
    "join.placeholderName": "Cedar Supply Co.",
    "join.submit": "Enter room",
    "join.button": "Enter room",
    "join.previewTitle": "Join snapshot",
    "join.previewBody": "Rooms available right now.",
    "join.recentBody": "Choose an active room from the list below.",
    "join.recentTitle": "How to join",
    "join.recentSubtitle": "Three quick checks.",
    "join.noRooms": "No rooms to join yet.",
    "auctions.eyebrow": "Open rooms",
    "auctions.title": "Browse every active auction room.",
    "auctions.lede": "Search by title, buyer, category, or room code before entering a room.",
    "auctions.metricsTitle": "Market metrics",
    "auctions.metricsSubtitle": "A quick read on the board.",
    "auctions.filterTitle": "Filters",
    "auctions.searchLabel": "Search rooms",
    "auctions.searchPlaceholder": "Title, buyer, category, or code",
    "auctions.statusLabel": "Status",
    "auctions.statusAll": "All rooms",
    "auctions.statusOpen": "Open rooms",
    "auctions.statusClosed": "Closed rooms",
    "auctions.listTitle": "Auction rooms",
    "auctions.listSubtitle": "Find the room you want to inspect.",
    "auctions.noResults": "No rooms match this filter.",
    "room.eyebrow": "Auction room",
    "room.emptyTitle": "No room selected.",
    "room.emptyBody": "Pick a room from the list, enter a code, or jump back to the room directory.",
    "room.emptyCta": "Back to rooms",
    "room.lookupTitle": "Open another room",
    "room.lookupSubtitle": "Use a room code",
    "room.lookupLabel": "Room code",
    "room.lookupButton": "Open room",
    "room.activeRoomsTitle": "Open rooms",
    "room.activeRoomsSubtitle": "Boards you can open now",
    "room.summarySubtitle": "Room overview",
    "room.historyTitle": "Bid history",
    "room.historySubtitle": "Latest offers first",
    "room.historyTime": "Time",
    "room.historyBidder": "Bidder",
    "room.historyOffer": "Offer",
    "room.historyNote": "Note",
    "room.bidTitle": "Submit a bid",
    "room.bidSubtitle": "Lower the current price",
    "room.labelBidder": "Bidder name",
    "room.labelAmount": "Bid amount",
    "room.labelNote": "Note",
    "room.bidButton": "Submit bid",
    "room.bidHelper": "A lower offer is required.",
    "room.copyCode": "Copy code",
    "room.rulesTitle": "Room rules",
    "room.rulesSubtitle": "Keep the room disciplined",
    "room.notesTitle": "Notes",
    "room.notesSubtitle": "Room description",
    "room.noNotes": "No notes were provided.",
    "admin.eyebrow": "Admin console",
    "admin.title": "Manage rooms with maintenance tools.",
    "admin.lede": "Sign in with an approved email to delete, close, reopen, or export rooms.",
    "admin.statusLocked": "Locked",
    "admin.statusSignedIn": "Signed in as {{email}}",
    "admin.gateTitle": "Admin access",
    "admin.gateSubtitle": "Use an approved email to open the dashboard.",
    "admin.emailLabel": "Admin email",
    "admin.emailPlaceholder": "admin@company.com",
    "admin.login": "Open dashboard",
    "admin.signOut": "Sign out",
    "admin.configHint": "Only emails listed in .env can access maintenance tools.",
    "admin.noAdminsConfigured": "No admin emails are configured in .env yet.",
    "admin.statsTitle": "Workspace stats",
    "admin.statsSubtitle": "What the site is storing right now.",
    "admin.totalRooms": "Total rooms",
    "admin.openRooms": "Open rooms",
    "admin.closedRooms": "Closed rooms",
    "admin.totalBids": "Total bids",
    "admin.allowedCount": "Approved emails",
    "admin.manageTitle": "Room maintenance",
    "admin.manageSubtitle": "Search, close, reopen, or delete rooms.",
    "admin.export": "Export JSON",
    "admin.clearAll": "Clear all rooms",
    "admin.closeRoom": "Close room",
    "admin.reopenRoom": "Reopen room",
    "admin.deleteAuction": "Delete room",
    "admin.noRooms": "No rooms match this filter.",
    "admin.confirmDelete": "Delete {{code}}? This cannot be undone.",
    "admin.confirmClearAll": "Clear every room in this browser? This cannot be undone.",
    "admin.exported": "Auction data exported.",
    "admin.deleted": "Deleted {{code}}.",
    "admin.closed": "Closed {{code}}.",
    "admin.reopened": "Reopened {{code}}.",
    "admin.cleared": "All rooms cleared.",
    "toast.roomCreated": "Room created: {{code}}",
    "toast.roomEntered": "Room opened: {{code}}",
    "toast.codeCopied": "Code copied.",
    "toast.adminDenied": "That email is not approved.",
    "toast.adminSignedIn": "Admin dashboard unlocked.",
    "toast.adminSignedOut": "Signed out of admin dashboard.",
    "toast.bidAccepted": "{{bidder}} is leading at {{amount}}.",
    "toast.invalidCode": "Enter a valid room code.",
    "toast.roomNotFound": "No room matches that code.",
    "toast.bidderRequired": "Enter a bidder name.",
    "toast.amountRequired": "Enter a valid bid amount.",
    "toast.bidTooHigh": "Bid must be {{amount}} or lower.",
    "toast.roomClosed": "This room is closed.",
    "toast.noRoomSelected": "Select a room first.",
    "toast.formIncomplete": "Fill in all required fields.",
  },
  es: {
    "brand.kicker": "Plataforma de adquisiciones",
    "brand.name": "Subastas Reversas Apex",
    "nav.home": "Inicio",
    "nav.create": "Crear",
    "nav.join": "Entrar",
    "nav.auctions": "Salas",
    "nav.room": "Sala",
    "nav.admin": "Administración",
    "lang.toEnglish": "Switch to English",
    "lang.toSpanish": "Cambiar a español",
    "common.openRooms": "Salas abiertas",
    "common.publishRoom": "Publicar sala",
    "common.enterRoom": "Entrar a la sala",
    "common.openRoom": "Abrir sala",
    "common.backToRooms": "Volver a salas",
    "common.copyCode": "Copiar código",
    "common.code": "Código",
    "common.roomCode": "Código de sala",
    "common.currentOffer": "Oferta actual",
    "common.nextAllowed": "Siguiente permitida",
    "common.leadBidder": "Líder",
    "common.offers": "Ofertas",
    "common.ceiling": "Tope",
    "common.minimumStep": "Bajada mínima",
    "common.closes": "Cierra",
    "common.participants": "Participantes",
    "common.statusOpen": "Abierta",
    "common.statusClosed": "Cerrada",
    "common.noResults": "No hay salas que coincidan con este filtro.",
    "common.noBids": "Todavía no hay ofertas.",
    "common.noneYet": "Ninguno aún",
    "category.professional": "Servicios profesionales",
    "category.facilities": "Instalaciones",
    "category.logistics": "Logística",
    "category.technology": "Tecnología",
    "category.events": "Eventos",
    "category.other": "Otro",
    "home.eyebrow": "Espacio de subastas inversas",
    "home.title": "Gestiona subastas inversas con un espacio limpio y profesional.",
    "home.lede": "Crea una sala, entra con código y guarda cada oferta en un solo lugar.",
    "home.createCta": "Crear sala",
    "home.joinCta": "Entrar a una sala",
    "home.roomsCta": "Ver salas",
    "home.statsTitle": "Resumen del mercado",
    "home.statsSubtitle": "De un vistazo",
    "home.metric.openRooms": "Salas abiertas",
    "home.metric.openRoomsHint": "Listas para ofertar",
    "home.metric.offers": "Ofertas activas",
    "home.metric.offersHint": "En todas las salas",
    "home.metric.bestOffer": "Mejor oferta activa",
    "home.metric.bestOfferHint": "Precio más bajo",
    "home.metric.nextClose": "Próximo cierre",
    "home.metric.nextCloseHint": "Vencimiento más cercano",
    "home.processTitle": "Cómo funciona",
    "home.processSubtitle": "Tres pasos simples",
    "home.step1Title": "Crear",
    "home.step1Body": "Define el tope, la bajada mínima y la hora de cierre.",
    "home.step2Title": "Invitar",
    "home.step2Body": "Comparte el código con los postores para que entren a la sala.",
    "home.step3Title": "Adjudicar",
    "home.step3Body": "La oferta aceptable más baja se mantiene al frente hasta el cierre.",
    "home.featuredTitle": "Salas destacadas",
    "home.featuredSubtitle": "Tableros listos para abrir",
    "home.rulesTitle": "Notas de publicación",
    "home.rulesSubtitle": "Mantén un tono profesional",
    "home.rule1": "Usa un alcance claro y un tope realista.",
    "home.rule2": "Elige una bajada mínima acorde al mercado.",
    "home.rule3": "Muestra la hora de cierre para que haya reacción.",
    "create.eyebrow": "Crear sala",
    "create.title": "Publica una nueva subasta inversa.",
    "create.lede": "Establece el tope, la bajada y el cierre antes de invitar a los postores.",
    "create.formTitle": "Formulario",
    "create.formSubtitle": "Publica los detalles de la sala.",
    "create.helper": "La sala se abre inmediatamente después de publicar.",
    "create.fieldTitle": "Título de la subasta",
    "create.fieldBuyer": "Comprador o empresa",
    "create.fieldCategory": "Categoría",
    "create.fieldCeiling": "Precio tope",
    "create.fieldStep": "Bajada mínima",
    "create.fieldDuration": "Duración en minutos",
    "create.fieldNotes": "Notas",
    "create.placeholderTitle": "Contrato de limpieza de oficinas",
    "create.placeholderBuyer": "Northstar Holdings",
    "create.placeholderCategory": "Instalaciones",
    "create.placeholderCeiling": "125000",
    "create.placeholderStep": "500",
    "create.placeholderDuration": "60",
    "create.placeholderNotes": "Agrega alcance, expectativas de servicio o detalles de cumplimiento.",
    "create.submit": "Publicar sala",
    "create.button": "Publicar sala",
    "create.previewTitle": "Vista previa",
    "create.previewBody": "Resumen rápido antes de publicar.",
    "create.previewTip": "Las salas ya están guardadas en este navegador.",
    "create.checklistTitle": "Lista de verificación",
    "create.checklistSubtitle": "Mantén cada lanzamiento consistente",
    "create.recentTitle": "Salas recientes",
    "create.recentSubtitle": "Abre una sala existente.",
    "create.noRooms": "Aún no hay salas.",
    "join.eyebrow": "Entrar a una sala",
    "join.title": "Ingresa un código y empieza a ofertar.",
    "join.lede": "Usa el código que recibiste del comprador o del equipo de compras.",
    "join.formTitle": "Formulario",
    "join.formSubtitle": "Abre la sala por código.",
    "join.helper": "Si el código existe, la sala se abre de inmediato.",
    "join.fieldCode": "Código de la sala",
    "join.fieldName": "Tu nombre o empresa",
    "join.placeholderCode": "RA-4F7K2P",
    "join.placeholderName": "Cedar Supply Co.",
    "join.submit": "Entrar a la sala",
    "join.button": "Entrar a la sala",
    "join.previewTitle": "Vista previa",
    "join.previewBody": "Salas disponibles ahora mismo.",
    "join.recentBody": "Elige una sala activa de la lista inferior.",
    "join.recentTitle": "Cómo entrar",
    "join.recentSubtitle": "Tres comprobaciones rápidas.",
    "join.noRooms": "Todavía no hay salas para entrar.",
    "auctions.eyebrow": "Salas abiertas",
    "auctions.title": "Explora todas las salas activas.",
    "auctions.lede": "Busca por título, comprador, categoría o código antes de entrar.",
    "auctions.metricsTitle": "Métricas del mercado",
    "auctions.metricsSubtitle": "Lectura rápida del tablero.",
    "auctions.filterTitle": "Filtros",
    "auctions.searchLabel": "Buscar salas",
    "auctions.searchPlaceholder": "Título, comprador, categoría o código",
    "auctions.statusLabel": "Estado",
    "auctions.statusAll": "Todas las salas",
    "auctions.statusOpen": "Salas abiertas",
    "auctions.statusClosed": "Salas cerradas",
    "auctions.listTitle": "Salas de subasta",
    "auctions.listSubtitle": "Encuentra la sala que quieres revisar.",
    "auctions.noResults": "No hay salas que coincidan con este filtro.",
    "room.eyebrow": "Sala de subasta",
    "room.emptyTitle": "No hay ninguna sala seleccionada.",
    "room.emptyBody": "Elige una sala de la lista, escribe un código o vuelve al directorio de salas.",
    "room.emptyCta": "Volver a salas",
    "room.lookupTitle": "Abrir otra sala",
    "room.lookupSubtitle": "Usa un código de sala",
    "room.lookupLabel": "Código de sala",
    "room.lookupButton": "Abrir sala",
    "room.activeRoomsTitle": "Salas abiertas",
    "room.activeRoomsSubtitle": "Tableros que puedes abrir ahora",
    "room.summarySubtitle": "Resumen de la sala",
    "room.historyTitle": "Historial de ofertas",
    "room.historySubtitle": "Las ofertas más recientes primero",
    "room.historyTime": "Hora",
    "room.historyBidder": "Postor",
    "room.historyOffer": "Oferta",
    "room.historyNote": "Nota",
    "room.bidTitle": "Enviar oferta",
    "room.bidSubtitle": "Baja el precio actual",
    "room.labelBidder": "Nombre del postor",
    "room.labelAmount": "Importe de la oferta",
    "room.labelNote": "Nota",
    "room.bidButton": "Enviar oferta",
    "room.bidHelper": "Se requiere una oferta más baja.",
    "room.copyCode": "Copiar código",
    "room.rulesTitle": "Reglas de la sala",
    "room.rulesSubtitle": "Mantén la disciplina del tablero",
    "room.notesTitle": "Notas",
    "room.notesSubtitle": "Descripción de la sala",
    "room.noNotes": "No se agregaron notas.",
    "admin.eyebrow": "Consola de administración",
    "admin.title": "Administra las salas con herramientas de mantenimiento.",
    "admin.lede": "Ingresa con un correo aprobado para eliminar, cerrar, reabrir o exportar salas.",
    "admin.statusLocked": "Bloqueado",
    "admin.statusSignedIn": "Sesión iniciada como {{email}}",
    "admin.gateTitle": "Acceso de administrador",
    "admin.gateSubtitle": "Usa un correo aprobado para abrir el panel.",
    "admin.emailLabel": "Correo de administrador",
    "admin.emailPlaceholder": "admin@empresa.com",
    "admin.login": "Abrir panel",
    "admin.signOut": "Cerrar sesión",
    "admin.configHint": "Solo los correos listados en .env pueden acceder a las herramientas de mantenimiento.",
    "admin.noAdminsConfigured": "Aún no hay correos de administrador configurados en .env.",
    "admin.statsTitle": "Estadísticas del espacio",
    "admin.statsSubtitle": "Lo que el sitio está guardando ahora.",
    "admin.totalRooms": "Salas totales",
    "admin.openRooms": "Salas abiertas",
    "admin.closedRooms": "Salas cerradas",
    "admin.totalBids": "Ofertas totales",
    "admin.allowedCount": "Correos aprobados",
    "admin.manageTitle": "Mantenimiento de salas",
    "admin.manageSubtitle": "Busca, cierra, reabre o elimina salas.",
    "admin.export": "Exportar JSON",
    "admin.clearAll": "Borrar todas las salas",
    "admin.closeRoom": "Cerrar sala",
    "admin.reopenRoom": "Reabrir sala",
    "admin.deleteAuction": "Eliminar sala",
    "admin.noRooms": "No hay salas que coincidan con este filtro.",
    "admin.confirmDelete": "¿Eliminar {{code}}? Esto no se puede deshacer.",
    "admin.confirmClearAll": "¿Borrar todas las salas de este navegador? Esto no se puede deshacer.",
    "admin.exported": "Datos de subastas exportados.",
    "admin.deleted": "Sala eliminada: {{code}}.",
    "admin.closed": "Sala cerrada: {{code}}.",
    "admin.reopened": "Sala reabierta: {{code}}.",
    "admin.cleared": "Todas las salas se borraron.",
    "toast.roomCreated": "Sala creada: {{code}}",
    "toast.roomEntered": "Sala abierta: {{code}}",
    "toast.codeCopied": "Código copiado.",
    "toast.adminDenied": "Ese correo no está aprobado.",
    "toast.adminSignedIn": "Panel de administración desbloqueado.",
    "toast.adminSignedOut": "Sesión cerrada del panel de administración.",
    "toast.bidAccepted": "{{bidder}} va ganando con {{amount}}.",
    "toast.invalidCode": "Ingresa un código de sala válido.",
    "toast.roomNotFound": "No existe una sala con ese código.",
    "toast.bidderRequired": "Escribe un nombre de postor.",
    "toast.amountRequired": "Ingresa un importe válido.",
    "toast.bidTooHigh": "La oferta debe ser {{amount}} o menor.",
    "toast.roomClosed": "Esta sala está cerrada.",
    "toast.noRoomSelected": "Selecciona una sala primero.",
    "toast.formIncomplete": "Completa todos los campos obligatorios.",
  },
};

const state = {
  page: document.body?.dataset.page || "home",
  language: loadLanguage(),
  auctions: loadAuctions(),
  activeCode: localStorage.getItem(STORAGE_KEYS.activeCode) || "",
  lastBidder: localStorage.getItem(STORAGE_KEYS.bidder) || "",
  adminEmail: localStorage.getItem(STORAGE_KEYS.adminEmail) || "",
  adminEmails: [],
  filters: { query: "", status: "all" },
};

document.addEventListener("DOMContentLoaded", initialize);

async function initialize() {
  if (state.page === "admin") {
    state.adminEmails = await loadAdminEmails();
    syncAdminSession();
  }

  normalizeExpiredAuctions();
  ensureActiveCode();
  bindLanguageToggle();
  bindPageEvents();
  applyLanguage();
  renderCurrentPage();
  flashMessageFromQuery();
}

function bindLanguageToggle() {
  const toggle = byId("languageToggle");

  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    state.language = state.language === "en" ? "es" : "en";
    localStorage.setItem(STORAGE_KEYS.language, state.language);
    applyLanguage();
    renderCurrentPage();
  });
}

function bindPageEvents() {
  const createForm = byId("createForm");
  if (createForm) {
    createForm.addEventListener("submit", handleCreateSubmit);
  }

  const joinForm = byId("joinForm");
  if (joinForm) {
    joinForm.addEventListener("submit", handleJoinSubmit);
  }

  const roomLookupForm = byId("roomLookupForm");
  if (roomLookupForm) {
    roomLookupForm.addEventListener("submit", handleRoomLookupSubmit);
  }

  const roomBidForm = byId("roomBidForm");
  if (roomBidForm) {
    roomBidForm.addEventListener("submit", handleBidSubmit);
  }

  const auctionsSearch = byId("auctions-search");
  if (auctionsSearch) {
    auctionsSearch.addEventListener("input", (event) => {
      state.filters.query = event.target.value.trim();
      renderCurrentPage();
    });
  }

  const auctionsStatus = byId("auctions-status");
  if (auctionsStatus) {
    auctionsStatus.addEventListener("change", (event) => {
      state.filters.status = event.target.value;
      renderCurrentPage();
    });
  }

  const adminLoginForm = byId("adminLoginForm");
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", handleAdminLoginSubmit);
  }

  const adminSignOut = byId("adminSignOut");
  if (adminSignOut) {
    adminSignOut.addEventListener("click", handleAdminSignOut);
  }

  const adminExport = byId("adminExport");
  if (adminExport) {
    adminExport.addEventListener("click", handleAdminExport);
  }

  const adminClearAll = byId("adminClearAll");
  if (adminClearAll) {
    adminClearAll.addEventListener("click", handleAdminClearAll);
  }

  ["homeFeaturedAuctions", "createRecentRooms", "joinRecentRooms", "auctionsList", "roomEmptyOpenList", "roomActiveOpenList", "adminAuctionList"].forEach((containerId) => {
    const container = byId(containerId);
    if (container) {
      container.addEventListener("click", handleAuctionCardAction);
    }
  });

  const roomCopyButton = byId("roomCopyCode");
  if (roomCopyButton) {
    roomCopyButton.addEventListener("click", async () => {
      const auction = getSelectedAuction();
      if (!auction) {
        setToast(t("toast.noRoomSelected"));
        return;
      }

      await copyText(auction.code);
      setToast(t("toast.codeCopied"));
    });
  }
}

function applyLanguage() {
  document.documentElement.lang = state.language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });

  const toggle = byId("languageToggle");
  if (toggle) {
    toggle.textContent = state.language === "en" ? "ES" : "EN";
    toggle.setAttribute("aria-label", state.language === "en" ? t("lang.toSpanish") : t("lang.toEnglish"));
  }

  updateDocumentTitle();
}

function renderCurrentPage() {
  normalizeExpiredAuctions();
  ensureActiveCode();
  renderSharedStats();

  if (state.page === "home") {
    renderHomePage();
  } else if (state.page === "create") {
    renderCreatePage();
  } else if (state.page === "join") {
    renderJoinPage();
  } else if (state.page === "auctions") {
    renderAuctionsPage();
  } else if (state.page === "room") {
    renderRoomPage();
  } else if (state.page === "admin") {
    renderAdminPage();
  }

  updateDocumentTitle();
}

function renderSharedStats() {
  const openAuctions = getOpenAuctions();
  const offerCount = state.auctions.reduce((total, auction) => total + auction.bids.length, 0);
  const bestOffer = openAuctions.length ? Math.min(...openAuctions.map((auction) => getCurrentOffer(auction))) : null;
  const nextClose = openAuctions.length
    ? [...openAuctions].sort((left, right) => left.endAt - right.endAt)[0].endAt
    : null;

  setText("homeOpenRooms", String(openAuctions.length));
  setText("homeLiveOffers", String(offerCount));
  setText("homeBestOffer", bestOffer === null ? "—" : formatMoney(bestOffer));
  setText("homeNextClose", nextClose === null ? "—" : formatTimeRemaining(nextClose));

  setText("auctionsOpenRooms", String(openAuctions.length));
  setText("auctionsOfferCount", String(offerCount));
  setText("auctionsBestOffer", bestOffer === null ? "—" : formatMoney(bestOffer));
  setText("auctionsNextClose", nextClose === null ? "—" : formatTimeRemaining(nextClose));

  setText("createOpenRooms", String(openAuctions.length));
  setText("createBestOffer", bestOffer === null ? "—" : formatMoney(bestOffer));
  setText("createSoonestClose", nextClose === null ? "—" : formatTimeRemaining(nextClose));
  setText("createRecentCount", String(openAuctions.length));

  setText("joinOpenRooms", String(openAuctions.length));
  setText("joinOfferCount", String(offerCount));
  setText("joinSoonestClose", nextClose === null ? "—" : formatTimeRemaining(nextClose));
}

function renderHomePage() {
  renderAuctionList("homeFeaturedAuctions", getFeaturedAuctions(3), { compact: false, emptyKey: "create.noRooms" });
}

function renderCreatePage() {
  renderAuctionList("createRecentRooms", getOpenAuctions().slice(0, 4), { compact: true, emptyKey: "create.noRooms" });
}

function renderJoinPage() {
  renderAuctionList("joinRecentRooms", getOpenAuctions().slice(0, 4), { compact: true, emptyKey: "join.noRooms" });
}

function renderAuctionsPage() {
  const search = byId("auctions-search");
  const status = byId("auctions-status");

  if (search && search.value !== state.filters.query) {
    search.value = state.filters.query;
  }
  if (status && status.value !== state.filters.status) {
    status.value = state.filters.status;
  }

  const query = state.filters.query.trim().toLowerCase();
  const filtered = state.auctions.filter((auction) => {
    const matchesStatus = state.filters.status === "all" ? true : auction.status === state.filters.status;
    const haystack = [auction.title, auction.buyer, auction.category, auction.code].join(" ").toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesStatus && matchesQuery;
  });

  renderAuctionList("auctionsList", filtered, { compact: false, emptyKey: "auctions.noResults" });
}

function renderAdminPage() {
  const signedIn = isAdminSignedIn();
  const gate = byId("adminGate");
  const dashboard = byId("adminDashboard");
  const signOutButton = byId("adminSignOut");
  const statusNode = byId("adminStatus");
  const emailField = byId("adminEmail");
  const hint = byId("adminAccessHint");

  if (gate) {
    gate.hidden = signedIn;
  }
  if (dashboard) {
    dashboard.hidden = !signedIn;
  }
  if (signOutButton) {
    signOutButton.hidden = !signedIn;
  }
  if (emailField && signedIn) {
    emailField.value = state.adminEmail;
  }
  if (statusNode) {
    statusNode.textContent = signedIn ? t("admin.statusSignedIn", { email: state.adminEmail }) : t("admin.statusLocked");
  }
  if (hint) {
    hint.textContent = state.adminEmails.length ? t("admin.configHint") : t("admin.noAdminsConfigured");
  }

  setText("adminAllowedCount", String(state.adminEmails.length));
  setText("adminTotalRooms", String(state.auctions.length));
  setText("adminOpenRooms", String(getOpenAuctions().length));
  setText("adminClosedRooms", String(state.auctions.length - getOpenAuctions().length));
  setText("adminTotalBids", String(state.auctions.reduce((total, auction) => total + auction.bids.length, 0)));

  if (!signedIn) {
    const list = byId("adminAuctionList");
    if (list) {
      list.innerHTML = "";
    }
    return;
  }

  const search = byId("auctions-search");
  const status = byId("auctions-status");
  if (search && search.value !== state.filters.query) {
    search.value = state.filters.query;
  }
  if (status && status.value !== state.filters.status) {
    status.value = state.filters.status;
  }

  const query = state.filters.query.trim().toLowerCase();
  const filtered = state.auctions.filter((auction) => {
    const matchesStatus = state.filters.status === "all" ? true : auction.status === state.filters.status;
    const haystack = [auction.title, auction.buyer, auction.category, auction.code].join(" ").toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesStatus && matchesQuery;
  });

  renderAuctionList("adminAuctionList", filtered, { compact: false, emptyKey: "admin.noRooms", admin: true });
}

function renderRoomPage() {
  const auction = resolveActiveAuction();
  const emptyState = byId("roomEmpty");
  const roomShell = byId("roomShell");
  const lookupCode = byId("roomLookupCode");
  const bidderField = byId("roomBidBidder");

  if (!auction) {
    if (emptyState) emptyState.hidden = false;
    if (roomShell) roomShell.hidden = true;
    renderAuctionList("roomEmptyOpenList", getOpenAuctions().slice(0, 4), { compact: true, emptyKey: "room.emptyBody" });
    renderAuctionList("roomActiveOpenList", [], { compact: true, emptyKey: "room.emptyBody" });
    setText("roomTitle", t("room.emptyTitle"));
    setText("roomLede", t("room.emptyBody"));
    const notes = byId("roomNotes");
    if (notes) {
      notes.textContent = t("room.noNotes");
    }
    if (lookupCode && !lookupCode.value) {
      lookupCode.value = state.activeCode || "";
    }
    return;
  }

  state.activeCode = auction.code;
  localStorage.setItem(STORAGE_KEYS.activeCode, auction.code);

  if (emptyState) emptyState.hidden = true;
  if (roomShell) roomShell.hidden = false;

  setText("roomTitle", auction.title);
  setText("roomLede", `${auction.buyer} · ${auction.category}`);

  const statusNode = byId("roomStatus");
  if (statusNode) {
    statusNode.textContent = auction.status === "open" ? t("common.statusOpen") : t("common.statusClosed");
    statusNode.classList.toggle("open", auction.status === "open");
    statusNode.classList.toggle("closed", auction.status !== "open");
  }

  setText("roomCode", auction.code);
  setText("roomCeiling", formatMoney(auction.ceiling));
  setText("roomCurrent", formatMoney(getCurrentOffer(auction)));
  setText("roomNext", auction.status === "open" ? formatMoney(getNextAllowedOffer(auction)) : t("common.statusClosed"));
  setText("roomStep", formatMoney(auction.minimumStep));
  setText("roomParticipants", String(getParticipantCount(auction)));
  setText("roomNotes", auction.notes || t("room.noNotes"));

  if (bidderField && !bidderField.value) {
    bidderField.value = state.lastBidder || "";
  }

  const amountField = byId("roomBidAmount");
  if (amountField) {
    amountField.placeholder = String(getNextAllowedOffer(auction));
    amountField.max = String(getNextAllowedOffer(auction));
  }

  const helper = byId("roomBidHelper");
  if (helper) {
    helper.textContent = auction.status === "open" ? t("room.bidHelper") : t("toast.roomClosed");
  }

  const form = byId("roomBidForm");
  if (form) {
    form.querySelectorAll("input, textarea, button").forEach((field) => {
      field.disabled = auction.status !== "open";
    });
  }

  renderHistory(auction);
  const otherRooms = getOpenAuctions().filter((entry) => entry.code !== auction.code).slice(0, 4);
  renderAuctionList("roomActiveOpenList", otherRooms, { compact: true, emptyKey: "common.noResults" });
}

function renderHistory(auction) {
  const tbody = byId("roomHistoryBody");
  if (!tbody) {
    return;
  }

  if (!auction.bids.length) {
    tbody.innerHTML = `<tr><td colspan="4"><div class="empty-row">${escapeHtml(t("common.noBids"))}</div></td></tr>`;
    return;
  }

  tbody.innerHTML = [...auction.bids]
    .sort((left, right) => right.time - left.time)
    .map((bid) => {
      return `<tr>
        <td>${escapeHtml(formatClock(bid.time))}</td>
        <td>${escapeHtml(bid.bidder)}</td>
        <td>${escapeHtml(formatMoney(bid.amount))}</td>
        <td>${escapeHtml(bid.note || "-")}</td>
      </tr>`;
    })
    .join("");
}

function renderAuctionList(containerId, auctions, options = {}) {
  const container = byId(containerId);
  if (!container) {
    return;
  }

  if (!auctions.length) {
    container.innerHTML = `<div class="empty-list">${escapeHtml(t(options.emptyKey || "common.noResults"))}</div>`;
    return;
  }

  container.innerHTML = auctions.map((auction) => renderAuctionCard(auction, options)).join("");
}

function renderAuctionCard(auction, options = {}) {
  const currentOffer = getCurrentOffer(auction);
  const nextAllowed = auction.status === "open" ? getNextAllowedOffer(auction) : null;
  const leadBid = getLeadBid(auction);
  const compactClass = options.compact ? "compact" : "";
  const isAdminCard = Boolean(options.admin);

  return `
    <article class="auction-card ${compactClass}" data-code="${escapeHtml(auction.code)}">
      <div class="card-head">
        <div>
          <span class="badge ${auction.status === "open" ? "open" : "closed"}">${auction.status === "open" ? t("common.statusOpen") : t("common.statusClosed")}</span>
          <h3>${escapeHtml(auction.title)}</h3>
          <p>${escapeHtml(auction.buyer)} · ${escapeHtml(auction.category)}</p>
        </div>
        <div class="card-code">
          <span>${escapeHtml(t("common.roomCode"))}</span>
          <strong>${escapeHtml(auction.code)}</strong>
        </div>
      </div>

      <div class="card-grid">
        <div class="card-stat">
          <span>${escapeHtml(t("common.currentOffer"))}</span>
          <strong>${escapeHtml(formatMoney(currentOffer))}</strong>
        </div>
        <div class="card-stat">
          <span>${escapeHtml(t("common.nextAllowed"))}</span>
          <strong>${auction.status === "open" ? escapeHtml(formatMoney(nextAllowed)) : escapeHtml(t("common.statusClosed"))}</strong>
        </div>
        <div class="card-stat">
          <span>${escapeHtml(t("common.leadBidder"))}</span>
          <strong>${escapeHtml(leadBid ? leadBid.bidder : t("common.noneYet"))}</strong>
        </div>
        <div class="card-stat">
          <span>${escapeHtml(t("common.offers"))}</span>
          <strong>${auction.bids.length}</strong>
        </div>
      </div>

      <div class="card-actions">
        <button class="button button-ghost button-small" type="button" data-action="copy-code" data-code="${escapeHtml(auction.code)}">${escapeHtml(t("common.copyCode"))}</button>
        <button class="button button-dark button-small" type="button" data-action="open-room" data-code="${escapeHtml(auction.code)}">${escapeHtml(t("common.openRoom"))}</button>
        ${isAdminCard ? `<button class="button button-light button-small" type="button" data-action="admin-toggle-status" data-code="${escapeHtml(auction.code)}">${escapeHtml(auction.status === "open" ? t("admin.closeRoom") : t("admin.reopenRoom"))}</button>` : ""}
        ${isAdminCard ? `<button class="button button-ghost button-small" type="button" data-action="admin-delete-auction" data-code="${escapeHtml(auction.code)}">${escapeHtml(t("admin.deleteAuction"))}</button>` : ""}
      </div>
    </article>
  `;
}

function handleAuctionCardAction(event) {
  const action = event.target.closest("[data-action]");
  if (!action) {
    return;
  }

  const code = action.dataset.code || "";

  if (action.dataset.action === "copy-code") {
    copyText(code).then(() => setToast(t("toast.codeCopied")));
    return;
  }

  if (action.dataset.action === "open-room") {
    openRoomByCode(code);
    return;
  }

  if (action.dataset.action === "admin-toggle-status") {
    handleAdminToggleAuction(code);
    return;
  }

  if (action.dataset.action === "admin-delete-auction") {
    handleAdminDeleteAuction(code);
  }
}

function handleCreateSubmit(event) {
  event.preventDefault();

  const title = valueOf("createTitle");
  const buyer = valueOf("createBuyer");
  const category = valueOf("createCategory");
  const ceiling = toNumber(valueOf("createCeiling"));
  const step = toNumber(valueOf("createStep"));
  const duration = toNumber(valueOf("createDuration"));
  const notes = valueOf("createNotes");

  if (!title || !buyer || !category) {
    setToast(t("toast.formIncomplete"));
    return;
  }

  if (!Number.isFinite(ceiling) || ceiling <= 0 || !Number.isFinite(step) || step <= 0 || !Number.isFinite(duration) || duration < 15) {
    setToast(t("toast.amountRequired"));
    return;
  }

  const createdAt = Date.now();
  const auction = normalizeAuction({
    id: makeId(),
    code: generateCode(),
    title,
    buyer,
    category,
    ceiling,
    minimumStep: step,
    durationMinutes: duration,
    createdAt,
    endAt: createdAt + duration * 60000,
    notes,
    bids: [],
    status: "open",
  });

  state.auctions.unshift(auction);
  state.activeCode = auction.code;
  localStorage.setItem(STORAGE_KEYS.activeCode, auction.code);
  saveAuctions();
  openRoomByCode(auction.code, "created");
}

function handleJoinSubmit(event) {
  event.preventDefault();
  const code = valueOf("joinCode");
  const bidder = valueOf("joinName");

  if (!bidder) {
    setToast(t("toast.bidderRequired"));
    return;
  }

  const auction = findAuctionByCode(code);
  if (!auction) {
    setToast(t("toast.roomNotFound"));
    return;
  }

  state.lastBidder = bidder;
  localStorage.setItem(STORAGE_KEYS.bidder, bidder);
  openRoomByCode(auction.code, "joined");
}

function handleRoomLookupSubmit(event) {
  event.preventDefault();
  openRoomByCode(valueOf("roomLookupCode"));
}

function handleBidSubmit(event) {
  event.preventDefault();

  const auction = resolveActiveAuction();
  if (!auction) {
    setToast(t("toast.noRoomSelected"));
    return;
  }

  if (auction.status !== "open") {
    setToast(t("toast.roomClosed"));
    return;
  }

  const bidder = valueOf("roomBidBidder");
  const amount = toNumber(valueOf("roomBidAmount"));
  const note = valueOf("roomBidNote");

  if (!bidder) {
    setToast(t("toast.bidderRequired"));
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    setToast(t("toast.amountRequired"));
    return;
  }

  const nextAllowed = getNextAllowedOffer(auction);
  if (amount > nextAllowed) {
    setToast(t("toast.bidTooHigh", { amount: formatMoney(nextAllowed) }));
    return;
  }

  auction.bids.push({
    id: makeId(),
    bidder,
    amount,
    note,
    time: Date.now(),
  });

  state.lastBidder = bidder;
  localStorage.setItem(STORAGE_KEYS.bidder, bidder);
  saveAuctions();
  setToast(t("toast.bidAccepted", { bidder, amount: formatMoney(amount) }));
  renderCurrentPage();
}

function handleAdminLoginSubmit(event) {
  event.preventDefault();

  const email = normalizeEmail(valueOf("adminEmail"));
  if (!email) {
    setToast(t("toast.formIncomplete"));
    return;
  }

  if (!state.adminEmails.includes(email)) {
    setToast(t("toast.adminDenied"));
    return;
  }

  state.adminEmail = email;
  localStorage.setItem(STORAGE_KEYS.adminEmail, email);
  setToast(t("toast.adminSignedIn"));
  renderCurrentPage();
}

function handleAdminSignOut() {
  state.adminEmail = "";
  localStorage.removeItem(STORAGE_KEYS.adminEmail);

  const field = byId("adminEmail");
  if (field) {
    field.value = "";
  }

  setToast(t("toast.adminSignedOut"));
  renderCurrentPage();
}

function handleAdminExport() {
  if (!isAdminSignedIn()) {
    setToast(t("toast.adminDenied"));
    return;
  }

  downloadText(`reverse-auctions-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(state.auctions, null, 2));
  setToast(t("admin.exported"));
}

function handleAdminClearAll() {
  if (!isAdminSignedIn()) {
    setToast(t("toast.adminDenied"));
    return;
  }

  if (!window.confirm(t("admin.confirmClearAll"))) {
    return;
  }

  state.auctions = [];
  state.activeCode = "";
  localStorage.removeItem(STORAGE_KEYS.activeCode);
  saveAuctions();
  renderCurrentPage();
  setToast(t("admin.cleared"));
}

function handleAdminToggleAuction(rawCode) {
  if (!isAdminSignedIn()) {
    setToast(t("toast.adminDenied"));
    return;
  }

  const auction = findAuctionByCode(rawCode);
  if (!auction) {
    return;
  }

  const wasOpen = auction.status === "open";
  auction.status = wasOpen ? "closed" : "open";

  if (!wasOpen) {
    auction.endAt = Date.now() + auction.durationMinutes * 60000;
  }

  saveAuctions();
  renderCurrentPage();
  setToast(wasOpen ? t("admin.closed", { code: auction.code }) : t("admin.reopened", { code: auction.code }));
}

function handleAdminDeleteAuction(rawCode) {
  if (!isAdminSignedIn()) {
    setToast(t("toast.adminDenied"));
    return;
  }

  const auction = findAuctionByCode(rawCode);
  if (!auction) {
    return;
  }

  if (!window.confirm(t("admin.confirmDelete", { code: auction.code }))) {
    return;
  }

  state.auctions = state.auctions.filter((entry) => entry.code !== auction.code);

  if (state.activeCode === auction.code) {
    const nextActive = getOpenAuctions()[0] || null;
    state.activeCode = nextActive ? nextActive.code : "";
    if (state.activeCode) {
      localStorage.setItem(STORAGE_KEYS.activeCode, state.activeCode);
    } else {
      localStorage.removeItem(STORAGE_KEYS.activeCode);
    }
  }

  saveAuctions();
  renderCurrentPage();
  setToast(t("admin.deleted", { code: auction.code }));
}

function openRoomByCode(rawCode, flash = "") {
  const code = normalizeCode(rawCode);
  const auction = findAuctionByCode(code);

  if (!auction) {
    setToast(t("toast.roomNotFound"));
    return;
  }

  state.activeCode = auction.code;
  localStorage.setItem(STORAGE_KEYS.activeCode, auction.code);
  const query = new URLSearchParams();
  query.set("code", auction.code);
  if (flash) {
    query.set("flash", flash);
  }
  window.location.href = `auction.html?${query.toString()}`;
}

function flashMessageFromQuery() {
  if (state.page !== "room") {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const flash = params.get("flash");
  const code = params.get("code");

  if (code) {
    const resolved = findAuctionByCode(code);
    if (resolved) {
      state.activeCode = resolved.code;
      localStorage.setItem(STORAGE_KEYS.activeCode, resolved.code);
    }
  }

  if (flash === "created") {
    setToast(t("toast.roomCreated", { code: state.activeCode || code || "" }));
  } else if (flash === "joined") {
    setToast(t("toast.roomEntered", { code: state.activeCode || code || "" }));
  }

  if (flash) {
    params.delete("flash");
    const nextUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
    window.history.replaceState({}, "", nextUrl);
  }
}

function ensureActiveCode() {
  if (state.activeCode && findAuctionByCode(state.activeCode)) {
    return;
  }

  const candidate = getOpenAuctions()[0] || state.auctions[0] || null;
  state.activeCode = candidate ? candidate.code : "";

  if (state.activeCode) {
    localStorage.setItem(STORAGE_KEYS.activeCode, state.activeCode);
  }
}

function resolveActiveAuction() {
  const params = new URLSearchParams(window.location.search);
  const queryCode = params.get("code");

  if (queryCode) {
    const queryAuction = findAuctionByCode(queryCode);
    if (queryAuction) {
      return queryAuction;
    }
  }

  if (state.activeCode) {
    const stored = findAuctionByCode(state.activeCode);
    if (stored) {
      return stored;
    }
  }

  return getOpenAuctions()[0] || null;
}

function getSelectedAuction() {
  return resolveActiveAuction();
}

function normalizeExpiredAuctions() {
  let changed = false;

  state.auctions = state.auctions.map((auction) => {
    if (auction.status === "closed") {
      return auction;
    }

    if (Date.now() >= auction.endAt) {
      changed = true;
      return { ...auction, status: "closed" };
    }

    return auction;
  });

  if (changed) {
    saveAuctions();
  }
}

function getOpenAuctions() {
  return state.auctions.filter((auction) => auction.status === "open");
}

function getFeaturedAuctions(limit) {
  return [...state.auctions]
    .sort((left, right) => {
      if (left.status !== right.status) {
        return left.status === "open" ? -1 : 1;
      }
      return left.endAt - right.endAt;
    })
    .slice(0, limit);
}

function getCurrentOffer(auction) {
  return auction.bids.length ? Math.min(auction.ceiling, ...auction.bids.map((bid) => bid.amount)) : auction.ceiling;
}

function getNextAllowedOffer(auction) {
  return Math.max(1, getCurrentOffer(auction) - auction.minimumStep);
}

function getParticipantCount(auction) {
  return new Set(auction.bids.map((bid) => bid.bidder.toLowerCase())).size;
}

function getLeadBid(auction) {
  if (!auction.bids.length) {
    return null;
  }

  return [...auction.bids].sort((left, right) => left.amount - right.amount || left.time - right.time)[0];
}

function updateDocumentTitle() {
  const title = PAGE_TITLES[state.page]?.[state.language] || PAGE_TITLES.home.en;

  if (state.page === "room") {
    const auction = resolveActiveAuction();
    document.title = auction ? `${auction.title} · ${title} · ${t("brand.name")}` : `${title} · ${t("brand.name")}`;
    return;
  }

  document.title = `${title} · ${t("brand.name")}`;
}

function setToast(message) {
  const toast = byId("toast");
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(setToast.timer);
  setToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function loadLanguage() {
  const stored = localStorage.getItem(STORAGE_KEYS.language);
  if (stored === "en" || stored === "es") {
    return stored;
  }

  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

async function loadAdminEmails() {
  if (Array.isArray(window.__ADMIN_EMAILS__)) {
    return [...new Set(window.__ADMIN_EMAILS__.map(normalizeEmail).filter(Boolean))];
  }

  try {
    const response = await fetch(".env", { cache: "no-store" });
    if (!response.ok) {
      return [];
    }

    return parseAdminEmails(await response.text());
  } catch {
    return [];
  }
}

function parseAdminEmails(text) {
  const emails = new Set();

  text.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      return;
    }

    const match = trimmed.match(/^ADMIN_EMAILS\s*=\s*(.*)$/i);
    if (!match) {
      return;
    }

    const value = match[1].split("#")[0].trim().replace(/^['"]|['"]$/g, "");
    value.split(/[;,\s]+/).forEach((email) => {
      const normalized = normalizeEmail(email);
      if (normalized) {
        emails.add(normalized);
      }
    });
  });

  return [...emails];
}

function syncAdminSession() {
  state.adminEmail = normalizeEmail(state.adminEmail);

  if (!state.adminEmails.includes(state.adminEmail)) {
    state.adminEmail = "";
    localStorage.removeItem(STORAGE_KEYS.adminEmail);
  }
}

function isAdminSignedIn() {
  return Boolean(state.adminEmail) && state.adminEmails.includes(state.adminEmail);
}

function loadAuctions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.auctions);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(normalizeAuction) : [];
  } catch {
    return [];
  }
}

function saveAuctions() {
  localStorage.setItem(STORAGE_KEYS.auctions, JSON.stringify(state.auctions));
}

function normalizeAuction(rawAuction) {
  const createdAt = Number(rawAuction.createdAt) || Date.now();
  const durationMinutes = Math.max(15, Number(rawAuction.durationMinutes) || 60);
  const endAt = Number(rawAuction.endAt) || createdAt + durationMinutes * 60000;
  const ceiling = toNumber(rawAuction.ceiling, 0);
  const minimumStep = Math.max(1, toNumber(rawAuction.minimumStep ?? rawAuction.step, 50));
  const bids = Array.isArray(rawAuction.bids)
    ? rawAuction.bids
        .map((bid) => normalizeBid(bid, createdAt, ceiling))
        .filter(Boolean)
        .sort((left, right) => left.time - right.time)
    : [];

  return {
    id: String(rawAuction.id || makeId()),
    code: formatCode(rawAuction.code || generateCode()),
    title: String(rawAuction.title || "Untitled auction").trim(),
    buyer: String(rawAuction.buyer || "Buyer").trim(),
    category: String(rawAuction.category || "General").trim(),
    ceiling,
    minimumStep,
    durationMinutes,
    createdAt,
    endAt,
    notes: String(rawAuction.notes || rawAuction.note || "").trim(),
    bids,
    status: Date.now() >= endAt || rawAuction.status === "closed" ? "closed" : "open",
  };
}

function normalizeBid(bid, fallbackTime, fallbackCeiling) {
  if (!bid || typeof bid !== "object") {
    return null;
  }

  const amount = toNumber(bid.amount, fallbackCeiling);
  if (!Number.isFinite(amount) || amount <= 0) {
    return null;
  }

  return {
    id: String(bid.id || makeId()),
    bidder: String(bid.bidder || "Anonymous bidder").trim() || "Anonymous bidder",
    amount,
    note: String(bid.note || "").trim(),
    time: Number(bid.time) || fallbackTime,
  };
}

function ensureActiveCode() {
  if (state.activeCode && findAuctionByCode(state.activeCode)) {
    return;
  }

  const candidate = getOpenAuctions()[0] || state.auctions[0] || null;
  state.activeCode = candidate ? candidate.code : "";

  if (state.activeCode) {
    localStorage.setItem(STORAGE_KEYS.activeCode, state.activeCode);
  }
}

function findAuctionByCode(rawCode) {
  const code = normalizeCode(rawCode);

  return state.auctions.find((auction) => normalizeCode(auction.code) === code) || null;
}

function getCurrentOffer(auction) {
  return auction.bids.length ? Math.min(auction.ceiling, ...auction.bids.map((bid) => bid.amount)) : auction.ceiling;
}

function getNextAllowedOffer(auction) {
  return Math.max(1, getCurrentOffer(auction) - auction.minimumStep);
}

function getOpenAuctions() {
  return state.auctions.filter((auction) => auction.status === "open");
}

function getFeaturedAuctions(limit) {
  return [...state.auctions]
    .sort((left, right) => {
      if (left.status !== right.status) {
        return left.status === "open" ? -1 : 1;
      }
      return left.endAt - right.endAt;
    })
    .slice(0, limit);
}

function getLeadBid(auction) {
  if (!auction.bids.length) {
    return null;
  }

  return [...auction.bids].sort((left, right) => left.amount - right.amount || left.time - right.time)[0];
}

function resolveActiveAuction() {
  const params = new URLSearchParams(window.location.search);
  const queryCode = params.get("code");

  if (queryCode) {
    const queryAuction = findAuctionByCode(queryCode);
    if (queryAuction) {
      return queryAuction;
    }
  }

  if (state.activeCode) {
    const stored = findAuctionByCode(state.activeCode);
    if (stored) {
      return stored;
    }
  }

  return getOpenAuctions()[0] || null;
}

function formatCode(rawCode) {
  const normalized = normalizeCode(rawCode);
  if (normalized.startsWith("RA") && normalized.length >= 8) {
    return `RA-${normalized.slice(2).slice(0, 6)}`;
  }

  return String(rawCode || "").toUpperCase();
}

function normalizeCode(rawCode) {
  return String(rawCode || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

function generateCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";

  for (let index = 0; index < 6; index += 1) {
    suffix += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return `RA-${suffix}`;
}

function makeId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `auc_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

function formatMoney(value) {
  return new Intl.NumberFormat(locale(), {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

function formatClock(value) {
  return new Intl.DateTimeFormat(locale(), {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat(locale(), {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function formatTimeRemaining(endAt) {
  const remaining = Math.max(0, endAt - Date.now());
  const hours = Math.floor(remaining / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);

  if (state.language === "es") {
    if (hours === 0 && minutes === 0) {
      return "Cierra pronto";
    }

    if (hours === 0) {
      return `Quedan ${minutes} min`;
    }

    return `Quedan ${hours} h ${minutes} min`;
  }

  if (hours === 0 && minutes === 0) {
    return "Closing soon";
  }

  if (hours === 0) {
    return `${minutes}m left`;
  }

  return `${hours}h ${minutes}m left`;
}

function locale() {
  return state.language === "es" ? "es-ES" : "en-US";
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function valueOf(id) {
  return byId(id)?.value.trim() || "";
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function byId(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const node = byId(id);
  if (node) {
    node.textContent = value;
  }
}

function t(key, vars = {}) {
  const dictionary = TRANSLATIONS[state.language] || TRANSLATIONS.en;
  const fallback = TRANSLATIONS.en;
  const text = dictionary[key] || fallback[key] || key;

  return text.replace(/\{\{(\w+)\}\}/g, (_, name) => vars[name] ?? "");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function copyText(text) {
  if (!text) {
    return;
  }

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const temp = document.createElement("textarea");
  temp.value = text;
  temp.setAttribute("readonly", "readonly");
  temp.style.position = "absolute";
  temp.style.left = "-9999px";
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
}

function downloadText(fileName, text) {
  const blob = new Blob([text], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}
