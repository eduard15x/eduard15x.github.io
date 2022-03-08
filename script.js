//creating a carousel images in the about me section

const images = [
    "/photos/picture1.jfif",
    "/photos/picture2.jfif",
    "/photos/picture3.jfif",
    "/photos/picture4.jfif",
    "/photos/picture5.jfif"
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


//adding the logos to skills-section


const logosKnown = [
    {
        'name' : 'HTML',
        'src' : "/Logos/html.png"
    },
    {
        'name' : 'CSS',
        'src' : "/Logos/css.png"
    },
    {
        'name' : 'JavaScript',
        'src' : "/Logos/js.jpg"
    },
    {
        'name' : 'GitHub',
        'src' : "/Logos/github.png"
    },
];


const logosToLearn = [
    {
        'name' : 'SQL Database',
        'src' : "/Logos/sql.jpg"
    },
    {
        'name' : 'ReactJS',
        'src' : "/Logos/react.png"
    },
    {
        'name' : 'NodeJS',
        'src' : "/Logos/nodejs.png"
    }
];


let pObj = document.getElementById('testp');
let imgObj = document.getElementById('testimg');

pObj = logosKnown[0].name;
imgObj.src = logosKnown[0].src;
