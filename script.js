var css = document.querySelector("h3");
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        input1.value +
        ", " +
        input2.value +
        ")";
    css.textContent = body.style.background + ";";
};

input1.addEventListener("input", setGradient);
input2.addEventListener("input", setGradient);