// nav bar functionalities

// toggle class

const classToggler = (element, class) => {
    element.classList.toggle(class);
};

// nav links

// variables

const navLinks = document.querySelectorAll('.nav-link');

// activate link on click

const activateLink = (link) => {
    let activeLink = document.querySelector('.nav-link.active');
    activeLink.classList.remove('active');
    link.classList.add('active');
};

// event listener
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        activateLink(link);
    })
});

// side menu for small devices
// variables

const menuBtn = document.querySelector('.menu');
const linksDiv = document.querySelector('.links');

// event listener to toggle side menu
menuBtn.addEventListener('click', () => {
    classToggler(linksDiv, 'active');
});


// toggle search bar
// variables

const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search-toggle');

// event listener to toggle side menu
searchBtn.addEventListener('click', () => {
    classToggler(search, 'active');
});
