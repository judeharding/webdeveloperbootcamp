// console.log("testing from rps js");

    var plyr1 = document.querySelector("#plyr1");
    var plyr2 = document.getElementById("plyr2");
    // var plyr2 = document.getElementByID("plyr2");
    var reset = document.getElementById("reset");

    var p1Display = document.querySelector("#p1Display");
    var p2Display = document.querySelector("#p2Display");

    var plyr1Score = 0;
    var plyr2Score = 0;

    var gameOver = false;
    var winningScore = 5



    //playing to x games
    // var playingTo = document.querySelector("#playingTo").value;
    // var playTo = document.querySelector("#playTo");
    // playingTo.textContent = playTo;

    // function myFunction() {
    // var playingTo = document.querySelector("#playingTo").value;
    //     document.querySelector("playTo") = playingTo;
    // }



    if (true) {

    }
    plyr1.addEventListener("click", function(){
        if (!gameOver) { // if gameover is NOT true
            plyr1Score++; // add one to the player1 score
            if (plyr1Score === winningScore) {  //if player1 score = winningScore
                gameOver = true;  // you can't add anymore games
            }
            p1Display.textContent = plyr1Score;
        }

    });

    plyr2.addEventListener("click", function(){
        if (!gameOver) {
            plyr2Score++;
            if (plyr2Score === winningScore) {
                gameOver = true;
            }
            p2Display.textContent = plyr2Score;
        }
    });


    reset.addEventListener("click", function(){
        p1Display.textContent = plyr1Score = 0;
        p2Display.textContent = plyr2Score = 0;

    })
