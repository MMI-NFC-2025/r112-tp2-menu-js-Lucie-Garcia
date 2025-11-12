const nav = document.querySelector("nav.menu");
const toggle = document.querySelector(".menu-btn");
toggle.addEventListener("click", () => {
  const isOpen = toggle.ariaExpanded === "true";
  const isClosed = !isOpen;
  console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
  nav.ariaHidden = isOpen ? "true" : "false";
  toggle.ariaExpanded = isOpen ? "false" : "true";
  document.body.classList.toggle("noscroll", !isOpen);
});