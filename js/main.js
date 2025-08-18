// Smooth scroll for anchor links
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if(this.getAttribute('href').startsWith('#')){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Animate elements on scroll
const animatedElements = document.querySelectorAll('.card, section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.1 });

animatedElements.forEach(el => observer.observe(el));
