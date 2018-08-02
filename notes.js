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


TODO
	html will hold:
		page structure
		folder structures
	jquery will hold:
		.on()
		.keypress()
		fades and slides
		selecting
		.parent()
		.append() can take a STRING of html and append it
		creating new elements
		event delegations
	css will hold:
		paddings
		font
		floats
		margins
		fonatawesome
		box shadows
		gradients
		transitions

#211  BACKEND
	www.xxx.net = 23.175.23.178 is the actual unique id for a website
	2 types of sites
		STATIC - built server side and sent via html/css/js to us but it is the same everytime
			vs
		DYNAMIC - cnn is dynamic b/c you get something different every time
			Generic stack = backend lang -> server -> database
							backend = ruby, scalla java php python  javascript
							database = mysql
							server = nginx or backbone

			we are going to use:
				nodejs
				express framework
				mongdb db

			request / response cycle is how the web works




#223
	terminal command line commands
		ls = list
		cd = change directory
		cd .. = back up one level
		few letters + tab = shortcut to long file or folder names
		ls dirname (ls colors) = files in that directory without you being in that directory
		touch filename.txt/html/css/js/etc = creates a new file in your current directory
		mkdir foldername = makes a new folder in the directory you are in
		rm filename = deletes a specific file
		rm -rf foldername =  (rf is a flag that means recursive force - deletes any subdirectories too)


#224
	what is node?
		node.js is a way to write js code on the SERVER side

	why learn it?
		popular
		js
		good libraries
		high performance
	node console
		in the terminal on a command line, just type node.  you will get > indicating you are using node for serverside js
			you will get a REPL (read, evaluate, print and loop)
		to quit, hit ctrl c twice

		run a file in node
			node xxx.js

// simple  node example
			function echo (str, num){
				for (var i = 0; i < num; i++) {
				console.log(str);
				}
			}

			echo("hello", 3);
			echo("tater tot", 4);
// #2
			function average(scores){
				//add scores together
				var total = 0;
				scores.forEach(function(score){
					total +=score;
				});
				//divide by total number of scores
				var avg = total/scores.length;
				// round average
				return Math.round(avg);
			}

			console.log("avg score for math");
			var scores = [90, 98, 89, 100, 100, 86, 94];
			console.log(average(scores));

			console.log("avg score for science");
			var scores2 = [40, 65, 77, 8, 80, 54, 73, 63, 95, 49];
			console.log(average(scores2));




// node npm
	popular script package manager
	on the front end, you use a script tag to include a library
	on the back end, you use npm to include a library b/c there is no html
		Use npm to install, share, and distribute code; manage dependencies in your projects; and share & receive feedback with others.
		packages = libraries
GETTING STARTED

	1.), thru terminal, you make a new directory for your project and CHANGE into it.
	2.), thru terminal, you NPM INIT  a node package and state that your ENTRY POINT is app.js
		(it will take the npm code and put in a NPM_MODULES directory on your machine)
		(you should see the package.json file now)
	3.), touch your app.js file
	4.), thru terminal, NPM INSTALL EXPRESS -- SAVE
	5.) - thru terminal, you NPM INSTALL EJS --SAVE
		(or you can just terminal npm install express mongoose body-parser ejs --save)
	6.), thru the js file, you
		var	express 	= require("express"), //framework
			app 		= express(), // to run express and save it to a variable called app - app.get or app.post, etc...
			mongoose 	= require("mongoose"), //mongodb object modeling tool
			bodyParser 	= require("body-parser"); // works with express to parse json strings for POST requests

	7.), thru the js file, you can conlog the var to see it work (since you do not have access to an html file)
	8.), then you:
		app.set("view engine", "ejs") // simple templating language that lets you generate HTML with plain JavaScript.
		app.use(express.static("public")); // serve custom stylesheet
		app.use(bodyParser.urlencoded({extended: true})); // allowes express to read thebody then parse that into json objects
	9.), you define the root
		app.get("/", function(req, res){
			res.send("hi there.  welcome to my assignment!");
		});
	10.), make sure you have a "listener" at the bottom of your app.js file
		// tell Express to listen for requests (start server)
		app.listen(process.env.PORT, process.env.IP, function(){
			console.log("server has started!!!");
		});
		// like listening for port 3000 except for cloud9

	11.), start adding your route pages like:
		app.get("/campgrounds", function(req, res){
			res.render("campgrounds");
		});
		(note that the campgrounds.ejs should be located off the root)
	12.) - add your partials directory in the VIEWS folder and create your header and footer includes
		in your header, add the bootstrap css cdn
		in your footer, add a p-tag for copyright (just to make sure it is working)
	13.) - you need to add your POST route.  ex.
			app.post("/campgrounds", function(req, res){
				// get data from form and add to campgrounds array
				res.send("You hit the POST route...");
				// redirect to campgrounds page
			});
			// you can use POSTMAN app to test your post requests
	14.) - npm install bodyparser --SAVE
		and include it as a var on the app.js page  var bodyParser = require("body-parser");
		then use it - app.use(bodyParser.urlencoded({extended: true}));




// APP.JS LOOKS LIKE THIS:
// console.log("new note from app.js");
//
// var express = require("express");
// var app = express();
//
// // ==========
// // ROUTES
// // ==========
//
// app.get("/", function(req, res){
//    res.send("welcome to the home page");
// });
//
//
//
// // ==========
// // LISTENER
// // ==========
//
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log(" Server Is Listening ");
// })

// EXPRESS

	express is framework
	a framework is a library that has inversion control
	a library is something that you call on to do something
	a framework is like a "wizard" where a lot of the work is already done and you develope the hard stuff

	// ===========
	// ROUTES
	// ===========
	// "/" = "hi there!"
	app.get("/", function(req, res){
		res.send("hi there!");
	});

	// "/bye" = "goodbye!"
	app.get("/bye", function(req, res){
		res.send("goodbye");
	});

	// "/*" = "splat!"
	app.get("/*", function(req, res){
		res.send("you are a star");
	});

	// PS  Order of routes matters.  if the splat is first, none of the other routes will work b/c once a route hits, all else stops


	// Route parameters or paths variables or route variables / uses a pattern like
	// app.get("/x/subname/comments/id/title", function(req, res){
	app.get("/x/:subname/", function(req, res){
		res.send("welcome to a subreddit");
	});

	// allows for any subname, with comments any ide and any title
	app.get("/x/:subname/comments/:id/:title/", function(req, res){
		res.send("welcome to a subreddit");
	});

	// logs what subname was requested
	app.get("/x/:subname/comments/:id/:title/", function(req, res){
		// console.log(req.params);
		var subname = req.params.subname;
		res.send("welcome to a " + subname.toUpper() + " subreddit");
	});





// NPM init and json

	the package.json file contains meta data about the application or package.
	we can create our own package.json via typing npm init in our working folder.
			it will ask a series of questions before creating the package.json files
				but it will not have any dependencies yet.  that happens when we "npm install express --save"
					the --save will add the package being installed to our package.json DEPENDINCIES section


// EJS SECTION - Intermediate Express
	what is ejs? // simple templating language that lets you generate HTML with plain JavaScript.
		it lets us embed variables, loops and js code inside of html
		the template (a template is a dynamic html) ejs files will need to be stored in a VIEWS folder (as that is what ejs is looking for)
			note - the VIEWS folder is automatically served up.  If you want to include any OTHER folder, you have to go to the app.js and tell it.
				under the VAR statements, add app.use(express.static("FOLDERNAME")); // then add the <link rel="stylesheet" href="app.css"> tag to each page
		ejs enables us to have dynamic templates
		you will need to npm install ejs --save
		things can be sent back to the user via ejs files in the VIEWS directory.
		it is done with res.render("file.ejs") on the app.js file
		<%= xxx %> is treated as javascript code first then returned as html on an ejs file based on data from the user
			will be found on the ejs file.  BUT the data will come from the app.js file routes
			you will need to:
				app.get("/inlove/ :thing", function(req, res){
					var thing = req.params.thing;
					res.render("xxx.ejs", {thingVarFromTheEjsPage: thing});
				});


		template logic gets added to the html/ejs file.
		EACH LINE is wrapped in <%= %>

		"partials" are sections of code that you include to create a full html file.
			an html page has 3 sections -- doctype, head/title and body tags

		when working with POST requests, you will need to npm install body-parser --save, then require it at the top of the app.js file


// API's
	ways for you to interact with other sites thru CODE
	how do they work?
		endpoints = when you get data backend.  the data has no structure.  it is either xml (extended markup lang) or json (js obj notation)
			both are in key/value pairs

	in terminal, type curl http://www.google.com and you will see the code

	NPM INSTALL request
	then go to your js file and enter:
	var request = require('request');

	request('http://www.google.com', function (error, response, body) {
		console.log('error:', error); // Print the error if one occurred
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		console.log('body:', body); // Print the HTML for the Google homepage.
	});


I THINK that the omdbapi free website is down.  can not get 255 to work


starting section 27 - lesson 261

DATABASES
	sql vs no-sql
	a database is a collection of information with an interface
	sql = relational databases
	vs
	no-sql = non-relational databases (BSON = Bianary JS Object Notation)

	SQL  (relational)
	SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
	FROM Orders
	INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

			Different Types of SQL JOINs
			Here are the different types of the JOINs in SQL:

			(INNER) JOIN: Returns records that have matching values in both tables
			LEFT (OUTER) JOIN: Return all records from the left table, and the matched records from the right table
			RIGHT (OUTER) JOIN: Return all records from the right table, and the matched records from the left table
			FULL (OUTER) JOIN: Return all records when there is a match in either left or right table

	NO SQL (non-relational)
	//no tables but BSON - VERY FLEXIBLE
	{
		name: "mary",
		age: 24,
		city: "clt",
		comments: [
			{text: "come visit montana"};
			{text: "i love puppies"}
		],
		favColor: "purple"
	}


	MONGODB is a no-sql database and non-relational
	it is pretty popular and part of the MEAN stack
		MONGODB
		EXPRESS
		ANGULAR
		NODE

		(not using angular this time)


	MONGO COMMANDS

	mongod runs the deamon process in one session of terminal -- needed to use mongo
	mongo runs the mongo shell in another session of terminal -- like a js console
	help shows the common mongo commands
	show dbs lists all of the databases -- there are 2 defaults, admin and local
	use dbname -- is used to create or use a database
	insert collectionname -- is used to create or use a table w/in the db aka db.dogs.insert() //db is the db we are on (demo), dogs is the collection and insert is the command to insert a object
	show collections - will return all of the "tables"
	find = db.collectionname.find() // returns all of the records in the collection
	(ps -- mongo automatically adds an unique id for each record)
	update -- db.dogs.update({name: "rusty"}, $set: {breed: "poodle", isCute: "true"})

	remove --db.dogs.remove({breed: "poodle"}) //removes ALL poodles
		     db.collection.remove({}, {justOne: true}) // removes the first ONE
			 db.tblname.drop() // removes all the test data from your table


	C create
	R read
	U update
	D delete


MONGOOSE - mongo object modeling for node js
	tool that is downloaded with npm helps us interact with mongodb
	object data mapper -- a way to enter js into mongo


To Add MONGOOSE
	1.)  install and configure MONGOOSE
	2.)  setup campground model
	3.)  use campground model inside our routes

	v2 terminal npm install mongoose --SAVE  (check your json file for mongoose)
	on your app.js page, var mongoose = require("mongoose");
	then connect mongoose to a db -- mongoose.connect("mongodb://localhost/yelp_camp"); //either runs the db or creates the db and then runs it
	still in the app.js, add the schema
	// SCHEMA SETUP
		var campgroundSchema = new mongoose.Schema({
		name: String,
		image: String
		});

	then add the model
		var Campground = mongoose.model("Campground", campgroundSchema); // makes a model that

	you can test it with:
		Campground.create(
			{
				name: "Salmon Creek",
				image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"
			}, function(err, campground){
				if (err) {
					console.log(err);
				} else {
					console.log("Newly Created Campground :");
					console.log(campground);
				}
			}
		);
		then in mongo, type show dbs (and you should see your new db)
			then type use newdbname (and it will switch to that db)
			then type show collections (to see the table)
			then type db.collectionname.find() (to see the data in the new table)


make sure that when you are grabbing an image url (hot linking), that you actually
get JUST THE IMAGE and not the webpage.  the webpage will cause your yelp_camp to
not display correctly.


RESTFUL ROUTE PATTERNS - CONVENTION AND ARCHITECTURE not required but recommended
	there are 7 "patterns"  https://cdn-images-1.medium.com/max/1000/1*slrwqTXKO6evtPn5YVWR2Q.png
	Representational State Transfer (REST) REST-compliant web services allow the
	requesting systems to access and manipulate textual representations of web resources
	by using a uniform and predefined set of stateless operations
	OR
	a mapping between HTTP routes and CRUD together

	name         url               verb        desc
	==================================================
	INDEX        /dogs             GET         Display a list of all dogs
 	NEW          /dogs/new         GET         Displays the FORM to make new record (ps -- MUST appear before the SHOW route)
	CREATE       /dogs             POST        Add new dog to db and redirects somewhere (is used in conjunction with the NEW route_
	SHOW         /dogs:id          GET         Show all the info on ONE record and
	EDIT		 /dogs/:id/edit	   GET	       Show edit form for one dog	Dog.findById()
	Update	     /dogs/:id	       PUT	       Update particular dog, then redirect somewhere	Dog.findByIdAndUpdate()
	Destroy	     /dogs/:id	       DELETE	   Delete a particular dog, then redirect somewhere


lecture 276

Found a space in the ahref of a link with ejs.  took 2 1/2 days to find the error.


	<p><%= blog.body.substring(0, 20) %>...</p> // for a blog post, the substring variable will only post the first 20 characters

	<div class="description">
		// <!--below shows all the body using the = sign - no markups
		<p><%= blog.body %></p>
		// below shows all the body using the - sign - with markups (but allows for sql injections)
		<p><%- blog.body %></p>
	</div>


html forms do not support PUT requests.  no reason why but they only support GET and POST requests.
	any PUT requests on an HTML form are created as GET requests and shows all the info in the url
	the work around is to change the html method back to POST and add ?_method=PUT before the closing ""
	ex <form class="ui form" action="/blogs/<%= blogs._id %>?_method=PUT" method="POST">
		then method_override will configure it in the app.js
		so npm/install npm install method-override --save
		do not forget to "REQUIRE method override" and to app.use(methodOverride("_method"));
	(PS - you can do a <form class="ui form" action="/blogs/<%= blogs._id %>" method="POST"> but it does not follow the RESTFUL pattern)



https://webdevbootcamp-judeharding.c9users.io/

RESTFUL ROUTES jpg https://codepen.io/urketadic/details/oZRdRN

HOW TO SANITIZE DATA ENTRIES
	takes input and removes any scripts

	npm install sanitizer --save


ASSOCIATIONS = relational database???
	one to one relationships
		one book - one publisher
		how to EMBED data for user and post thru mongo
		if you have a user schema and a posts schema and add the posts array to the user
			schema, you have ASSOCIATED the two through embedding data

		through object references
			User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
				if(err){
					console.log(err);
				} else {
					console.log(user);
				}
			});

		why use one over the other?
		





	one to many relationships
	many to many relationships
		students - classes





...
