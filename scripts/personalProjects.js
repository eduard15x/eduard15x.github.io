
const getJSON = async url => {
    const response = await fetch(url)
    if ( !response.ok) {
        throw new Error(response.statusText)
    }
    const data = response.json()
    return data
}


    const ulList = document.querySelector('.projects-list');

    //Selectbuttons
    const btnPrevProject = document.querySelector('#prev-project');
    const btnNextProject = document.getElementById('next-project');

getJSON('data/personalProjects.json').then( projects => {
    let index = 0
    function displayProjects() {
        for ( let i = index; i < index + 3; i++) {
            ulList.innerHTML += `
            <li class="li-project animation">
                <h4 class="projects-h4">${projects[i].name}</h4>
                <a href="${projects[i].href}" target="_blank"><img class="projects-img" src="${projects[i].img}" alt="One of my project image"></a>
                <p>${projects[i].description}</p>
            </li>`
        }
    }

    function enabledBtn(x) {
        x.style.opacity = "1"
        x.style.cursor = "pointer"
    }

    function disabledBtn(e) {
        e.style.opacity = "0.2"
        e.style.cursor = "default"
    }

    


    btnNextProject.addEventListener('click', ()=> {
        if ( index < projects.length - 3 ) {       
            index++;    
            enabledBtn(btnNextProject)
            enabledBtn(btnPrevProject)
        } else {
            disabledBtn(btnNextProject)
            return
        };
        ulList.innerHTML = ''
        displayProjects()
    });

    btnPrevProject.disabled = true;
    btnPrevProject.addEventListener('click', ()=> {
        if ( index === 0) {
            disabledBtn(btnPrevProject)
            return
        } else {
            index--;
            enabledBtn(btnPrevProject)
            enabledBtn(btnNextProject)
        };
        ulList.innerHTML = ''
        displayProjects()
    });   


    displayProjects()
    disabledBtn(btnPrevProject)

    

    
}).catch(error => {
    console.error(error)
})

