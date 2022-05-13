//Change navbar items color when you scroll out of the intro section

//variant 1
// let navbar = document.querySelector('.header-section')
// let changeColor = window.innerHeight - 25

// window.onscroll = function() {
//     if ( window.scrollY > changeColor ) {
//         navbar.style.backgroundColor = 'blue'
//     } else {
//         navbar.style.backgroundColor = 'transparent'
//     }
// }




let iconHome = document.querySelector('#icon-home i')
let navLinks = document.querySelectorAll('.nav-bar-header a')
let navbar = document.querySelector('.header-section')
let heightToChange = window.innerHeight - 40    

function changeHeaderOnscroll(height) {
    window.onscroll = function() {
        function changeColors() {
            if ( window.scrollY > height) {
                navbar.style.backgroundColor = 'var(--text-color)'
                openMenu.style.color = 'var(--text-color)'
                iconHome.style.color = 'var(--hover-color)'
            } else {
                if ( (window.matchMedia("(max-width: 600px)").matches) ) {
                    navbar.style.backgroundColor = 'var(--header-color)'    
                } else {
                    navbar.style.backgroundColor = 'transparent'
                }
                openMenu.style.color = 'var(--section-color)'
                iconHome.style.color = 'var(--section-color)'
            }
        }
        changeColors()
    }
}


//burger
const openMenu = document.querySelector('#open-nav-menu')
const closeMenu = document.querySelector('#close-nav-menu')
const navbarLinks = document.querySelector('.nav-bar-header')
const mainSection = document.querySelector('main')


openMenu.addEventListener('click', () => {
    closeMenu.style.display = 'block'
    openMenu.style.display = 'none'
    navbarLinks.style.display = 'flex'
    mainSection.style.paddingTop = '120px'
})

closeMenu.addEventListener('click', () => {
    closeMenu.style.display = 'none'
    openMenu.style.display = 'block'
    navbarLinks.style.display = 'none'
    mainSection.style.paddingTop = '0px'
})






//Media query for nav bar and burger-menu

function myFunction(x) {
    if (x.matches) { // If media query matches
        openMenu.style.display = 'block'
        closeMenu.style.display = 'none'
        navbarLinks.style.display = 'none'
        changeHeaderOnscroll(heightToChange - 175)

    } else {
        openMenu.style.display = 'none'
        closeMenu.style.display = 'none'
        navbarLinks.style.display = 'flex'
        changeHeaderOnscroll(heightToChange)
    }
}
  
myFunction(window.matchMedia("(max-width: 600px)")) // Call listener function at run time
window.matchMedia("(max-width: 600px)").addListener(myFunction) // Attach listener function on state changes
