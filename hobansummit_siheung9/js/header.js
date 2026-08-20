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

});