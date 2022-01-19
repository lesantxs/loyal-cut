class View {
  trocarIconesHeaderFooter() {
    const dark = html.classList.contains("dark-mode");
    const iconeTema = document.querySelector(".icone-switch");
    const srcIconeTema = iconeTema.getAttribute("src");
    const logoRodape = document.querySelector(".logo-imagem");
    const srcLogoRodape = logoRodape.getAttribute("src");
    const iconeGitHub = document.querySelector(".iconeGitHub");
    const srcIconeGitHub = iconeGitHub.getAttribute("src");
    const iconeLinkedIn1 = document.querySelector(".iconeLinkedIn1");
    const srcIconeLinkedIn1 = iconeLinkedIn1.getAttribute("src");
    const iconeLinkedIn2 = document.querySelector(".iconeLinkedIn2");
    const srcIconeLinkedIn2 = iconeLinkedIn2.getAttribute("src");
    // const iconeContato1 = document.querySelector("#iconeContato1");
    // const srcIconeContato1 = iconeContato1.getAttribute("src");
    // const iconeContato2 = document.querySelector("#iconeContato2");
    // const srcIconeContato2 = iconeContato2.getAttribute("src");

    if (dark) {
      iconeTema.setAttribute("src", srcIconeTema.replace("moon", "sun"));
      logoRodape.setAttribute(
        "src",
        srcLogoRodape.replace("logo", "logo-modo-dark")
      );
      iconeGitHub.setAttribute(
        "src",
        srcIconeGitHub.replace("github", "github-dark-mode")
      );
      iconeLinkedIn1.setAttribute(
        "src",
        srcIconeLinkedIn1.replace("linkedin", "linkedin-dark-mode")
      );
      iconeLinkedIn2.setAttribute(
        "src",
        srcIconeLinkedIn2.replace("linkedin", "linkedin-dark-mode")
      );
      // iconeContato1.setAttribute(
      //   "src",
      //   srcIconeContato1.replace("IconeCorte1", "IconeCorte1dark")
      // );
      // iconeContato2.setAttribute(
      //   "src",
      //   srcIconeContato2.replace("IconeCorte2", "IconeCorte2dark")
      // );
    } else {
      iconeTema.setAttribute("src", srcIconeTema.replace("sun", "moon"));
      logoRodape.setAttribute(
        "src",
        srcLogoRodape.replace("logo-modo-dark", "logo")
      );
      iconeGitHub.setAttribute(
        "src",
        srcIconeGitHub.replace("github-dark-mode", "github")
      );
      iconeLinkedIn1.setAttribute(
        "src",
        srcIconeLinkedIn1.replace("linkedin-dark-mode", "linkedin")
      );
      iconeLinkedIn2.setAttribute(
        "src",
        srcIconeLinkedIn2.replace("linkedin-dark-mode", "linkedin")
      );
      // iconeContato1.setAttribute(
      //   "src",
      //   srcIconeContato1.replace("IconeCorte1dark", "IconeCorte1")
      // );
      // iconeContato2.setAttribute(
      //   "src",
      //   srcIconeContato2.replace("IconeCorte2dark", "IconeCorte2")
      // );
    }
  }
  trocarIconesContato() {
    const dark = html.classList.contains("dark-mode");
    const iconeContato1 = document.querySelector("#iconeContato1");
    const srcIconeContato1 = iconeContato1.getAttribute("src");
    const iconeContato2 = document.querySelector("#iconeContato2");
    const srcIconeContato2 = iconeContato2.getAttribute("src");

    if (dark) {
      iconeContato1.setAttribute(
        "src",
        srcIconeContato1.replace("IconeCorte1", "IconeCorte1dark")
      );
      iconeContato2.setAttribute(
        "src",
        srcIconeContato2.replace("IconeCorte2", "IconeCorte2dark")
      );
    } else {
      iconeContato1.setAttribute(
        "src",
        srcIconeContato1.replace("IconeCorte1dark", "IconeCorte1")
      );
      iconeContato2.setAttribute(
        "src",
        srcIconeContato2.replace("IconeCorte2dark", "IconeCorte2")
      );
    }
  }
}
