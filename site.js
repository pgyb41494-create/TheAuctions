const STORAGE_KEYS = {
  auctions: "apex-reverse-auctions.auctions.v3",
  activeCode: "apex-reverse-auctions.active-code.v3",
  language: "apex-reverse-auctions.language.v2",
  theme: "apex-reverse-auctions.theme.v1",
  bidder: "apex-reverse-auctions.bidder.v3",
  creatorEmail: "apex-reverse-auctions.creator-email.v1",
  creatorPhone: "apex-reverse-auctions.creator-phone.v1",
  adminEmail: "apex-reverse-auctions.admin-email.v1",
  profile: "apex-reverse-auctions.profile.v1",
  joinedAuctions: "apex-reverse-auctions.joined-auctions.v1",
};

const LEGACY_AUCTION_KEYS = [
  "apex-reverse-auctions.auctions.v2",
  "apex-reverse-auctions.auctions.v1",
  "apex-reverse-auctions:v1",
  "reverse-auction-desk.auctions",
];

const FALLBACK_RUNTIME_ENV = {
  ADMIN_EMAILS: "pgyb41494@gmail.com",
  FIREBASE_API_KEY: "AIzaSyCVVomRm98h_B0gHmQ-Z8S8z9YY5eeiey4",
  FIREBASE_AUTH_DOMAIN: "thereverseauctions.firebaseapp.com",
  FIREBASE_PROJECT_ID: "thereverseauctions",
  FIREBASE_STORAGE_BUCKET: "thereverseauctions.firebasestorage.app",
  FIREBASE_MESSAGING_SENDER_ID: "1061100659594",
  FIREBASE_APP_ID: "1:1061100659594:web:67b3e60ad32f21da2b1e73",
};

const PAGE_TITLES = {
  home: { en: "Yoselins Auctions", es: "Yoselins Auctions" },
  create: { en: "Create room", es: "Crear sala" },
  join: { en: "Join room", es: "Entrar a una sala" },
  auctions: { en: "Open rooms", es: "Salas abiertas" },
  room: { en: "Auction room", es: "Sala de subasta" },
  dashboard: { en: "Dashboard", es: "Panel" },
  admin: { en: "Admin", es: "Administración" },
};

const TRANSLATIONS = {
  en: {
    "brand.kicker": "Auction workspace",
    "brand.name": "Yoselins Auctions",
    "nav.home": "Home",
    "nav.create": "Create",
    "nav.join": "Join",
    "nav.auctions": "Rooms",
    "nav.room": "Room",
    "nav.dashboard": "Dashboard",
    "nav.admin": "Admin",
    "lang.toEnglish": "Switch to English",
    "lang.toSpanish": "Cambiar a español",
    "common.openRooms": "Open rooms",
    "common.enterRoom": "Enter room",
    "common.openRoom": "Open room",
    "common.backToRooms": "Back to rooms",
    "common.publishRoom": "Publish room",
    "common.copyCode": "Copy code",
    "common.code": "Code",
    "common.roomCode": "Room code",
    "common.currentOffer": "Current offer",
    "common.nextAllowed": "Next allowed",
    "common.leadBidder": "Lead bidder",
    "common.offers": "Offers",
    "common.ceiling": "Ceiling",
    "common.minimumStep": "Drop amount",
    "common.closes": "Closes",
    "common.participants": "Participants",
    "common.statusOpen": "Open",
    "common.statusClosed": "Closed",
    "common.noResults": "No rooms match this filter.",
    "common.noBids": "No bids yet.",
    "common.noneYet": "None yet",
    "auth.googleSignInButton": "Sign in with Google",
    "category.professional": "Professional Services",
    "category.facilities": "Facilities",
    "category.logistics": "Logistics",
    "category.technology": "Technology",
    "category.events": "Events",
    "category.other": "Other",
    "home.eyebrow": "Simple reverse auctions",
    "home.title": "Create or join a room.",
    "home.lede": "Pick one button to start.",
    "home.authPrimary": "Sign in",
    "home.authHint": "Enter your email to continue.",
    "home.authModalTitle": "Sign in to Your Account",
    "home.authPasswordTitle": "Enter your password",
    "home.authPasswordHint": "Use the password for this account.",
    "home.authEmailLabel": "Email Address",
    "home.authEmailPlaceholder": "Enter Your Email",
    "home.authPasswordLabel": "Password",
    "home.authPasswordPlaceholder": "Enter your password",
    "home.authNext": "Next",
    "home.authSignIn": "Sign in",
    "home.authResetPassword": "Reset Password",
    "home.authDivider": "or",
    "home.authUseAnotherEmail": "Use another email",
    "home.authModalClose": "Close",
    "home.authSignedIn": "Signed in",
    "theme.toDark": "Switch to dark mode",
    "theme.toLight": "Switch to light mode",
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
    "create.lede": "Set the price, drop schedule, and close time before you publish.",
    "create.formTitle": "Create form",
    "create.formSubtitle": "Publish the room details.",
    "create.helper": "The room opens immediately after publish.",
    "create.fieldTitle": "Auction title",
    "create.fieldBuyer": "Auction Maker",
    "create.fieldCategory": "Category",
    "create.fieldCreatorEmail": "Creator email",
    "create.fieldCreatorPhone": "Auction maker phone number",
    "create.fieldVisibility": "Room visibility",
    "create.fieldCeiling": "Price",
    "create.fieldStep": "Drop amount",
    "create.fieldDuration": "Auction length (hours)",
    "create.fieldNotes": "Notes",
    "create.fieldPhotos": "Room photos",
    "create.placeholderTitle": "Office cleaning contract",
    "create.placeholderBuyer": "Northstar",
    "create.placeholderCategory": "Facilities",
    "create.placeholderCreatorEmail": "creator@example.com",
    "create.placeholderCreatorPhone": "(555) 123-4567",
    "create.placeholderCeiling": "125000",
    "create.placeholderStep": "500",
    "create.placeholderDuration": "60",
    "create.placeholderNotes": "Add scope notes, service expectations, or compliance details.",
    "create.visibilityPublic": "Public room",
    "create.visibilityCodeOnly": "Code only",
    "create.fieldDropEvery": "Price drops every",
    "create.dropDays": "Days",
    "create.dropHours": "Hours",
    "create.dropMinutes": "Minutes",
    "create.dropHint": "Set any mix above zero.",
    "create.photosHint": "Add photos that will show in the room.",
    "create.photosPreviewEmpty": "Photos will appear here after you choose them.",
    "create.photoLabel": "Photo",
    "create.submit": "Publish room",
    "create.button": "Publish room",
    "create.previewTitle": "Recent rooms",
    "create.previewBody": "Open an existing room.",
    "create.previewTip": "Live rooms already stored in this browser.",
    "create.checklistTitle": "Room checklist",
    "create.checklistSubtitle": "Keep each launch consistent",
    "create.recentTitle": "Recent rooms",
    "create.recentSubtitle": "Open an existing room.",
    "create.noRooms": "No rooms yet.",
    "join.eyebrow": "Join room",
    "join.title": "Enter a room code and begin bidding.",
    "join.lede": "Use the code you received to enter the room.",
    "join.formTitle": "Join form",
    "join.formSubtitle": "Open the room by code.",
    "join.helper": "If the code exists, the room opens right away.",
    "join.fieldCode": "Room code",
    "join.fieldName": "Your name",
    "join.placeholderCode": "RA-4F7K2P",
    "join.placeholderName": "Cedar Supply",
    "join.submit": "Enter room",
    "join.button": "Enter room",
    "join.previewTitle": "Join snapshot",
    "join.previewBody": "Rooms available right now.",
    "join.recentBody": "Choose an active room from the list below.",
    "join.recentTitle": "Recent rooms",
    "join.recentSubtitle": "Open a room directly.",
    "join.noRooms": "No rooms to join yet.",
    "auctions.eyebrow": "Open rooms",
    "auctions.title": "Browse every active auction room.",
    "auctions.lede": "Search by title, buyer, category, or room code before entering a room.",
    "auctions.metricsTitle": "Room summary",
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
    "auctions.listHint": "Only open public rooms appear here.",
    "auctions.noResults": "No rooms match this filter.",
    "room.eyebrow": "Auction room",
    "room.emptyTitle": "No room selected.",
    "room.emptyBody": "Pick a room from the list or enter a code.",
    "room.emptyCta": "Back to rooms",
    "room.lookupTitle": "Open a room",
    "room.lookupSubtitle": "Use a room code",
    "room.lookupLabel": "Room code",
    "room.lookupButton": "Open room",
    "room.activeRoomsTitle": "Open rooms",
    "room.activeRoomsSubtitle": "Rooms you can open now",
    "room.schedule": "Drops every {{interval}} by {{amount}}. Closes in {{close}}.",
    "room.scheduleClosed": "Closed",
    "room.manualOnly": "Manual bids only",
    "room.createdBy": "Created by {{email}}",
    "room.createdByPhone": "Phone {{phone}}",
    "room.visibilityPublic": "Public room",
    "room.visibilityCodeOnly": "Code only",
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
    "room.photosTitle": "Photos",
    "room.photosSubtitle": "Photos shared by the creator.",
    "room.photoLabel": "Room photo",
    "room.creatorToolsTitle": "Creator tools",
    "room.creatorOpenTitle": "Close the room when you are ready.",
    "room.creatorOpenHint": "Only the creator or admin can close the room.",
    "room.closeRoom": "Close room",
    "room.creatorWinnerTitle": "Choose a winner",
    "room.creatorWinnerHint": "Pick the bid that should win the room.",
    "room.creatorWinnerSelected": "{{bidder}} at {{amount}} is selected.",
    "room.creatorWinnerSelectedTag": "Selected",
    "room.creatorNoBids": "No bids have been placed yet.",
    "room.closedNow": "The room is closed.",
    "room.winnerSelected": "{{bidder}} at {{amount}} has been selected.",
    "room.confirmCloseRoom": "Close {{code}} now?",
    "room.confirmAwardBid": "Select {{bidder}} at {{amount}} as the winner?",
    "room.rulesTitle": "Room rules",
    "room.rulesSubtitle": "Keep the room disciplined",
    "room.notesTitle": "Notes",
    "room.notesSubtitle": "Room description",
    "room.noNotes": "No notes were provided.",
    "toast.dropIntervalRequired": "Set a drop interval using days, hours, or minutes.",
    "dashboard.eyebrow": "Google account",
    "dashboard.title": "Your joined auctions live in one dashboard.",
    "dashboard.lede": "Sign in with Google, set a display name, and keep joined rooms close at hand.",
    "dashboard.gateTitle": "Sign in to continue.",
    "dashboard.gateSubtitle": "Use Google to unlock your personal dashboard.",
    "dashboard.gateHint": "If the Google button does not load, add the Firebase keys to .env.",
    "dashboard.accountTitle": "Signed-in account",
    "dashboard.accountSubtitle": "Google identity and display name.",
    "dashboard.emailLabel": "Google email",
    "dashboard.displayNameLabel": "Display name",
    "dashboard.displayNamePlaceholder": "Preferred bidder name",
    "dashboard.displayNameHelper": "This name fills the join and bid forms.",
    "dashboard.phoneLabel": "Phone number",
    "dashboard.phonePlaceholder": "(555) 123-4567",
    "dashboard.phoneHelper": "Required for your profile.",
    "dashboard.saveDisplayName": "Save profile",
    "dashboard.statsTitle": "Account stats",
    "dashboard.statsSubtitle": "What this browser has joined.",
    "dashboard.joinedRooms": "Joined rooms",
    "dashboard.activeRooms": "Active rooms",
    "dashboard.closedRooms": "Closed rooms",
    "dashboard.signOut": "Sign out",
    "dashboard.joinedTitle": "Joined auctions",
    "dashboard.joinedSubtitle": "Rooms you opened from this browser.",
    "dashboard.joinedEmpty": "No joined auctions yet.",
    "dashboard.joinedAt": "Joined",
    "dashboard.createdTitle": "Created auctions",
    "dashboard.createdSubtitle": "Rooms you created from this browser.",
    "dashboard.createdEmpty": "No created auctions yet.",
    "dashboard.archived": "Archived",
    "admin.eyebrow": "Admin console",
    "admin.title": "Manage rooms with maintenance tools.",
    "admin.lede": "Sign in with an approved Google account to delete, close, reopen, or export rooms.",
    "admin.statusLocked": "Locked",
    "admin.statusSignedIn": "Signed in as {{email}}",
    "admin.statusPending": "Signed in as {{email}} but not approved.",
    "admin.gateTitle": "Admin access",
    "admin.gateSubtitle": "Use an approved account to open the dashboard.",
    "admin.googleHint": "If the Google button does not load, add the Firebase keys to .env.",
    "admin.signOut": "Sign out",
    "admin.configHint": "Only Google emails listed in .env can access maintenance tools.",
    "admin.noAdminsConfigured": "No admin emails are configured in .env yet.",
    "admin.statsTitle": "Room summary",
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
    "admin.closeAllOpen": "Close all open rooms",
    "admin.closeRoom": "Close room",
    "admin.reopenRoom": "Reopen room",
    "admin.deleteAuction": "Delete room",
    "admin.confirmClose": "Close {{code}}?",
    "admin.confirmReopen": "Reopen {{code}}?",
    "admin.noRooms": "No rooms match this filter.",
    "admin.noRoomsStored": "No rooms are stored in this browser yet.",
    "admin.noRoomsFiltered": "No rooms match this filter. Set status to All rooms or clear the search.",
    "admin.openRoomsHidden": "{{count}} open room(s) exist but are hidden by the current filter.",
    "admin.listHint": "Shows every room in this browser, including code-only rooms.",
    "admin.confirmDelete": "Delete {{code}}? This cannot be undone.",
    "admin.confirmClearAll": "Clear every room in this browser? This cannot be undone.",
    "admin.confirmCloseAllOpen": "Close all {{count}} open rooms?",
    "admin.exported": "Auction data exported.",
    "admin.deleted": "Deleted {{code}}.",
    "admin.closed": "Closed {{code}}.",
    "admin.reopened": "Reopened {{code}}.",
    "admin.cleared": "All rooms cleared.",
    "admin.allClosed": "All open rooms closed.",
    "toast.roomCreated": "Room created: {{code}}",
    "toast.roomEntered": "Room opened: {{code}}",
    "toast.codeCopied": "Code copied.",
    "toast.adminDenied": "That email is not approved.",
    "toast.adminSignedIn": "Admin dashboard unlocked.",
    "toast.adminSignedOut": "Signed out of admin dashboard.",
    "toast.googleSignedIn": "Signed in as {{email}}.",
    "toast.googleSignedOut": "Signed out of Google account.",
    "toast.profileSaved": "Display name saved.",
    "toast.googleUnavailable": "Google sign-in is not available right now.",
    "toast.authUnavailable": "Sign-in is not available right now.",
    "toast.emailRequired": "Enter your email first.",
    "toast.invalidEmail": "Enter a valid email address.",
    "toast.passwordRequired": "Enter your password.",
    "toast.emailSignInFailed": "Email sign-in failed. Please try again.",
    "toast.passwordResetSent": "Password reset email sent.",
    "toast.passwordResetFailed": "Could not send the reset email. Please try again.",
    "toast.phoneRequired": "Enter your phone number.",
    "toast.bidAccepted": "{{bidder}} is leading at {{amount}}.",
    "toast.invalidCode": "Enter a valid room code.",
    "toast.roomNotFound": "No room matches that code.",
    "toast.bidderRequired": "Enter a bidder name.",
    "toast.amountRequired": "Enter a valid bid amount.",
    "toast.bidTooHigh": "Bid must be {{amount}} or lower.",
    "toast.roomClosed": "This room is closed.",
    "toast.noRoomSelected": "Select a room first.",
    "toast.formIncomplete": "Fill in all required fields.",
    "toast.googleSignInFailed": "Google sign-in failed. Please try again.",
    "toast.googleSignOutFailed": "Could not sign out. Please try again.",
  },
  es: {
    "brand.kicker": "Espacio de subastas",
    "brand.name": "Yoselins Auctions",
    "nav.home": "Inicio",
    "nav.create": "Crear",
    "nav.join": "Entrar",
    "nav.auctions": "Salas",
    "nav.room": "Sala",
    "nav.dashboard": "Panel",
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
    "common.minimumStep": "Monto de bajada",
    "common.closes": "Cierra",
    "common.participants": "Participantes",
    "common.statusOpen": "Abierta",
    "common.statusClosed": "Cerrada",
    "common.noResults": "No hay salas que coincidan con este filtro.",
    "common.noBids": "Todavía no hay ofertas.",
    "common.noneYet": "Ninguno aún",
    "auth.googleSignInButton": "Iniciar sesión con Google",
    "category.professional": "Servicios profesionales",
    "category.facilities": "Instalaciones",
    "category.logistics": "Logística",
    "category.technology": "Tecnología",
    "category.events": "Eventos",
    "category.other": "Otro",
    "home.eyebrow": "Subastas simples",
    "home.title": "Crea o entra a una sala.",
    "home.lede": "Pulsa un botón para empezar.",
    "home.authPrimary": "Iniciar sesión",
    "home.authHint": "Escribe tu correo para continuar.",
    "home.authModalTitle": "Inicia sesión en tu cuenta",
    "home.authPasswordTitle": "Escribe tu contraseña",
    "home.authPasswordHint": "Usa la contraseña de esta cuenta.",
    "home.authEmailLabel": "Correo electrónico",
    "home.authEmailPlaceholder": "Escribe tu correo",
    "home.authPasswordLabel": "Contraseña",
    "home.authPasswordPlaceholder": "Escribe tu contraseña",
    "home.authNext": "Siguiente",
    "home.authSignIn": "Iniciar sesión",
    "home.authResetPassword": "Restablecer contraseña",
    "home.authDivider": "o",
    "home.authUseAnotherEmail": "Usar otro correo",
    "home.authModalClose": "Cerrar",
    "home.authSignedIn": "Sesión iniciada",
    "theme.toDark": "Cambiar a modo oscuro",
    "theme.toLight": "Cambiar a modo claro",
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
    "create.lede": "Define el precio, el intervalo de bajada y el cierre antes de publicar.",
    "create.formTitle": "Formulario",
    "create.formSubtitle": "Publica los detalles de la sala.",
    "create.helper": "La sala se abre inmediatamente después de publicar.",
    "create.fieldTitle": "Título de la subasta",
    "create.fieldBuyer": "Creador de la subasta",
    "create.fieldCategory": "Categoría",
    "create.fieldCreatorEmail": "Correo del creador",
    "create.fieldCreatorPhone": "Número de teléfono del creador de la subasta",
    "create.fieldVisibility": "Visibilidad de la sala",
    "create.fieldCeiling": "Precio",
    "create.fieldStep": "Monto de bajada",
    "create.fieldDuration": "Duración de la subasta (horas)",
    "create.fieldNotes": "Notas",
    "create.fieldPhotos": "Fotos de la sala",
    "create.placeholderTitle": "Contrato de limpieza de oficinas",
    "create.placeholderBuyer": "Northstar",
    "create.placeholderCategory": "Instalaciones",
    "create.placeholderCreatorEmail": "creador@ejemplo.com",
    "create.placeholderCreatorPhone": "(555) 123-4567",
    "create.placeholderCeiling": "125000",
    "create.placeholderStep": "500",
    "create.placeholderDuration": "60",
    "create.placeholderNotes": "Agrega alcance, expectativas de servicio o detalles de cumplimiento.",
    "create.visibilityPublic": "Sala pública",
    "create.visibilityCodeOnly": "Solo con código",
    "create.fieldDropEvery": "La sala baja cada",
    "create.dropDays": "Días",
    "create.dropHours": "Horas",
    "create.dropMinutes": "Minutos",
    "create.dropHint": "Usa cualquier combinación mayor que cero.",
    "create.photosHint": "Agrega fotos que se mostrarán en la sala.",
    "create.photosPreviewEmpty": "Las fotos aparecerán aquí cuando las elijas.",
    "create.photoLabel": "Foto",
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
    "join.lede": "Usa el código que recibiste para entrar en la sala.",
    "join.formTitle": "Formulario",
    "join.formSubtitle": "Abre la sala por código.",
    "join.helper": "Si el código existe, la sala se abre de inmediato.",
    "join.fieldCode": "Código de la sala",
    "join.fieldName": "Tu nombre",
    "join.placeholderCode": "RA-4F7K2P",
    "join.placeholderName": "Cedar Supply",
    "join.submit": "Entrar a la sala",
    "join.button": "Entrar a la sala",
    "join.previewTitle": "Vista previa",
    "join.previewBody": "Salas disponibles ahora mismo.",
    "join.recentBody": "Elige una sala activa de la lista inferior.",
    "join.recentTitle": "Salas recientes",
    "join.recentSubtitle": "Abre una sala directamente.",
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
    "auctions.listHint": "Aquí solo aparecen las salas públicas abiertas.",
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
    "room.schedule": "Baja cada {{interval}} en {{amount}}. Cierra en {{close}}.",
    "room.scheduleClosed": "Cerrada",
    "room.manualOnly": "Solo pujas manuales",
    "room.createdBy": "Creada por {{email}}",
    "room.createdByPhone": "Teléfono {{phone}}",
    "room.visibilityPublic": "Sala pública",
    "room.visibilityCodeOnly": "Solo con código",
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
    "room.photosTitle": "Fotos",
    "room.photosSubtitle": "Fotos compartidas por el creador.",
    "room.photoLabel": "Foto de la sala",
    "room.creatorToolsTitle": "Herramientas del creador",
    "room.creatorOpenTitle": "Cierra la sala cuando estés listo.",
    "room.creatorOpenHint": "Solo el creador o un administrador puede cerrar la sala.",
    "room.closeRoom": "Cerrar sala",
    "room.creatorWinnerTitle": "Elige un ganador",
    "room.creatorWinnerHint": "Selecciona la oferta que debe ganar la sala.",
    "room.creatorWinnerSelected": "{{bidder}} con {{amount}} está seleccionado.",
    "room.creatorWinnerSelectedTag": "Seleccionado",
    "room.creatorNoBids": "Aún no se ha enviado ninguna oferta.",
    "room.closedNow": "La sala está cerrada.",
    "room.winnerSelected": "Se ha seleccionado a {{bidder}} con {{amount}}.",
    "room.confirmCloseRoom": "¿Cerrar {{code}} ahora?",
    "room.confirmAwardBid": "¿Seleccionar a {{bidder}} con {{amount}} como ganador?",
    "room.rulesTitle": "Reglas de la sala",
    "room.rulesSubtitle": "Mantén la disciplina del tablero",
    "room.notesTitle": "Notas",
    "room.notesSubtitle": "Descripción de la sala",
    "room.noNotes": "No se agregaron notas.",
    "toast.dropIntervalRequired": "Configura un intervalo de bajada usando días, horas o minutos.",
    "dashboard.eyebrow": "Cuenta de Google",
    "dashboard.title": "Tus subastas unidas viven en un solo panel.",
    "dashboard.lede": "Inicia sesión con Google, define tu nombre visible y ten cerca las salas que uniste.",
    "dashboard.gateTitle": "Inicia sesión para continuar.",
    "dashboard.gateSubtitle": "Usa Google para desbloquear tu panel personal.",
    "dashboard.gateHint": "Si el botón de Google no aparece, agrega las claves de Firebase a .env.",
    "dashboard.accountTitle": "Cuenta iniciada",
    "dashboard.accountSubtitle": "Identidad de Google y nombre visible.",
    "dashboard.emailLabel": "Correo de Google",
    "dashboard.displayNameLabel": "Nombre visible",
    "dashboard.displayNamePlaceholder": "Nombre de postor preferido",
    "dashboard.displayNameHelper": "Este nombre se usa en los formularios de entrada y oferta.",
    "dashboard.phoneLabel": "Número de teléfono",
    "dashboard.phonePlaceholder": "(555) 123-4567",
    "dashboard.phoneHelper": "Es obligatorio para tu perfil.",
    "dashboard.saveDisplayName": "Guardar perfil",
    "dashboard.statsTitle": "Estadísticas de la cuenta",
    "dashboard.statsSubtitle": "Lo que este navegador ha unido.",
    "dashboard.joinedRooms": "Salas unidas",
    "dashboard.activeRooms": "Salas activas",
    "dashboard.closedRooms": "Salas cerradas",
    "dashboard.signOut": "Cerrar sesión",
    "dashboard.joinedTitle": "Subastas unidas",
    "dashboard.joinedSubtitle": "Salas que abriste desde este navegador.",
    "dashboard.joinedEmpty": "Todavía no hay subastas unidas.",
    "dashboard.joinedAt": "Unida",
    "dashboard.createdTitle": "Subastas creadas",
    "dashboard.createdSubtitle": "Salas que creaste desde este navegador.",
    "dashboard.createdEmpty": "Todavía no has creado subastas.",
    "dashboard.archived": "Archivada",
    "admin.eyebrow": "Consola de administración",
    "admin.title": "Administra las salas con herramientas de mantenimiento.",
    "admin.lede": "Ingresa con una cuenta aprobada de Google para eliminar, cerrar, reabrir o exportar salas.",
    "admin.statusLocked": "Bloqueado",
    "admin.statusSignedIn": "Sesión iniciada como {{email}}",
    "admin.statusPending": "Sesión iniciada como {{email}} pero no aprobada.",
    "admin.gateTitle": "Acceso de administrador",
    "admin.gateSubtitle": "Usa una cuenta aprobada para abrir el panel.",
    "admin.googleHint": "Si el botón de Google no aparece, agrega las claves de Firebase a .env.",
    "admin.signOut": "Cerrar sesión",
    "admin.configHint": "Solo los correos de Google listados en .env pueden acceder a las herramientas de mantenimiento.",
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
    "admin.closeAllOpen": "Cerrar todas las salas abiertas",
    "admin.closeRoom": "Cerrar sala",
    "admin.reopenRoom": "Reabrir sala",
    "admin.deleteAuction": "Eliminar sala",
    "admin.confirmClose": "¿Cerrar {{code}}?",
    "admin.confirmReopen": "¿Reabrir {{code}}?",
    "admin.noRooms": "No hay salas que coincidan con este filtro.",
    "admin.noRoomsStored": "Aún no hay salas guardadas en este navegador.",
    "admin.noRoomsFiltered": "No hay salas que coincidan con este filtro. Cambia el estado a Todas las salas o borra la búsqueda.",
    "admin.openRoomsHidden": "Hay {{count}} sala(s) abierta(s) oculta(s) por el filtro actual.",
    "admin.listHint": "Muestra todas las salas de este navegador, incluidas las de solo código.",
    "admin.confirmDelete": "¿Eliminar {{code}}? Esto no se puede deshacer.",
    "admin.confirmClearAll": "¿Borrar todas las salas de este navegador? Esto no se puede deshacer.",
    "admin.confirmCloseAllOpen": "¿Cerrar las {{count}} salas abiertas?",
    "admin.exported": "Datos de subastas exportados.",
    "admin.deleted": "Sala eliminada: {{code}}.",
    "admin.closed": "Sala cerrada: {{code}}.",
    "admin.reopened": "Sala reabierta: {{code}}.",
    "admin.cleared": "Todas las salas se borraron.",
    "admin.allClosed": "Todas las salas abiertas se cerraron.",
    "toast.roomCreated": "Sala creada: {{code}}",
    "toast.roomEntered": "Sala abierta: {{code}}",
    "toast.codeCopied": "Código copiado.",
    "toast.adminDenied": "Ese correo no está aprobado.",
    "toast.adminSignedIn": "Panel de administración desbloqueado.",
    "toast.adminSignedOut": "Sesión cerrada del panel de administración.",
    "toast.googleSignedIn": "Sesión iniciada como {{email}}.",
    "toast.googleSignedOut": "Sesión cerrada de la cuenta de Google.",
    "toast.profileSaved": "Nombre visible guardado.",
    "toast.googleUnavailable": "La sesión de Google no está disponible ahora mismo.",
    "toast.authUnavailable": "La sesión no está disponible ahora mismo.",
    "toast.emailRequired": "Escribe tu correo primero.",
    "toast.invalidEmail": "Escribe un correo válido.",
    "toast.passwordRequired": "Escribe tu contraseña.",
    "toast.emailSignInFailed": "La sesión con correo falló. Inténtalo de nuevo.",
    "toast.passwordResetSent": "Se envió el correo para restablecer la contraseña.",
    "toast.passwordResetFailed": "No se pudo enviar el correo de restablecimiento. Inténtalo de nuevo.",
    "toast.phoneRequired": "Escribe tu número de teléfono.",
    "toast.bidAccepted": "{{bidder}} va ganando con {{amount}}.",
    "toast.invalidCode": "Ingresa un código de sala válido.",
    "toast.roomNotFound": "No existe una sala con ese código.",
    "toast.bidderRequired": "Escribe un nombre de postor.",
    "toast.amountRequired": "Ingresa un importe válido.",
    "toast.bidTooHigh": "La oferta debe ser {{amount}} o menor.",
    "toast.roomClosed": "Esta sala está cerrada.",
    "toast.noRoomSelected": "Selecciona una sala primero.",
    "toast.formIncomplete": "Completa todos los campos obligatorios.",
    "toast.googleSignInFailed": "La sesión de Google falló. Inténtalo de nuevo.",
    "toast.googleSignOutFailed": "No se pudo cerrar la sesión. Inténtalo de nuevo.",
  },
};

const state = {
  page: document.body?.dataset.page || "home",
  language: loadLanguage(),
  theme: loadTheme(),
  auctions: loadAuctions(),
  activeCode: localStorage.getItem(STORAGE_KEYS.activeCode) || "",
  lastBidder: localStorage.getItem(STORAGE_KEYS.bidder) || "",
  adminEmail: "",
  profile: loadProfile(),
  joinedAuctions: loadJoinedAuctions(),
  adminEmails: [],
  firebaseConfig: null,
  firebaseUser: null,
  firebaseConfigured: false,
  filters: { query: "", status: "all" },
  adminFilters: { query: "", status: "all" },
};

const THEME_ICONS = {
  dark: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2.5v2M12 19.5v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.5 12h2M19.5 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>`,
  light: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M21.5 14.7A8.5 8.5 0 0 1 9.3 3.1 9 9 0 1 0 21.5 14.7Z"></path></svg>`,
};

applyTheme(state.theme);
ensureThemeToggleButton();
renderThemeToggle();

document.addEventListener("DOMContentLoaded", initialize);

let runtimeEnvPromise = null;
let firebaseAuthInstance = null;
let firebaseAuthReady = false;
let firebaseAuthReadyPromise = null;
let firebaseAuthReadyResolve = null;
let homeAuthModalLastFocus = null;
let homeAuthRedirectPending = false;
let homeAuthStep = "email";
let homeAuthEmail = "";
let homeAuthPassword = "";
let homeAuthErrorKey = "";
let homeAuthBusy = false;
let createPhotoPreviews = [];
let createPhotoPreviewToken = 0;

async function initialize() {
  const [adminEmails, firebaseConfig] = await Promise.all([loadAdminEmails(), loadFirebaseConfig()]);
  state.adminEmails = adminEmails;
  state.firebaseConfig = firebaseConfig;
  await initializeFirebaseAuth();
  syncAdminSession();

  normalizeExpiredAuctions();
  ensureActiveCode();
  bindLanguageToggle();
  bindPageEvents();
  applyLanguage();
  if (state.page === "home" && !state.firebaseUser?.email) {
    document.body.classList.add("home-auth-locked");
  } else {
    document.body.classList.remove("home-auth-locked");
  }
  updateNavVisibility();
  renderCurrentPage();
  if (state.page === "home" && !state.firebaseUser?.email) {
    openHomeAuthModal();
  }
  window.setInterval(() => {
    if (document.visibilityState === "visible") {
      renderCurrentPage();
    }
  }, 60000);
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

function loadTheme() {
  try {
    const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
  } catch {
    // Ignore storage access failures and fall back to the system preference.
  }

  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  } catch {
    // Ignore storage failures; the active theme still applies for this session.
  }
}

function applyTheme(theme) {
  const normalizedTheme = theme === "dark" ? "dark" : "light";
  state.theme = normalizedTheme;
  document.documentElement.dataset.theme = normalizedTheme;
  if (document.body) {
    document.body.dataset.theme = normalizedTheme;
  }
  document.documentElement.style.colorScheme = normalizedTheme;
  updateThemeColorMeta(normalizedTheme);
}

function updateThemeColorMeta(theme) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#0f1217" : "#f7f7f4");
  }
}

function ensureThemeToggleButton() {
  if (!document.body) {
    return null;
  }

  let button = byId("themeToggleButton");
  if (button) {
    return button;
  }

  button = document.createElement("button");
  button.id = "themeToggleButton";
  button.type = "button";
  button.className = "theme-toggle-button";
  button.addEventListener("click", toggleTheme);
  document.body.appendChild(button);
  return button;
}

function renderThemeToggle() {
  const button = ensureThemeToggleButton();
  if (!button) {
    return;
  }

  const isDarkTheme = state.theme === "dark";
  const label = isDarkTheme ? t("theme.toLight") : t("theme.toDark");
  button.innerHTML = isDarkTheme ? THEME_ICONS.dark : THEME_ICONS.light;
  button.setAttribute("aria-label", label);
  button.setAttribute("aria-pressed", String(isDarkTheme));
  button.setAttribute("title", label);
  button.dataset.theme = state.theme;
}

function toggleTheme() {
  const nextTheme = state.theme === "dark" ? "light" : "dark";
  saveTheme(nextTheme);
  applyTheme(nextTheme);
  renderThemeToggle();
}

function bindPageEvents() {
  const createForm = byId("createForm");
  if (createForm) {
    createForm.addEventListener("submit", handleCreateSubmit);
  }

  const createCreatorEmail = byId("createCreatorEmail");
  if (createCreatorEmail) {
    createCreatorEmail.addEventListener("input", (event) => {
      localStorage.setItem(STORAGE_KEYS.creatorEmail, normalizeEmail(event.target.value));
    });
  }

  const createCreatorPhone = byId("createCreatorPhone");
  if (createCreatorPhone) {
    createCreatorPhone.addEventListener("input", (event) => {
      localStorage.setItem(STORAGE_KEYS.creatorPhone, normalizePhoneNumber(event.target.value));
    });
  }

  const createVisibility = byId("createVisibility");
  if (createVisibility) {
    createVisibility.addEventListener("change", (event) => {
      localStorage.setItem("apex-reverse-auctions.room-visibility.v1", String(event.target.value || "public"));
    });
  }

  const createPhotos = byId("createPhotos");
  if (createPhotos) {
    createPhotos.addEventListener("change", handleCreatePhotosChange);
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

  const dashboardDisplayNameForm = byId("dashboardDisplayNameForm");
  if (dashboardDisplayNameForm) {
    dashboardDisplayNameForm.addEventListener("submit", handleDashboardDisplayNameSubmit);
  }

  const homeAuthButton = byId("homeAuthButton");
  if (homeAuthButton) {
    homeAuthButton.addEventListener("click", handleHomeAuthButtonClick);
  }


function handleHomeAuthButtonClick() {
  if (state.firebaseUser?.email) {
    window.location.href = "dashboard.html";
    return;
  }

  openHomeAuthModal();
}
  const homeAuthModal = byId("homeAuthModal");
  if (homeAuthModal) {
    homeAuthModal.addEventListener("click", (event) => {
      if (event.target === homeAuthModal) {
        closeHomeAuthModal();
      }
    });
  }

  const homeAuthModalClose = byId("homeAuthModalClose");
  if (homeAuthModalClose) {
    homeAuthModalClose.addEventListener("click", closeHomeAuthModal);
  }

  const homeAuthForm = byId("homeAuthForm");
  if (homeAuthForm) {
    homeAuthForm.addEventListener("submit", handleHomeAuthSubmit);
  }

  const homeAuthEmailInput = byId("homeAuthEmail");
  if (homeAuthEmailInput) {
    homeAuthEmailInput.addEventListener("input", (event) => {
      homeAuthEmail = event.target.value;
      homeAuthErrorKey = "";
      const errorNode = byId("homeAuthError");
      if (errorNode) {
        errorNode.textContent = "";
      }
    });
  }

  const homeAuthPasswordInput = byId("homeAuthPassword");
  if (homeAuthPasswordInput) {
    homeAuthPasswordInput.addEventListener("input", (event) => {
      homeAuthPassword = event.target.value;
      homeAuthErrorKey = "";
      const errorNode = byId("homeAuthError");
      if (errorNode) {
        errorNode.textContent = "";
      }
    });
  }

  const homeAuthResetButton = byId("homeAuthResetButton");
  if (homeAuthResetButton) {
    homeAuthResetButton.addEventListener("click", handleHomeAuthResetPassword);
  }

  const homeAuthBackButton = byId("homeAuthBackButton");
  if (homeAuthBackButton) {
    homeAuthBackButton.addEventListener("click", handleHomeAuthBack);
  }

  const homeAuthGoogleButton = byId("homeAuthGoogleButton");
  if (homeAuthGoogleButton) {
    homeAuthGoogleButton.addEventListener("click", handleFirebaseSignIn);
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

  const adminSearch = byId("admin-search");
  if (adminSearch) {
    adminSearch.addEventListener("input", (event) => {
      state.adminFilters.query = event.target.value.trim();
      renderCurrentPage();
    });
  }

  const adminStatus = byId("admin-status");
  if (adminStatus) {
    adminStatus.addEventListener("change", (event) => {
      state.adminFilters.status = event.target.value;
      renderCurrentPage();
    });
  }

  const adminSignOut = byId("adminSignOut");
  if (adminSignOut) {
    adminSignOut.addEventListener("click", handleFirebaseSignOut);
  }

  const dashboardSignOut = byId("dashboardSignOut");
  if (dashboardSignOut) {
    dashboardSignOut.addEventListener("click", handleFirebaseSignOut);
  }

  const adminExport = byId("adminExport");
  if (adminExport) {
    adminExport.addEventListener("click", handleAdminExport);
  }

  const adminClearAll = byId("adminClearAll");
  if (adminClearAll) {
    adminClearAll.addEventListener("click", handleAdminClearAll);
  }

  const adminCloseAllOpen = byId("adminCloseAllOpen");
  if (adminCloseAllOpen) {
    adminCloseAllOpen.addEventListener("click", handleAdminCloseAllOpen);
  }

  ["homeFeaturedAuctions", "auctionsList", "roomEmptyOpenList", "roomActiveOpenList", "dashboardCreatedList", "roomCreatorPanel", "adminAuctionList"].forEach((containerId) => {
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

  const homeAuthModalClose = byId("homeAuthModalClose");
  if (homeAuthModalClose) {
    homeAuthModalClose.setAttribute("aria-label", t("home.authModalClose"));
  }

  renderThemeToggle();

  if (state.page === "home") {
    const homeAuthModal = byId("homeAuthModal");
    if (homeAuthModal && !homeAuthModal.hidden) {
      renderHomeAuthModal();
    }
  }

  updateDocumentTitle();
}

function renderCurrentPage() {
  normalizeExpiredAuctions();
  ensureActiveCode();
  renderSharedStats();
  updateNavVisibility();

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
  } else if (state.page === "dashboard") {
    renderDashboardPage();
  } else if (state.page === "admin") {
    renderAdminPage();
  }

  updateDocumentTitle();
}

function renderSharedStats() {
  const openAuctions = getPublicOpenAuctions();
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
  const creatorEmailField = byId("createCreatorEmail");
  const creatorPhoneField = byId("createCreatorPhone");
  const visibilityField = byId("createVisibility");

  if (creatorEmailField && !creatorEmailField.value) {
    creatorEmailField.value = getPreferredCreatorEmail();
  }

  if (creatorPhoneField && !creatorPhoneField.value) {
    creatorPhoneField.value = getPreferredCreatorPhone();
  }

  if (visibilityField && !visibilityField.value) {
    visibilityField.value = localStorage.getItem("apex-reverse-auctions.room-visibility.v1") || "public";
  }

  renderCreatePhotoPreview();
}

function renderJoinPage() {
  applyPreferredNameDefaults();
}

function renderAuctionsPage() {
  refreshAuctionsFromStorage();

  const search = byId("auctions-search");
  const status = byId("auctions-status");

  if (search && search.value !== state.filters.query) {
    search.value = state.filters.query;
  }
  if (status && status.value !== state.filters.status) {
    status.value = state.filters.status;
  }

  const query = state.filters.query.trim().toLowerCase();
  const filtered = getPublicAuctions().filter((auction) => {
    const matchesStatus = state.filters.status === "all" ? true : auction.status === state.filters.status;
    const haystack = [auction.title, auction.buyer, auction.category, auction.code].join(" ").toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesStatus && matchesQuery;
  });

  renderAuctionList("auctionsList", filtered, { compact: false, emptyKey: "auctions.noResults" });
}

function renderAdminPage() {
  refreshAuctionsFromStorage();

  const signedIn = Boolean(state.adminEmail);
  const approved = isAdminSignedIn();
  const gate = byId("adminGate");
  const actionRow = byId("adminActionRow");
  const signOutButton = byId("adminSignOut");
  const statusNode = byId("adminStatus");
  const hint = byId("adminAccessHint");
  const googleButton = byId("adminGoogleButton");

  if (gate) {
    gate.hidden = approved;
  }
  if (actionRow) {
    actionRow.hidden = !approved;
  }
  if (signOutButton) {
    signOutButton.hidden = !signedIn;
  }
  if (statusNode) {
    if (approved) {
      statusNode.textContent = t("admin.statusSignedIn", { email: state.adminEmail });
    } else if (signedIn) {
      statusNode.textContent = t("admin.statusPending", { email: state.adminEmail });
    } else {
      statusNode.textContent = t("admin.statusLocked");
    }
  }
  if (hint) {
    hint.textContent = state.adminEmails.length ? t("admin.configHint") : t("admin.noAdminsConfigured");
  }
  if (googleButton && !approved) {
    if (!signedIn) {
      renderFirebaseAuthButton("adminGoogleButton", "admin.googleHint");
    } else {
      googleButton.innerHTML = `<p class="helper">${escapeHtml(t("admin.statusPending", { email: state.adminEmail }))}</p>`;
    }
  }

  setText("adminAllowedCount", String(state.adminEmails.length));
  setText("adminTotalRooms", String(state.auctions.length));
  setText("adminOpenRooms", String(getOpenAuctions().length));
  setText("adminClosedRooms", String(state.auctions.length - getOpenAuctions().length));
  setText("adminTotalBids", String(state.auctions.reduce((total, auction) => total + auction.bids.length, 0)));

  const search = byId("admin-search");
  const status = byId("admin-status");
  if (search && search.value !== state.adminFilters.query) {
    search.value = state.adminFilters.query;
  }
  if (status && status.value !== state.adminFilters.status) {
    status.value = state.adminFilters.status;
  }

  const query = state.adminFilters.query.trim().toLowerCase();
  const filtered = state.auctions.filter((auction) => {
    const matchesStatus = state.adminFilters.status === "all" ? true : auction.status === state.adminFilters.status;
    const haystack = [auction.title, auction.buyer, auction.category, auction.code, auction.creatorEmail].join(" ").toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesStatus && matchesQuery;
  });

  if (!approved) {
    renderAdminAuctionList(filtered, { readOnly: true, gateMessage: t("admin.gateSubtitle") });
    return;
  }

  renderAdminAuctionList(filtered);
}

function renderAdminAuctionList(auctions, options = {}) {
  const container = byId("adminAuctionList");
  if (!container) {
    return;
  }

  if (!state.auctions.length) {
    container.innerHTML = `<div class="empty-list">${escapeHtml(t("admin.noRoomsStored"))}</div>`;
    return;
  }

  if (!auctions.length) {
    const openCount = getOpenAuctions().length;
    const hiddenOpenHint = openCount && state.adminFilters.status === "closed"
      ? `<p class="helper">${escapeHtml(t("admin.openRoomsHidden", { count: openCount }))}</p>`
      : "";
    const emptyMessage = state.adminFilters.query || state.adminFilters.status !== "all"
      ? t("admin.noRoomsFiltered")
      : t("admin.noRooms");

    container.innerHTML = `<div class="empty-list">${escapeHtml(emptyMessage)}${hiddenOpenHint}</div>`;
    return;
  }

  const gateBanner = options.readOnly && options.gateMessage
    ? `<div class="empty-list">${escapeHtml(options.gateMessage)}</div>`
    : "";

  container.innerHTML = gateBanner + auctions.map((auction) => renderAuctionCard(auction, {
    compact: false,
    admin: !options.readOnly,
  })).join("");
}

function renderDashboardPage() {
  const signedIn = Boolean(state.profile.google?.email);
  const gate = byId("dashboardGate");
  const shell = byId("dashboardShell");
  const signOutButton = byId("dashboardSignOut");
  const emailNode = byId("dashboardEmailValue");
  const nameNode = byId("dashboardNameValue");
  const displayNameField = byId("dashboardDisplayName");
  const joinedCountNode = byId("dashboardJoinedCount");
  const activeCountNode = byId("dashboardActiveCount");
  const closedCountNode = byId("dashboardClosedCount");
  const lastJoinedNode = byId("dashboardLastJoined");
  const googleButton = byId("dashboardGoogleButton");
  const createdList = byId("dashboardCreatedList");

  if (gate) {
    gate.hidden = signedIn;
  }
  if (shell) {
    shell.hidden = !signedIn;
  }
  if (signOutButton) {
    signOutButton.hidden = !signedIn;
  }

  if (!signedIn) {
    if (googleButton) {
      renderFirebaseAuthButton("dashboardGoogleButton", "dashboard.gateHint");
    }
    return;
  }

  const googleUser = state.profile.google;
  if (emailNode) {
    emailNode.textContent = googleUser?.email || state.adminEmail || "";
  }
  if (nameNode) {
    nameNode.textContent = state.profile.displayName || googleUser?.name || "";
  }
  if (displayNameField) {
    if (!displayNameField.value) {
      displayNameField.value = getPreferredDisplayName();
    }
  }

  const joinedAuctions = getDashboardJoinedAuctions();
  const openJoined = joinedAuctions.filter((auction) => auction.status === "open").length;
  const closedJoined = Math.max(0, joinedAuctions.length - openJoined);
  const lastJoined = state.joinedAuctions.length ? [...state.joinedAuctions].sort((left, right) => right.lastJoinedAt - left.lastJoinedAt)[0] : null;

  setText("dashboardJoinedCount", String(joinedAuctions.length));
  setText("dashboardActiveCount", String(openJoined));
  setText("dashboardClosedCount", String(closedJoined));
  setText("dashboardLastJoined", lastJoined ? formatDateTime(lastJoined.lastJoinedAt) : t("common.noneYet"));

  renderAuctionList("dashboardJoinedList", joinedAuctions, { compact: true, emptyKey: "dashboard.joinedEmpty" });
  if (createdList) {
    renderAuctionList("dashboardCreatedList", getDashboardCreatedAuctions(), { compact: true, emptyKey: "dashboard.createdEmpty", creatorView: true });
  }
  applyPreferredNameDefaults();
}

function renderRoomPage() {
  const auction = resolveActiveAuction();
  const emptyState = byId("roomEmpty");
  const roomShell = byId("roomShell");
  const lookupCode = byId("roomLookupCode");
  const bidderField = byId("roomBidBidder");
  const participantsNode = byId("roomParticipants");
  const roomMeta = byId("roomMeta");

  if (!auction) {
    if (emptyState) emptyState.hidden = false;
    if (roomShell) roomShell.hidden = true;
    renderAuctionList("roomEmptyOpenList", getPublicOpenAuctions().slice(0, 4), { compact: true, emptyKey: "room.emptyBody" });
    renderAuctionList("roomActiveOpenList", [], { compact: true, emptyKey: "room.emptyBody" });
    setText("roomTitle", t("room.emptyTitle"));
    setText("roomLede", t("room.emptyBody"));
    setText("roomMeta", "");
    setText("roomCode", "—");
    setText("roomCeiling", "—");
    setText("roomCurrent", "—");
    setText("roomStep", "—");
    setText("roomParticipants", "0");
    const scheduleNode = byId("roomSchedule");
    if (scheduleNode) {
      scheduleNode.textContent = "";
    }
    const statusNode = byId("roomStatus");
    if (statusNode) {
      statusNode.textContent = t("common.statusClosed");
      statusNode.classList.remove("open");
      statusNode.classList.add("closed");
    }
    const notes = byId("roomNotes");
    if (notes) {
      notes.textContent = t("room.noNotes");
    }
    renderRoomPhotos([]);
    renderRoomCreatorPanel(null);
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
  if (roomMeta) {
    const creatorEmail = auction.creatorEmail || t("common.noneYet");
    const creatorPhone = auction.creatorPhone ? ` · ${t("room.createdByPhone", { phone: auction.creatorPhone })}` : "";
    const accessMode = auction.visibility === "code-only" ? t("room.visibilityCodeOnly") : t("room.visibilityPublic");
    roomMeta.textContent = `${t("room.createdBy", { email: creatorEmail })}${creatorPhone} · ${accessMode}`;
  }
  const scheduleNode = byId("roomSchedule");
  if (scheduleNode) {
    if (auction.status === "open") {
      scheduleNode.textContent = t("room.schedule", {
        interval: formatDropInterval(getDropIntervalMinutes(auction)),
        amount: formatMoney(auction.minimumStep),
        close: formatTimeRemaining(auction.endAt),
      });
    } else {
      scheduleNode.textContent = t("room.scheduleClosed");
    }
  }

  const statusNode = byId("roomStatus");
  if (statusNode) {
    statusNode.textContent = auction.status === "open" ? t("common.statusOpen") : t("common.statusClosed");
    statusNode.classList.toggle("open", auction.status === "open");
    statusNode.classList.toggle("closed", auction.status !== "open");
  }

  setText("roomCode", auction.code);
  setText("roomCeiling", formatMoney(auction.ceiling));
  setText("roomCurrent", formatMoney(getCurrentOffer(auction)));
  setText("roomStep", formatMoney(auction.minimumStep));
  if (participantsNode) {
    participantsNode.textContent = String(getParticipantCount(auction));
  }
  setText("roomNotes", auction.notes || t("room.noNotes"));
  renderRoomPhotos(auction.photos || []);

  if (bidderField && !bidderField.value) {
    bidderField.value = getPreferredDisplayName();
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
  const otherRooms = getPublicOpenAuctions().filter((entry) => entry.code !== auction.code).slice(0, 4);
  renderAuctionList("roomActiveOpenList", otherRooms, { compact: true, emptyKey: "common.noResults" });
  renderRoomCreatorPanel(auction);
  applyPreferredNameDefaults();
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
  const showCreatorInfo = Boolean(options.creatorView || options.showCreatorInfo);
  const accessBadge = showCreatorInfo || auction.visibility === "code-only"
    ? `<span class="badge ${auction.visibility === "code-only" ? "code-only" : "public"}">${escapeHtml(auction.visibility === "code-only" ? t("room.visibilityCodeOnly") : t("room.visibilityPublic"))}</span>`
    : "";
  const creatorDetails = [];
  if (showCreatorInfo && auction.creatorEmail) {
    creatorDetails.push(escapeHtml(auction.creatorEmail));
  }
  if (showCreatorInfo && auction.creatorPhone) {
    creatorDetails.push(escapeHtml(auction.creatorPhone));
  }
  const creatorLine = creatorDetails.length ? `<p>${creatorDetails.join(" · ")}</p>` : "";

  return `
    <article class="auction-card ${compactClass}" data-code="${escapeHtml(auction.code)}">
      <div class="card-head">
        <div>
          <span class="badge ${auction.status === "open" ? "open" : "closed"}">${auction.status === "open" ? t("common.statusOpen") : t("common.statusClosed")}</span>
          ${accessBadge}
          <h3>${escapeHtml(auction.title)}</h3>
          <p>${escapeHtml(auction.buyer)} · ${escapeHtml(auction.category)}${creatorLine ? ` · ${creatorDetails.join(" · ")}` : ""}</p>
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
        ${isAdminCard && auction.status === "open" ? `<button class="button button-dark button-small" type="button" data-action="admin-close-auction" data-code="${escapeHtml(auction.code)}">${escapeHtml(t("admin.closeRoom"))}</button>` : ""}
        ${isAdminCard && auction.status === "closed" ? `<button class="button button-light button-small" type="button" data-action="admin-reopen-auction" data-code="${escapeHtml(auction.code)}">${escapeHtml(t("admin.reopenRoom"))}</button>` : ""}
        ${isAdminCard ? `<button class="button button-ghost button-small" type="button" data-action="admin-delete-auction" data-code="${escapeHtml(auction.code)}">${escapeHtml(t("admin.deleteAuction"))}</button>` : ""}
      </div>
    </article>
  `;
}

async function handleCreateSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const title = String(formData.get("title") || "").trim();
  const buyer = String(formData.get("buyer") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const creatorEmail = normalizeEmail(String(formData.get("creatorEmail") || getPreferredCreatorEmail() || "").trim());
  const creatorPhone = normalizePhoneNumber(String(formData.get("creatorPhone") || getPreferredCreatorPhone() || "").trim());
  const visibility = String(formData.get("visibility") || "public").trim() === "code-only" ? "code-only" : "public";
  const ceiling = Number(formData.get("ceiling"));
  const dropAmount = Number(formData.get("dropAmount"));
  const dropDays = Math.max(0, Math.floor(toNumber(formData.get("dropDays"), 0)));
  const dropHours = Math.max(0, Math.floor(toNumber(formData.get("dropHours"), 0)));
  const dropMinutes = Math.max(0, Math.floor(toNumber(formData.get("dropMinutes"), 0)));
  const dropIntervalMinutes = (dropDays * 1440) + (dropHours * 60) + dropMinutes;
  const durationMinutes = Number(formData.get("duration"));
  const notes = String(formData.get("notes") || "").trim();
  const photos = await collectCreatePhotos(byId("createPhotos")?.files);

  if (!title || !buyer || !category) {
    setToast(t("toast.formIncomplete"));
    return;
  }

  if (!creatorEmail || !creatorEmail.includes("@")) {
    setToast(t("toast.invalidEmail"));
    return;
  }

  if (!creatorPhone) {
    setToast(t("toast.phoneRequired"));
    return;
  }

  if (!Number.isFinite(ceiling) || ceiling <= 0 || !Number.isFinite(dropAmount) || dropAmount <= 0 || !Number.isFinite(durationMinutes) || durationMinutes < 15) {
    setToast(t("toast.amountRequired"));
    return;
  }

  if (dropIntervalMinutes <= 0) {
    setToast(t("toast.dropIntervalRequired"));
    return;
  }

  const createdAt = Date.now();
  const auction = normalizeAuction({
    id: makeId(),
    code: generateCode(),
    title,
    buyer,
    category,
    creatorEmail,
    creatorPhone,
    visibility,
    ceiling,
    minimumStep: dropAmount,
    dropIntervalMinutes,
    durationMinutes,
    createdAt,
    endAt: createdAt + durationMinutes * 60000,
    notes,
    photos,
    bids: [],
    status: "open",
  });

  state.auctions.unshift(auction);
  state.activeCode = auction.code;
  localStorage.setItem(STORAGE_KEYS.activeCode, auction.code);
  localStorage.setItem(STORAGE_KEYS.creatorEmail, creatorEmail);
  localStorage.setItem(STORAGE_KEYS.creatorPhone, creatorPhone);
  localStorage.setItem("apex-reverse-auctions.room-visibility.v1", visibility);
  state.profile.phoneNumber = creatorPhone;
  saveProfile({ displayName: state.profile.displayName, phoneNumber: creatorPhone, google: state.profile.google });
  saveAuctions();
  form.reset();
  createPhotoPreviews = [];
  renderCreatePhotoPreview();
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

function closeAuctionNow(auction) {
  auction.status = "closed";
  auction.closedAt = Date.now();
  auction.endAt = Math.min(Number(auction.endAt) || Date.now(), Date.now());
}

function reopenAuctionNow(auction) {
  auction.status = "open";
  auction.closedAt = 0;
  auction.endAt = Date.now() + Math.max(15, Number(auction.durationMinutes) || 60) * 60000;
}

function handleAdminCloseAllOpen() {
  if (!isAdminSignedIn()) {
    setToast(t("toast.adminDenied"));
    return;
  }

  const openAuctions = getOpenAuctions();
  if (!openAuctions.length) {
    setToast(t("admin.noRooms"));
    return;
  }

  if (!window.confirm(t("admin.confirmCloseAllOpen", { count: openAuctions.length }))) {
    return;
  }

  openAuctions.forEach(closeAuctionNow);
  saveAuctions();
  renderCurrentPage();
  setToast(t("admin.allClosed"));
}

function handleAdminCloseAuction(rawCode) {
  if (!isAdminSignedIn()) {
    setToast(t("toast.adminDenied"));
    return;
  }

  const auction = findAuctionByCode(rawCode);
  if (!auction || auction.status !== "open") {
    return;
  }

  if (!window.confirm(t("admin.confirmClose", { code: auction.code }))) {
    return;
  }

  closeAuctionNow(auction);
  saveAuctions();
  renderCurrentPage();
  setToast(t("admin.closed", { code: auction.code }));
}

function handleAdminReopenAuction(rawCode) {
  if (!isAdminSignedIn()) {
    setToast(t("toast.adminDenied"));
    return;
  }

  const auction = findAuctionByCode(rawCode);
  if (!auction || auction.status !== "closed") {
    return;
  }

  if (!window.confirm(t("admin.confirmReopen", { code: auction.code }))) {
    return;
  }

  reopenAuctionNow(auction);
  saveAuctions();
  renderCurrentPage();
  setToast(t("admin.reopened", { code: auction.code }));
}

function handleAdminToggleAuction(rawCode) {
  const auction = findAuctionByCode(rawCode);
  if (!auction) {
    return;
  }

  if (auction.status === "open") {
    handleAdminCloseAuction(rawCode);
    return;
  }

  handleAdminReopenAuction(rawCode);
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

async function handleAuctionCardAction(event) {
  const actionButton = event.target.closest("button[data-action]");
  if (!actionButton) {
    return;
  }

  const { action, code } = actionButton.dataset;
  if (!action || !code) {
    return;
  }

  if (action === "copy-code") {
    await copyText(code);
    setToast(t("toast.codeCopied"));
    return;
  }

  if (action === "open-room") {
    openRoomByCode(code);
    return;
  }

  if (action === "close-room") {
    handleCloseRoom(code);
    return;
  }

  if (action === "award-bid") {
    handleAwardBid(code, actionButton.dataset.bidId || "");
    return;
  }

  if (action === "admin-close-auction") {
    handleAdminCloseAuction(code);
    return;
  }

  if (action === "admin-reopen-auction") {
    handleAdminReopenAuction(code);
    return;
  }

  if (action === "admin-toggle-status") {
    handleAdminToggleAuction(code);
    return;
  }

  if (action === "admin-delete-auction") {
    handleAdminDeleteAuction(code);
  }
}

async function handleCreatePhotosChange(event) {
  const files = event.target.files;
  createPhotoPreviews = await collectCreatePhotos(files);
  createPhotoPreviewToken += 1;
  renderCreatePhotoPreview();
}

async function collectCreatePhotos(fileList) {
  const files = Array.from(fileList || []).filter((file) => file && typeof file.type === "string" && file.type.startsWith("image/"));
  const photos = [];

  for (const file of files.slice(0, 4)) {
    try {
      const src = await shrinkImageFile(file);
      photos.push({ src, name: file.name || "Photo" });
    } catch {
      // Skip files that cannot be processed.
    }
  }

  return photos;
}

async function shrinkImageFile(file) {
  const dataUrl = await readFileAsDataUrl(file);
  const image = await loadImageFromDataUrl(dataUrl);
  const maxSize = 1280;
  const scale = Math.min(1, maxSize / Math.max(image.width || 1, image.height || 1));

  if (scale >= 1) {
    return dataUrl;
  }

  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const context = canvas.getContext("2d");
  if (!context) {
    return dataUrl;
  }

  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  try {
    return canvas.toDataURL("image/jpeg", 0.84);
  } catch {
    return dataUrl;
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Unable to read file"));
    reader.readAsDataURL(file);
  });
}

function loadImageFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Unable to load image"));
    image.src = dataUrl;
  });
}

function renderCreatePhotoPreview() {
  const preview = byId("createPhotoPreview");
  if (!preview) {
    return;
  }

  if (!createPhotoPreviews.length) {
    preview.innerHTML = `<p class="helper">${escapeHtml(t("create.photosPreviewEmpty"))}</p>`;
    return;
  }

  preview.innerHTML = createPhotoPreviews.map((photo, index) => {
    const label = photo.name || `${t("create.photoLabel")} ${index + 1}`;
    return `<figure class="photo-tile">
      <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(label)}">
      <figcaption>${escapeHtml(label)}</figcaption>
    </figure>`;
  }).join("");
}

function renderRoomPhotos(photos) {
  const panel = byId("roomPhotosPanel");
  const container = byId("roomPhotos");
  if (!panel || !container) {
    return;
  }

  const list = Array.isArray(photos) ? photos.filter((photo) => photo && typeof photo.src === "string") : [];
  if (!list.length) {
    panel.hidden = true;
    container.innerHTML = "";
    return;
  }

  panel.hidden = false;
  container.innerHTML = list.map((photo, index) => {
    const label = photo.name || `${t("room.photoLabel")} ${index + 1}`;
    return `<figure class="photo-tile">
      <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(label)}">
      <figcaption>${escapeHtml(label)}</figcaption>
    </figure>`;
  }).join("");
}

function renderRoomCreatorPanel(auction) {
  const panel = byId("roomCreatorPanel");
  if (!panel) {
    return;
  }

  if (!auction || !isAuctionManager(auction)) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }

  panel.hidden = false;
  const winningBid = getWinningBid(auction);

  if (auction.status === "open") {
    panel.innerHTML = `
      <div class="section-head compact">
        <div>
          <p class="eyebrow">${escapeHtml(t("room.creatorToolsTitle"))}</p>
          <h2>${escapeHtml(t("room.creatorOpenTitle"))}</h2>
        </div>
      </div>
      <p class="helper">${escapeHtml(t("room.creatorOpenHint"))}</p>
      <div class="form-actions">
        <button class="button button-dark" type="button" data-action="close-room" data-code="${escapeHtml(auction.code)}">${escapeHtml(t("room.closeRoom"))}</button>
      </div>
    `;
    return;
  }

  const bids = [...auction.bids].sort((left, right) => left.amount - right.amount || left.time - right.time);
  if (!bids.length) {
    panel.innerHTML = `
      <div class="section-head compact">
        <div>
          <p class="eyebrow">${escapeHtml(t("room.creatorToolsTitle"))}</p>
          <h2>${escapeHtml(t("room.creatorWinnerTitle"))}</h2>
        </div>
      </div>
      <p class="helper">${escapeHtml(t("room.creatorNoBids"))}</p>
    `;
    return;
  }

  panel.innerHTML = `
    <div class="section-head compact">
      <div>
        <p class="eyebrow">${escapeHtml(t("room.creatorToolsTitle"))}</p>
        <h2>${escapeHtml(t("room.creatorWinnerTitle"))}</h2>
      </div>
    </div>
    <p class="helper">${escapeHtml(winningBid ? t("room.creatorWinnerSelected", { bidder: winningBid.bidder, amount: formatMoney(winningBid.amount) }) : t("room.creatorWinnerHint"))}</p>
    <div id="roomCreatorActions" class="winner-choice-grid">
      ${bids.map((bid) => {
        const selected = winningBid && winningBid.id === bid.id;
        return `<button class="winner-choice ${selected ? "selected" : ""}" type="button" data-action="award-bid" data-code="${escapeHtml(auction.code)}" data-bid-id="${escapeHtml(bid.id)}">
          <strong>${escapeHtml(bid.bidder)}</strong>
          <span>${escapeHtml(formatMoney(bid.amount))}</span>
          <small>${escapeHtml(bid.note || t("common.noneYet"))}</small>
          ${selected ? `<em>${escapeHtml(t("room.creatorWinnerSelectedTag"))}</em>` : ""}
        </button>`;
      }).join("")}
    </div>
  `;
}

function handleCloseRoom(rawCode) {
  const auction = findAuctionByCode(rawCode);
  if (!auction || !isAuctionManager(auction)) {
    setToast(t("toast.adminDenied"));
    return;
  }

  if (!window.confirm(t("room.confirmCloseRoom", { code: auction.code }))) {
    return;
  }

  closeAuctionNow(auction);
  saveAuctions();
  renderCurrentPage();
  setToast(t("room.closedNow"));
}

function handleAwardBid(rawCode, bidId) {
  const auction = findAuctionByCode(rawCode);
  if (!auction || !isAuctionManager(auction)) {
    setToast(t("toast.adminDenied"));
    return;
  }

  const winningBid = auction.bids.find((bid) => bid.id === bidId);
  if (!winningBid) {
    return;
  }

  if (!window.confirm(t("room.confirmAwardBid", { bidder: winningBid.bidder, amount: formatMoney(winningBid.amount) }))) {
    return;
  }

  auction.status = "closed";
  auction.closedAt = auction.closedAt || Date.now();
  auction.winnerBidId = winningBid.id;
  auction.winnerSelectedAt = Date.now();
  auction.winnerSelectedBy = getSignedInEmail();
  saveAuctions();
  renderCurrentPage();
  setToast(t("room.winnerSelected", { bidder: winningBid.bidder, amount: formatMoney(winningBid.amount) }));
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
  if (flash === "joined" || flash === "created") {
    recordJoinedAuction(auction);
  }
  if (flash === "created") {
    setToast(t("toast.roomCreated", { code: auction.code }));
  } else if (flash === "joined") {
    setToast(t("toast.roomEntered", { code: auction.code }));
  }

  if (state.page !== "room") {
    const params = new URLSearchParams();
    params.set("code", auction.code);
    if (flash) {
      params.set("flash", flash);
    }
    window.location.href = `room.html?${params.toString()}`;
    return;
  }

  const params = new URLSearchParams(window.location.search);
  params.set("code", auction.code);
  if (flash) {
    params.set("flash", flash);
  } else {
    params.delete("flash");
  }
  window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
  renderCurrentPage();
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

  const candidate = getPublicOpenAuctions()[0] || getPublicAuctions()[0] || null;
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
  return getPublicAuctions()
    .sort((left, right) => {
      if (left.status !== right.status) {
        return left.status === "open" ? -1 : 1;
      }
      return left.endAt - right.endAt;
    })
    .slice(0, limit);
}

function getDropIntervalMinutes(auction) {
  return Math.max(0, toNumber(auction.dropIntervalMinutes ?? auction.dropEveryMinutes ?? 0, 0));
}

function getAutomaticOffer(auction, atTime = Date.now()) {
  const ceiling = Math.max(1, toNumber(auction.ceiling, 0));
  const intervalMinutes = getDropIntervalMinutes(auction);
  const dropAmount = Math.max(1, toNumber(auction.minimumStep, 1));

  if (!intervalMinutes) {
    return ceiling;
  }

  const createdAt = Number(auction.createdAt) || Date.now();
  const endAt = Number(auction.endAt) || createdAt + Math.max(15, Number(auction.durationMinutes) || 60) * 60000;
  const referenceTime = Math.min(atTime, endAt);
  const elapsedMinutes = Math.max(0, Math.floor((referenceTime - createdAt) / 60000));
  const drops = Math.floor(elapsedMinutes / intervalMinutes);

  return Math.max(1, ceiling - drops * dropAmount);
}

function formatDropInterval(totalMinutes) {
  const minutesTotal = Math.max(0, Math.floor(Number(totalMinutes) || 0));

  if (!minutesTotal) {
    return "0m";
  }

  const days = Math.floor(minutesTotal / 1440);
  const hours = Math.floor((minutesTotal % 1440) / 60);
  const minutes = minutesTotal % 60;
  const parts = [];

  if (days) {
    parts.push(`${days}d`);
  }
  if (hours) {
    parts.push(`${hours}h`);
  }
  if (minutes || !parts.length) {
    parts.push(`${minutes}m`);
  }

  return parts.join(" ");
}

function getCurrentOffer(auction) {
  const autoOffer = getAutomaticOffer(auction);
  const lowestBid = auction.bids.length ? Math.min(...auction.bids.map((bid) => bid.amount)) : Infinity;

  return Math.min(autoOffer, lowestBid);
}

function getNextAllowedOffer(auction) {
  return Math.max(1, getCurrentOffer(auction) - Math.max(1, toNumber(auction.minimumStep, 1)));
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
  const brandName = t("brand.name");

  if (state.page === "home") {
    document.title = title === brandName ? brandName : `${title} · ${brandName}`;
    return;
  }

  if (state.page === "room") {
    const auction = resolveActiveAuction();
    document.title = auction ? `${auction.title} · ${title} · ${brandName}` : `${title} · ${brandName}`;
    return;
  }

  document.title = `${title} · ${brandName}`;
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

function loadProfile() {
  const stored = localStorage.getItem(STORAGE_KEYS.profile);
  const legacyBidderName = localStorage.getItem(STORAGE_KEYS.bidder) || "";

  if (!stored) {
    return {
      displayName: legacyBidderName,
      phoneNumber: "",
      google: null,
    };
  }

  try {
    const parsed = JSON.parse(stored);
    return {
      displayName: typeof parsed.displayName === "string" ? parsed.displayName : typeof parsed.bidderName === "string" ? parsed.bidderName : legacyBidderName,
      phoneNumber: typeof parsed.phoneNumber === "string" ? parsed.phoneNumber : typeof parsed.phone === "string" ? parsed.phone : "",
      google: null,
    };
  } catch {
    return {
      displayName: legacyBidderName,
      phoneNumber: "",
      google: null,
    };
  }
}

function saveProfile(nextProfile = {}) {
  state.profile = {
    displayName: typeof nextProfile.displayName === "string" ? nextProfile.displayName.trim() : state.profile.displayName || "",
    phoneNumber: typeof nextProfile.phoneNumber === "string" ? nextProfile.phoneNumber.trim() : state.profile.phoneNumber || "",
    google: nextProfile.google === null
      ? null
      : nextProfile.google && typeof nextProfile.google === "object"
        ? {
            email: normalizeEmail(nextProfile.google.email),
            name: typeof nextProfile.google.name === "string" ? nextProfile.google.name : "",
            picture: typeof nextProfile.google.picture === "string" ? nextProfile.google.picture : "",
            sub: typeof nextProfile.google.sub === "string" ? nextProfile.google.sub : "",
          }
        : state.profile.google || null,
  };

  localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(state.profile));
}

function loadJoinedAuctions() {
  const stored = localStorage.getItem(STORAGE_KEYS.joinedAuctions);

  if (!stored) {
    return [];
  }

  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.map(normalizeJoinedAuction).filter(Boolean);
  } catch {
    return [];
  }
}

function saveJoinedAuctions() {
  localStorage.setItem(STORAGE_KEYS.joinedAuctions, JSON.stringify(state.joinedAuctions));
}

function normalizeJoinedAuction(entry) {
  if (!entry || typeof entry !== "object") {
    return null;
  }

  const code = normalizeCode(entry.code);
  if (!code) {
    return null;
  }

  return {
    code,
    title: typeof entry.title === "string" ? entry.title : "",
    buyer: typeof entry.buyer === "string" ? entry.buyer : "",
    category: typeof entry.category === "string" ? entry.category : "",
    currentOffer: toNumber(entry.currentOffer, 0),
    minimumStep: toNumber(entry.minimumStep, 0),
    ceiling: toNumber(entry.ceiling, 0),
    status: entry.status === "closed" ? "closed" : "open",
    joinedAt: toNumber(entry.joinedAt, Date.now()),
    lastJoinedAt: toNumber(entry.lastJoinedAt, toNumber(entry.joinedAt, Date.now())),
  };
}

function recordJoinedAuction(auction) {
  if (!auction) {
    return;
  }

  const now = Date.now();
  const entry = {
    code: auction.code,
    title: auction.title,
    buyer: auction.buyer,
    category: auction.category,
    currentOffer: getCurrentOffer(auction),
    minimumStep: auction.minimumStep,
    ceiling: auction.ceiling,
    status: auction.status,
    joinedAt: now,
    lastJoinedAt: now,
  };

  const existingIndex = state.joinedAuctions.findIndex((item) => item.code === entry.code);
  if (existingIndex >= 0) {
    const existing = state.joinedAuctions[existingIndex];
    state.joinedAuctions[existingIndex] = {
      ...existing,
      ...entry,
      joinedAt: existing.joinedAt || entry.joinedAt,
      lastJoinedAt: now,
    };
  } else {
    state.joinedAuctions.unshift(entry);
  }

  saveJoinedAuctions();
}

function getDashboardJoinedAuctions() {
  return [...state.joinedAuctions]
    .sort((left, right) => right.lastJoinedAt - left.lastJoinedAt)
    .map((entry) => {
      const liveAuction = findAuctionByCode(entry.code);
      if (liveAuction) {
        return liveAuction;
      }

      const currentOffer = entry.currentOffer || entry.ceiling || 0;
      return normalizeAuction({
        id: entry.code,
        code: entry.code,
        title: entry.title || entry.code,
        buyer: entry.buyer || t("common.noneYet"),
        category: entry.category || t("category.other"),
        ceiling: entry.ceiling || currentOffer,
        minimumStep: entry.minimumStep || 1,
        durationMinutes: 60,
        createdAt: entry.joinedAt,
        endAt: entry.joinedAt,
        notes: "",
        bids: currentOffer
          ? [
              {
                id: `${entry.code}-snapshot`,
                bidder: state.profile.displayName || state.profile.google?.name || t("common.noneYet"),
                amount: currentOffer,
                note: "",
                time: entry.lastJoinedAt,
              },
            ]
          : [],
        status: "closed",
      });
    });
}

function getPreferredDisplayName() {
  return state.profile.displayName || state.profile.google?.name || state.lastBidder || "";
}

function applyPreferredNameDefaults() {
  const preferredName = getPreferredDisplayName();
  const joinName = byId("joinName");
  if (preferredName && joinName && !joinName.value) {
    joinName.value = preferredName;
  }

  const roomBidBidder = byId("roomBidBidder");
  if (preferredName && roomBidBidder && !roomBidBidder.value) {
    roomBidBidder.value = preferredName;
  }

  const displayName = byId("dashboardDisplayName");
  if (preferredName && displayName && !displayName.value) {
    displayName.value = preferredName;
  }

  const phoneNumber = byId("dashboardPhoneNumber");
  if (phoneNumber && !phoneNumber.value) {
    phoneNumber.value = state.profile.phoneNumber || "";
  }
}

function updateNavVisibility() {
  document.querySelectorAll('a[data-nav="admin"]').forEach((link) => {
    link.hidden = !isAdminSignedIn();
  });

  const homeAuthButton = byId("homeAuthButton");
  if (homeAuthButton) {
    const signedInEmail = normalizeEmail(state.firebaseUser?.email || "");
    const signedIn = Boolean(signedInEmail);

    homeAuthButton.dataset.i18n = signedIn ? "home.authSignedIn" : "home.authPrimary";
    homeAuthButton.textContent = t(homeAuthButton.dataset.i18n);
    homeAuthButton.setAttribute("aria-label", signedIn ? t("admin.statusSignedIn", { email: signedInEmail }) : t("home.authPrimary"));
    homeAuthButton.setAttribute("title", signedIn ? t("admin.statusSignedIn", { email: signedInEmail }) : t("home.authPrimary"));

    if (signedIn) {
      homeAuthButton.removeAttribute("aria-haspopup");
      homeAuthButton.removeAttribute("aria-controls");
      homeAuthButton.setAttribute("aria-expanded", "false");
    } else {
      homeAuthButton.setAttribute("aria-haspopup", "dialog");
      homeAuthButton.setAttribute("aria-controls", "homeAuthModal");
      homeAuthButton.setAttribute("aria-expanded", "false");
    }
  }
}

async function loadRuntimeEnv() {
  if (runtimeEnvPromise) {
    return runtimeEnvPromise;
  }

  runtimeEnvPromise = (async () => {
    let env = {};

    try {
      const response = await fetch(".env", { cache: "no-store" });
      if (response.ok) {
        env = parseEnvFile(await response.text());
      }
    } catch {
    }

    return { ...FALLBACK_RUNTIME_ENV, ...env };
  })();

  return runtimeEnvPromise;
}

function parseEnvFile(text) {
  const env = {};

  text.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      return;
    }

    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, equalsIndex).trim();
    if (!key) {
      return;
    }

    const value = trimmed.slice(equalsIndex + 1).split("#")[0].trim().replace(/^['"]|['"]$/g, "");
    env[key] = value;
  });

  return env;
}

function getEnvValue(env, keys) {
  for (const key of keys) {
    const value = env[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return "";
}

function parseEmailList(value) {
  const emails = new Set();

  String(value || "")
    .split(/[;,\s]+/)
    .forEach((email) => {
      const normalized = normalizeEmail(email);
      if (normalized) {
        emails.add(normalized);
      }
    });

  return [...emails];
}

async function loadAdminEmails() {
  if (Array.isArray(window.__ADMIN_EMAILS__)) {
    return [...new Set(window.__ADMIN_EMAILS__.map(normalizeEmail).filter(Boolean))];
  }

  const env = await loadRuntimeEnv();
  return parseEmailList(getEnvValue(env, ["ADMIN_EMAILS"]));
}

async function loadFirebaseConfig() {
  const env = await loadRuntimeEnv();
  const config = {
    apiKey: getEnvValue(env, ["FIREBASE_API_KEY", "NEXT_PUBLIC_FIREBASE_API_KEY"]),
    authDomain: getEnvValue(env, ["FIREBASE_AUTH_DOMAIN", "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"]),
    projectId: getEnvValue(env, ["FIREBASE_PROJECT_ID", "NEXT_PUBLIC_FIREBASE_PROJECT_ID"]),
    storageBucket: getEnvValue(env, ["FIREBASE_STORAGE_BUCKET", "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"]),
    messagingSenderId: getEnvValue(env, ["FIREBASE_MESSAGING_SENDER_ID", "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"]),
    appId: getEnvValue(env, ["FIREBASE_APP_ID", "NEXT_PUBLIC_FIREBASE_APP_ID"]),
  };

  if (!config.apiKey || !config.authDomain || !config.projectId || !config.appId) {
    return null;
  }

  return config;
}

function syncAdminSession() {
  state.adminEmail = normalizeEmail(state.adminEmail);

  if (!state.adminEmail) {
    localStorage.removeItem(STORAGE_KEYS.adminEmail);
  }
}

function isAdminSignedIn() {
  return Boolean(state.adminEmail) && state.adminEmails.includes(state.adminEmail);
}

function applyFirebaseUser(user) {
  const email = normalizeEmail(user?.email);
  const googleProfile = email
    ? {
        email,
        name: typeof user?.displayName === "string" ? user.displayName : "",
        picture: typeof user?.photoURL === "string" ? user.photoURL : "",
        sub: typeof user?.uid === "string" ? user.uid : "",
      }
    : null;

  state.firebaseUser = user || null;
  state.adminEmail = email;

  if (email) {
    localStorage.setItem(STORAGE_KEYS.adminEmail, email);
  } else {
    localStorage.removeItem(STORAGE_KEYS.adminEmail);
  }

  if (googleProfile) {
    state.profile.google = googleProfile;
    if (!state.profile.displayName) {
      state.profile.displayName = googleProfile.name || email.split("@")[0] || "";
    }

    saveProfile({ displayName: state.profile.displayName, phoneNumber: state.profile.phoneNumber, google: googleProfile });
    state.lastBidder = state.profile.displayName || state.lastBidder;
    if (state.lastBidder) {
      localStorage.setItem(STORAGE_KEYS.bidder, state.lastBidder);
    }
  } else if (state.profile.google) {
    state.profile.google = null;
    saveProfile({ displayName: state.profile.displayName, phoneNumber: state.profile.phoneNumber, google: null });
  }

  if (email && state.page === "home") {
    if (homeAuthRedirectPending) {
      redirectSignedInUser(email);
      return;
    }
    return;
  }

  updateNavVisibility();
  renderCurrentPage();
}

async function initializeFirebaseAuth() {
  state.firebaseConfigured = false;
  state.firebaseUser = null;

  if (!state.firebaseConfig || !window.firebase?.auth || !window.firebase?.initializeApp) {
    applyFirebaseUser(null);
    return;
  }

  if (!window.firebase.apps.length) {
    window.firebase.initializeApp(state.firebaseConfig);
  }

  firebaseAuthInstance = window.firebase.auth();

  try {
    await firebaseAuthInstance.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL);
  } catch {
    // Persistence failures are non-fatal for the site.
  }

  if (!firebaseAuthReadyPromise) {
    firebaseAuthReadyPromise = new Promise((resolve) => {
      firebaseAuthReadyResolve = resolve;
    });

    firebaseAuthInstance.onAuthStateChanged((user) => {
      applyFirebaseUser(user);
      if (!firebaseAuthReady) {
        firebaseAuthReady = true;
        if (firebaseAuthReadyResolve) {
          firebaseAuthReadyResolve();
          firebaseAuthReadyResolve = null;
        }
      }
    });
  }

  state.firebaseConfigured = true;

  if (firebaseAuthReadyPromise) {
    await firebaseAuthReadyPromise;
  }
}

function handleDashboardDisplayNameSubmit(event) {
  event.preventDefault();

  const displayName = valueOf("dashboardDisplayName");
  const phoneNumber = normalizePhoneNumber(valueOf("dashboardPhoneNumber"));
  if (!displayName) {
    setToast(t("toast.formIncomplete"));
    return;
  }

  if (!phoneNumber) {
    setToast(t("toast.phoneRequired"));
    return;
  }

  state.profile.displayName = displayName;
  state.profile.phoneNumber = phoneNumber;
  saveProfile({ displayName, phoneNumber, google: state.profile.google });
  state.lastBidder = displayName;
  localStorage.setItem(STORAGE_KEYS.bidder, displayName);
  applyPreferredNameDefaults();
  setToast(t("toast.profileSaved"));
  renderCurrentPage();
}

async function handleFirebaseSignIn() {
  if (!firebaseAuthInstance || !state.firebaseConfigured) {
    setToast(t("toast.googleUnavailable"));
    return;
  }

  const provider = new window.firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  homeAuthRedirectPending = true;
  homeAuthBusy = true;
  renderHomeAuthModal();
  let redirected = false;

  try {
    const result = await firebaseAuthInstance.signInWithPopup(provider);
    redirected = redirectSignedInUser(result?.user?.email);
  } catch {
    homeAuthRedirectPending = false;
    setToast(t("toast.googleSignInFailed"));
  } finally {
    homeAuthBusy = false;
    if (!redirected) {
      renderHomeAuthModal();
    }
  }
}

function openHomeAuthModal() {
  const modal = byId("homeAuthModal");
  const trigger = byId("homeAuthButton");
  if (!modal) {
    handleFirebaseSignIn();
    return;
  }

  homeAuthStep = "email";
  homeAuthEmail = "";
  homeAuthPassword = "";
  homeAuthErrorKey = "";
  homeAuthBusy = false;
  homeAuthModalLastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  modal.hidden = false;
  if (trigger) {
    trigger.setAttribute("aria-expanded", "true");
  }
  document.body.classList.add("auth-modal-open");
  if (state.page === "home") {
    document.body.classList.add("home-auth-locked");
  }
  renderHomeAuthModal();

  window.requestAnimationFrame(() => {
    const emailInput = byId("homeAuthEmail");
    const googleButton = byId("homeAuthGoogleButton");
    if (emailInput) {
      emailInput.focus();
    } else if (googleButton) {
      googleButton.focus();
    }
  });
}

function closeHomeAuthModal() {
  const modal = byId("homeAuthModal");
  const trigger = byId("homeAuthButton");
  if (!modal) {
    return;
  }

  modal.hidden = true;
  if (trigger) {
    trigger.setAttribute("aria-expanded", "false");
  }
  homeAuthStep = "email";
  homeAuthEmail = "";
  homeAuthPassword = "";
  homeAuthErrorKey = "";
  homeAuthBusy = false;
  homeAuthRedirectPending = false;
  document.body.classList.remove("auth-modal-open");
  document.body.classList.remove("home-auth-locked");

  if (homeAuthModalLastFocus && typeof homeAuthModalLastFocus.focus === "function") {
    homeAuthModalLastFocus.focus();
  }

  homeAuthModalLastFocus = null;
}

function renderHomeAuthModal() {
  const title = byId("homeAuthModalTitle");
  const hint = byId("homeAuthModalHint");
  const emailLabel = byId("homeAuthEmailLabel");
  const passwordLabel = byId("homeAuthPasswordLabel");
  const emailInput = byId("homeAuthEmail");
  const passwordField = byId("homeAuthPasswordField");
  const passwordInput = byId("homeAuthPassword");
  const primaryButton = byId("homeAuthPrimaryButton");
  const resetButton = byId("homeAuthResetButton");
  const dividerText = byId("homeAuthDividerText");
  const googleButton = byId("homeAuthGoogleButton");
  const googleLabel = byId("homeAuthGoogleButtonLabel");
  const backButton = byId("homeAuthBackButton");
  const errorNode = byId("homeAuthError");

  const passwordStep = homeAuthStep === "password";

  if (title) {
    title.textContent = passwordStep ? t("home.authPasswordTitle") : t("home.authModalTitle");
  }
  if (hint) {
    hint.hidden = !passwordStep;
    hint.textContent = passwordStep ? t("home.authPasswordHint") : "";
  }
  if (emailLabel) {
    emailLabel.textContent = t("home.authEmailLabel");
  }
  if (passwordLabel) {
    passwordLabel.textContent = t("home.authPasswordLabel");
  }
  if (emailInput) {
    emailInput.value = homeAuthEmail;
    emailInput.setAttribute("placeholder", t("home.authEmailPlaceholder"));
    emailInput.disabled = homeAuthBusy;
  }
  if (passwordField) {
    passwordField.hidden = !passwordStep;
  }
  if (passwordInput) {
    passwordInput.value = homeAuthPassword;
    passwordInput.setAttribute("placeholder", t("home.authPasswordPlaceholder"));
    passwordInput.disabled = homeAuthBusy;
  }
  if (primaryButton) {
    primaryButton.textContent = passwordStep ? t("home.authSignIn") : t("home.authNext");
    primaryButton.disabled = homeAuthBusy;
  }
  if (resetButton) {
    resetButton.textContent = t("home.authResetPassword");
    resetButton.disabled = homeAuthBusy;
  }
  if (dividerText) {
    dividerText.textContent = t("home.authDivider");
  }
  if (googleButton) {
    googleButton.disabled = homeAuthBusy || !state.firebaseConfigured || !firebaseAuthInstance;
    googleButton.title = !state.firebaseConfigured || !firebaseAuthInstance ? t("toast.authUnavailable") : "";
  }
  if (googleLabel) {
    googleLabel.textContent = t("auth.googleSignInButton");
  }
  if (backButton) {
    backButton.textContent = t("home.authUseAnotherEmail");
    backButton.hidden = !passwordStep;
    backButton.disabled = homeAuthBusy;
  }
  if (errorNode) {
    errorNode.textContent = homeAuthErrorKey ? t(homeAuthErrorKey) : "";
    errorNode.hidden = !homeAuthErrorKey;
  }
}

function handleHomeAuthBack() {
  if (homeAuthBusy) {
    return;
  }

  homeAuthStep = "email";
  homeAuthPassword = "";
  homeAuthErrorKey = "";
  renderHomeAuthModal();

  window.requestAnimationFrame(() => {
    byId("homeAuthEmail")?.focus();
  });
}

async function handleHomeAuthResetPassword() {
  if (homeAuthBusy) {
    return;
  }

  const emailInput = byId("homeAuthEmail");
  const email = normalizeEmail(emailInput?.value || homeAuthEmail);

  if (!email) {
    homeAuthErrorKey = "toast.emailRequired";
    renderHomeAuthModal();
    emailInput?.focus();
    return;
  }

  if (!firebaseAuthInstance || !state.firebaseConfigured) {
    setToast(t("toast.authUnavailable"));
    return;
  }

  homeAuthEmail = email;

  try {
    await firebaseAuthInstance.sendPasswordResetEmail(email);
    homeAuthErrorKey = "";
    renderHomeAuthModal();
    setToast(t("toast.passwordResetSent"));
  } catch {
    setToast(t("toast.passwordResetFailed"));
  }
}

async function handleHomeAuthSubmit(event) {
  event.preventDefault();

  if (homeAuthBusy) {
    return;
  }

  const emailInput = byId("homeAuthEmail");
  const passwordInput = byId("homeAuthPassword");
  const email = normalizeEmail(emailInput?.value || homeAuthEmail);

  if (!email) {
    homeAuthErrorKey = "toast.emailRequired";
    renderHomeAuthModal();
    emailInput?.focus();
    return;
  }

  if (!email.includes("@")) {
    homeAuthErrorKey = "toast.invalidEmail";
    renderHomeAuthModal();
    emailInput?.focus();
    return;
  }

  homeAuthEmail = email;

  if (homeAuthStep === "email") {
    if (!firebaseAuthInstance || !state.firebaseConfigured) {
      setToast(t("toast.authUnavailable"));
      return;
    }

    homeAuthStep = "password";
    homeAuthPassword = "";
    homeAuthErrorKey = "";
    renderHomeAuthModal();

    window.requestAnimationFrame(() => {
      byId("homeAuthPassword")?.focus();
    });
    return;
  }

  const password = String(passwordInput?.value || homeAuthPassword || "");
  if (!password) {
    homeAuthErrorKey = "toast.passwordRequired";
    renderHomeAuthModal();
    passwordInput?.focus();
    return;
  }

  if (!firebaseAuthInstance || !state.firebaseConfigured) {
    setToast(t("toast.authUnavailable"));
    return;
  }

  homeAuthBusy = true;
  homeAuthRedirectPending = true;
  homeAuthPassword = password;
  homeAuthErrorKey = "";
  renderHomeAuthModal();
  let redirected = false;

  try {
    const result = await firebaseAuthInstance.signInWithEmailAndPassword(email, password);
    redirected = redirectSignedInUser(result?.user?.email || email);
  } catch {
    homeAuthRedirectPending = false;
    homeAuthErrorKey = "toast.emailSignInFailed";
    homeAuthBusy = false;
    renderHomeAuthModal();
    passwordInput?.focus();
    return;
  }

  homeAuthBusy = false;
  if (!redirected) {
    renderHomeAuthModal();
  }
}

function redirectSignedInUser(email) {
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail || state.page !== "home") {
    return false;
  }

  homeAuthRedirectPending = false;
  window.location.href = state.adminEmails.includes(normalizedEmail) ? "admin.html" : "dashboard.html";
  return true;
}

async function handleFirebaseSignOut() {
  if (!firebaseAuthInstance || !state.firebaseConfigured) {
    applyFirebaseUser(null);
    setToast(t("toast.googleSignedOut"));
    return;
  }

  try {
    await firebaseAuthInstance.signOut();
    setToast(t("toast.googleSignedOut"));
  } catch {
    setToast(t("toast.googleSignOutFailed"));
  }
}

function renderFirebaseAuthButton(containerId, fallbackKey = "dashboard.gateHint") {
  const mount = byId(containerId);
  if (!mount) {
    return;
  }

  mount.innerHTML = "";

  if (!state.firebaseConfigured || !firebaseAuthInstance) {
    mount.innerHTML = `<p class="helper">${escapeHtml(t(fallbackKey))}</p>`;
    return;
  }

  if (state.firebaseUser?.email) {
    return;
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className = "button button-dark";
  button.textContent = t("auth.googleSignInButton");
  button.addEventListener("click", handleFirebaseSignIn);
  mount.appendChild(button);
}

function loadAuctions() {
  const merged = new Map();

  LEGACY_AUCTION_KEYS.forEach((key) => {
    readRawAuctions(key).forEach((item) => {
      const normalized = normalizeAuction(item);
      merged.set(normalizeCode(normalized.code), normalized);
    });
  });

  readRawAuctions(STORAGE_KEYS.auctions).forEach((item) => {
    const normalized = normalizeAuction(item);
    merged.set(normalizeCode(normalized.code), normalized);
  });

  const auctions = [...merged.values()];

  if (auctions.length) {
    localStorage.setItem(STORAGE_KEYS.auctions, JSON.stringify(auctions));
  }

  return auctions;
}

function readRawAuctions(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function refreshAuctionsFromStorage() {
  state.auctions = loadAuctions();
  normalizeExpiredAuctions();
}

function saveAuctions() {
  localStorage.setItem(STORAGE_KEYS.auctions, JSON.stringify(state.auctions));
}

function normalizeAuction(rawAuction) {
  const createdAt = Number(rawAuction.createdAt) || Date.now();
  const durationMinutes = Math.max(15, Number(rawAuction.durationMinutes) || 60);
  const endAt = Number(rawAuction.endAt) || createdAt + durationMinutes * 60000;
  const ceiling = toNumber(rawAuction.ceiling, 0);
  const minimumStep = Math.max(1, toNumber(rawAuction.minimumStep ?? rawAuction.dropAmount ?? rawAuction.step, 50));
  const dropIntervalMinutes = Math.max(0, toNumber(rawAuction.dropIntervalMinutes ?? rawAuction.dropEveryMinutes ?? rawAuction.dropInterval, 0));
  const creatorEmail = normalizeEmail(rawAuction.creatorEmail || rawAuction.createdBy || rawAuction.ownerEmail || "");
  const creatorPhone = normalizePhoneNumber(rawAuction.creatorPhone || rawAuction.creatorPhoneNumber || "");
  const visibility = String(rawAuction.visibility || rawAuction.accessMode || "public").trim() === "code-only" ? "code-only" : "public";
  const photos = Array.isArray(rawAuction.photos)
    ? rawAuction.photos
        .map(normalizePhoto)
        .filter(Boolean)
        .slice(0, 4)
    : [];
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
    creatorEmail,
    creatorPhone,
    visibility,
    ceiling,
    minimumStep,
    dropIntervalMinutes,
    durationMinutes,
    createdAt,
    endAt,
    closedAt: Number(rawAuction.closedAt) || 0,
    notes: String(rawAuction.notes || rawAuction.note || "").trim(),
    photos,
    winnerBidId: String(rawAuction.winnerBidId || "").trim() || null,
    winnerSelectedAt: Number(rawAuction.winnerSelectedAt) || 0,
    winnerSelectedBy: normalizeEmail(rawAuction.winnerSelectedBy || ""),
    bids,
    status: Date.now() >= endAt || rawAuction.status === "closed" ? "closed" : "open",
  };
}

function normalizePhoto(photo) {
  if (!photo) {
    return null;
  }

  if (typeof photo === "string") {
    const src = String(photo).trim();
    return src ? { src, name: "" } : null;
  }

  if (typeof photo !== "object") {
    return null;
  }

  const src = String(photo.src || photo.dataUrl || photo.url || "").trim();
  if (!src) {
    return null;
  }

  return {
    src,
    name: String(photo.name || photo.fileName || "").trim(),
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

  const candidate = getPublicOpenAuctions()[0] || getPublicAuctions()[0] || null;
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
  const autoOffer = getAutomaticOffer(auction);
  const lowestBid = auction.bids.length ? Math.min(...auction.bids.map((bid) => bid.amount)) : Infinity;

  return Math.min(autoOffer, lowestBid);
}

function getNextAllowedOffer(auction) {
  return Math.max(1, getCurrentOffer(auction) - Math.max(1, toNumber(auction.minimumStep, 1)));
}

function getOpenAuctions() {
  return state.auctions.filter((auction) => auction.status === "open");
}

function getFeaturedAuctions(limit) {
  return getPublicAuctions()
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
    if (stored && isAuctionPublic(stored)) {
      return stored;
    }
  }

  return getPublicOpenAuctions()[0] || null;
}

function isAuctionPublic(auction) {
  return (auction?.visibility || "public") !== "code-only";
}

function getPublicAuctions() {
  return state.auctions.filter((auction) => isAuctionPublic(auction));
}

function getPublicOpenAuctions() {
  return getPublicAuctions().filter((auction) => auction.status === "open");
}

function getDashboardCreatedAuctions() {
  const creatorEmail = getSignedInEmail();
  if (!creatorEmail) {
    return [];
  }

  return [...state.auctions]
    .filter((auction) => normalizeEmail(auction.creatorEmail) === creatorEmail)
    .sort((left, right) => (Number(right.createdAt) || 0) - (Number(left.createdAt) || 0));
}

function getSignedInEmail() {
  return normalizeEmail(state.profile.google?.email || state.adminEmail || "");
}

function getPreferredCreatorEmail() {
  return getSignedInEmail() || normalizeEmail(localStorage.getItem(STORAGE_KEYS.creatorEmail) || "");
}

function getPreferredCreatorPhone() {
  return normalizePhoneNumber(state.profile.phoneNumber || localStorage.getItem(STORAGE_KEYS.creatorPhone) || "");
}

function isAuctionManager(auction) {
  const signedInEmail = getSignedInEmail();
  if (!signedInEmail) {
    return false;
  }

  return normalizeEmail(auction?.creatorEmail) === signedInEmail || isAdminSignedIn();
}

function getWinningBid(auction) {
  if (!auction) {
    return null;
  }

  if (auction.winnerBidId) {
    return auction.bids.find((bid) => bid.id === auction.winnerBidId) || null;
  }

  return null;
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

function normalizePhoneNumber(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
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
