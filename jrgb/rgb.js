// console.log("rgb js");

// var colors = [  //psuedo code
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]

var colors = generateRandomColors(6);
// var pickedColor;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");


resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(6);
    // pick new randome color
    pickedColor = pickColor();
    // change color display to match new picked colors
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";

})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial color to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares to figure out color clicked
    squares[i].addEventListener("click", function(){
        // grab color of clicked squares
        var clickedColor = this.style.backgroundColor;

        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "CORRECT!!!";
            resetButton.textContent = "Play Again???"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323"; // makes wrong color disappear
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    // loop thru all squares
    for (var i = 0; i < squares.length; i++) {
        // change each color to match winning color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // Math.floor(Math.random() * 6 + 1);
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; // to access one of the squares
}

function generateRandomColors(num){
    //make array
    var arr = [];

    // loop num timex
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }

    //return
    return arr;
}

function randomColor(){
    // pick a red from 0 - 255
    var r = Math.floor (Math.random() * 256);
    // pick a red from 0 - 255
    var g = Math.floor (Math.random() * 256);
    // pick a red from 0 - 255
    var b = Math.floor (Math.random() * 256);
    //formulate the "rgb(r, g, b)"

    return "rgb(" + r + ", " + g + ", " + b + ")";

}
