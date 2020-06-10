// Header + Burger menu

(function () {
    const header = document.querySelector('.header');
    const burgerMenu = document.querySelector('.header-burger__menu');
    const headerMenu = document.querySelector('.header-nav');
    const body = document.querySelector('body');
    const headerMenuLinks = document.querySelectorAll('.header-nav__link');

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            headerMenu.classList.add('scroll');
        } else {
            header.classList.remove('header_active');
            headerMenu.classList.remove('scroll');
        }
    };

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        headerMenu.classList.toggle('active');
        body.classList.toggle('lock');
    });

    if (window.innerWidth <= 990) {
        for (let i = 0; i < headerMenuLinks.length; i += 1) {
            headerMenuLinks[i].addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                headerMenu.classList.remove('active');
            });
        }
    }

}());

