/**
 * DREAM DESIGNS - Main Interactive Script
 * Handles responsive navigation, scroll effects, interactive modals, and forms
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  // Modal Elements
  const modal = document.getElementById('productModal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalEyebrow = document.getElementById('modalEyebrow');
  const modalTagline = document.getElementById('modalTagline');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalQuoteBtn = document.getElementById('modalQuoteBtn');
  const productCards = document.querySelectorAll('.product-card');

  // Contact Form & Toast
  const contactForm = document.getElementById('contactForm');
  const toastNotice = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMsg');

  // --- 1. Sticky Header on Scroll ---
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 2. Mobile Menu Toggle ---
  const toggleMobileMenu = (open) => {
    const isOpen = open !== undefined ? open : !mobileMenu.classList.contains('open');
    mobileToggle.classList.toggle('active', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    menuOverlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  if (menuOverlay) {
    menuOverlay.addEventListener('click', () => toggleMobileMenu(false));
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // --- 3. ScrollSpy Navigation Highlighting ---
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // --- 4. Product Modal Data & Interaction ---
  const productData = {
    doors: {
      eyebrow: 'Architectural Security',
      title: 'Precision Steel Doors',
      tagline: 'Safety meets elegance — engineered for prestige entrances.',
      img: 'assets/images/product-doors.png',
      desc: 'Our flagship steel doors combine heavy-gauge galvanized steel core structure with precision laser finishes, thermo-acoustic insulation, and luxury handles. Designed to withstand severe weather, forced entry attempts, and seasonal temperature shifts while elevating your property facade.',
      specs: [
        'Heavy-gauge 14-gauge galvanized & Grade 304 stainless steel',
        'Multi-point German locking system with anti-drill manganese plates',
        'High-density thermal & soundproofing rockwool core',
        'Electrostatic baked powder coating with UV-resistant finish',
        'Custom heights, flush pivot hinges, and bespoke pull handles'
      ]
    },
    gates: {
      eyebrow: 'Perimeter Mastery',
      title: 'Architectural Steel Gates',
      tagline: 'Stronger entrances, greater peace — custom sliding & swing systems.',
      img: 'assets/images/product-gates.png',
      desc: 'Dream Designs custom steel gates establish a commanding presence with horizontal privacy louvers, automated trackless systems, or motorized sliding gates. Built with rust-inhibiting zinc primer and precision-welded joints to guarantee lifelong effortless operation.',
      specs: [
        'Automated motor integration ready (sliding, swing, cantilever)',
        'Marine-grade zinc phosphate anti-corrosion undercoating',
        'Horizontal slat privacy airflow or ornamental security pickets',
        'Integrated LED pillar lighting and smart intercom compatibility',
        'Reinforced heavy-duty adjustable hinges and ball-bearing rollers'
      ]
    },
    windows: {
      eyebrow: 'Daylight & Defense',
      title: 'Security Steel Windows',
      tagline: 'More light. More life. — unobstructed views with fortified strength.',
      img: 'assets/images/product-windows.png',
      desc: 'Our bespoke steel windows combine slim, modern sightlines with unbreakable solid steel burglar bars seamlessly welded within the window frame geometry. Enjoy flooded natural light and cross ventilation without compromising on family safety.',
      specs: [
        'Ultra-slim architectural steel profiles for maximum natural light',
        'Solid cold-rolled steel security bars integrated seamlessly',
        'Double or triple-glazed acoustic and low-E energy-efficient glass',
        'Weather-sealed EPDM perimeter gaskets prevent draft & moisture',
        'Available in casement, fixed picture, and awning configurations'
      ]
    },
    laser: {
      eyebrow: 'Precision Engineering',
      title: 'Metal Laser Cutting',
      tagline: 'Precision for your unique designs — intricate motifs in structural steel.',
      img: 'assets/images/product-laser.png',
      desc: 'Our state-of-the-art CNC fiber laser cutting delivers unmatched sub-millimeter precision for architectural and ornamental metal applications. Perfect for bespoke decorative door inserts, privacy garden screens, motorized gate infills, and facade lattices with zero edge distortion.',
      specs: [
        'High-capacity fiber laser cutting up to 25mm structural & stainless steel',
        'Micro-tolerance accuracy down to ±0.05mm for complex ornamental patterns',
        'Custom architectural screens, security grilles, balustrades & gates',
        'Direct CAD/DXF architectural file integration or custom bespoke motifs',
        'Marine-grade zinc primer and UV-stable electrostatic powder coat'
      ]
    }
  };

  const openProductModal = (category) => {
    const data = productData[category] || productData.doors;
    modalEyebrow.textContent = data.eyebrow;
    modalTitle.textContent = data.title;
    modalTagline.textContent = data.tagline;
    modalImg.src = data.img;
    modalImg.alt = data.title;
    modalDesc.textContent = data.desc;
    
    // Render specs list
    modalSpecs.innerHTML = '';
    data.specs.forEach(spec => {
      const li = document.createElement('li');
      li.innerHTML = `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>${spec}</span>
      `;
      modalSpecs.appendChild(li);
    });

    // Update modal quote button to pre-fill inquiry
    modalQuoteBtn.onclick = () => {
      closeModal();
      const productSelect = document.getElementById('formProduct');
      if (productSelect) {
        productSelect.value = category;
      }
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    };

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  productCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If user clicked the direct arrow link, allow navigation to the child page
      if (e.target.closest('.card-arrow-btn')) return;
      
      const category = card.dataset.category;
      if (category) {
        openProductModal(category);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal && modal.classList.contains('open')) closeModal();
      if (mobileMenu && mobileMenu.classList.contains('open')) toggleMobileMenu(false);
    }
  });

  // --- 5. Contact Form Submission Toast ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('formName').value;
      const product = document.getElementById('formProduct').value;
      
      showToast(`Thank you, ${name || 'valued client'}! Your custom consultation inquiry for ${product || 'steel solutions'} has been received.`);
      contactForm.reset();
    });
  }

  function showToast(message) {
    if (!toastNotice) return;
    toastMsg.textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4500);
  }
});
