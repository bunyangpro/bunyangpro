function scrollPage(top) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top, behavior: reduceMotion ? "instant" : "smooth" });
}

document.getElementById("toTop").addEventListener("click", () => scrollPage(0));
document.getElementById("toBottom").addEventListener("click", () => {
  scrollPage(document.documentElement.scrollHeight);
});
