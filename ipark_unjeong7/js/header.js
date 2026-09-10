document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // 이벤트 팝업 배너
  // =========================

  const popups = document.querySelectorAll(".event-popup");

  popups.forEach(function (popup, index) {
    const closeBtn = popup.querySelector(".event-close");

    // 현재 팝업을 닫고 다음 팝업 열기
    function closeAndShowNext() {
      popup.classList.add("hide");

      const nextPopup = popups[index + 1];

      if (nextPopup) {
        setTimeout(function () {
          nextPopup.classList.remove("hide");
        }, 250);
      }
    }

    // X 버튼 클릭
    if (closeBtn) {
      closeBtn.addEventListener("click", closeAndShowNext);
    }

    // 검은 배경 클릭
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        closeAndShowNext();
      }
    });
  });


  // =========================
  // 헤더 스크롤 이벤트
  // =========================

  const header = document.getElementById("siteHeader");
  const logo = document.querySelector(".header-logo");
  const call = document.querySelector(".header-tel img");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
      logo.src = "./images/logo-color.png";
      call.src = "./images/call-color.svg";
    } else {
      header.classList.remove("scrolled");
      logo.src = "./images/logo-white.png";
      call.src = "./images/call.svg";
    }
  });

});