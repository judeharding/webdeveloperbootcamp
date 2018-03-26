console.log("consript working");

// var age = prompt("enter in your age "); my answer

var age = Number(prompt("what is your age?")); //get the age and convert to a number


// if age is negative
if (age <=0) {
    console.log("ERROR - you aren't alive yet");
}

// if age is 21
if (age === 21) {
    console.log("happy 21st bd");
}


// if age is odd
// if (age % 2) {    my answer
if (age % 2 !==0) {
    console.log("your age is odd");
}

// if age is a perfect square
// if (Math.sqrt(age)) {  my answer
if (age % Math.sqrt(age)===0) {
    console.log("perfect square");
}
