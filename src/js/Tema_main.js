const tema = document.querySelector("#switch");
const html = document.querySelector("html");

tema.addEventListener("click", () => {
  const controller = new Controller();
  controller.validaTema();
});
tema.addEventListener("touchstart", (e) => {
  if (e.type === "touchstart") {
    e.preventDefault();
  }
  const controller = new Controller();
  controller.validaTema();
});
