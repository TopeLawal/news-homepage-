const navBar = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');


hamburger.addEventListener('click', () => {
    navBar.classList.add('open');
})

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('open');
})