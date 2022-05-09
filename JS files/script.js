
//creating the section-footer with logos for social media pages
let logosContact = [
    {
        'img': '/photos/insta.png',
        'href': 'https://www.instagram.com/eduard15x/',
        'alt': 'Instagram Logo'
    },
    {
        'img': '/photos/facebook.png',
        'href': 'https://www.facebook.com/peduard99',
        'alt': 'Facebook Logo'
    },
    {
        'img': '/photos/linkedin.png',
        'href': 'https://www.linkedin.com/in/eduard-precup-07z02z99/',
        'alt': 'Linkedin Logo'
    },
    {
        'img': '/photos/ghub.png',
        'href': 'https://github.com/eduard15x',
        'alt': 'Github Logo'
    }
]


const sectionFooter = document.querySelector('.section-footer');

const ulLogosContact = document.createElement('ul');
ulLogosContact.setAttribute('class', 'ul-contact')
sectionFooter.appendChild(ulLogosContact);

for ( let i = 0; i < logosContact.length; i++) {
    const liContact = document.createElement('li');
    ulLogosContact.appendChild(liContact);

    const linkContact = document.createElement('a');
    linkContact.href = logosContact[i].href;
    linkContact.setAttribute('target', '_blank');
    liContact.appendChild(linkContact);

    const imgContact = document.createElement('img');
    imgContact.src = logosContact[i].img;
    imgContact.setAttribute('alt', logosContact[i].alt);
    imgContact.setAttribute('class', 'img-contact')
    linkContact.appendChild(imgContact);
};










//display none/flex for the resume

const resumeSection = document.querySelector('.resume-section');
const displayResume = document.getElementById('navi-resume');
const closeResume = document.getElementById('close-resume');
closeResume.style.cursor = 'pointer';
//add events for nav item and X

displayResume.addEventListener('click', ()=> {
    resumeSection.style.display = 'flex';
});


closeResume.addEventListener('click', ()=> {
    resumeSection.style.display = 'none';
});







//burger button for mobile layout

const menuBtn = document.querySelector('.menu-burger');
const navbarBurger = document.querySelector('.navbar-burger');
let menuIsOpen = false;



menuBtn.addEventListener('click', ()=> {
    if(!menuIsOpen) {
        menuBtn.classList.add('open');
        menuIsOpen = true;
        navbarBurger.style.display = 'flex';
    } else {
        menuBtn.classList.remove('open');
        menuIsOpen = false;
        navbarBurger.style.display = 'none';
    }
})
