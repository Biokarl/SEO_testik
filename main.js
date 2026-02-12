document.addEventListener('DOMContentLoaded', () => {

  // ===== BURGER MENU =====
  const burgerBtn = document.getElementById('burgerBtn');
  const headerNav = document.getElementById('headerNav');

  if (burgerBtn && headerNav) {
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('active');
      headerNav.classList.toggle('active');
      document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
    });

    headerNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        headerNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ===== IPL LIVE CRICKET BETTING SWIPER =====
  const liveSwiper = new Swiper('.ipl-live__swiper', {
    slidesPerView: 1.15,
    spaceBetween: 16,
    navigation: {
      prevEl: '#livePrev',
      nextEl: '#liveNext',
    },
    breakpoints: {
      576: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  });

  // ===== REVIEWS SWIPER =====
  const reviewsSwiper = new Swiper('.reviews__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      prevEl: '#reviewsPrev',
      nextEl: '#reviewsNext',
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  });

  // ===== ALL ACCORDIONS (Reasons, How to use, FAQ) =====
  document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-item__header');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close siblings within same parent section
      const parent = item.closest('.reasons__list, .how-to-use__list, .faq__list');
      if (parent) {
        parent.querySelectorAll('.accordion-item').forEach(sibling => {
          sibling.classList.remove('active');
        });
      }

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header').offsetHeight;
        const position = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

        window.scrollTo({ top: position, behavior: 'smooth' });
      }
    });
  });

  // ===== HEADER SCROLL SHADOW =====
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0,0,0,.08)' : 'none';
  });

});
