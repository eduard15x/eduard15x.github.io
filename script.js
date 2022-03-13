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



//adding the logos known to skills-known
const logosKnown = [
    {
        'name' : 'HTML',
        'src' : "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
        'alt' : 'HTML Logo'
    },
    {
        'name' : 'CSS',
        'src' : "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        'alt' : 'CSS Logo'
    },
    {
        'name' : 'Bootstrap 5',
        'src' : "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
        'alt' : 'Bootstrap5 Logo'
        
    },
    {
        'name' : 'JavaScript',
        'src' : "https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
        'alt' : 'JavaScript Logo'
       
    },
    {
        'name' : 'GitHub',
        'src' : "https://cdn-icons-png.flaticon.com/512/38/38401.png",
        'alt' : 'GitHub Logo'
    }
];


//creating a for loop for for each logo from array;
//Skills I know
for ( let i = 0; i < logosKnown.length; i++) {
    const ulList = document.getElementsByClassName('skills-known')[0];

    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'li-style')
    ulList.appendChild(newLi);

    let newH4 = document.createElement('h4');
    newH4.textContent = logosKnown[i].name
    newLi.appendChild(newH4);

    let newIMG = document.createElement('img');
    newIMG.src = logosKnown[i].src;
    newIMG.setAttribute('class', 'img-logos');
    newIMG.setAttribute('alt', logosKnown[i].alt );
    newLi.appendChild(newIMG);
};



//adding the logos I need to learn to skills-need-to-learn
const logosToLearn = [
    {
        'name' : 'MySQL-Database',
        'src' : "https://cdn-icons-png.flaticon.com/512/919/919836.png",
        'alt' : 'SQL Database Logo'
    },
    {
        'name' : 'ReactJS',
        'src' : "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
        'alt' : 'ReactJS Logo'
    },
    {
        'name' : 'NodeJS',
        'src' : "https://cdn-icons-png.flaticon.com/512/919/919825.png",
        'alt' : 'NodeJS Logo'
    }
];


//Skills I need to learn
for ( let i = 0; i < logosToLearn.length; i++) {
    const ulList = document.getElementsByClassName('skills-known')[1];

    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'li-style')
    ulList.appendChild(newLi);

    let newH4 = document.createElement('h4');
    newH4.textContent = logosToLearn[i].name;
    newLi.appendChild(newH4);

    let newIMG = document.createElement('img');
    newIMG.src = logosToLearn[i].src;
    newIMG.setAttribute('class', 'img-logos');
    newIMG.setAttribute('alt', logosToLearn[i].alt );
    newLi.appendChild(newIMG);

};









let projectsCreated = [
    {
        'name' : 'To Do List',
        'img' : 'photos/todolistx.png',
        'description' : 'A simple to-do-list created with HTML, CSS and pure JS. You can insert in your list the tasks you have to do for the current day and check or remove them.'
    },
    {
        'name' : 'Rock Paper Scissors',
        'img' : 'photos/rockpaperscissors.bmp',
        'description' : 'An old game named Rock-Paper-Scissors created with JS. It can be played only local, you need two names and the picks will be generated random.'
    },
    {
        'name' : 'Counter App For Cars',
        'img' : 'photos/parkingcar.bmp',
        'description' : 'An old game named Rock-Paper-Scissors created with JS. It can be played only local, you need two names and the picks will be generated random.'
    },
    {
        'name' : 'Blackjack Game',
        'img' : 'photos/blackjackgame.bmp',
        'description' : 'A simple game created with DOM JS. Its not a Player vs Computer, it works like the real one but you can win/lose only if you get the blackjack or you exceed the value.'
    },
    {
        'name' : 'Password Generator',
        'img' : 'photos/passwordgenerator.bmp',
        'description' : 'I created an simple app which generates 4 different random passwords containing small and capital letters, numbers and symbols. I used JavaScript for creating it.'
    },
    {
        'name' : 'Rock Paper Scissors',
        'img' : 'photos/rockpaperscissors.bmp',
        'description' : 'An old game named Rock-Paper-Scissors created with JS. It can be played only local, you need two names and the picks will be generated random.'
    },
    {
        'name' : 'Rock Paper Scissors',
        'img' : 'photos/rockpaperscissors.bmp',
        'description' : 'An old game named Rock-Paper-Scissors created with JS. It can be played only local, you need two names and the picks will be generated random'
    }
];




// for ( let i = 0; i < projectsCreated.length; i++) {
//     const projectsSection = document.querySelector('.section-projects-content');
//     const newProject = document.createElement('div');
//     newProject.setAttribute('class', 'projects-col');
//     projectsSection.appendChild(newProject);

//     let newH4 = document.createElement('h4');
//     newH4.textContent = projectsCreated[i].name;
//     newProject.appendChild(newH4);

//     const newImg = document.createElement('img');
//     newImg.src = projectsCreated[i].img;
//     newImg.setAttribute('class', 'projects-img');
//     newProject.appendChild(newImg);

//     const newDescr = document.createElement('p');
//     newDescr.textContent = projectsCreated[i].description;
//     newProject.appendChild(newDescr);

//     const newBtn = document.createElement('button');
//     newBtn.setAttribute('class', 'projects-link');
//     newBtn.textContent = 'Check it out';
//     newProject.appendChild(newBtn);
// }



//creating the image-slider

const sectionProjects = document.querySelector('.section-projects-content');
const ulList = document.createElement('ul');
ulList.setAttribute('class', 'section-projects-ul');
sectionProjects.appendChild(ulList);

const btnPrevProject = document.createElement('button');
btnPrevProject.setAttribute('class', 'projects-button');
btnPrevProject.innerHTML = '&#8249;';
const btnNextProject = document.createElement('button');
btnNextProject.setAttribute('class', 'projects-button');
btnNextProject.innerHTML = '&#8250;'

sectionProjects.prepend(btnPrevProject);
sectionProjects.appendChild(btnNextProject);


for ( let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.setAttribute('class', 'projects-li-item');
    ulList.appendChild(li);

    const h4 = document.createElement('h4');
    h4.setAttribute('class', 'projects-h4')
    h4.textContent = projectsCreated[i].name;

    const projectImg = document.createElement('img');
    projectImg.setAttribute('class', 'projects-img');
    projectImg.src = projectsCreated[i].img;
    projectImg.setAttribute('alt', 'My project image');

    const shortText = document.createElement('p');
    shortText.textContent = projectsCreated[i].description;

    li.appendChild(h4);
    li.appendChild(projectImg);
    li.appendChild(shortText);

    btnNextProject.addEventListener('click', ()=> {
        i++;
        if ( i < projectsCreated.length - 1 ) {
            btnNextProject.disabled = false;
            btnPrevProject.disabled = false;
        } else {
            btnNextProject.disabled = true;
        };
        h4.textContent = projectsCreated[i].name;
        projectImg.src = projectsCreated[i].img;
        shortText.textContent = projectsCreated[i].description;
        
    });
    
    btnPrevProject.disabled = true;
    btnPrevProject.addEventListener('click', ()=> {
        i--;
        if ( i == 2) {
            btnPrevProject.disabled = true;
        } else {
            btnPrevProject.disabled = false;
            btnNextProject.disabled = false;
        };
        
        h4.textContent = projectsCreated[i].name;
        projectImg.src = projectsCreated[i].img;
        shortText.textContent = projectsCreated[i].description;
    });
}





//creating the section-footer with logos for social media pages

let logosContact = [
    {
        'img': 'https://cdn-icons-png.flaticon.com/512/1409/1409946.png',
        'href': 'https://www.instagram.com/eduard15x/',
        'alt': 'Instagram Logo'
    },
    {
        'img': 'https://cdn-icons.flaticon.com/png/512/2504/premium/2504903.png?token=exp=1647186810~hmac=8bac3160fb5bc7e49b88f627573974fb',
        'href': 'https://www.facebook.com/peduard99',
        'alt': 'Facebook Logo'
    },
    {
        'img': 'https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1647186861~hmac=e3dcc2c688831357d63f56281c254e30',
        'href': 'https://www.linkedin.com/in/eduard-precup-07z02z99/',
        'alt': 'Linkedin Logo'
    },
    {
        'img': 'https://cdn-icons.flaticon.com/png/512/3291/premium/3291695.png?token=exp=1647186887~hmac=8f752c8bb7cbfed96aac24ba49779666',
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








// //Creating me as an object 

// const eduard = {
//     'city' : 'Sibiu',
//     'country' : 'Romania',
//     'tel' : '+40743224090',
//     'email' : 'precupeduard99@gmail.com',
//     'completeLocation' : function() {
//         return `${this.city}, ${this.country}`;
//     }
// };
// ocument.getElementById("demo").innerHTML = Object.values(person)[1];
