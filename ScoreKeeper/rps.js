// console.log("testing from rps js");

    var plyr1 = document.querySelector("#plyr1");
    var plyr2 = document.getElementById("plyr2");
    // var plyr2 = document.getElementByID("plyr2");
    var resetBtn = document.getElementById("reset");
    var numInput = document.querySelector("input");
    var winningScoreDisplay = document.querySelector("p span");

    var p1Display = document.querySelector("#p1Display");
    var p2Display = document.querySelector("#p2Display");

    var plyr1Score = 0;
    var plyr2Score = 0;

    var gameOver = false;
    var winningScore = 5


    plyr1.addEventListener("click", function(){
        if (!gameOver) { // if gameover is NOT true
            plyr1Score++; // add one to the player1 score
            if (plyr1Score === winningScore) {  //if player1 score = winningScore
                p1Display.classList.add("winner");
                gameOver = true;  // you can't add anymore games
            }
            p1Display.textContent = plyr1Score;
        }

    });

    plyr2.addEventListener("click", function(){
        if (!gameOver) {
            plyr2Score++;
            if (plyr2Score === winningScore) {
                p2Display.classList.add("winner");
                gameOver = true;
            }
            p2Display.textContent = plyr2Score;
        }
    });


    resetBtn.addEventListener("click", function(){
        reset();
        // console.log("reset clicked");
    });

    function reset(){
        plyr1Score = 0;
        p1Display.textContent = plyr1Score;
        p1Display.classList.remove("winner");

        plyr2Score = 0;
        p2Display.textContent = plyr2Score;
        p2Display.classList.remove("winner");
        gameOver = false;
    }

    numInput.addEventListener("change", function(){
        winningScoreDisplay.textContent = numInput.value;
        winningScore = Number(numInput.value);
        reset();
    })
