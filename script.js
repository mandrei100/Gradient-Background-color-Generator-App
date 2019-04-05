var css = document.querySelector("h3");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var body = document.getElementById("gradient");


function setGradient() {
    body.style.background =
    "linear-gradient(to right, " 
    + left.value 
    + ", " 
    + right.value 
    + ")";
    css.textContent = body.style.background + ';';
}

left.addEventListener("input", setGradient);
right.addEventListener("input", setGradient);