document.addEventListener("DOMContentLoaded", function () {

    // 무료예약상담 버튼 누르면 폼으로 이동
    const reserveForm = document.querySelector("#section5");
    const heroReserveBtn = document.querySelector("#heroReserveBtn");
    const stickyReserveBtn = document.querySelector("#stickyReserveBtn");

    function moveToForm() {
        reserveForm.scrollIntoView({
            behavior: "smooth"
        });
    }

    if (heroReserveBtn) {
        heroReserveBtn.addEventListener("click", moveToForm);
    }

    if (stickyReserveBtn) {
        stickyReserveBtn.addEventListener("click", moveToForm);
    }


    // 개인정보 팝업
    const privacyOpen = document.querySelector("#privacyOpen");
    const privacyClose = document.querySelector("#privacyClose");
    const privacyModal = document.querySelector("#privacyModal");

    if (privacyOpen) {
        privacyOpen.addEventListener("click", function () {
            privacyModal.classList.add("active");
        });
    }

    if (privacyClose) {
        privacyClose.addEventListener("click", function () {
            privacyModal.classList.remove("active");
        });
    }

    if (privacyModal) {
        privacyModal.addEventListener("click", function (e) {
            if (e.target === privacyModal) {
                privacyModal.classList.remove("active");
            }
        });
    }


    // 스크롤 등장 애니메이션
    const aniItems = document.querySelectorAll(".js-ani");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("on");
            }
        });
    }, {
        threshold: 0.15
    });

    aniItems.forEach(function (item) {
        observer.observe(item);
    });


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

});