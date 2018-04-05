console.log("test from jtogg");

// var btn = document.querySelector("button");
// var bkgrnd = document.querySelector("body");
// var isPurple = false;
//
//
//     btn.addEventListener("click", function(){ // this is an annomous function b/c we only use it here.  if we could use it somewhere else, we would write a separate named function and call it here.
//         if (isPurple) {
//             bkgrnd.style.background = "white";
//         } else {
//             bkgrnd.style.background = "pink";
//         }
//         isPurple = !isPurple; // negates the current background
//     });


var btn = document.querySelector("button");

btn.addEventListener("click", function(){ // this is an annomous function b/c we only use it here.  if we could use it somewhere else, we would write a separate named function and call it here.
    document.body.classList.toggle("purple");
});
