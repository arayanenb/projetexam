// Nav active state
document.querySelectorAll('.nav-links li').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
    li.classList.add('active');
  });
});


// Destinations slider
const destGrid = document.querySelector('.dest-grid');
const prevBtn = document.querySelectorAll('.cbtn')[0];
const nextBtn = document.querySelectorAll('.cbtn')[1];
let currentIndex = 0;
const cardWidth = 304; // 280px card + 24px gap
const totalCards = document.querySelectorAll('.dest-card').length;

function updateSlider() {
  destGrid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      updateSlider();
    }
  });
}

// Carousel buttons (visual feedback only — swap content here when you add real images)
document.querySelectorAll('.cbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.background = 'var(--orange)';
    btn.style.color = '#fff';
    btn.style.borderColor = 'var(--orange)';
    setTimeout(() => {
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 300);
  });
});