/*========== SCROLL REVEAL ANIMATION ==========*/
window.sr =  (0, scrollreveal__WEBPACK_IMPORTED_MODULE_6__["default"])({
    distance: '60px',
    duration: 2800,
    reset: false
});

sr.reveal(".animate_top", {
    origin: 'top',
    interval: 100
});
sr.reveal(".animate_left", {
    origin: 'left',
    interval: 100
});
sr.reveal(".animate_right", {
    origin: 'right',
    interval: 100
}); 

// Project Tab\n\n
var projectsWrapper = document.querySelector('.projects-wrapper');
var projectTabBTN = document.querySelectorAll('.project-tab-btn');
var iso = new (isotope_layout__WEBPACK_IMPORTED_MODULE_7___default())(projectsWrapper, {// options
    itemSelector: '.project-item',
    masonry: {
        columnWidth: '.project-sizer'
    }
});

projectTabBTN.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var selector = btn.getAttribute('data-filter');
        iso.arrange({
            filter: selector
        });
    });
}); 

// Document Loaded
document.addEventListener('DOMContentLoaded', function () {});
//# sourceURL=webpack:
//Base_Tailwind/./src/js/index.js?");