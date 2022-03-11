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
        'name' : 'JavaScript',
        'src' : "https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
        'alt' : 'JavaScript Logo'
    },
    {
        'name' : 'GitHub',
        'src' : "https://cdn-icons-png.flaticon.com/512/38/38401.png",
        'alt' : 'GitHub Logo'
    },
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
        'description' : 'A simple game created with DOM JS. Its not a Player vs Computer or Player vs Player game, it works like the real one but you can win/lose only an amount set if you get the blackjack or you exceed the value.'
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




for ( let i = 0; i < projectsCreated.length; i++) {
    const projectsSection = document.querySelector('.section-projects-content');
    const newProject = document.createElement('div');
    newProject.setAttribute('class', 'projects-col');
    projectsSection.appendChild(newProject);

    let newH4 = document.createElement('h4');
    newH4.textContent = projectsCreated[i].name;
    newProject.appendChild(newH4);

    const newImg = document.createElement('img');
    newImg.src = projectsCreated[i].img;
    newImg.setAttribute('class', 'projects-img');
    newProject.appendChild(newImg);

    const newDescr = document.createElement('p');
    newDescr.textContent = projectsCreated[i].description;
    newProject.appendChild(newDescr);

    const newBtn = document.createElement('button');
    newBtn.setAttribute('class', 'projects-link');
    newBtn.textContent = 'Check it out';
    newProject.appendChild(newBtn);


}



// <div class="projects-col">
// <h4>To Do List</h4>
// <img src="/photos/todolistx.png" class="projects-img">
// <p>
//     A simple to-do-list created with HTML, CSS and pure JS.
//     You can insert in your list the tasks you have to do for the current day
//     and check or remove them.
// </p>
// <button><a href="#" class="projects-link">Check it out</a></button>
// </div>
