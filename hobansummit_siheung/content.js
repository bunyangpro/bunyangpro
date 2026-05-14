document.addEventListener("DOMContentLoaded", function () {

  const toTop = document.getElementById("toTop");
  const toBottom = document.getElementById("toBottom");

  /* top */
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* bottom */
  if (toBottom) {
    toBottom.addEventListener("click", function () {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    });
  }

});