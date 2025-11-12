
const nav = document.querySelector("nav.menu");
const toggle = document.querySelector(".menu-btn");
toggle.addEventListener("click", () => {
  const isOpen = toggle.ariaExpanded === "true";
  const isClosed = !isOpen;
  // Mise à jour des attributs ARIA pour accessibilité
  nav.ariahidden = isOpen ? "true" : "false";
  toggle.ariaexpanded = isOpen ? "false" : "true";
  document.body.classList.toggle("noscroll", !isOpen);
})