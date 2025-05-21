// Script for sticky navigation that hides on scroll down and shows on scroll up
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add sticky class when scrolling starts
    if (scrollTop > 10) {
      navbar.classList.add('sticky-nav');
      
      // Hide on scroll down, show on scroll up
      if (scrollTop > lastScrollTop) {
        navbar.classList.add('nav-hidden');
      } else {
        navbar.classList.remove('nav-hidden');
      }
    } else {
      // Remove sticky when at the top
      navbar.classList.remove('sticky-nav');
      navbar.classList.remove('nav-hidden');
    }
    
    lastScrollTop = scrollTop;
  });
}); 