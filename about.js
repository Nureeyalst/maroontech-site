document.addEventListener("DOMContentLoaded", () => {
  const span = document.querySelector(".span");

  let counting = false;

  window.addEventListener("scroll", () => {
    const top = span.getBoundingClientRect().top;

    // ถ้า span อยู่ใน viewport และยังไม่นับรอบนี้
    if (top < window.innerHeight && top > 0 && !counting) {
      counting = true;

      let count = 1;
      const interval = setInterval(() => {
        if (count <= 20) { // ✅ เปลี่ยนจาก 10 → 20
          span.innerHTML = count + "+<br />";
          count++;
        } else {
          clearInterval(interval);
          counting = false; // อนุญาตให้เริ่มนับใหม่รอบถัดไป
        }
      }, 100); // ความเร็วต่อขั้น = 100 มิลลิวินาที
    }
  });
});