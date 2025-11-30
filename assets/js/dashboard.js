document.addEventListener('DOMContentLoaded', function() {
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.dashboard-section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 200);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

  document.querySelectorAll('.dashboard-section').forEach(section => {
    observer.observe(section);
  });

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(10,10,15,0.98)';
      navbar.style.boxShadow = '0 8px 32px rgba(0,0,0,0.5)';
      navbar.style.padding = '0.75rem 0';
    } else {
      navbar.style.background = 'rgba(10,10,15,0.95)';
      navbar.style.boxShadow = 'none';
      navbar.style.padding = '1rem 0';
    }
  });

  document.querySelector('.contact-terminal').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('🚀 Alert transmitted! Response SLA: 24 hours. (Demo mode)');
  });
});

