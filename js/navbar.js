var navBar = document.getElementById("nav");
var navMenu = document.getElementById('nav-menu');
var navMenuToggle = document.getElementById('nav-toggle');
var navLinks = document.getElementsByClassName('nav-link');

var sticky = navBar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
}

window.addEventListener('scroll', stickyNavbar);

//Function for expanding menu with toggle button. For Mobile format
navMenuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('expanded');
});


//Expands menu from current position in middle.
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        navMenu.classList.toggle('expanded');
    });
}