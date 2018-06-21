// possible words listed (more than 5, no cap)
var wordList = ["gibson", "epiphone", "ibanez", "squier", "fender"];

var getRandomWord = function () {
    return wordList[Math.floor(Math.random() * wordList.length)];
};

// document.getElementById("startButton").addEventListener("click", startGame);


// listen to start button, when it's hit start the game

document.getElementById("startButton").addEventListener("click", startGame());

function startGame() {
    // document.getElementById("startButton");

    var word = getRandomWord();
    console.log(word);

    var h3 = document.createElement("h3");
    var div = document.getElementsById("game");
    document.appendChild(h3);

    // document.wordDisplayed.appendChild(div);


    //     var p = document.createElement("p");
    // document.body.appendChild(p);
    // console.log(word)
}


            // Creates a Function called "vowelChecker" that takes in a single argument (x).
            // function vowelChecker(x) {

            //     // vowelChecker will grab the first letter (character)...
            //     var firstChar = x.toLowerCase().charAt(0);

            //     // Then check if that first letter is a vowel.
            //     if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {

            //         // If so... it will log that.
            //         console.log("OMG. The first letter is a vowel!");

            //     }

            //     else {

            //         // If not... it will log that.
            //         console.log("First letter is NOT a vowel. *sadface*");

            //     }
            // }





// document.onkeyup = function (event) {

//     var userInput = event.key;

//     if (userInput === )


// }




    // random word chosen
    // tracks input from keys
    // shows correct guesses in the word
    // shows incorrect answers AND takes a chance away (6 chances?)

    // if they answer correctly, gain a point

// }

// scoreboard showing points and remaining guesses