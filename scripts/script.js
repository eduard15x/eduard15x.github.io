





// //burger button for mobile layout

// const menuBtn = document.querySelector('.menu-burger');
// const navbarBurger = document.querySelector('.navbar-burger');
// let menuIsOpen = false;



// menuBtn.addEventListener('click', ()=> {
//     if(!menuIsOpen) {
//         menuBtn.classList.add('open');
//         menuIsOpen = true;
//         navbarBurger.style.display = 'flex';
//     } else {
//         menuBtn.classList.remove('open');
//         menuIsOpen = false;
//         navbarBurger.style.display = 'none';
//     }
// })
















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


//variant 2 with jQuery

// $(window).scroll( () => {
//     if ( $(window).scrollTop() > $(window).height() ) {
//         $('.header-section').css({'background-color' : 'blue'})
//     } else {
//         $('.header-section').css({'background-color' : 'red'})
//     }
// } )




let iconHome = document.querySelector('#icon-home i')
let navLinks = document.querySelectorAll('.nav-bar-header a')
let navbar = document.querySelector('.header-section')

let heightToChange = window.innerHeight - 40    

window.onscroll = function() {
    function changeColors() {
        if ( window.scrollY > heightToChange) {
            navbar.style.backgroundColor = 'var(--header-color)'
        } else {
            navbar.style.backgroundColor = 'transparent'
        }
    }

    changeColors()
    
}
