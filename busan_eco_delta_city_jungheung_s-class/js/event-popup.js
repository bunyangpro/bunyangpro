// 같은 탭의 방문 세션에서 한 번만 표시합니다. 새로고침해도 유지됩니다.
(() => {
    const popup = document.getElementById("eventPopup");
    const storageKey = "dujeong-starbucks-event-shown-v1";
    if (!popup || typeof popup.showModal !== "function") return;

    try {
        if (sessionStorage.getItem(storageKey)) return;
    } catch (_) {
        // 저장소가 차단된 브라우저에서도 팝업을 사용할 수 있게 합니다.
    }

    const previousOverflow = document.documentElement.style.overflow;
    const previousFocus = document.activeElement;
    let movingToForm = false;

    popup.querySelector(".event-popup-close").addEventListener("click", () => popup.close());
    popup.querySelector(".event-popup-dismiss").addEventListener("click", () => popup.close());
    popup.addEventListener("click", (event) => {
        const rect = popup.getBoundingClientRect();
        if (event.target === popup && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) popup.close();
    });
    popup.addEventListener("close", () => {
        document.documentElement.style.overflow = previousOverflow;
        if (movingToForm) {
            const section = document.getElementById("section5");
            const input = document.getElementById("nameTop");
            input?.focus({ preventScroll: true });
            section?.scrollIntoView({ behavior: "instant", block: "start" });
        } else {
            previousFocus?.focus({ preventScroll: true });
        }
    });
    popup.querySelector(".event-popup-reserve").addEventListener("click", () => {
        movingToForm = true;
        popup.close();
    });

    popup.showModal();
    document.documentElement.style.overflow = "hidden";
    try {
        sessionStorage.setItem(storageKey, "1");
    } catch (_) { /* 저장소 제한 시 현재 페이지에서만 한 번 표시 */ }
})();
