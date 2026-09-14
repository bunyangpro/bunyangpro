document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // 1단지 / 2단지 탭
  // ==========================
  const complexBtns = document.querySelectorAll(".complex-btn");
  const complexContents = document.querySelectorAll(".complex-content");

  complexBtns.forEach(function (btn) {

    btn.addEventListener("click", function () {

      const target = btn.dataset.complex;

      complexBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      complexContents.forEach(function (item) {
        item.classList.remove("active");
      });

      btn.classList.add("active");
      document.getElementById(target).classList.add("active");

    });

  });



  // ==========================
  // 각 단지 내부 타입탭
  // ==========================
  complexContents.forEach(function (section) {

    const tabBtns = section.querySelectorAll(".tab-btn");
    const tabContents = section.querySelectorAll(".tab-content");

    tabBtns.forEach(function (btn) {

      btn.addEventListener("click", function () {

        const target = btn.dataset.tab;

        tabBtns.forEach(function (item) {
          item.classList.remove("active");
        });

        tabContents.forEach(function (content) {
          content.classList.remove("active");
        });

        btn.classList.add("active");
        section.querySelector("#" + target).classList.add("active");

      });

    });

  });

});