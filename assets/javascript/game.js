// possible words listed (more than 5, no cap)
var wordList = ["dig dug", "galaga", "pac man", "space invaders", "donkey kong", "tetris"];

function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
};

function startGame() {

    document.getElementById("startButton").style.visibility = "hidden";
    
    var word = getRandomWord();

    var wordBlank = document.getElementById("wordBox");

    var node = document.createTextNode(word);
    
    wordBlank.appendChild(node);
    
};

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
    
        if (correctLetter == 0) {
    
            // add input to incorrect guess list
    
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