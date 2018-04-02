NOTES for JS primatives

	// cool google logo expand
	var logo = document.querySelector("#hplogo");
	setInterval(function(){
		logo.width+=5;
	}, 100)


	5 primitive datatypes
		numbers - whole, fractional, negative,  modulus(remainder)
		strings - "text" or 'text' or "hi " + "jude"
		booleans - true/false
		null - value is nothing (color // has yet to be defined)
		undefined - value is nothing (var age; // no value YET)

	variables are containers which data is stored (primative datatypes) to recall later
	variable names:
	    camelCase
	    snake_case
	    kebob-case

	METHODS
	    alert(); // brings up a modal
	    prompt(); // gets data from a user
	    console.log(); // prints to the console only that can be stored in a var.  var name = prompt ("enter name")
	    comments
	    clear() // methods have() after them that come with js

	LOGIC & LOOPS
	Boolean logic evaluates to true or false.
	< > <= >= == === != !==
	=== & !== deal with coercion does value AND datatype

	Logic Operators
	&& //AND
	|| // or
	! // not

	Truthy & Falsey
		falsey values = false, 0, "", null, undefined, Nan
		EVERYTHING ELSE IS true

	CONDITIONALS
			if (true) {

			}
			-----
			if (true) {

			} else if (true) {

			}
			-----
			else {

			}

	WHILE LOOPS & FOR LOOPS.

	both can have if statements within them
	while loops while stmt with the counter within the braces
	for LOOPS for stmt with the counter in the conditional
		for(initialize; condition; counter)

					for (var i = 0; i < array.length; i++) {
						array[i]
					}
	for loops are shorter than while loops AND the variable init only exists inside the for loops


	FUNCTIONS
	Declarations vs Expressions
	declarations  = function funcName(){
						// some code

					}
	-----
	expressions = var funcName = function(){
						// some code
						// you can overwrite the funcName with anoter value and then loose this expression
					}



	Why use functions?  bits of reusable code that can be called multiple times

	first - declare a functions
	second - call it

	syntax for declaration is
		function funcnName (){
			// code
		}
	syntax for calling funciton is
		funcName();

	ARGUMENTS within functions
	how to write functions that can take inputs
	functions RETURN something.  RETURN captures the output of a function
		ONLY ONE thing is returned - if you don't specify a return, you will get UNDEFINED
			you can have multiple returns but only the first one is used (unless there is an if statment)
		ONCE you have a RETURN, nothing else happens after the return in that functions


	SCOPE
		variables within a function are different than outside the functions
		variables outside of a function are still accessable inside the function but its not true the other way arund
		inside the function can change the OUTSIDE variables unless you have VAR'd the variable INSIDE the function.
		vars created in a function are not accessable to other functions unless you are overwriting an outer var with a function that has been called

	HIGHER ORDER FUNCTIONS
	functions that take functions as an argument or return other FUNCTIONS

		ex
			function sing(){
				console.log("twinkle, twinkle...");
				console.log("little star...");
			}

			setInterval(sing, 2000); // setinterval takes 2 arguments the function name and time in ms.

	ARRAYS
	The FIRST data structure that stores data using js -  a group of related data
	(maybe a good way of storing records - flat file)

	var friends = ["mike", "marie", "carol"];  //0 indexed, comma separated list

	arrays created either
		var xxx = [];
		OR
		var xxx = new Array();
	they can hold all kinds of data, numbers, boolean, string, null
	they have a LENGTH property con.log(arrayname[arrayname.length]);  // will return UNDEFINED b/c the index number not the  actual number

	ARRAY METHODS
		push - ADDS to an array at the END - arrayname.push("xxx");
		pop - REMOVES the LAST element in an array - arrayname.pop();
		unshift - ADDS to an array at the BEGINNING - arrayname.unshift("xxx");
		shift - REMOVES from the BEGINNING of an array  - arrayname.shift();
		indexof - takes an argument and tries to find it in the array and return its index number - arrayname.indexOf("xxx"); // if multiple, returns the 1st instance - if not present, -1 returned
		slice - used to copy parts of an array - var yyy = arrayname.slice (1, 3); // starts at 1 and goes to 3 but not includes 3.  the original array remains the same

	NESTED ARRAYS
			var friendGroups = [
				["marie", "gwen", "hind"],
				["carol", "bkt", "leigh"],
				["peggy", "bobbie", "joan"]
			];

			console.log(friendGroups[2][0]); // will return peggy





// JQUERY $('document').ready() // can be replaced with
// 		window.setTimeout(function() {
// 		  // put all of your JS code from the lecture here
// 		}, 500);


	ARRAYS FOREACH
	can be used instead of a for loop
		var colors = ["red", "blue", "yellow", "green"];
		for (var i = 0; i < colors.length; i++) {
			console.log(colors[i]);
		}
	// OR
		var colors = ["red", "blue", "yellow", "green"];
		colors.forEach(function(color){
			console.log(color);
		}
		);
