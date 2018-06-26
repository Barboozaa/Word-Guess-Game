// global vars and word list
var wordList = ["digdug", "galaga", "pacman", "spaceinvaders", "donkeykong", "tetris"];

var word = "";

var wordSplit = [];

var blanks = 0;

var blanksGuessesMix = [];

var incorrectGuesses = [];

var userInput = "";

var wins = 0;

var losses = 0;

var guesses = 9;

// functions
function roundStart() {

    // resets
    blanksGuessesMix = [];

    incorrectGuesses = [];

    guesses = 9;

    // grab word
    word = wordList[Math.floor(Math.random() * wordList.length)];

    console.log(word);

    wordSplit = word.split("");

    blanks = wordSplit.length;

    for (var i = 0; i < blanks; i++) {
        blanksGuessesMix.push("_");
    }

    document.getElementById("guesses").innerHTML = guesses;

    document.getElementById("wordBox").innerHTML = blanksGuessesMix.join(" ");

    document.getElementById("incorrectGuesses").innerHTML = incorrectGuesses.join(" ");

};

function checkInput(input) {

    var guessInWord = false;

    for (var i = 0; i < blanks; i++) {

        if (word[i] === input) {

            guessInWord = true;

        }

    }

    if (guessInWord) {

        for (var x = 0; x < blanks; x++) {

            if (word[x] === input) {

                blanksGuessesMix[x] = input;
            }

        }

    }

    else {

        incorrectGuesses.push(input);

        guesses--;

    }

    document.getElementById("guesses").innerHTML = guesses;

    document.getElementById("wordBox").innerHTML = blanksGuessesMix.join(" ");

    document.getElementById("incorrectGuesses").innerHTML = incorrectGuesses.join(" ");

}

function wordGuessedCorrectly() {

    if (wordSplit.toString() === blanksGuessesMix.toString()) {

        wins++;

        // alert("You win!");

        document.getElementById("wins").innerHTML = wins;

        setTimeout(startGame, 500);        
        // startGame();

    }

    else if (guesses === 0) {

        losses++;

        // alert("You lose");

        document.getElementById("losses").innerHTML = losses;

        setTimeout(startGame, 500);
        // startGame();

    }

}

// game code
function startGame() {

    roundStart();

    document.onkeyup = function (event) {

        userInput = event.key.toLowerCase();

        checkInput(userInput);

        wordGuessedCorrectly();
    };
};