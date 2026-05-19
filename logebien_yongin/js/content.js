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


  /* 메인영역 animate show */
    const animateItems = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });
  }, {
    threshold: 0.15
  });

  animateItems.forEach((item) => {
    observer.observe(item);
  });  

});