function toggleMenu() {
  const menu = document.querySelector('.head');
  menu.classList.toggle('show');
}
document.addEventListener('click', function (event) {
    const menu = document.querySelector('.head');
    const toggleButton = document.querySelector('.menu-toggle');
  
    // Check if the click is outside the menu and toggle button
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
      menu.classList.remove('show');
    }
  });