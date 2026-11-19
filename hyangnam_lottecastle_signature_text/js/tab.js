const typeButtons = document.querySelectorAll(".type-section .tab-btn");
const typePanels = document.querySelectorAll(".type-section .tab-content");

for (const button of typeButtons) {
  button.addEventListener("click", () => {
    for (const item of typeButtons) {
      item.classList.toggle("active", item === button);
    }
    for (const panel of typePanels) {
      panel.classList.toggle("active", panel.id === button.dataset.tab);
    }
  });
}
