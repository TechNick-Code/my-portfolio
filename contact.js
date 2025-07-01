// Toggle navigation sidebar

document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.getElementById('navBar');
    const dropNav = document.getElementById('dropNav');

    navBar.addEventListener('click', function() {
        dropNav.classList.toggle('active');
    });
});

    