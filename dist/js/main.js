document.addEventListener("DOMContentLoaded", () => {
  // перетаскивание на десктопе для секции why-us
  const wrapper = document.querySelector(".why-us__slider-wrapper");
  if (!wrapper) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  const startDrag = (e) => {
    if (window.innerWidth < 1000) return;
    isDown = true;
    wrapper.classList.add("dragging");
    startX = e.pageX - wrapper.offsetLeft;
    scrollLeft = wrapper.scrollLeft;
    e.preventDefault();
  };

  const stopDrag = () => {
    isDown = false;
    wrapper.classList.remove("dragging");
  };

  const moveDrag = (e) => {
    if (!isDown) return;
    const x = e.pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 1;
    wrapper.scrollLeft = scrollLeft - walk;
  };

  // события мыши
  wrapper.addEventListener("mousedown", startDrag);
  wrapper.addEventListener("mouseleave", stopDrag);
  wrapper.addEventListener("mouseup", stopDrag);
  wrapper.addEventListener("mousemove", moveDrag);
});

// action popup
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup");
  const triggers = document.querySelectorAll(".button");
  const cancelBtn = document.querySelector(".popup-form__btn--cancel");
  const requestBtn = document.querySelector(".popup-form__btn--request");
  const popupSuccessBtn = document.querySelector(".popup-success__btn");

  function openPopup() {
    popup.classList.add("active");
    document.body.style.overflow = "hidden"; // блокируем скролл
  }

  function closePopup() {
    popup.classList.remove("active");
    document.body.style.overflow = ""; // возвращаем скролл
  }

  triggers.forEach((el) => {
    el.addEventListener("click", openPopup);
  });

  cancelBtn.addEventListener("click", closePopup);
  popupSuccessBtn.addEventListener("click", closePopup);
  // закрытие при клике вне окна
  popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
  });
});

// action burger menu
// document.addEventListener("DOMContentLoaded", () => {
//   const btnBurger = document.querySelector(".header-burger-menu__burger-btn");
//   const btnCloseBurgerMenu = document.querySelector(
//     ".header-burger-menu__btn-close"
//   );
//   const burgerMenu = document.querySelector(".header-burger-menu__menu");
//   const menuLinks = document.querySelectorAll(".header-burger-menu__list a");

//   if (!btnBurger || !btnCloseBurgerMenu || !burgerMenu) return;

//   // Открытие меню
//   btnBurger.addEventListener("click", () => {
//     burgerMenu.classList.add("active");
//     document.body.style.overflow = "hidden"; // чтобы фон не скроллился
//   });

//   // Закрытие меню по кнопке
//   btnCloseBurgerMenu.addEventListener("click", () => {
//     burgerMenu.classList.remove("active");
//     document.body.style.overflow = "";
//   });

//   // Закрытие при клике на пункт меню
//   menuLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       const href = link.getAttribute("href");

//       // Проверяем, что это якорь, а не пустая ссылка
//       if (href && href.startsWith("#")) {
//         e.preventDefault();

//         // Закрываем меню
//         burgerMenu.classList.remove("active");
//         document.body.style.overflow = "";

//         // Плавный скролл к секции
//         const target = document.querySelector(href);
//         if (target) {
//           target.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       }
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  const btnBurger = document.querySelector(".header-burger-menu__burger-btn");
  const btnCloseBurgerMenu = document.querySelector(
    ".header-burger-menu__btn-close"
  );
  const burgerMenu = document.querySelector(".header-burger-menu__menu");
  const overlay = document.querySelector(".header-burger-menu__overlay");
  const menuLinks = document.querySelectorAll(".header-burger-menu__list a");

  if (!btnBurger || !btnCloseBurgerMenu || !burgerMenu || !overlay) return;

  function openMenu() {
    burgerMenu.classList.add("active");
    overlay.classList.add("active");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    burgerMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  btnBurger.addEventListener("click", openMenu);
  btnCloseBurgerMenu.addEventListener("click", closeMenu);

  // Закрытие при клике на фон
  overlay.addEventListener("click", closeMenu);

  // Закрытие при клике на пункт меню
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        closeMenu();

        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});

// поппап с реквизитами
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.querySelector(".popup-details");
  const popupMenu = document.querySelector(".popup-details__menu");
  const btnClose = document.querySelector(".popup-details__btn-close");
  const trigger = document.querySelector(".footer__details");

  if (!popup || !popupMenu || !btnClose || !trigger) return;

  // Функция для открытия попапа
  function openPopup() {
    console.log(trigger);
    popup.classList.add("active");
    document.body.style.overflow = "hidden"; // чтобы не скроллился фон
  }

  // Функция для закрытия попапа
  function closePopup() {
    popup.classList.remove("active");
    document.body.style.overflow = ""; // возвращаем скролл
  }

  // Открытие по клику на кнопку
  trigger.addEventListener("click", openPopup);

  // Закрытие по клику на крестик
  btnClose.addEventListener("click", closePopup);

  // Закрытие при клике вне области попапа
  popup.addEventListener("click", function (event) {
    if (!popupMenu.contains(event.target)) {
      closePopup();
    }
  });
});

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

const swiper = new Swiper(".services-slider", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".services-slider__button-next",
    prevEl: ".services-slider__button-prev",
  },
  breakpoints: {
    // Настройки для экранов >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // Настройки для экранов >= 768px
    945: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Настройки для экранов >= 1024px
    1444: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const swiper2 = new Swiper(".our-results-slider", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".our-results-slider__button-next",
    prevEl: ".our-results-slider__button-prev",
  },
  breakpoints: {
    // Настройки для экранов >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // Настройки для экранов >= 768px
    945: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Настройки для экранов >= 1024px
    1444: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const swiper3 = new Swiper(".reviews-slider", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".reviews-slider__button-next",
    prevEl: ".reviews-slider__button-prev",
  },
  breakpoints: {
    // Настройки для экранов >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // Настройки для экранов >= 768px
    945: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Настройки для экранов >= 1024px
    1444: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// 11111111111111111111111111111111111111111111111111111111111111111111111111
/**
 * Инициализация Swiper слайдера
 *
 * Базовые настройки:
 */
// const swiper = new Swiper(".swiper", {
//   // Основные параметры
//   direction: "horizontal", // Ориентация слайдера ('horizontal' или 'vertical')
//   loop: true, // Бесконечная прокрутка
//   slidesPerView: "auto", // Количество видимых слайдов ('auto' или число)
//   spaceBetween: 20, // Отступ между слайдами (в px)
//   centeredSlides: true, // Центрирование активного слайда
//   speed: 500, // Скорость анимации перехода (мс)

//   // Настройки пагинации (точки)
//   pagination: {
//     el: ".swiper-pagination", // Селектор контейнера для пагинации
//     clickable: true, // Кликабельность точек
//     dynamicBullets: false, // Динамические точки (меняют размер)
//     type: "bullets", // Тип пагинации ('bullets', 'fraction', 'progressbar')
//   },

//   // Настройки навигации (стрелки)
//   navigation: {
//     nextEl: ".swiper-button-next", // Селектор кнопки "Вперед"
//     prevEl: ".swiper-button-prev", // Селектор кнопки "Назад"
//     disabledClass: "swiper-button-disabled", // Класс для неактивных кнопок
//   },

//   // Адаптивность
//   breakpoints: {
//     // Настройки для экранов >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     // Настройки для экранов >= 768px
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     // Настройки для экранов >= 1024px
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },

/**

 *  HTML-структура:
 *    <div class="swiper">
 *      <div class="swiper-wrapper">
 *        <div class="swiper-slide">Слайд 1</div>
 *        <div class="swiper-slide">Слайд 2</div>
 *      </div>
 *      <!-- Пагинация -->
 *      <div class="swiper-pagination"></div>
 *      <!-- Навигация -->
 *      <div class="swiper-button-prev"></div>
 *      <div class="swiper-button-next"></div>
 *    </div>
 *
 */
