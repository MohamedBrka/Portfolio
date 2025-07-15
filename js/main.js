  function openTab(tabName) {
    let tabLinks = document.querySelectorAll('.tab-links');
    let tabContents = document.querySelectorAll('.tab-contents');

    tabLinks.forEach(link => link.classList.remove('active-link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));

    document.getElementById(tabName).classList.add('active-tab');
    event.currentTarget.classList.add('active-link');
  }

// Scroll-based active navbar and smooth scroll

document.addEventListener('DOMContentLoaded', function () {
  const sections = [
    document.getElementById('header'),
    document.getElementById('about'),
    document.getElementById('services'),
    document.getElementById('portfolio'),
    document.getElementById('contact')
  ];
  const navLinks = document.querySelectorAll('nav ul li a.nav-link');

  // Smooth scroll on menu click
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        window.scrollTo({
          top: targetSection.offsetTop - 70, // adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });

  // Active navbar on scroll
  window.addEventListener('scroll', function () {
    let current = '';
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      if (section && scrollY >= section.offsetTop - 80) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active-link');
      }
    });
  });

  // Responsive Navbar Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksList = document.querySelector('nav ul');
  menuToggle.addEventListener('click', function () {
    navLinksList.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
      navLinksList.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });

  // Scroll to Top Button Functionality
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  
  // Show/hide scroll to top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  
  // Smooth scroll to top when button is clicked
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add scroll-triggered animations for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animatedElements = document.querySelectorAll('.services-list div, .work, .about-col-1 img');
  animatedElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});