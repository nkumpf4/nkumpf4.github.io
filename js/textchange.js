

window.setInterval(changeText, 3000)

function changeText() {

    setTimeout(document.getElementById("whoami").innerHTML = "GERMAN MAJOR", 1000);
    setTimeout(document.getElementById("whoami").innerHTML = "TEST", 1000);
    
}