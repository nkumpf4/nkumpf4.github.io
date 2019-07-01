var navBar = document.getElementById('nav-bar');
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
    navBar.classList.toggle('expanded');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('active');
    }
});

//Expands menu from current position in middle.
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        navBar.classList.toggle('expanded');
        for (var j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove('current');
            navLinks[j].classList.toggle('active');
        }
        this.classList.add('current');
    });
}