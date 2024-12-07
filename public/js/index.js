// ----------------- Toggle Theme ----------------- //
let toggle = document.getElementById("toggle-theme");
let root = document.querySelector(':root');
const change_theme = () => {
    if (toggle.childNodes[1].getAttribute("data-icon") == "ri:moon-fill") {
        localStorage.setItem('theme', 'dark');
        toggle.setAttribute("aria-label", "Toggle Dark Theme");
        toggle.childNodes[1].setAttribute("data-icon", "ph:sun-fill");

        root.style.setProperty('--clr-accent-100', '#560C97');
        root.style.setProperty('--clr-accent-200', '#36085E');
        root.style.setProperty('--clr-accent-300','#7612CE');
        root.style.setProperty('--clr-accent-400','#8B1FEA');
        root.style.setProperty('--clr-accent-500','#A856F0');
        root.style.setProperty('--clr-accent-600', '#D5B0FD');
        root.style.setProperty('--clr-accent-700', '#DCBFFF');
        root.style.setProperty('--clr-accent-800', '#E5D4FF');
        root.style.setProperty('--clr-accent-900', '#F1EAFF');
        root.style.setProperty('--clr-accent-950', '#ffffff');

        $('body').css({ "background-image": "url(./public/assets/background/mesh-64.png)" })
    } else {
        localStorage.setItem('theme', 'light');
        toggle.childNodes[1].setAttribute("data-icon", "ri:moon-fill");
        toggle.setAttribute("aria-label", "Toggle Light Theme");
        $('body').css({ "background-image": "url(./public/assets/background/mesh-47.png)" })
        root.style.setProperty('--clr-accent-100', '#ffffff');
        root.style.setProperty('--clr-accent-200', '#F1EAFF');
        root.style.setProperty('--clr-accent-300','#E5D4FF');
        root.style.setProperty('--clr-accent-400','#DCBFFF');
        root.style.setProperty('--clr-accent-500','#D5B0FD');
        root.style.setProperty('--clr-accent-600', '#8B1FEA');
        root.style.setProperty('--clr-accent-700', '#8B1FEA');
        root.style.setProperty('--clr-accent-800', '#7612CE');
        root.style.setProperty('--clr-accent-900', '#560C97');
        root.style.setProperty('--clr-accent-950', '#36085E');
    }
};

if (localStorage.getItem('theme') == null) {
    toggle.childNodes[1].setAttribute("data-icon", "ri:moon-fill")
}

if (localStorage.getItem('theme') != null) {
    let thm = localStorage.getItem('theme');
    if (thm == 'dark') {
        toggle.childNodes[1].setAttribute("data-icon", "ri:moon-fill");
    } else {
        toggle.childNodes[1].setAttribute("data-icon", "ph:sun-fill");
    }
    change_theme();
}

toggle.addEventListener('click', change_theme);



// ----------------- navbar ----------------- //
var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector('.navbar')
var navLinks = document.querySelectorAll('.nav-link')

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navbar.classList.toggle("navbar-bg")
});

// close nav-links on click
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("navbar-bg")
    $('.navbar-collapse').removeClass('show')
  })
})