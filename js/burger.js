document.addEventListener('DOMContentLoaded', () => {

  const btnBurger = document.querySelector('.header__burger');
  const headerNav = document.querySelector('.header__nav');
  const headerLinks = document.querySelectorAll('.header__link');
  const hero = document.querySelector('.hero__banner');
  const header = document.querySelector('.header');

  btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('header__burger_active');
    headerNav.classList.toggle('header__nav_active');

    if(headerNav.classList.contains('header__nav_active')) {
      headerNav.style.height = `${hero.scrollHeight + header.clientHeight}px`;

    //   headerLinks.forEach((e) => {
    //     e.setAttribute('tabindex', 0);
    //   });
    // } else {
    //   headerLinks.forEach((e) => {
    //     e.setAttribute('tabindex', -1);
    //   });
    }
  });

})
