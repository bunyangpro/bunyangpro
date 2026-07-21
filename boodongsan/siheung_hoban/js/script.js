(() => {
  // 기존 메타 랜딩에서 사용 중인 Google Apps Script 웹앱 URL로 교체하세요.
  const GAS_URL = "여기에_기존_GAS_웹앱_URL_입력";

  const onlyNumbers = (value) => value.replace(/\D/g, "");

  document.querySelectorAll('input[inputmode="numeric"]').forEach((input) => {
    input.addEventListener("input", () => {
      input.value = onlyNumbers(input.value).slice(0, input.maxLength || 4);
    });
  });

  document.querySelectorAll("[data-consult-form]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const button = form.querySelector(".submit-button");
      const message = form.querySelector(".form-message");
      const formData = new FormData(form);

      const phone1 = String(formData.get("phone1") || "");
      const phone2 = onlyNumbers(String(formData.get("phone2") || ""));
      const phone3 = onlyNumbers(String(formData.get("phone3") || ""));

      if (phone2.length < 3 || phone3.length !== 4) {
        message.textContent = "연락처를 정확히 입력해 주세요.";
        return;
      }

      if (GAS_URL.includes("여기에_")) {
        message.textContent = "script.js의 GAS_URL에 기존 시트 연동 주소를 입력해 주세요.";
        return;
      }

      const payload = new FormData();
      payload.append("name", String(formData.get("name") || "").trim());
      payload.append("phone", `${phone1}-${phone2}-${phone3}`);
      payload.append("consultDetail", String(formData.get("consultDetail") || "").trim());
      payload.append("project", String(formData.get("project") || "시흥 거모 호반써밋"));

      button.disabled = true;
      button.textContent = "신청 중...";
      message.textContent = "";

      try {
        await fetch(GAS_URL, {
          method: "POST",
          mode: "no-cors",
          body: payload
        });

        form.reset();
        const privacy = form.querySelector('input[name="privacy"]');
        if (privacy) privacy.checked = true;

        message.textContent = "상담 신청이 완료되었습니다.";

        // 기존 완료 페이지가 있다면 아래 주석 해제
        // window.location.href = "./complete/";
      } catch (error) {
        console.error(error);
        message.textContent = "신청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
      } finally {
        button.disabled = false;
        button.innerHTML = '분양정보 확인하기 <span aria-hidden="true">☝</span>';
      }
    });
  });

  // 댓글 정렬 탭: 시각적 활성화만 처리
  document.querySelectorAll(".comments-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".comments-tabs button").forEach((item) => {
        item.classList.remove("is-active");
      });
      button.classList.add("is-active");
    });
  });
})();
