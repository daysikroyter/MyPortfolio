const menuBtn = document.querySelector('.button');
const menu = document.querySelector('.menu__list');
const links = document.querySelectorAll('.menu__link');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
  menuBtn.classList.toggle('button--active');
  body.classList.toggle('lock');
});


links.forEach(link => {
  link.addEventListener('click', (e) => {
    menu.classList.remove('menu__list--active');
    menuBtn.classList.remove('button--active');
    body.classList.remove('lock');
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else{
    nav.classList.remove('scrolled');
  }
});

const mixer = mixitup('.portfolio__content');