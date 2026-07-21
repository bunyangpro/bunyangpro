// =====================
// 개인정보 팝업
// =====================

const privacyOpen = document.getElementById("privacyOpen");
const termsPopup = document.getElementById("termsPopup");
const closeTerms = document.getElementById("closeTerms");

if (privacyOpen) {

    privacyOpen.addEventListener("click", function () {

        termsPopup.classList.add("active");
        document.body.style.overflow = "hidden";

    });

}

if (closeTerms) {

    closeTerms.addEventListener("click", function () {

        termsPopup.classList.remove("active");
        document.body.style.overflow = "";

    });

}

// 팝업 바깥 클릭 시 닫기
termsPopup.addEventListener("click", function(e){

    if(e.target === termsPopup){

        termsPopup.classList.remove("active");
        document.body.style.overflow = "";

    }

});