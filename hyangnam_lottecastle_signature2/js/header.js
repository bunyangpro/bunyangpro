document.addEventListener("DOMContentLoaded", function () {
   // 헤더 스크롤 이벤트 
  const header = document.getElementById("siteHeader");
  const logo = document.querySelector(".header-logo");
  const call = document.querySelector(".header-tel img");


   // 기존 PNG 경로가 없으면 같은 이름의 SVG로 대체
  logo.addEventListener("error", function () {
    const currentSrc = logo.getAttribute("src");

    if (currentSrc?.endsWith(".png")) {
      logo.src = currentSrc.replace(/\.png$/, ".svg");
    }
  });


  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
      logo.src = "./images/logo-color.png";
      call.src = "./images/call-color.svg";
    } else {
      header.classList.remove("scrolled");
      logo.src = "./images/logo-white.png";
      call.src = "./images/call.svg"
    }
  });
});

