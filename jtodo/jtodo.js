// console.log("msg from jtodo");

var todos = [];

var input = prompt("What would you like to do?  New, List or Quit");

while (input !== "quit") {
    // handle input
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        // ask for new todo
        var newTodo = prompt("Enter new Todo");
        // add new to todos List
        todos.push(newTodo);
    }

    // ask again for input
    input = prompt("What would you like to do?  New, List or Quit");

}
console.log("Ok, you quit the app");
