// image slide functionality

// variables

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const images = document.getElementsByClassName('dashboard-img');

let intervalId;

// find active image and its index
const findIndex = (images) => {
    let activeImg = document.querySelector('.dashboard-img.active');

    let index = Array.from(images).findIndex((image) => {
       return image === activeImg;
    });
    return [index, activeImg] ;
};

// update image

const updateImage = (direction) => {
   let result = findIndex(images);
   let activeImg = result[1];
   let activeImgIdx = result[0];
   let imgLength = images.length;

   activeImg.classList.remove('active');

   if (direction === 'left') {
        activeImgIdx = (activeImgIdx - 1 + imgLength) % imgLength;
   } else if (direction === 'right') {
        activeImgIdx = (activeImgIdx + 1) % imgLength;
   }

   // update cuisine text
   let cuisine = images[activeImgIdx].dataset.cuisine;
   let cuisineTag = document.getElementById('cuisine');
   cuisineTag.textContent = `${cuisine} Cuisine Platter`;

   // display new image
   images[activeImgIdx].classList.add('active');
};

// add event listeners
// left button

leftButton.addEventListener("click", () => {
    clearInterval(intervalId);
    updateImage("left");
});

// right button

rightButton.addEventListener("click", () => {
   clearInterval(intervalId);
   updateImage("right");
});


// auto scroll animation
intervalId = setInterval(() => {
    updateImage('right');
}, 3000);