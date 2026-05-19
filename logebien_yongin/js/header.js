document.addEventListener("DOMContentLoaded", function () {

  // 이벤트 팝업 배너
  const popup = document.getElementById("eventPopup");
  const closeBtn = document.getElementById("eventClose");

  closeBtn.addEventListener("click", function () {
    popup.classList.add("hide");
  });

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.classList.add("hide");
    }
  });


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