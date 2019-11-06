
const menu = document.querySelector('.burger');

document.addEventListener('DOMContentLoaded', () => {
  menu.addEventListener('click', () => {
    const show = document.querySelector('nav');
    show.classList.toggle('nav--modifier');
  });

  menu.addEventListener('click', () => {
    const hide = document.querySelector('nav');
    hide.classList.toggle('nav--modifier');
  });
});
