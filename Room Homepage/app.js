const navContainer = document.querySelector('.nav-container');
const burger = document.querySelector('.fa-bars');
const cross = document.querySelector('.fa-times');
const ul = document.querySelector('ul');

function showMenu() {
   ul.classList.add('show');
}

function closeMenu() {
   ul.classList.remove('show');
}

burger.addEventListener('click', showMenu);
cross.addEventListener('click', closeMenu);
