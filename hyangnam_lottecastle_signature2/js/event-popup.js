(() => {
  const popup = document.getElementById("hyangnamEventPopup");
  if (!popup || typeof popup.showModal !== "function") return;
  const slides = [...popup.querySelectorAll(".hn-event-slide")];
  const closeButton = popup.querySelector("[data-hn-close]");
  if (!slides.length || !closeButton) return;
  const gallery = popup.querySelector(".hn-event-gallery");
  const previousFocus = document.activeElement;
  const previousOverflow = document.documentElement.style.overflow;
  let current = 0;
  let advancing = false;
  let timer;
  const showSlide = () => {
    slides.forEach((slide, index) => { slide.hidden = index !== current; });
    closeButton.setAttribute("aria-label", (current + 1) + "번째 이벤트 팝업 닫기");
  };
  const advance = () => {
    if (advancing || !popup.open) return;
    advancing = true;
    if (current === slides.length - 1) { popup.close(); return; }
    slides[current].hidden = true;
    closeButton.hidden = true;
    timer = setTimeout(() => {
      current += 1;
      showSlide();
      closeButton.hidden = false;
      advancing = false;
      gallery.focus({ preventScroll: true });
    }, 250);
  };
  closeButton.addEventListener("click", advance);
  popup.addEventListener("click", event => {
    const rect = popup.getBoundingClientRect();
    if (event.target === popup && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) advance();
  });
  popup.addEventListener("cancel", event => { event.preventDefault(); advance(); });
  popup.addEventListener("close", () => {
    clearTimeout(timer);
    document.documentElement.style.overflow = previousOverflow;
    previousFocus?.focus({ preventScroll: true });
  });
  showSlide();
  popup.showModal();
  gallery.focus({ preventScroll: true });
  document.documentElement.style.overflow = "hidden";
})();
