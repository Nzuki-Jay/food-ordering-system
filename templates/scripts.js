// imports

import {activateLink, classToggler, dropDownToggle} from './main.js';

// nav bar functionalities



// nav links

// variables

const navLinks = document.querySelectorAll('.nav-link');

// activate link on click

// event listener
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
       let activeLink = document.querySelector('.nav-link.active');
       activateLink(link, activeLink, 'active');
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


// settings drop down
// variables

const settingsOverlay = document.querySelector('.settings-overlay');
const settingsOverlayButton = document.querySelector('.settings-dropdown');

// event listener
settingsOverlayButton.addEventListener('click', () => {
    dropDownToggle(settingsOverlay, settingsOverlayButton, 'active', '.drop-down', 'fa-chevron-down', 'fa-chevron-up');
});