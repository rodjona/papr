document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu');
  const navLinks = document.querySelector('.navlinks');

  if (!menuButton || !navLinks) return;

  menuButton.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = navLinks.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function (event) {
    if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) {
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
});
