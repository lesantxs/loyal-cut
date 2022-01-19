class Controller {
  validaTema() {
    const model = new Model();
    model.mudarTema();
    const view = new View();
    view.trocarIcone();
  }
}
