// Toggle navigation sidebar

document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.getElementById('navBar');
    const dropNav = document.getElementById('dropNav');

    navBar.addEventListener('click', function() {
        dropNav.classList.toggle('active');
    });
});

// header scroll visibility
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scrolling down
    header.style.top = '-100px'; // Hide header
  } else {
    // Scrolling up
    header.style.top = '0'; // Show header
  }

  lastScroll = currentScroll;
});

    