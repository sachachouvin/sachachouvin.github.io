gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
let contactWrapper = document.querySelector(".contact-wrapper");
let orangeFooter = document.querySelector(".orange-footer");

document.getElementById('menu-toggle')
    .addEventListener('click', function () {
        document.body.classList.toggle('nav-open');
        document.querySelector(".name-logo-wrapper").classList.toggle("disappear");

    });

gsap.to('#about-title', {
    scrollTrigger: {
        trigger: ".about-title-wrapper",
        start: "center center",
        end: "+=1000",
        toggleActions: "restart restart restart none",
        scrub: true,
        pin: true
    }, scale: 3
});

let par = new SplitText(".split", { type: "words" });
let words = par.words;
gsap.from(words, {
    scrollTrigger: {
        trigger: ".gray-container",
        start: "center 65%",
        end: "+=1000",
        toggleActions: "restart restart restart none",
        scrub: true,
        pin: true
    }, opacity: 0.25, stagger: 0.1
});

contactWrapper.addEventListener('mouseenter', () => {
    mouseCursor.style.backgroundColor = "#28262C";
})
contactWrapper.addEventListener('mouseleave', () => {
    mouseCursor.style.backgroundColor = "#FF720D";
})

orangeFooter.addEventListener('mouseenter', () => {
    mouseCursor.style.backgroundColor = "#28262C";
})
orangeFooter.addEventListener('mouseleave', () => {
    mouseCursor.style.backgroundColor = "#FF720D";
})
