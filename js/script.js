const eclipse = document.querySelector('.eclipse'),
        background = document.querySelector('.black-back'),
        moon = document.querySelector('.mobile-menu')

eclipse.addEventListener('click', () => {
    background.classList.toggle('black-back-active')
    moon.classList.toggle('mobile-menu-active')
});

background.addEventListener('click', () => {
    background.classList.remove('black-back-active')
    moon.classList.remove('mobile-menu-active')
});
