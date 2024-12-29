// Responsive menu
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const menuPagesLinks = document.getElementById('pages');
const menu = document.getElementById('menu');

// Open menu
openMenuBtn.addEventListener('click', () => {
    menu.classList.add('active');
})

// Close menu
closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('active');
})

// Close menu when clicking on a menu link
menuPagesLinks.addEventListener('click', () => {
    menu.style.transitionDelay = '0.5s';
    menu.classList.remove('active');
})

// Slider
const slider = document.querySelector('.products');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

// Scroll to the left
leftBtn.addEventListener('click', () => {
    slider.scrollLeft -= slider.offsetWidth;
})

// Scroll to the right
rightBtn.addEventListener('click', () => {
    slider.scrollLeft += slider.offsetWidth;
})