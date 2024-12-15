// ----------------- preloader ----------------- //
setTimeout(function () {
    $('.preloader').addClass('d-none');
    $('.main-content').removeClass('d-none');
}, 1500);

// ----------------- Toggle Theme ----------------- //
let toggle = document.getElementById("toggle-theme");
let root = document.querySelector(':root');
const change_theme = () => {
    if (toggle.childNodes[1].getAttribute("data-icon") == "ri:moon-fill") {
        localStorage.setItem('theme', 'dark');
        toggle.setAttribute("aria-label", "Toggle Dark Theme");
        toggle.childNodes[1].setAttribute("data-icon", "ph:sun-fill");

        root.style.setProperty('--clr-accent-100', '#560C97');
        root.style.setProperty('--clr-accent-200', '#2A1240');
        root.style.setProperty('--clr-accent-300', '#7612CE');
        root.style.setProperty('--clr-accent-400', '#4B1877');
        root.style.setProperty('--clr-accent-500', '#A856F0');
        root.style.setProperty('--clr-accent-600', '#D5B0FD');
        root.style.setProperty('--clr-accent-700', '#DCBFFF');
        root.style.setProperty('--clr-accent-800', '#E5D4FF');
        root.style.setProperty('--clr-accent-900', '#F1EAFF');
        root.style.setProperty('--clr-accent-950', '#ffffff');

        $('body').css({ "background-image": "url(./public/assets/background/dark-gradient.png)" })
    } else {
        localStorage.setItem('theme', 'light');
        toggle.childNodes[1].setAttribute("data-icon", "ri:moon-fill");
        toggle.setAttribute("aria-label", "Toggle Light Theme");
        $('body').css({ "background-image": "url(./public/assets/background/light-gradient.png)" })
        root.style.setProperty('--clr-accent-100', '#ffffff');
        root.style.setProperty('--clr-accent-200', '#F1EAFF');
        root.style.setProperty('--clr-accent-300', '#E5D4FF');
        root.style.setProperty('--clr-accent-400', '#DCBFFF');
        root.style.setProperty('--clr-accent-500', '#D5B0FD');
        root.style.setProperty('--clr-accent-600', '#A856F0');
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
var navbarUnscrolled = document.querySelector('.navbar-unscrolled')
var navbarCollapsed = document.querySelector('.navbar-collapse')
var navLinks = document.querySelectorAll('.nav-link')

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");

    if (navbarUnscrolled) {   // as this is only present in index.html
        navbarUnscrolled.classList.toggle("navbar-bg")
    }
});

// close nav-links on click
navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
        hamburger.classList.toggle("is-active");
        navbarCollapsed.classList.remove('show')
        if (navbarUnscrolled) {   // as this is only present in index.html
            navbarUnscrolled.classList.remove("navbar-bg")
        }
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    })
})


// ----------------- sidebar toggler ----------------- //
var sidebarTogglerClose = document.querySelector(".sidebar-toggler-close");
var sidebarTogglerOpen = document.querySelector(".sidebar-toggler-open");
var sidebarContainer = document.querySelector(".sidebar-container")

if (sidebarTogglerClose || sidebarTogglerOpen) {
    sidebarTogglerClose.addEventListener("click", function () {
        sidebarContainer.style.display = "none";
    });

    sidebarTogglerOpen.addEventListener("click", function () {
        sidebarContainer.style.display = "block";
    });
}
