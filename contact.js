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



// let lastScroll = 0;
// const header = document.getElementById('header');

// window.addEventListener('scroll', () => {
//   const currentScroll = window.pageYOffset;
//   const scrollHeight = document.documentElement.scrollHeight;
//   const windowHeight = window.innerHeight;
//   const atBottom = currentScroll + windowHeight >= scrollHeight - 10;

//   if (currentScroll > lastScroll && !atBottom) {
//     // Scrolling down and not at bottom
//     header.style.top = '-100px';
//   } else {
//     // Scrolling up or at bottom
//     header.style.top = '0';
//   }

//   lastScroll = currentScroll;
// });


    