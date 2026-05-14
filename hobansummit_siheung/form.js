document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("#reserveForm");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const scriptURL = "https://script.google.com/macros/s/AKfycbyldEV8bkh10vX4mr9FR0nT1igcey2gjfDEFyFFZfgmauuCp12mV5K8srYJratRhpmh/exec";

      const formData = new FormData(form);

      fetch(scriptURL, {
        method: "POST",
        body: formData
      })
        .then(() => {
          alert("예약 신청이 완료되었습니다.");
          form.reset();
        })
        .catch(() => {
          alert("전송 오류가 발생했습니다.");
        });
    });
  });
});