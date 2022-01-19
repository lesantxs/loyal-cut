const btnMobile = document.querySelector("#btn_mobile");

function toggleMenu(e) {
  if (e.type === "touchstart") {
    e.preventDefault();
  }
  const barra = document.querySelector(".barra");
  barra.classList.toggle("active");
  const active = barra.classList.contains("active");
  e.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    e.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    e.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
