class Controller {
  validaTema() {
    const model = new Model();
    model.mudarTema();
    const view = new View();
    view.trocarIconesHeaderFooter();
    if (window.location.href.indexOf("contato") > 0) {
      view.trocarIconesContato();
    }
  }
}
