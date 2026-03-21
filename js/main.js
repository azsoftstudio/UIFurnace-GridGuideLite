document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const themeToggle = document.getElementById('themeToggle');
  const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme based on local storage or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  } else if (!savedTheme && !preferDark) {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      updateThemeIcon('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      updateThemeIcon('light');
    }
  });

  function updateThemeIcon(theme) {
    if (theme === 'light') {
      // Moon icon for switching to dark
      themeToggle.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    } else {
      // Sun icon for switching to light
      themeToggle.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>`;
    }
  }

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close sidebar on mobile after clicking
        document.querySelector('.sidebar').classList.remove('open');
        
        // Scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // Active Navigation Highlighting on Scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      // Calculate active section based on scroll position
      if (scrollY >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    // Update active class
    if (current) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
          item.classList.add('active');
        }
      });
    }
  });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.querySelector('.sidebar');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Fade-in animation for sections and components
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.tagName === 'SECTION') {
          entry.target.style.animationPlayState = 'running';
        } else {
          entry.target.classList.add('visible');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.style.animationPlayState = 'paused';
    observer.observe(section);
  });

  // Track images and staggered items
  document.querySelectorAll('.doc-image').forEach(img => {
    observer.observe(img);
  });

  document.querySelectorAll('.card, .faq-list li, .modern-table tbody tr').forEach((el, index) => {
    el.classList.add('stagger-item');
    // We add a stagger delay based on its position in its parent
    let parentChildren = Array.from(el.parentElement.children);
    let childIndex = parentChildren.indexOf(el);
    let delay = childIndex * 0.1; 
    el.style.transitionDelay = `${delay}s`;
    observer.observe(el);
  });
});
