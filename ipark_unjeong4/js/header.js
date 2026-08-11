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


  // 1번 팝업 X 클릭
  closeBtn1.addEventListener("click", function () {

    // 1번 닫기
    popup1.classList.add("hide");

    // 0.25초 뒤 2번 열기
    setTimeout(function () {
      popup2.classList.remove("hide");
    }, 250);

  });


  // 1번 팝업 검은 배경 클릭
  popup1.addEventListener("click", function (e) {

    if (e.target === popup1) {

      // 1번 닫기
      popup1.classList.add("hide");

      // 0.25초 뒤 2번 열기
      setTimeout(function () {
        popup2.classList.remove("hide");
      }, 250);

    }

  });


  // 2번 팝업 X 클릭
  closeBtn2.addEventListener("click", function () {
    popup2.classList.add("hide");
  });


  // 2번 팝업 검은 배경 클릭
  popup2.addEventListener("click", function (e) {

    if (e.target === popup2) {
      popup2.classList.add("hide");
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