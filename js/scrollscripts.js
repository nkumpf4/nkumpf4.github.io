window.onscroll = function () {
    stickyNavbar();
    trackScroll();
};

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}





// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function trackScroll() {
    var navlinks = document.getElementsByClassName("navlink");

    var extraHeight = ((window.innerHeight || document.documentElement.clientHeight) / 2);

    // var panels = document.getElementsByClassName("panel");
    // for (var i = 0; i < navlinks.length; i++) {
    //     if ((window.pageYOffset + extraHeight) >= panels[i].offsetTop)  {
    //             for (var j = i; j < )

    //             navlinks[i].classList.add("current");
    //         }
    //     }


    var aboutHeight = document.getElementById("about").offsetTop;
    var skillsHeight = document.getElementById("skills").offsetTop;
    var experienceHeight = document.getElementById("experience").offsetTop;
    var workHeight = document.getElementById("work").offsetTop;
    var contactHeight = document.getElementById("contact").offsetTop;

    if ((window.pageYOffset + extraHeight) >= contactHeight) {
        for (var i = 0; i < navlinks.length; i++) {
            navlinks[i].classList.remove("current");
        }
        navlinks[4].classList.add("current");
    } else if ((window.pageYOffset + extraHeight) >= workHeight) {
        for (var i = 0; i < navlinks.length; i++) {
            navlinks[i].classList.remove("current");
        }
        navlinks[3].classList.add("current");
    } else if ((window.pageYOffset + extraHeight) >= experienceHeight) {
        for (var i = 0; i < navlinks.length; i++) {
            navlinks[i].classList.remove("current");
        }
        navlinks[2].classList.add("current");
    } else if ((window.pageYOffset + extraHeight) >= skillsHeight) {
        for (var i = 0; i < navlinks.length; i++) {
            navlinks[i].classList.remove("current");
        }
        navlinks[1].classList.add("current");
    } else if ((window.pageYOffset + extraHeight) >= aboutHeight) {
        for (var i = 0; i < navlinks.length; i++) {
            navlinks[i].classList.remove("current");
        }
        navlinks[0].classList.add("current");
    } else {
        for (var i = 0; i < navlinks.length; i++) {
            navlinks[i].classList.remove("current");
        }
    }

}