//botão hamburguer

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

//mudança de tema

const tema = document.querySelector("#switch");
const html = document.querySelector("html");

function mudarTema(e) {
  if (e.type === "touchstart") {
    e.preventDefault();
  }
  html.classList.toggle("dark-mode");

  const dark = html.classList.contains("dark-mode");

  const iconeTema = document.querySelector(".icone-switch");
  const src = iconeTema.getAttribute("src");

  if (dark) {
    iconeTema.setAttribute("src", src.replace("moon", "sun"));
    sessionStorage.temaAtual = "dark";
  } else {
    iconeTema.setAttribute("src", src.replace("sun", "moon"));
    sessionStorage.temaAtual = "ligth";
  }
  console.log(sessionStorage.temaAtual);
}

tema.addEventListener("click", mudarTema);
tema.addEventListener("touchstart", mudarTema);
