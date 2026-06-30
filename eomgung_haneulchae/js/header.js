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
  const call = document.querySelector(".header-tel img");

  window.addEventListener("scroll", () => { 
    if (window.scrollY > 60) { 
      header.classList.add("scrolled"); logo.src = "./images/logo-color.svg"; 
      header.classList.add("scrolled"); call.src = "./images/call-color.svg";
    } else { 
      header.classList.remove("scrolled"); logo.src = "./images/logo-white.svg";
      header.classList.remove(".scrolled"); call.src = "./images/call.svg"; 
    }});
});

