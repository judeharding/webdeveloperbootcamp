NOTES for JS

// cool google logo expand
// var logo = document.querySelector("#hplogo");
// setInterval(function(){
// 	logo.width+=5;
// }, 100)


PRIMATIVES
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


	FUNCTIONS - functions DO things... and RETURN answers AND IS REUSABLE WITH DIFFERENT INCOMING INFO
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

ARRAYS - a data structure taking data in a list and binding it via indexes
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


	ARRAYS FOREACH (rewatch #137)  // forEach can ONLY be used in an ARRAY
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


OBJECTS - another data structure (NOT A LIST but accessed via key/value pairs)

	var xxx = {
		key: "value",
		key: "value"
	};

	// objects don't have any built-in order, unlike arrays
	2 ways to extract data from an object
	console.log(xxx["key"]);
	OR
	console.log(xxx.key); (dot notation - BUT you can not use this if the property starts with a number, space or variable name)

	 INITIALIZE OBJECTS
	1.) // empty object then add key/values
	var xxx = {};
	xxx.name = "mike";
	xxx.city = "clt";

	2.) // all at once
	var xxx = {
		name: "mike",
		city: "clt"
	}

	3.) // create a new empty object
	var xxx = new OBJECT();
	xxx.name = "mike";
	xxx.city = "clt";

	AND you can have objects within other OBJECTS

	JS METHODS ARE FUNCTIONS INSIDE AN OBJECT.  so an object can have properties OR methods OR both

	var obj = {
		key1: value, // property
		key2: "Value", // property
		key3: ["xxx", "xxx"], //array
		meth: funct(x, y){ //method
			return x + y;
		}
	}
	obj.meth(5, 5); //returns 10

	NAMESPACING is when you have a function that can have different returns depending on the object.
	 so the speak "dog methods" can be reused by dogSpace and the speak "cat methods" can be reused by catSpace


	// ***** NOTE ***** UNDERSCORE.JS is a library of functions that we can use


THE DOM -- interface between the js and html and css  EVERYTHING IS A NODE

	to see any pages' DOM, console.dir(document);

	The process of DOM manipulatioin is SELECT THEN MANIPULATE
		so you write a selector then you apply styles -- all thru js
		ex	var h1 = document.querySelector("h1");  // selects
			h1.style.color = "pink";  // manipulates
		or
			var body = document.querySelector("body");
			var isBlue = false;

			setInterval(function(){
				if (isBlue) {
					body.style.background = "white";
				} else {
					body.style.background = "#3498db";
				}
				isBlue = !isBlue; // changes the background from false to true
			}, 1000);

	document.getElementByID();  // returns a single element
	document.getElementsByClassName();  // it returns a node list (NOT an array)
	document.getElementsByTagName(); // all HTML tags
	document.querySelector();  // its a CSS-style selector that returns only the FIRST match
	document.querySelectorAll(); // its a CSS-style selector that returns ALL the matches

	want to see all the properties available to an element?
		var xxx = document.getElementByID("idname");
		console.dir(xxx);  //will list ALL the properties available
		console.dir(xxx[0]);  //used if it returns more than one node for getElementsByClassName


		SELECTION PROCESS
		document.getElementByID("first");
		document.getElementsByClassName("special")[0];
		document.getElementsByTagName("p")[0];
		document.querySelector("#first");
		document.querySelectorAll("special")[0];
		document.querySelector("h1 + p"); // gives you the first paragraph after an h1

		MANIPULATION PROCESS
		var tag = document.getElementByID("first");

		tag.style.color = "blue";  // EVERYTHING ON THE RIGHT OF THE = IS A STRING B/C it is JS not CSS

		2 ways of grabbing/selecting the element content
		tag.textContent // will return all of the text in the tag var but not include the htmltags
		tag.textContent = "blah blah"; //changes the text in the HTMLvariable of tag
		or
		tag.innerHTML  //returns all of the stuff in the HTML including any structure like <strong> or <li> or <a>

		ATTRIBUTES -- things like src or href

		var xxx = document.getElementByID("first")
		xxx.getAttribute("href"); // will log the href in the var xxx
		xxx.setAttribute("href", "http://www.mmt.com"); // changes the href in the var xxx
		xxx.textContent = "link to mmt"; // changes the text in the var // xxx

		google demo

		var links = document.getElementsByTagName("a");

		for (var i = 0; i < links.length; i++) {
			console.log(links[i].getAttribute("href")); // list of all the links
			links[i].setAttribute("href", "http://www.bing.com"); // changes all of the links to bing
		}

	DOM EVENTS - making things interactive

	The process?
		1.)  select an element - btn click, hover, keypress, mouseover, etc
				var btn = document.querySelector("button");
		2.)  add an event listener
				button.addEventListener("click", function(){
					console.log("someone clicked the button");
				});

	var lis = document.querySelectorAll("li");

	for (var i = 0; i < lis.length; i++) {
		lis[i].addEventListener("click", function(){ // this is an annomous function b/c we only use it here.  if we could use it somewhere else, we would write a separate named function and call it here.
			this.style.color = "pink"
		});
	}

JQUERY
	DOM manipulation library (code that someone else wrote but we can use)

	debate
		for jquery
			shorter code for common methods
			easy to use
			cross platform support
			ajax

		against
			dom api not "broken"
			you can do it in vanilla
			performance is slower
			lots of dependencies

	2 ways to add jquery:
		<script type="text/javascript" src="cccc.js"></script> // locally
		OR
		<script type="text/javascript" src="https://code.jquery.com/jquery-e.1.4.js"></script>  // cdn hosted copy

		it is best to either write your own js or if you opt for the CDN jquery file, you can download them and put them in a LIB folder in your project

	in either case, for DOM manipulation, you FIRST select, THEN manipulate
		$("selectorGoesHere")


	Same mantra -- SELECT then MANIPULATE

	$(" selectorgoeshere ") = document.querySelectorAll(" xxx ")
	these below are all selectors :
	$("img");
	$(".sale");
	$("#bonus");
	$("li a");

	to manipulate, you can add .css(property, value) to the end of a selector like:
	$("img").css("border", "2bpx solid red");
	$(".sale");
	$("#bonus");
	$("li a");

	All references to CDN libraries are put in the HEAD in a script tag.
		then you can put a reference to the local js file before the close of the body tag.



	Common JQ methods
		val
		text
		attr
		html
		add
		remove
		toggle

	99% of the time, you can use these 3 common event methods
	.click()
	.keypress() or keydown() or keyup() //key press is best b/c it allows for SHIFT
	.on()

	// click method adds an event listener to ALL buttons
		$('button').click(function(){
			alert("someone clicked a button");
		});

	we can add an event listener to one element
		or a collection of elements
		and if we want to refer to an element that called, we use $(this).method

	// keypress method adds an event listener to the input field
	$("input[type='text']").keypress(function(){
		console.log('you pressed a key');
	});
	or
	$("input[type='text']").keypress(function(event){
		if (event) {
			console.log(event.which);
		}
		if (event.which === 13) {
			console.log("you hit ENTER");
		}
	});

	// on method is addEventListener but shorthand
	$('h1').on('click', function(){
		$("h1").css("color", "purple") // will change ALL h1's
		$(this).css("color", "purple") // will change only the h1 clicked
	});

	or

	$('button').on('mouseenter', function(){
		$(this).css("font-weight", "bold") // will change btn text on enter
	});









		.
