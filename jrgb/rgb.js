
// console.log("rgb js");

// var colors = [  //psuedo code
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]
var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn"); refactored
// var hardBtn = document.querySelector("#hardBtn"); refactored
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    // mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }

    // square listeners
    for (var i = 0; i < squares.length; i++) {
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

    // picks colors
    reset();


} //init




function reset(){
    // generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // pick new randome color
    pickedColor = pickColor();
    // change color display to match new picked colors
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
})

// REFACTORED above
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numberOfSquares = 3;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     // turn off the bottom 3 color blocks
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//
//     }
// });
// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numberOfSquares = 6;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     // turn off the bottom 3 color blocks
//     for (var i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
// });

resetButton.addEventListener("click", function(){
    // // generate all new colors
    // colors = generateRandomColors(numberOfSquares);
    // // pick new randome color
    // pickedColor = pickColor();
    // // change color display to match new picked colors
    // colorDisplay.textContent = pickedColor;
    // this.textContent = "New Colors";
    //
    // messageDisplay.textContent = "";
    // // change colors of squares
    // for (var i = 0; i < squares.length; i++) {
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
    reset();
})

colorDisplay.textContent = pickedColor;



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
