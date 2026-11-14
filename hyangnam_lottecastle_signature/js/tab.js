document.addEventListener("DOMContentLoaded", function () {
  const tabMenu = document.querySelector(".type-section .tab-menu");
  const tabBtns = [...document.querySelectorAll(".type-section .tab-btn")];
  const tabContents = document.querySelectorAll(".type-section .tab-content");
  const prevArrow = document.querySelector(".type-section .type-arrow.prev");
  const nextArrow = document.querySelector(".type-section .type-arrow.next");

  if (!tabMenu || !tabBtns.length) return;

  let currentIndex = tabBtns.findIndex((btn) =>
    btn.classList.contains("active")
  );
  if (currentIndex < 0) currentIndex = 0;

  function selectTab(index) {
    if (index < 0 || index >= tabBtns.length) return;

    currentIndex = index;
    const btn = tabBtns[index];

    tabBtns.forEach((item) => item.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab)?.classList.add("active");

    // 선택한 버튼이 탭 영역 가운데로 부드럽게 이동
    const menuRect = tabMenu.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const targetLeft =
      tabMenu.scrollLeft +
      (btnRect.left - menuRect.left) -
      (tabMenu.clientWidth - btnRect.width) / 2;

    tabMenu.scrollTo({ left: targetLeft, behavior: "smooth" });

    if (prevArrow) prevArrow.disabled = index === 0;
    if (nextArrow) nextArrow.disabled = index === tabBtns.length - 1;
  }

  tabBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => selectTab(index));
  });

  prevArrow?.addEventListener("click", () => selectTab(currentIndex - 1));
  nextArrow?.addEventListener("click", () => selectTab(currentIndex + 1));

  selectTab(currentIndex);
});