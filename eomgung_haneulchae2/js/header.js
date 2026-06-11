document.addEventListener("DOMContentLoaded", function () {
   // 헤더 스크롤 이벤트 
  const header = document.getElementById("siteHeader");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const logo = document.querySelector(".header-logo");
  
  window.addEventListener("scroll", () => { 
    if (window.scrollY > 60) { 
      header.classList.add("scrolled"); logo.src = "./images/logo-color.svg"; 
    } else { 
      header.classList.remove("scrolled"); logo.src = "./images/logo-white.svg"; 
    }});
});

