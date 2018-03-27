NOTES for JS primatives

cool google logo expand

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

WHILE LOOPS
