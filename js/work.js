gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
document.getElementById('menu-toggle')
    .addEventListener('click', function () {
        document.body.classList.toggle('nav-open');
        document.querySelector(".name-logo-wrapper").classList.toggle("disappear");

    });


gsap.to('#work-title', {
    scrollTrigger: {
        trigger: ".work-page-title-wrapper",
        start: "center center",
        end: "+=1000",
        toggleActions: "restart restart restart none",
        scrub: true,
        pin: true
    }, scale: 3
});

let titleBloom = new SplitText(".split-bloom", { type: "chars" });
let charsBloom = titleBloom.chars;
gsap.from(charsBloom, {
    scrollTrigger: {
        trigger: ".split-bloom",
        start: "center 75%",
        toggleActions: "restart restart restart none",
    }, yPercent: 130, ease: "back.out", stagger: 0.05, duration: 1
});


let titleEquation = new SplitText(".split-equation", { type: "chars" });
let charsEquation = titleEquation.chars;
gsap.from(charsEquation, {
    scrollTrigger: {
        trigger: ".split-equation",
        start: "center 75%",
        toggleActions: "restart restart restart none",
    }, yPercent: 130, ease: "back.out", stagger: 0.05, duration: 1
});

let titlePortrait = new SplitText(".split-portrait", { type: "chars" });
let charsPortrait = titlePortrait.chars;
gsap.from(charsPortrait, {
    scrollTrigger: {
        trigger: ".split-portrait",
        start: "center 75%",
        toggleActions: "restart restart restart none",
    }, yPercent: 130, ease: "back.out", stagger: 0.05, duration: 1
});