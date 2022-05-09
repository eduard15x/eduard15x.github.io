
const getJSON = async url => {
    const response = await fetch(url)
    if ( !response.ok) {
        throw new Error(response.statusText)
    }
    const data = response.json()
    return data
}




getJSON('data/personalProjects.json').then( projects => {

    const sectionProjects = document.querySelector('.section-projects-content');
    const ulList = document.querySelector('.ul-projects-list');

    //Selectbuttons
    const btnPrevProject = document.querySelector('#prevbtn');
    const btnNextProject = document.querySelector('#nextbtn');

    sectionProjects.prepend(btnPrevProject);
    sectionProjects.appendChild(btnNextProject);
    let index = 0


    function displayProjects() {
        for ( let i = index; i < index + 3; i++) {
            ulList.innerHTML += 
            `
            <li class="projects-li-item">
                <h4 class="projects-h4">${projects[i].name}</h4>
                <img class="projects-img" src="${projects[i].img}" alt="One of my project image">
                <p>${projects[i].description}</p>
            </li>
            `
        }
    }
    

    

    btnNextProject.addEventListener('click', ()=> {
        index++;
        if ( index < projects.length - 3 ) {
            btnNextProject.disabled = false;
            btnPrevProject.disabled = false;
        } else {
            btnNextProject.disabled = true;
        };
        ulList.innerHTML = ''
        displayProjects()
    });
    

    btnPrevProject.disabled = true;
    btnPrevProject.addEventListener('click', ()=> {
        index--;
        if ( index === 0) {
            btnPrevProject.disabled = true;
        } else {
            btnPrevProject.disabled = false;
            btnNextProject.disabled = false;
        };
        ulList.innerHTML = ''
        displayProjects()
    });   







    displayProjects()

}).catch(error => {
    console.error(error)
})


