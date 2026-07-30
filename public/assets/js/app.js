/**
 * STAR WEAVE ASTROLOGY - Core Architectural Runtime Engine
 */
document.addEventListener('DOMContentLoaded', () => {
  initThemeEngine();
  initHeaderGlide();
  initOverlayShelf();
  initBackToTop();
  initSmoothScroll();
});

/* ==========================================================================
   1. THEME SWITCHING ENGINE (PERSISTED STATE)
   ========================================================================== */
function initThemeEngine() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('starweave-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.add('animating');
    
    setTimeout(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('starweave-theme', nextTheme);
      
      toggleBtn.classList.remove('animating');
    }, 250);
  });
}

/* ==========================================================================
   2. ADAPTIVE HIDE/REVEAL HEADER GLIDE
   ========================================================================== */
function initHeaderGlide() {
  const header = document.getElementById('site-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
    lastScrollY = currentScrollY;
  }, { passive: true });

  // Canvas click forces header reveal
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#site-header') && !e.target.closest('#overlay-shelf')) {
      header.classList.remove('header-hidden');
    }
  });
}

/* ==========================================================================
   3. OVERLAY SHELF & ACCORDIONS
   ========================================================================== */
function initOverlayShelf() {
  const burgerBtn = document.getElementById('burger-btn');
  const searchBtn = document.getElementById('search-btn');
  const shelf = document.getElementById('overlay-shelf');

  function toggleShelf() {
    const isOpen = shelf.classList.contains('is-open');
    if (isOpen) {
      shelf.classList.remove('is-open');
      burgerBtn?.classList.remove('is-active');
      document.body.style.overflow = '';
    } else {
      shelf.classList.add('is-open');
      burgerBtn?.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  }

  burgerBtn?.addEventListener('click', toggleShelf);
  searchBtn?.addEventListener('click', toggleShelf);

  // Accordion Toggles
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      header.classList.toggle('active');
      const panel = header.nextElementSibling;
      if (panel) {
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
}

/* ==========================================================================
   4. KINETIC BACK-TO-TOP & SMOOTH SCROLLING
   ========================================================================== */
function initBackToTop() {
  const bttBtn = document.getElementById('back-to-top-btn');
  if (!bttBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      bttBtn.classList.add('is-visible');
    } else {
      bttBtn.classList.remove('is-visible');
    }
  }, { passive: true });

  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initSmoothScroll() {
  const scrollTrigger = document.getElementById('scroll-to-topics');
  scrollTrigger?.addEventListener('click', () => {
    const target = document.getElementById('topics-hub');
    target?.scrollIntoView({ behavior: 'smooth' });
  });
}
