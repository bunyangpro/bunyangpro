document.addEventListener("DOMContentLoaded", function () {

  // 폼 제출 시 시트로 전달

  const forms = document.querySelectorAll("#reserveForm");

  forms.forEach(function (form) {

    form.addEventListener("submit", function (e) {

      e.preventDefault();

      const scriptURL = "https://script.google.com/macros/s/AKfycbwr4nVmkYhXQcPbbnNZ1QoEt4XlT5dOtdJxKQ6FV041k-D4u8Z_2X5BKLEOgm-5G0BY/exec";

      const formData = new FormData(form);

      fetch(scriptURL, {

        method: "POST",
        body: formData,
        mode: "no-cors"

      })
      .then(() => {

        form.reset();
        window.location.href = "./complete/";

      })
      .catch((error) => {

        console.error(error);
        alert("전송 중 오류가 발생했습니다.");
        
      });
    });
  });
});