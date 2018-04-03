console.log("testing from js");

// CHECK ARRAY PROBLEM SET SOLUTION FOR BOOTCAMP ANSWERS


//PRINT_REVERSE - 1st answer WORKING
// var num = ["1", "2", "3", "4"];
// num.reverse();
//
// console.log(num);


function printArray(arr){
    for (var i = arr.length -1; i>=0; i--) {
        console.log(arr[i]);
    }
}
printArray([3, 2, 1]);


// **********
//IS_UNIFORM problem - NOT WORKING

// var uniform = [1, 2, 1, 4];
//
// var first = uniform[0];
//
// // console.log(first);
//
// for (var i = 0; i < uniform.length; i++) {
//         if (first === uniform[i]) {
//             console.log("true");
//             i++;
//         } else {
//             console.log("false");
//         }
//     }

function isUni(arr){
    var first = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}



// **********
// SUM array_problem_set - WORKING but hard coded
    // var summary = [3, 2, 3];
    //
    // sum = 0;
    //
    // for (var i = 0; i < summary.length; i++) {
    //     sum = sum + summary[i];
    // }
    // console.log(sum);

// another answer that is REUSABLE

function sumArray(arr){
    var total = 0;
    arr.forEach(function(ele){
        total += ele;
    });
    return total;
}



// **********
// MAX ARRAY - WORKING
    // var a = [9, 20, 3];
    //
    // var max = 0;
    //
    // for (var i = 0; i < a.length; i++) {
    //     if (a[i] > max) {
    //         max = a[i];
    //     }
    // }
    // console.log("max number is " + max);


    function max(arr){
        var max = arr[0];
        for (var i = 0; i < array.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }
    return max;
