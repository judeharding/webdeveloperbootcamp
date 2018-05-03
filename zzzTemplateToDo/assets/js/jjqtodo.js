console.log("connected!!!");


// // check off specific todos by strike thru OLD WAY
// $("li").click(function(){
//     // if it is gray turn it black
//     if ($(this).css("color") === "rgb(128, 128, 128)") {
//         // $(this).css("color", "black");
//     $(this).css({
//         color: "black",
//         textDecoration: "none"
//     });
//     } else {
//         // if it is black turn it gray
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }
// });


// // check off specific todos by strike thru NEW WAY but does not work for new todos
// $("li").click(function(){
//     $(this).toggleClass("completed");
// });

// NOW handles all NEW and OLD lis
$("ul").on("click", "li", function(){ //adds the listener to the UL and not the LI
    $(this).toggleClass("completed");
});

// click on XX to delete todo
$("ul").on("click", "span", function(event){ // now works on newly added li's and their span
    console.log("clicked on a span and removed");
    $(this).parent().fadeOut(500, function(){ // .parent targets the LI not the SPAN
        $(this).remove(); // is a callback to remove AFTER the fadeout
    });
    event.stopPropagation(); // jquery method that prevents bubbling up to ul, container and body

});

// adding new todo
$("input[type='text']").keypress(function(event){
    // console.log("you pressed a key");
    if (event.which === 13) {
        // console.log("you hit enter");
        // stuffs text entered into a variable
        todoText = $(this).val();
        // remove data from field
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span>XX </span>" + todoText + "</li>")
    }
});
