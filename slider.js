document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider-container");

  sliders.forEach((slider) => {
    const sliderId = slider.id;
    const images = slider.querySelectorAll("img");
    let currentIndex = 0;

    const frame = slider.closest(".slider-frame");
    const prevBtn = frame.querySelector(".nav-button.prev");
    const nextBtn = frame.querySelector(".nav-button.next");
    const dots = frame.querySelectorAll(".dot");

    // อัปเดตตำแหน่งรูปภาพและ dot
    function updateSlider() {
      const offset = -currentIndex * 392; // ความกว้างภาพ
      slider.style.transform = `translateX(${offset}px)`;

      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[currentIndex]) {
        dots[currentIndex].classList.add("active");
      }
    }

    // ปุ่มเลื่อนไปข้างหน้า
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
      });
    }

    // ปุ่มเลื่อนไปข้างหลัง
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
      });
    }

    // Dot คลิกเพื่อเปลี่ยนรูป
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateSlider();
      });
    });

    // เริ่มต้นที่ภาพแรก
    updateSlider();
  });
});
