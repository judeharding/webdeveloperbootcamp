console.log("hoverjs");

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}

// for counting all the events on the page - https://developer.mozilla.org/en-US/docs/Web/Events
document.querySelectorAll("table"); // show all of the tables.  are those the tables we want to count?  yes.

var trs = document.querySelectorAll("tr");

for (var i = 0; i < trs.length; i++) {
    // tds[i]
    console.log(trs.length - document.querySelectorAll("table").length); // to remove the headers
}
// for use on console only
document.querySelectorAll("tr").length - document.querySelectorAll("table").length
