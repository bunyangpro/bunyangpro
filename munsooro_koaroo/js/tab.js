document.addEventListener("DOMContentLoaded", function () {

  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

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
      document.getElementById(target).classList.add("active");
    });
  });
});