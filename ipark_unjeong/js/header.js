document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // 이벤트 팝업 배너
  // =========================

  // 첫 번째 팝업
  const popup1 = document.getElementById("eventPopup");
  const closeBtn1 = document.getElementById("eventClose");

  // 두 번째 팝업
  const popup2 = document.getElementById("eventPopup2");
  const closeBtn2 = document.getElementById("eventClose2");

  // 세 번째 팝업
  const popup3 = document.getElementById("eventPopup3");
  const closeBtn3 = document.getElementById("eventClose3");


  // =========================
  // 1번 팝업 닫기 → 2번 열기
  // =========================

  closeBtn1.addEventListener("click", function () {
    popup1.classList.add("hide");

    setTimeout(function () {
      popup2.classList.remove("hide");
    }, 250);
  });

  popup1.addEventListener("click", function (e) {
    if (e.target === popup1) {
      popup1.classList.add("hide");

      setTimeout(function () {
        popup2.classList.remove("hide");
      }, 250);
    }
  });


  // =========================
  // 2번 팝업 닫기 → 3번 열기
  // =========================

  closeBtn2.addEventListener("click", function () {
    popup2.classList.add("hide");

    setTimeout(function () {
      popup3.classList.remove("hide");
    }, 250);
  });

  popup2.addEventListener("click", function (e) {
    if (e.target === popup2) {
      popup2.classList.add("hide");

      setTimeout(function () {
        popup3.classList.remove("hide");
      }, 250);
    }
  });


  // =========================
  // 3번 팝업 닫기
  // =========================

  closeBtn3.addEventListener("click", function () {
    popup3.classList.add("hide");
  });

  popup3.addEventListener("click", function (e) {
    if (e.target === popup3) {
      popup3.classList.add("hide");
    }
  });


  // =========================
  // 헤더 스크롤 이벤트
  // =========================

  const header = document.getElementById("siteHeader");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

});