document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("#reserveForm");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const scriptURL = "https://script.google.com/macros/s/AKfycbxmk6BlESknhkNkhH-ANhglYJQLGDx6FZ7ZTmJ4XfaPC4tNlHPcV0CxDaS13oWjlMARCQ/exec";

      const formData = new FormData(form);

      fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });

      alert("예약 신청이 완료되었습니다.");
      form.reset();
    });
  });
});