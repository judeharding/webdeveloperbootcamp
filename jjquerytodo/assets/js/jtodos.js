console.log("connected js");

// check off to dos by clicking x
$("li").click(function(){
    // console.log("clicked li");
    // refactored into the if statement
    // $(this).css("color", "gray");
    // $(this).css("textDecoration", "line-through");


    // all the below is refactored with the css toggleClass
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     console.log("it is gray");
    //     // $(this).css("color", "black");
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // } else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    $(this).toggleClass("completed");
});
