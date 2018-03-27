console.log("working func");

// working way # 1
function isEven(x){
    if (x % 2 ===0) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}
// working way # 2  MUCH SHORTER
function isEven(num){
    return num % 2 ===0;
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);

// -----
// mine is wrong
// function factorial(x){
//     if (x == 0) {
//         console.log("factorial of zero is 1");
//         return 1;
//     } else {
//         var answer = x * (x-1);
//         x--;
//     }
//     console.log(" the factorial of X is " + answer);
//     return x;
// }
function factorial(num){
    //define result variables
    var result = 1;
    //calculate
    for (var i = 0; i <= num; i++) {
        // result = result * i;
        result *=i;
    }
    //return result variable
    return result;
}

factorial(5);
factorial(2);
factorial(10);
factorial(0);


// -----
function kebabToSnake(str){
    // replace all '-' with '_'
    var newStr = str.replace(/-/g , "_");
    // return result
}
