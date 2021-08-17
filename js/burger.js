document.addEventListener('DOMContentLoaded', () => {

  const btnBurger = document.querySelector('.header__burger');
  const headerNav = document.querySelector('.header__nav');
  const logoLink = document.querySelector('.header__logo-link');
  const hero = document.querySelector('.hero');
  const header = document.querySelector('.header');
  const lastHeaderLink = document.querySelector('.header__item:last-child > .header__link');

  btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('header__burger_active');
    headerNav.classList.toggle('header__nav_active');

    if(headerNav.classList.contains('header__nav_active')) {

      headerNav.style.height = `${hero.scrollHeight + header.clientHeight + 0.5}px`;
      logoLink.tabIndex = -1;

      lastHeaderLink.addEventListener('blur', () => {
        logoLink.tabIndex = 0;
        logoLink.focus();
        btnBurger.classList.remove('header__burger_active');
        headerNav.classList.remove('header__nav_active');
      })

    } else {
      logoLink.tabIndex = 0;
    }

  });


})
