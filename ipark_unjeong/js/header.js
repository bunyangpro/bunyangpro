document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("siteHeader");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});