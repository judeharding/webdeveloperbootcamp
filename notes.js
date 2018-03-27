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
