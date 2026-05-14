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