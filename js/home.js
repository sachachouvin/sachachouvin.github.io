gsap.registerPlugin(ScrollTrigger);

let connect = document.querySelector("#lets-connect");
let carouselImages = document.querySelectorAll(".carousel-image");

connect.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('grow-bigger');
    mouseCursor.innerHTML = "";
});
connect.addEventListener('mouseenter', () => {
    mouseCursor.classList.add('grow-bigger');
    mouseCursor.innerHTML = "Copy e-mail";
});

connect.addEventListener("click", function () {
    mouseCursor.innerHTML = "Copied";
    navigator.clipboard.writeText("sacha.chouvin@me.com");
    event.preventDefault();
});


carouselImages.forEach(img => {
    img.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('grow-bigger');
        mouseCursor.innerHTML = "";
    });
    img.addEventListener('mouseenter', () => {
        mouseCursor.classList.add('grow-bigger');
        mouseCursor.innerHTML = "View More";
    });
    img.addEventListener("click", function () {
        window.location.href = "work.html";
    });
});


document.getElementById('menu-toggle')
    .addEventListener('click', function () {
        document.body.classList.toggle('nav-open');
        document.querySelector(".main-description-wrapper").classList.toggle("disappear");
        document.querySelector(".name-logo-wrapper").classList.toggle("disappear");

    });



gsap.to(".about-img", {
    top: "-130vh",
    scrollTrigger: {
        trigger: "#about-section",
        start: 'center center',
        // markers: true,
        end: "+=1000",
        scrub: true,
        pin: true,
        toggleActions: "restart restart restart none",
    }
});

gsap.to('.main-description-wrapper', {
    scrollTrigger: {
        trigger: "#about-section",
        start: "center 85%",
        toggleActions: "play complete none reverse"
    }, opacity: 0, duration: 0.8
});

gsap.from('.name-logo-wrapper', {
    scrollTrigger: {
        trigger: "#about-section",
        start: "center 85%",
        toggleActions: "play complete none reverse"
    }, opacity: 0, duration: 0.8, delay: 1
});

