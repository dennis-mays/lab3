//
// Track mouse and update coordinates
//
var pos = document.querySelector(".mouse-pos");
var pageX = document.getElementById("x");
var pageY = document.getElementById("y");

function updateDisplay(event) {
    pageX.innerText = event.pageX;
    pageY.innerText = event.pageY;
}

pos.addEventListener("mousemove", updateDisplay, false);

//
// Move circle to mouse position on click event
//
var dot = document.getElementById("dot");

document.body.addEventListener(
    "click",
    (e) => {
        dot.style.transform = `translateY(${e.clientY - 130}px)`;
        dot.style.transform += `translateX(${e.clientX - 25}px)`;
        dot.style.background = "#00F";
        dot.style.opacity = 1;
        console.log(`Event type: ${e.type}`);
    },
    false
);

//
// Change styling when mouse is positioned on button
//
var btn = document.getElementById("button");

function updateButtonIn(btnEvent) {
    btn.style.background = "#fff";
    btn.style.border = "2px solid #fff";
    btn.style.color = "#773a4d";
    btn.style.boxShadow = "3px 3px";
}

function updateButtonOut(btnEvent) {
    btn.style.background = "#773a4d";
    btn.style.border = "2px solid #773a4d";
    btn.style.color = "#fafaf8";
    btn.style.boxShadow = "0px 0px";
}

btn.addEventListener("mouseover", updateButtonIn, false);
btn.addEventListener("mouseout", updateButtonOut, false);
