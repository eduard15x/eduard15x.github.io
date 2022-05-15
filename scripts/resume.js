// Hide / Display resume box when click on nav-link 'Resume'

const resumeLink = document.querySelector('#resume-nav-link')
const resumeBox = document.querySelector('.resume-box')
const downloadResumeBtn = document.querySelector('#btn-download-resume')
const closeResumeBtn = document.querySelector('#btn-close-resume')
const closeResumeX = document.querySelector('#close-resume-x')

resumeLink.addEventListener('click', () => {
    resumeBox.style.display = 'flex'
})

closeResumeBtn.addEventListener('click', () => {
    resumeBox.style.display = 'none'
})

closeResumeX.addEventListener('click', () => {
    resumeBox.style.display = 'none'
})

downloadResumeBtn.addEventListener('click', () => {
    window.open(
        'https://docdro.id/saKuKiD',
        '_blank'
    )
})
