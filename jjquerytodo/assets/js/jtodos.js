console.log("connected js");

// check off to dos by clicking x
// $("li").click(function(){  the .click function doesn't work with NEW li's
//     // console.log("clicked li");
//     // refactored into the if statement
//     // $(this).css("color", "gray");
//     // $(this).css("textDecoration", "line-through");
//
//
//     // all the below is refactored with the css toggleClass
//     // if ($(this).css("color") === "rgb(128, 128, 128)") {
//     //     console.log("it is gray");
//     //     // $(this).css("color", "black");
//     //     $(this).css({
//     //         color: "black",
//     //         textDecoration: "none"
//     //     });
//     // } else {
//     //     $(this).css({
//     //         color: "gray",
//     //         textDecoration: "line-through"
//     //     });
//     // }
//     $(this).toggleClass("completed");
// });

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete // todo:
// $("span").click(function(e){ // needs to change to ON instead of click for NEW lis
$("ul").on("click", "span", function(e){
    console.log("clicked on x");
    $(this).parent().fadeOut(500, function(){   // fades out li
        $(this).remove();   // removes entire li so you don't have 1000 hidden lis
    });
    e.stopPropagation(); // prevents bubbling up
});

$("input[type='text']").keypress(function(e){
    console.log("entering todo");
    if (e.which === 13) {
        console.log("enter clicked"); // checking for the enter key
        console.log($(this).val());
        var toDoText = $(this).val();  // grabbing the todo text
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>  " + toDoText + "</li>"); // appends the new todo at the bottom of the ul
        $(this).val(""); // clears out the input field

    }
});
