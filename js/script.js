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

// Contact form
const form = document.getElementById('contact-form');
const successAlert = document.getElementById('success');
const errorAlert = document.getElementById('error');

function validateForm(e) {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (firstName == 0 || lastName == 0 || email == 0 || phone == 0 || message == 0) {
        e.preventDefault();
        errorAlert.classList.remove('hide');
        errorAlert.classList.add('show');

        setTimeout(() => {
            errorAlert.classList.remove('show');
            errorAlert.classList.add('hide');
        }, 2000);
    } 
    
    else {
        e.preventDefault();
        successAlert.classList.remove('hide');
        successAlert.classList.add('show');

        setTimeout(() => {
            successAlert.classList.remove('show');
            successAlert.classList.add('hide');
        }
        , 2000);
        
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        phone.value = '';
        message.value = '';
    }
}

form.addEventListener('submit', validateForm);