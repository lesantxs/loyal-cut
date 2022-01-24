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
    }
  }
  trocarDesenhos() {
    const dark = html.classList.contains("dark-mode");
    const desenho1 = document.querySelector("#desenho1");
    const srcdesenho1 = desenho1.getAttribute("src");
    const desenho2 = document.querySelector("#desenho2");
    const srcdesenho2 = desenho2.getAttribute("src");

    if (dark) {
      desenho1.setAttribute(
        "src",
        srcdesenho1.replace("IconeCorte1", "IconeCorte1dark")
      );
      desenho2.setAttribute(
        "src",
        srcdesenho2.replace("IconeCorte2", "IconeCorte2dark")
      );
    } else {
      desenho1.setAttribute(
        "src",
        srcdesenho1.replace("IconeCorte1dark", "IconeCorte1")
      );
      desenho2.setAttribute(
        "src",
        srcdesenho2.replace("IconeCorte2dark", "IconeCorte2")
      );
    }
  }
}
