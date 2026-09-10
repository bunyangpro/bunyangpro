document.addEventListener("DOMContentLoaded", function () {
    const premiumSections =
        document.querySelectorAll(".js-premium-reveal");

    const premiumObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");

                // 최초 한 번만 실행
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    premiumSections.forEach(function (section) {
        premiumObserver.observe(section);
    });
});