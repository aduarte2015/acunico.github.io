// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Parallax effect
  window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;
    const parallax = document.querySelector('#header');
  
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
  