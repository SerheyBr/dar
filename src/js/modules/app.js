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
