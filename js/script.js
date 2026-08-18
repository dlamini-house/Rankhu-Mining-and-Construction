/* ==========================================
   RANKHU MINING & CONSTRUCTION - JAVASCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeaderScroll();
  initActiveNavigation();
  initContactForm();
});

/* 1. MOBILE NAVIGATION */
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('.mobile-nav-links a');

  if (!toggleBtn || !mobileMenu) return;

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('active');
    mobileMenu.classList.toggle('active');
    toggleBtn.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  toggleBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
}

/* 2. STICKY HEADER SCROLL EFFECT */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* 3. ACTIVE NAVIGATION HIGHLIGHTING */
function initActiveNavigation() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a, .mobile-nav-links a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* 4. CONTACT FORM VALIDATION & HANDLING */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  if (!form || !statusDiv) return;

  const FORM_ENDPOINT = ""; // Real backend endpoint can be inserted here

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = form.querySelector('[name="fullname"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const service = form.querySelector('[name="service"]').value;

    if (!fullName || !email || !service) {
      statusDiv.className = 'form-status error';
      statusDiv.textContent = 'Please fill in all required fields (*).';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      statusDiv.className = 'form-status error';
      statusDiv.textContent = 'Please enter a valid email address.';
      return;
    }

    if (!FORM_ENDPOINT) {
      statusDiv.className = 'form-status success';
      statusDiv.textContent = 'Thank you! Your enquiry has been processed. (Note: Production backend endpoint ready to be attached).';
      form.reset();
    } else {
      // Endpoint submission logic
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(res => {
        if (res.ok) {
          statusDiv.className = 'form-status success';
          statusDiv.textContent = 'Thank you! Your enquiry has been successfully submitted.';
          form.reset();
        } else {
          throw new Error('Submission failed');
        }
      })
      .catch(() => {
        statusDiv.className = 'form-status error';
        statusDiv.textContent = 'An error occurred while submitting. Please try again later.';
      });
    }
  });
}

/* ==========================================
   5. LIVE COMMODITY TICKER
   ========================================== */
function initCommodityTicker() {
  const goldPriceEl = document.getElementById('gold-price');
  const goldChangeEl = document.getElementById('gold-change');

  if (!goldPriceEl) return;

  // Fetch Gold Spot Price via open API
  fetch('https://api.metals.live/v1/spot/gold')
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const spotGold = data[0].gold;
        goldPriceEl.textContent = `$${parseFloat(spotGold).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
        goldChangeEl.textContent = 'Live Spot (USD/oz)';
        goldChangeEl.className = 'change positive';
      }
    })
    .catch(() => {
      // Fallback display if offline/rate-limited
      goldPriceEl.textContent = '$2,650.00';
      goldChangeEl.textContent = 'USD/oz';
      goldChangeEl.className = 'unit';
    });
}

// Add initCommodityTicker to DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeaderScroll();
  initActiveNavigation();
  initContactForm();
  initCommodityTicker();
});
