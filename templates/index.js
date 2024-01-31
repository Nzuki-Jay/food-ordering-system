// imports

import {activateLink, dropDownToggle} from './main.js';


// activate links the slide bar links for menu page

// variables

const links = document.querySelectorAll('.filter-links');

// event listener

links.forEach((link) => {
    link.addEventListener('click', (e) => {
       e.preventDefault();
       let activeLink = document.querySelector('.filter-links.active');
       activateLink(link, activeLink, 'active');
    })
});


// filter overlay drop down

// variables

const overlayButton = document.querySelector('.filter-cuisine');
const overlay =  document.querySelector('.filter-overlay');

// event listener

overlayButton.addEventListener('click', () => {
    dropDownToggle(overlay, overlayButton, 'active', '.drop-down', 'fa-chevron-down', 'fa-chevron-up');
});
