//all common functions to be used across the pages

// activating links to show which page on the site a user is

export const activateLink = (link, activeLink, activeClass) => {
    // remove active class
    activeLink.classList.remove(activeClass);
    console.log(activeLink);

    // add class to link
    link.classList.add(activeClass);
}

// toggling classes

// toggle class

export const classToggler = (element, className) => {
    element.classList.toggle(className);
};

// drop down toggle

export const dropDownToggle = (element, dropDownBtn, className, iconClass, defaultClass, newClass) => {
   let icon = dropDownBtn.querySelector(iconClass);

   if (element.classList.contains(className)) {
        // change the icon
        element.classList.remove(className);
        icon.classList.remove(newClass);
        icon.classList.add(defaultClass);
   } else {
         element.classList.add(className);
         icon.classList.remove(defaultClass);
         icon.classList.add(newClass);
   }
};