const menu = document.getElementById('menu');
const burgerButton = document.getElementById('menuburger');
const navbar = document.getElementById('navbar');
const navigation = document.querySelector('.navigation');
const scrollThreshold = navbar.offsetHeight;
const toTopButton = document.getElementById('to-top');
const skillBar = document.getElementById("bar1");
const skillBar2 = document.getElementById("bar2");
const skillBar3 = document.getElementById("bar3");
let liElement = document.getElementById("portfolio");
let grid2Element = document.getElementById("grid2");
let timeoutId;
let image1 = document.getElementsByClassName('thumbnail');

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === skillBar) {
                skillBar.classList.add("animated");
            } else if (entry.target === skillBar2) {
                skillBar2.classList.add("animated2");
            } else if (entry.target === skillBar3) {
                skillBar3.classList.add("animated3");
            }
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(handleIntersection, options);

burgerButton.addEventListener('click', () => {
    document.body.classList.toggle('menu-open', !document.body.classList.contains('menu-open'));
    menu.classList.toggle('show', document.body.classList.contains('menu-open'));
});

menu.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menu.classList.remove('show');
});

toTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

new simpleParallax(image1, {
    orientation: 'up',
    scale: 1.5,
    transition: 'cubic-bezier(0,0,0,1)',
});

window.addEventListener('scroll', () => {
    const isNavbarBelow = window.scrollY > navbar.offsetHeight;
    navigation.classList.toggle('scrolled', isNavbarBelow);
});

observer.observe(skillBar);
observer.observe(skillBar2);
observer.observe(skillBar3);

liElement.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    grid2Element.classList.add("grid2-show");
});

liElement.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
        grid2Element.classList.remove("grid2-show");
    }, 400);
});

document.querySelector('#loadMoreBtn').addEventListener('click', () => {
    let grid = document.querySelector('.grid');
    if (grid) {
        let clonedGrid = grid.cloneNode(true);
        let lastGrid = document.querySelectorAll('.grid')[document.querySelectorAll('.grid').length - 1];
        lastGrid.insertAdjacentElement('afterend', clonedGrid);
    } else {
        console.error("Grid not found.");
    }
});