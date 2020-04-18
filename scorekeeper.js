var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");


var p1Display = document.getElementById("p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("p span");

var p1score = 0, p2score = 0;
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");



p1Button.addEventListener("click", function () {

    
    //document.querySelector("body").setAttribute('style', 'background-color: green' );
    //document.querySelector("body").attributes[0].value='background-color: green';

    if (!gameOver) {
        p1score++;
        p1Display.textContent = p1score;
        console.log(p1score);
        console.log(winningScore) ;
        if (winningScore === p1score) {
            gameOver = true;
            p1Display.classList.add("winner");
            document.body.style.background='purple';
        }
    }

});


p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2score++;
        p2Display.textContent = p2score;
        if (winningScore === p2score) {
            gameOver = true;
            p2Display.classList.add("winner");
            document.querySelector("body").setAttribute('style', 'background-color: #f2f787' );
        }
    }
});

resetButton.addEventListener("click", function () {
    reset();
    document.querySelector("body").attributes[0].value='background-color: #696981';
});

function reset(){
    p1score = 0;
    p1Display.textContent = p1score;
    p2score = 0;
    p2Display.textContent = p2score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
};

numInput.addEventListener("change", function () {
     winningScoreDisplay.textContent = numInput.value;
     winningScore=Number( numInput.value);
     reset();
});