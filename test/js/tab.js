document.addEventListener("DOMContentLoaded", function () {


    // ========================================
    // 1단지 / 2단지 탭
    // ========================================

    const complexBtns = document.querySelectorAll(".complex-btn");
    const complexContents = document.querySelectorAll(".complex-content");


    complexBtns.forEach(function (btn) {

        btn.addEventListener("click", function () {

            const target = btn.dataset.complex;


            // 단지 버튼 초기화
            complexBtns.forEach(function (item) {
                item.classList.remove("active");
            });


            // 단지 콘텐츠 초기화
            complexContents.forEach(function (item) {
                item.classList.remove("active");
            });


            // 선택한 단지 활성화
            btn.classList.add("active");

            const targetSection = document.getElementById(target);

            if (targetSection) {
                targetSection.classList.add("active");
            }

        });

    });



    // ========================================
    // 각 단지 내부 평형 탭
    // ========================================

    complexContents.forEach(function (section) {

        const tabBtns = section.querySelectorAll(".tab-btn");
        const tabContents = section.querySelectorAll(".tab-content");


        tabBtns.forEach(function (btn) {

            btn.addEventListener("click", function () {

                const target = btn.dataset.tab;


                // 현재 단지 내부 버튼 초기화
                tabBtns.forEach(function (item) {
                    item.classList.remove("active");
                });


                // 현재 단지 내부 콘텐츠 초기화
                tabContents.forEach(function (content) {
                    content.classList.remove("active");
                });


                // 선택 버튼 활성화
                btn.classList.add("active");


                // 해당 타입 이미지 활성화
                const targetContent = section.querySelector("#" + target);

                if (targetContent) {
                    targetContent.classList.add("active");
                }


                // 클릭한 버튼을 화면 중앙 쪽으로 이동
                btn.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                });

            });

        });

    });



    // ========================================
    // 좌 / 우 화살표 클릭 시 평형탭 이동
    // ========================================

    complexContents.forEach(function (section) {

        const tabMenu = section.querySelector(".tab-menu");

        const leftBtn = section.querySelector(".left-scroll");
        const rightBtn = section.querySelector(".right-scroll");


        if (!tabMenu) return;


        if (leftBtn) {

            leftBtn.addEventListener("click", function () {

                tabMenu.scrollBy({
                    left: -180,
                    behavior: "smooth"
                });

            });

        }


        if (rightBtn) {

            rightBtn.addEventListener("click", function () {

                tabMenu.scrollBy({
                    left: 180,
                    behavior: "smooth"
                });

            });

        }

    });


});