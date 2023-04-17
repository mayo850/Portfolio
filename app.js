// Navbar Sticky Behavior
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 200) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        // Scrolling Button Btn
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });
});

// Typing Animation
var typed = new Typed('.typing-1', {
    strings: ['Developer', 'Data Analyst', 'QA Analyst', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed('.typing-2', {
    strings: ['Developer', 'Data Analyst', 'QA Analyst', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Scroll Up Button Script
$('.scroll-up-btn').click(function () {
    $('html').animate({
        scrollTop: 0
    });
});

// Owl Carousel Animation
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    navigation: true,
    autoplay: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});

// Cat Eye Movement Script
const eyes = document.querySelectorAll('.pupil');

document.onmousemove = function () {
    var x = (event.clientX * 100) / window.innerWidth + '%';
    var y = (event.clientY * 100) / window.innerHeight + '%';

    eyes.forEach((eye) => {
        eye.style.left = x;
        eye.style.top = y;
        eye.style.transform = 'translate(-' + x + ', -' + y + ')';
    });
};
