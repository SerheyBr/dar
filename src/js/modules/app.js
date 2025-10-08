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
