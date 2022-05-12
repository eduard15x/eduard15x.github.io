//creating a slider for images in - About me section-
let imgSlide = document.querySelector('#aboutme-photo');
const btnPrevPhoto = document.querySelector('#prevphoto');
const btnNextPhoto = document.querySelector('#nextphoto');

const images = [
    '/images/me/aboutMe/pic1.png',
    '/images/me/aboutMe/pic2.png',
    '/images/me/aboutMe/pic3.png',
    '/images/me/aboutMe/pic4.png',
    '/images/me/aboutMe/pic5.png',
    '/images/me/aboutMe/pic6.png'
];

//seting the index to 0 to display the first image from array
let indexImg = 0;
imgSlide.src = images[indexImg];
imgSlide.classList.add('animation')


btnPrevPhoto.addEventListener('click', ()=> {
    indexImg--;
    if ( indexImg < 0 ) {
        indexImg = images.length - 1;
        
    };
    imgSlide.src = images[indexImg];
});

btnNextPhoto.addEventListener('click', ()=> {
    indexImg++;
    if ( indexImg > images.length - 1) {
        indexImg = 0;
        
    };
    imgSlide.src = images[indexImg];
});

