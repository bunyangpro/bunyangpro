document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  const links = [...header.querySelectorAll('.chapter-nav a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let pending = false;
  const update = () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
    const edge = header.getBoundingClientRect().bottom + 30;
    let current = -1;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= edge) current = index;
    });
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    pending = false;
  };
  window.addEventListener('scroll', () => {
    if (!pending) { pending = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
});