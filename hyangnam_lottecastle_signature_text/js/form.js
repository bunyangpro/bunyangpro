const reservationEndpoint = "https://script.google.com/macros/s/AKfycbytDAzAOseGM8Uoc6bbrhMQL8jFS22a2v5IGL4gUhIRBQmXFx-L0xNrc7HaFAfDUgqx/exec";

for (const form of document.querySelectorAll(".reservation-form")) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.submitter || form.querySelector(".submitBtn");
    if (button.disabled) return;

    const payload = new FormData(form);
    button.disabled = true;
    try {
      await fetch(reservationEndpoint, {
        method: "POST",
        body: payload,
        mode: "no-cors"
      });
      form.reset();
      window.location.assign("./complete/");
    } catch (error) {
      button.disabled = false;
      console.error(error);
      alert("전송 중 오류가 발생했습니다.");
    }
  });
}
