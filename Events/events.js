console.log("conected");
// FADING OUT
// $("button").on("click", function(){
//     $('div').fadeOut(1000, function(){
//         $(this).remove();
//         console.log("fade completed and divs removed!");
//     })
// });

// FADING IN
// $("button").on("click", function(){
//     $('div').fadeIn(1000, function(){
//         // $(this).remove();
//         console.log("fade in completed!");
//     })
// });


// TOGGLING FADE
// $("button").on("click", function(){
//     $('div').fadeToggle(500, function(){
//         // $(this).remove();
//         console.log("fade in completed!");
//     })
// });


// SLIDEDOWN
// $("button").on("click", function(){
//     $('div').slideDown() // but div's have to be set to display:none
// });

// SLIDEUP
// $("button").on("click", function(){
//     $('div').slideDown() // but div's have to be displayed
// });


// SLIDE TOGGLE
$("button").on("click", function(){
    $('div').slideToggle(1000, function(){
        console.log("slide is completed!");
    })
});
