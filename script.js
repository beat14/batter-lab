// mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const list = document.getElementById("nav-list");

toggle?.addEventListener("click", () => {
  const open = list.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

// close mobile menu when a link is tapped
list?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    list.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  })
);

// year in footer
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
