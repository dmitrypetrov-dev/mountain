const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.header-burger__menu');
const headerMenu = document.querySelector('.header-nav');
const body = document.querySelector('body');
const headerMenuLinks = document.querySelectorAll('.header-nav__link');


(function () {
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
}());

// Scroll to anchors

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

(function () {
    if (window.innerWidth <= 990) {
        for (let i = 0; i < headerMenuLinks.length; i += 1) {
            headerMenuLinks[i].addEventListener('click', () => {
                burgerMenu.classList.toggle('active');
                headerMenu.classList.toggle('active');
                body.classList.toggle('lock');
            });
        }
    }
}());