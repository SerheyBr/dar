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
