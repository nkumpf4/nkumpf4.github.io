function zoomSkyline(x) {
  var svg = document.getElementById("skyline");
  if (x.matches) {
    // If media query matches
    svg.setAttribute("viewBox", "2000 0 2000 300");
    console.log("test");
  } else {
    svg.setAttribute("viewBox", "0 0 6000 300");
  }
}

var x = window.matchMedia("(max-width: 1100px)");
zoomSkyline(x); // Call listener function at run time
x.addListener(zoomSkyline); // Attach listener function on state changes
