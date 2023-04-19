let menu = document.querySelector('.menu-icon-wrap');
menu.addEventListener('click', function () {
    document.querySelector(".menu-open").classList.toggle("menu-active");
})

let mouseCursor = document.querySelector(".cursor");
let a = document.querySelectorAll('a');

window.addEventListener("scroll", cursor);
window.addEventListener('mousemove', cursor);
function cursor(e) {
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.left = e.clientX + 'px';
}

a.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-cursor');
    });
    link.addEventListener('mouseenter', () => {
        mouseCursor.classList.add('link-cursor');
    });

}
);

document.querySelector('.menu-icon-wrap').addEventListener('mouseenter', () => {
    mouseCursor.classList.add('grow');
})
document.querySelector('.menu-icon-wrap').addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('grow');
})
