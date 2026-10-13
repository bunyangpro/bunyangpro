// 최소날짜 지정
const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

const minDate = `${year}-${month}-${day}`;

// 모든 date input에 적용
const visitDates = document.querySelectorAll('input[type="date"]');

visitDates.forEach((dateInput) => {
  dateInput.min = minDate;
});



// 전화번호 자동 하이픈
const phoneInputs = document.querySelectorAll(".phone-input");

phoneInputs.forEach((phoneInput) => {

  phoneInput.addEventListener("input", function (e) {

    let value = e.target.value;

    // 숫자만 남기기
    value = value.replace(/[^0-9]/g, "");

    // 자동 하이픈
    if (value.length < 4) {

      value = value;

    } else if (value.length < 8) {

      value = value.replace(/(\d{3})(\d+)/, "$1-$2");

    } else {

      value = value.replace(
        /(\d{3})(\d{4})(\d+)/,
        "$1-$2-$3"
      );

    }

    e.target.value = value;

  });

});