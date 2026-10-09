/* =========================================================
   WALYS — SCRIPT COMMUN
   Aucun appel réseau, aucun cookie, aucune statistique.
   Ce fichier ne contient aucun texte du site : rien à modifier ici.
========================================================= */
(function () {
  const body = document.body;
  body.classList.remove("no-js");

  /* Icône d'app absente ou introuvable → initiales sur fond coloré */
  document.querySelectorAll(".app-icon img").forEach(img => {
    const swap = () => {
      const f = document.createElement("div");
      f.className = "fallback";
      f.textContent = img.parentElement.dataset.initiales || "";
      img.replaceWith(f);
    };
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap, { once: true });
  });

  /* Onglets des fiches d'app : #presentation, #support, #confidentialite */
  const panels = [...document.querySelectorAll(".tab-panel")];
  if (panels.length) {
    body.classList.add("js-tabs");
    const links = [...document.querySelectorAll(".app-subnav a[href^='#']")];
    const show = (id, scroll) => {
      if (!panels.some(p => p.id === id)) id = panels[0].id;
      panels.forEach(p => p.classList.toggle("active", p.id === id));
      links.forEach(l => {
        const on = l.getAttribute("href") === "#" + id;
        l.classList.toggle("current", on);
        if (on) l.setAttribute("aria-current", "page"); else l.removeAttribute("aria-current");
      });
      document.querySelectorAll("#" + id + " .reveal").forEach(el => el.classList.add("visible"));
      if (scroll) {
        const nav = document.getElementById("onglets");
        window.scrollTo({ top: nav.offsetTop - 60, behavior: "smooth" });
      }
    };
    document.querySelectorAll("[data-tab-link]").forEach(a => a.addEventListener("click", e => {
      e.preventDefault();
      const id = a.getAttribute("href").slice(1);
      history.replaceState(null, "", "#" + id);
      show(id, true);
    }));
    window.addEventListener("hashchange", () => show(location.hash.slice(1), true));
    const start = location.hash.slice(1);
    show(start, !!start && start !== panels[0].id);
  }

  /* Barre de navigation, bouton retour en haut */
  const navbar = document.getElementById("navbar");
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    const y = window.scrollY;
    navbar && navbar.classList.toggle("scrolled", y > 20);
    toTop && toTop.classList.toggle("show", y > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop && toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* Menu mobile */
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("navigation");
  const closeMenu = () => { body.classList.remove("menu-open"); menuBtn && menuBtn.setAttribute("aria-expanded", "false"); };
  menuBtn && menuBtn.addEventListener("click", () => {
    const open = body.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  });
  nav && nav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

  /* Apparition douce au défilement */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
  }
})();
