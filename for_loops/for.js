// alert("testing from whilejs");

// print all nubers between -10 and 19
console.log("print all nubers between -10 and 19");
for (var i = -10; i < 20; i++) {
    console.log("counter is " + i);
}

console.log(" ");

// print all even numbers between 10 and 40
console.log("print all even numbers between 10 and 40");

for (var i = 10; i < 41; i=i+2) {
    console.log("evens are " + i);
}

console.log(" ");


// print all odd numbers between 300 and 333
console.log("print all odd numbers between 300 and 333");
for (var i = 300; i < 334; i++) {
    if (i % 2 !==0) {
        console.log("odds are " + i);
    }
}
console.log(" ");

// print all numbers divisible by 5 and 3 between 5 and 50
console.log("print all numbers divisible by 5 and 3 between 5 and 50");

var x = 5

while (x <= 50) {
    if (x % 5 === 0 && x % 3 === 0) {
        console.log("x is divisible by 5 AND 3  " + x);
    }
    x = x + 1;
}
for (var i = 5; i <=50; i++) {
    if (i % 3 === 0 && x % 5 === 0) {
        console.log("i is divisible by 5 AND 3  " + i);
    }
}
