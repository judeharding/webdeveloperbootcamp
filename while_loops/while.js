// alert("testing from whilejs");

// print all nubers between -10 and 19
console.log("print all nubers between -10 and 19");
var counter = -10;

while (counter < 20) {
    console.log("counter is " + counter);
    counter++;
}

// print all even numbers between 10 and 40
console.log("print all even numbers between 10 and 40");
var evens = 10;

while (evens < 41) {
    console.log("evens are " + evens);
    evens = evens+2;
    // break;
}

// print all odd numbers between 300 and 333
console.log("print all odd numbers between 300 and 333");
var odds = 300;

while (odds < 334) {
    if (odds % 2 !==0) {
        console.log("odds are " + odds);
    }
    odds ++;
}

// print all numbers divisible by 5 and 3 between 5 and 50
console.log("print all numbers divisible by 5 and 3 between 5 and 50");
var x = 5

while (x < 50) {
    if (x % 5 == 0) {
        console.log("x is divisible by 5 " + x);
    } else if (x % 3 == 0) {
        console.log(" x is divisible by 3 " + x);
    }

    x = x + 1;
}
console.log("OR...  ");
var x = 5

while (x <= 50) {
    if (x % 5 === 0 && x % 3 === 0) {
        console.log("x is divisible by 5 AND 3  " + x);
    }
    x = x + 1;
}
