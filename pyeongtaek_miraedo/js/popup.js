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
    const privacyOpen = document.querySelectorAll(".privacy-open");
    const privacyClose = document.querySelector("#privacyClose");
    const privacyModal = document.querySelector("#privacyModal");

    privacyOpen.forEach(function (btn) {
    btn.addEventListener("click", function () {
        privacyModal.classList.add("active");
        });
    });

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

});