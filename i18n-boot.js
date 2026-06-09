(function () {
  var storageKey = "apex-reverse-auctions.language.v2";
  var lang = "en";

  try {
    var stored = localStorage.getItem(storageKey);
    if (stored === "en" || stored === "es") {
      lang = stored;
    } else if (navigator.language && navigator.language.toLowerCase().indexOf("es") === 0) {
      lang = "es";
    }
  } catch (error) {
    // Ignore storage access failures.
  }

  document.documentElement.lang = lang;
  if (lang === "es") {
    document.documentElement.classList.add("i18n-pending");
  }
})();
