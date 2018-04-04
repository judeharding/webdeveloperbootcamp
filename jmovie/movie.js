console.log("test from movie.js");

//
// var movie = [
//     title: {
//         mov1: "in bruges",
//         mov2: "frozen",
//         mov3: "mad max",
//         mov4: "les miz"
//     },
//     rating: {
//         star5: 5,
//         star45: 4.5,
//         star3: 3
//     }
//     hasWatched: {
//         havewatched: "you have watched ",
//         havenot: "you have not seen ",
//         haveseen: "you have seen "
//     }
// ];
//
// console.log(movie.hasWatched[1]);

// USED THE METHOD BELOW B/C it is a LIST of movies
var movies = [
    {
        title: "in burges",
        hasWatched: true,
        rating: 5
    },
    {
        title: "frozen",
        hasWatched: false,
        rating: 4.5
    },
];

movies.forEach(function(movie){
    var result = "you have ";
    if (movie.hasWatched) {
        result += " watched ";
    } else {
        result += " not watched ";
    }
    result += "\"" + movie.title + "\"" + " - " + movie.rating + " starts";
    console.log(result);
});
