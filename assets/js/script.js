
document.addEventListener('DOMContentLoaded', () => {

  const verMenu = (menu, toggle) => {
    const navBar = document.getElementById(menu);
    const toggleButton = document.getElementById(toggle)
    if (toggleButton && navBar) {
      toggleButton.addEventListener('click', () => {
        navBar.classList.toggle('show');
      });
    }
  }

  verMenu('menu', 'toggle');

});
