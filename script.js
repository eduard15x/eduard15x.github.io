//creating a carousel images in the about me section

const images = [
    "/photos/picture1.jfif",
    "/photos/picture2.jfif",
    "/photos/picture3.jfif"
];

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
let imgSlide = document.querySelector('.photos-me')
let i = 0;

imgSlide.src = images[i];


btnPrev.addEventListener('click', ()=> {
    i--;
    if ( i < 0 ) {
        i = images.length - 1;
    };
    imgSlide.src = images[i];
});

btnNext.addEventListener('click', ()=> {
    i++;
    if ( i > images.length - 1) {
        i = 0;
    };
    imgSlide.src = images[i];
});
