const slider = document.getElementById('slider');
const nextArrow = document.getElementById('nextArrow');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateSlider(index) {
  slider.style.transform = `translateX(-${1462 * index}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

nextArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % 4;
  updateSlider(currentIndex);
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    currentIndex = index;
    updateSlider(currentIndex);
  });
});

// เริ่มต้นให้ dot แรก active
updateSlider(currentIndex);

document.querySelector('.lookallbutton').addEventListener('click', function () {
  window.location.href = 'clients.html';
});

document.querySelector('.overlap-group-2').addEventListener('click', function () {
  window.location.href = 'portfolio.html';
});

// ทำ +1 +2 +3 ... 20+

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


// ทำ +1 +2 +3 ... 20+


