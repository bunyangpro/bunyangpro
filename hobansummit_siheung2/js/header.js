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
  const logo = document.querySelector(".header-logo");
  const call = document.querySelector(".header-tel img");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      header.classList.add("scrolled"); logo.src = "./images/header-logo.png"; 
      header.classList.add("scrolled"); call.src = "./images/call-color.svg";
    } else {
      header.classList.remove("scrolled"); logo.src = "./images/header-logo.png";
      header.classList.remove("scrolled"); call.src = "./images/call.svg"
    }
  });

});