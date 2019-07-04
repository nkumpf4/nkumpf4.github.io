window.addEventListener('scroll', trackScroll);

// Get the navbar
var navBar = document.getElementById("nav");

function trackScroll() {
    var navLinks = document.getElementsByClassName("nav-link");
    var extraHeight = ((window.innerHeight || document.documentElement.clientHeight) / 2);
    var aboutHeight = document.getElementById("about").offsetTop;
    var skillsHeight = document.getElementById("skills").offsetTop;
    var experienceHeight = document.getElementById("experience").offsetTop;
    var workHeight = document.getElementById("work").offsetTop;
    var contactHeight = document.getElementById("contact").offsetTop;

    if ((window.pageYOffset + extraHeight) >= contactHeight) {
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("current");
        }
        navLinks[4].classList.add("current");
    } else if ((window.pageYOffset + extraHeight) >= workHeight) {
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("current");
        }
        navLinks[3].classList.add("current");
    } else if ((window.pageYOffset + extraHeight) >= experienceHeight) {
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("current");
        }
        navLinks[2].classList.add("current");
    } else if ((window.pageYOffset + extraHeight) >= skillsHeight) {
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("current");
        }
        navLinks[1].classList.add("current");
    } else if ((window.pageYOffset + extraHeight) >= aboutHeight) {
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("current");
        }
        navLinks[0].classList.add("current");
    } else {
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("current");
        }
    }

}