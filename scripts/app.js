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
var options = {
    strings: ['Developer', 'Data Analyst', 'QA Analyst', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
};

var typed1 = new Typed('.typing-1', options);
var typed2 = new Typed('.typing-2', options);

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

document.onmousemove = function (event) {
    var x = (event.clientX * 100) / window.innerWidth + '%';
    var y = (event.clientY * 100) / window.innerHeight + '%';

    eyes.forEach((eye) => {
        eye.style.left = x;
        eye.style.top = y;
        eye.style.transform = 'translate(-' + x + ', -' + y + ')';
    });
};

// Hire Button Click Event
document.getElementById("hireButton").addEventListener("click", function (event) {
    if (this.classList.contains("disabled")) {
        event.preventDefault();
        var disabledTextContainer = document.querySelector(".disabled-text-container");

        if (!disabledTextContainer.querySelector(".disabled-text")) {
            disabledTextContainer.innerHTML = '<p class="disabled-text"></p>';

            // Start typing animation
            var typed = new Typed('.disabled-text', {
                strings: ['Apologies, but I am currently not accepting any new projects for the time being as I am engaged in research work.'],
                typeSpeed: 50,
                showCursor: false,
                onComplete: function (self) {
                    // After typing animation, start fading out after 5 seconds
                    setTimeout(function () {
                        fadeOutText(disabledTextContainer.querySelector('.disabled-text'));
                    }, 5000);
                }
            });

            // Show the disabled text container
            disabledTextContainer.style.opacity = '1';
            disabledTextContainer.style.visibility = 'visible';
        }
    }
});

function fadeOutText(element) {
    var text = element.textContent;
    var duration = text.length * 50; // Duration in milliseconds based on typing speed
    var fadeOutInterval = 10; // Interval in milliseconds between opacity changes
    var opacityStep = 1 / (duration / fadeOutInterval);
    var currentOpacity = 1;

    var interval = setInterval(function () {
        if (currentOpacity <= 0) {
            clearInterval(interval);
            element.remove();
        } else {
            element.style.opacity = currentOpacity;
            currentOpacity -= opacityStep;
        }
    }, fadeOutInterval);
}

// Function to toggle visibility of elements based on screen width
function toggleElements() {
    const screenWidth = window.innerWidth;
    const mobileDiv = document.querySelector('.certification-container.mobile');
    const desktopTable = document.querySelector('.table.desktop');

    if (screenWidth <= 768) {
        desktopTable.style.display = 'none'; // Hide desktop table in mobile view
        mobileDiv.style.display = 'flex'; // Show mobile div in mobile view
    } else {
        desktopTable.style.display = 'block'; // Show desktop table in desktop view
        mobileDiv.style.display = 'none'; // Hide mobile div in desktop view
    }
}

// Initial call to set the initial visibility based on screen width
toggleElements();

// Attach the toggleElements function to the window's resize event to handle dynamic resizing
window.addEventListener('resize', toggleElements);

  //==========================================================//
 //                For MATRIX BACKGROUND                     //
//==========================================================//

// Get the canvas element and its 2D rendering context
const canvas = document.getElementById("backgroundShow");
const ctx = canvas.getContext("2d");

// Make the canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Define the characters to be used for the matrix rain effect
const matrixCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
const charactersArray = matrixCharacters.split(""); // Convert the string to an array of characters

const fontSize = 10;
const columns = canvas.width / fontSize; // Number of columns for the rain
const drops = []; // An array to store the Y-coordinate of each drop

// Initialize the Y-coordinates of the drops
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

// Function to draw the matrix rain
function drawMatrixRain() {
    // Set the background with low opacity to create a trail effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#2596be"; // Gray text color
    ctx.font = `${fontSize}px Arial`;

    // Loop over each column
    for (let i = 0; i < drops.length; i++) {
        // Select a random character from the matrixCharacters array
        const character = charactersArray[Math.floor(Math.random() * charactersArray.length)];

        // Draw the character at the current position
        ctx.fillText(character, i * fontSize, drops[i] * fontSize);

        // Reset the drop to the top of the canvas with some randomness
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Increment the Y-coordinate for the next frame
        drops[i]++;
    }
}

// Call the drawMatrixRain function repeatedly with a delay of 35 milliseconds
setInterval(drawMatrixRain, 35);


