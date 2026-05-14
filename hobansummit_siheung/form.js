document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("#reserveForm");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const scriptURL = "https://script.google.com/macros/s/AKfycbz9vFffXvym60_1gDqW7_RbWBPyoI9pKCdf6Ah4ciUnNWEtsgWYj28McQ7GC_L8Q81aJg/exec";

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