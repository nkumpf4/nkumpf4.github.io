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
    if (navBar.style.height === '12em') {
        navBar.style.height = '3em';
    }
    else {
        navBar.style.height = '12em';
    }
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('active');
    }
});

//Expands menu from current position in middle.
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        for (var j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove('current');
            navLinks[j].classList.toggle('active');
        }
        this.classList.add('current');
        if (navBar.style.height === '12em') {
            navBar.style.height = '3em';
        }
        else {
            navBar.style.height = '12em';
        }
    });
}