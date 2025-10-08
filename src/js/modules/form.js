document.addEventListener("DOMContentLoaded", () => {
  // === Попап форма ===
  const popupForm = document.querySelector(".popup-form");
  const popupSuccess = document.querySelector(".popup-success");

  // === Форма в футере ===
  const footerForm = document.querySelector(".footer-form");

  // ✅ Твои данные
  //   const BOT_TOKEN = "8429399277:AAHmxl1vqCO4tmptOKSDnAWskEKB893Qp-I";
  //   const CHAT_ID = "1060557267";
  const BOT_TOKEN = "8290766439:AAHrpK24rox8l80Ls1948IheXiGRad7-C70";
  const CHAT_ID = "-4828491725";

  // ====== Функция отправки заявки ======
  async function sendToTelegram(name, phone, source = "форма") {
    const MESSAGE = `
📩 *Новая заявка с сайта (${source}):*
👤 Имя: ${name}
📞 Телефон: ${phone}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: MESSAGE,
            parse_mode: "Markdown",
          }),
        }
      );

      return response.ok;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  // ====== Обработка popup формы ======
  if (popupForm) {
    popupForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = popupForm.querySelector('input[name="name"]').value.trim();
      const phone = popupForm.querySelector('input[name="phone"]').value.trim();

      const ok = await sendToTelegram(name, phone, "popup");

      if (ok) {
        popupForm.style.display = "none";
        popupSuccess.style.display = "block";
        popupForm.reset();
      } else {
        alert("❌ Ошибка при отправке. Попробуйте позже.");
      }
    });
  }

  // ====== Обработка footer формы ======
  if (footerForm) {
    footerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = footerForm.querySelector('input[name="name"]').value.trim();
      const phone = footerForm
        .querySelector('input[name="phone"]')
        .value.trim();

      const ok = await sendToTelegram(name, phone, "футер");

      if (ok) {
        alert("✅ Заявка успешно отправлена!");
        footerForm.reset();
      } else {
        alert("❌ Ошибка при отправке. Попробуйте позже.");
      }
    });
  }
});
