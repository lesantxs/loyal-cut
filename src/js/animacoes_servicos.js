const target = document.querySelectorAll(".animate");
const animationClass = "ON";

function animeScroll() {
  const windowTop = window.pageYOffset;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop - 500) {
      element.classList.add(animationClass);
    }
  });
}

window.addEventListener("scroll", function () {
  animeScroll();
});
