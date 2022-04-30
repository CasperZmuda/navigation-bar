'use strict';

const burgerBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav__list:first-of-type');
const allNavItems = document.querySelectorAll('.nav-item');

const handleNav = () => {
  burgerBtn.classList.toggle('is-active');
  mobileNav.classList.toggle('hidden');
  document.body.classList.toggle('overflow');

  allNavItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      burgerBtn.classList.remove('is-active');
      document.body.classList.remove('overflow');
    });
  });
};

burgerBtn.addEventListener('click', handleNav);