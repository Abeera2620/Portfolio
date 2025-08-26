
    document.addEventListener('DOMContentLoaded', function() {
      AOS.init({
        duration: 800,
        once: false,
        offset: 100
      });
      
      document.querySelectorAll('.nav-link, .hero-btn').forEach(link => {
        link.addEventListener('click', function(e) {
          if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
              targetSection.classList.remove('aos-animate');
              const aosType = targetSection.getAttribute('data-aos') || 'fade-up';
              targetSection.setAttribute('data-aos', aosType);
              targetSection.scrollIntoView({ behavior: 'smooth' });
              setTimeout(() => {
                AOS.refreshHard();
              }, 100);
            }
          }
        });
      });
      
      if (document.querySelector('.typed')) {
        new Typed('.typed', {
          strings: ['Frontend Developer', 'HTML/CSS Expert', 'Bootstrap Specialist', 'JavaScript Coder'],
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true
        });
      }
      
      if (document.querySelector('.project-container')) {
        new Isotope('.project-container', {
          itemSelector: '.project-item',
          layoutMode: 'fitRows'
        });
      }
      
      // Calculator functionality
      const display = document.getElementById('display');
      
      window.appendToDisplay = function(value) {
        if (display.value === 'Error') {
          display.value = '';
        }
        display.value += value;
      };
      
      window.calculate = function() {
        try {
          // Using Function constructor instead of eval for better security
          const result = Function('return ' + display.value)();
          if (result === Infinity || isNaN(result)) {
            display.value = 'Error';
          } else {
            display.value = result;
          }
        } catch (e) {
          display.value = 'Error';
        }
      };
      
      window.clearDisplay = function() {
        display.value = '';
      };
      
      const backToTopButton = document.querySelector('.back-to-top');
      if (backToTopButton) {
        window.addEventListener('scroll', function() {
          if (window.scrollY > 100) {
            backToTopButton.classList.add('visible');
          } else {
            backToTopButton.classList.remove('visible');
          }
        });
        
        backToTopButton.addEventListener('click', function() {
          document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            AOS.refreshHard();
          }, 100);
        });
      }
      
      // Fix for navbar toggler icon
      document.querySelector('.navbar-toggler').innerHTML = '<span class="navbar-toggler-icon"><i class="fas fa-bars" style="color: #fff;"></i></span>';
    });
  