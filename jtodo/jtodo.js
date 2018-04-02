// console.log("msg from jtodo");

// var todos = [];
//
// var input = prompt("What would you like to do?  New, List or Quit");
//
// while (input !== "quit") {
//     // handle input
//     if (input === "list") {
//         console.log(todos);
//     } else if (input === "new") {
//         // ask for new todo
//         var newTodo = prompt("Enter new Todo");
//         // add new to todos List
//         todos.push(newTodo);
//     }
//     // ask again for input
//     input = prompt("What would you like to do?  New, List or Quit");
//
// }
// console.log("Ok, you quit the app");


var todos = [];

var input = prompt("What would you like to do?  New, List or Quit");

while (input !== "quit") {
    // handle input
    if (input === "list") {
        listTodo();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    // ask again for input
    input = prompt("What would you like to do?  New, List or Quit");

}
console.log("Ok, you quit the app");

function addTodo(){
    // ask for new todo
    var newTodo = prompt("Enter new Todo");
    // add new to todos List
    todos.push(newTodo);
}
function deleteTodo(){
    var deleteTodo = prompt("Enter in number to delete");
    // todos.pop(deleteTodo); WRONG -- should have used splice
    todos.splice(deleteTodo, 1);
}
function listTodo(){
    todos.forEach(function(todo, index){
        console.log("**********");
        console.log(index + ": " + todo);
        console.log("**********");
        console.log("");
    });
}
