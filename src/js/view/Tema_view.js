class View {
  trocarIcone() {
    const dark = html.classList.contains("dark-mode");
    const iconeTema = document.querySelector(".icone-switch");
    const src = iconeTema.getAttribute("src");

    if (dark) {
      iconeTema.setAttribute("src", src.replace("moon", "sun"));
      // sessionStorage.temaAtual = "dark";
    } else {
      iconeTema.setAttribute("src", src.replace("sun", "moon"));
      // sessionStorage.temaAtual = "ligth";
    }
  }
}
