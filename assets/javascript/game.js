// possible words listed (more than 5, no cap)
var wordList = ["dig dug", "galaga", "pac man", "space invaders", "donkey kong", "tetris"];

var word = "";

var lettersInWord = [];

var numBlanks = 0;

var incorrectGuesses = [];

var wins = 0;
var losses = 0;
var guesses = 6;


function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
};

// EVERYTHING IS FUCKED! Refactor everything under here to work with the new gobal vars
// Look at the word guess game in the New activities folder in the GTA repo

function startGame() {

    document.getElementById("startButton").style.visibility = "hidden";
    
    var wordBlank = document.getElementById("wordBox");

    var node = document.createTextNode(getRandomWord());
    
    wordBlank.appendChild(node);

    game();

    function game() {

        var correctLetter = 0;
    
        document.onkeyup = function(event) {
    
            var userGuess = event.key;
    
            for (var i = 0; i < word.length; i++) {
    
                if (word[i] === userGuess) {
        
                    word[i].visibility = true; // this is more psuedocode than real right now
        
                    correctLetter++;
        
                }
        
            };
        
            if (correctLetter == 0) { // it's logging the incorrect letter until a correct letter is input
                                        // I'm p sure correctLetter is getting incremented and not resetting (thanks Hunter)
                var incorrectGuessList = document.getElementById("incorrectGuesses");

                var incorrectGuess = document.createTextNode(userGuess + ", ");

                incorrectGuessList.appendChild(incorrectGuess);
        
            };
        
        };
    
        
    
    };
    
};





// document.onkeyup = function (event) {

//     var userInput = event.key;

//     if (userInput === )


// }




    // random word chosen
    // tracks input from keys
    // shows correct guesses in the word
    // shows incorrect answers AND takes a chance away (6 chances?)

    // if they answer correctly, gain a point

// scoreboard showing points and remaining guesses