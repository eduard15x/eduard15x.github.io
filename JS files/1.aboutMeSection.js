//creating a slider for images in - About me section-
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
let imgSlide = document.querySelector('.photos-me')

const images = [
    "/photos/picture1.jfif",
    "/photos/picture2.jpg",
    "/photos/picture4.jfif",
    "/photos/picture8.jpg",
    "/photos/picture6.jpg"
];

//seting the index to 0 to display the first image from array
let indexImg = 0;
imgSlide.src = images[indexImg];


btnPrev.addEventListener('click', ()=> {
    indexImg--;
    if ( indexImg < 0 ) {
        indexImg = images.length - 1;
    };
    imgSlide.src = images[indexImg];
});

btnNext.addEventListener('click', ()=> {
    indexImg++;
    if ( indexImg > images.length - 1) {
        indexImg = 0;
    };
    imgSlide.src = images[indexImg];
});

