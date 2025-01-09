function toggleMenu() {
    const menu = document.querySelector('.menu');
    const toggleIcon = document.querySelector('.toggle .icon');

    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
      toggleIcon.innerHTML = '&#10005;'; // Cross icon
    } else {
      toggleIcon.innerHTML = '&#9776;'; // Burger icon
    }
  }