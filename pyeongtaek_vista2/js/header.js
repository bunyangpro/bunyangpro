document.addEventListener("DOMContentLoaded", function () {
   // 헤더 스크롤 이벤트 
  const header = document.getElementById("siteHeader");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});