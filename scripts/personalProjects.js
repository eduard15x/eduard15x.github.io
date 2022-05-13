
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

    function displayProjects(nrProjects) {
        for ( let i = index; i < index + nrProjects; i++) {
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

    function displayOtherProjects(stopPrev, stopNext, xProjects) {
        btnPrevProject.disabled = true;
        btnPrevProject.addEventListener('click', ()=> {
            
            if ( index === stopPrev) {
                disabledBtn(btnPrevProject)
                return
            } else {
                index--;
                enabledBtn(btnPrevProject)
                enabledBtn(btnNextProject)
            };
            ulList.innerHTML = ''
            displayProjects(xProjects)
            console.log(index)
        });

        btnNextProject.addEventListener('click', ()=> {
            
            if ( index < projects.length - stopNext ) {       
                index++;    
                enabledBtn(btnNextProject)
                enabledBtn(btnPrevProject)
            } else {
                disabledBtn(btnNextProject)
                return
            };
            ulList.innerHTML = ''
            displayProjects(xProjects)
            console.log(index)
        });
    }
    disabledBtn(btnPrevProject)



    //creating function to display 1 project for mobile version or 3 projects for desktop version
    function myFunction(x) {
        ulList.innerHTML = ''
        if (x.matches) { // If media query matches
            ulList.innerHTML = ''
            displayProjects(1)
            displayOtherProjects( 0 , 1 , 1 )
            
        } else {
            ulList.innerHTML = ''
            displayProjects(3)
            displayOtherProjects( 0 , 3 , 3 )
        }
        index = 0
    }

    myFunction(window.matchMedia("(max-width: 600px)")) // Call listener function at run time
    window.matchMedia("(max-width: 600px)").addListener(myFunction) // Attach listener function on state changes



}).catch(error => {
    console.error(error)
})

