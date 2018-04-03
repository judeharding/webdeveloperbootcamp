// define a regular function that you will call from the console

var nums = [2, 3, 4, 5];
nums.forEach(function(num){
	console.log(num);
})
// will return 2, 3, 4, 5


// =========
// VERSION 1 -- defining MY OWN forEach
// =========
function myForEach(arr, func){
	// to do anything for every item in an array, you need to have a LOOP
	for (var i = 0; i < arr.length; i++) {
		// call the function for each item in the array
		func(arr[i]);
	}
}

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
myForEach(colors, function(color){
	console.log(color);
});

// =========
// VERSION 2 -- takes ANY type of array - colors, animals, numbers, etc..
// =========
Array.prototype.myForEach = function(func){
  for(var i = 0; i < this.length; i++) {
   func(this[i]);
  }
};

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
colors.myForEach(function(color){
	console.log(color);
});
