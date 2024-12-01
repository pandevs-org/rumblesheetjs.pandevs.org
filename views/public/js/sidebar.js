// Select all elements with the class .getting-started-inner-li
const gettingStartedInnerLi = document.querySelectorAll('.getting-started-inner-li');
const gettingStartedLi = document.querySelector('#sidebar-li-getting-started');

// Select all elements with the class .general-inner-li
const generalInnerLi = document.querySelectorAll('.general-inner-li');
const generalLi = document.querySelector('#sidebar-li-general');

// Select all elements with the class .configuration-inner-li
const configurationInnerLi = document.querySelectorAll('.configuration-inner-li');
const configurationLi = document.querySelector('#sidebar-li-configuration');

// Select all elements with the class .developer-inner-li
const developersInnerLi = document.querySelectorAll('.developers-inner-li');
const developersLi = document.querySelector('#sidebar-li-developers');


// Toggle 'Getting Started' section
gettingStartedLi.addEventListener('click', function () {
    gettingStartedLi.classList.toggle('hide-after');

    // Toggle the 'd-none' class for 'Getting Started' inner items
    gettingStartedInnerLi.forEach(function (element) {
        element.classList.toggle('d-none');
    });

});

// Toggle 'General' section
generalLi.addEventListener('click', function () {
    this.classList.toggle('hide-after');

    // Toggle the 'd-none' class for 'General' inner items
    generalInnerLi.forEach(function (element) {
        element.classList.toggle('d-none');
    });

});

// Toggle 'Configuration' section
configurationLi.addEventListener('click', function () {
    this.classList.toggle('hide-after');

    // Toggle the 'd-none' class for 'Configuration' inner items
    configurationInnerLi.forEach(function (element) {
        element.classList.toggle('d-none');
    });

});

// Toggle 'Developers' section
developersLi.addEventListener('click', function () {
    this.classList.toggle('hide-after');

    // Toggle the 'd-none' class for 'Developers' inner items
    developersInnerLi.forEach(function (element) {
        element.classList.toggle('d-none');
    });

});