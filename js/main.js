// =============================================
// IGNITE ORGANIZATION - MAIN JAVASCRIPT
// =============================================

document.addEventListener('DOMContentLoaded', function() {

  // ---- HERO SLIDER ----
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  let autoPlay;

  function showSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    current = (n + slides.length) % slides.length;
    if (slides[current]) slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function nextSlide() { showSlide(current + 1); }
  function prevSlide() { showSlide(current - 1); }

  function startAuto() {
    autoPlay = setInterval(nextSlide, 5000);
  }

  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');

  if (prevBtn) prevBtn.addEventListener('click', () => { clearInterval(autoPlay); prevSlide(); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { clearInterval(autoPlay); nextSlide(); startAuto(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { clearInterval(autoPlay); showSlide(i); startAuto(); });
  });

  if (slides.length > 0) { showSlide(0); startAuto(); }

  // ---- HAMBURGER MENU ----
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
  }

  // ---- SCROLL ANIMATIONS ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ---- NAVBAR SCROLL EFFECT ----
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10,10,10,1)';
    } else {
      navbar.style.background = 'rgba(10,10,10,0.97)';
    }
  });

  // ---- ACTIVE NAV LINK ----
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- STATS COUNTER ANIMATION ----
  const statNums = document.querySelectorAll('.stat-num[data-target]');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const target = parseInt(entry.target.dataset.target);
        let count = 0;
        const step = target / 60;
        const counter = setInterval(() => {
          count += step;
          if (count >= target) {
            count = target;
            clearInterval(counter);
          }
          entry.target.textContent = Math.floor(count).toLocaleString() + (entry.target.dataset.suffix || '');
        }, 25);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(stat => statsObserver.observe(stat));

  // ---- GALLERY LIGHTBOX ----
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:pointer;`;
        const imgClone = document.createElement('img');
        imgClone.src = img.src;
        imgClone.style.cssText = `max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px;`;
        lightbox.appendChild(imgClone);
        lightbox.addEventListener('click', () => lightbox.remove());
        document.body.appendChild(lightbox);
      }
    });
  });

});
