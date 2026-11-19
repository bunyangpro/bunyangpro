const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

for (const field of document.querySelectorAll('.reservation-form input[type="date"]')) {
  field.min = [year, month, day].join("-");
}

for (const field of document.querySelectorAll(".phone-input")) {
  field.addEventListener("input", () => {
    const digits = field.value.replace(/\D/g, "");
    const groups = digits.match(/^(\d{1,3})(\d{0,4})(\d*)$/);
    field.value = groups ? groups.slice(1).filter(Boolean).join("-") : "";
  });
}
