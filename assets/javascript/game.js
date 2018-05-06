// VARIABLES
//===================================================

document.querySelector("#statement").innerHTML = "Press any key to get started";

// Array of words to answer / choose from for guessing game
var wordArray = ["HARRY", "HERMIONE", "RON", "WEASLEY", "DRACO", "HAGRID", "VOLDEMORT", "SNAPE", "DOBBY", "LUPIN", "SIRIUS", "GRYFFINDOR", "HUFFLEPUFF", "RAVENCLAW", "SLYTHERIN", "HOGWARTS", "DUMBLEDORE", "LUNA", "BUTTERBEER", "DIAGON"];

// Choose an answer (word) at random from our answer array for the user to guess
var ansWord = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(ansWord);

// Set the number of guesses left, two for each letter in the word
var guessRemaining = ansWord.length * 2;
console.log(guessRemaining);

// Array from the answer (word) that was chosen
var ansLetters = Array.from(ansWord);
console.log(ansLetters);

// Creates an array of underlines equal to the length of ansWord
var guessArray = [];
for (i = 0; i < ansWord.length; i++) {
    guessArray[i] = "_";
}

// The number of letters still to be unguessed
var remainingLetters = ansWord.length;

// Combine in guessArray with a space in between into a string
console.log(guessArray.join(" "));
document.querySelector("#array").innerHTML = guessArray.join(" ");

//
var guessedLetters = [];

// Log the wins...
wins = 0;
document.querySelector("#wins").innerHTML = "Wins: " + wins;

// ...and losses
losses = 0;
document.querySelector("#losses").innerHTML = "Losses: " + losses;

// FUNCTIONS
//===================================================

function keyPress() {
    // Capture the user's keypress
    document.onkeyup = function (event) {
        var userGuess = event.key.toUpperCase();
        console.log(userGuess);
        // Checks if the guess is in ansWord, if yes add to our answer and subtract from remainingLetters
        for (var j = 0; j < ansWord.length; j++) {
            if (ansWord[j] == userGuess && guessArray[j] != userGuess) {
                guessArray[j] = userGuess;
                remainingLetters--;
            }
        }
        guessRemaining--;
        guessedLetters.push(userGuess);
        console.log(guessedLetters);
        console.log(guessArray);
        console.log(remainingLetters);
        console.log(guessRemaining);

        if (remainingLetters < 1) {
            console.log("YOU WIN!");
            document.querySelector("#statement").innerHTML = "YOU WIN!";
            wins++;
            console.log(wins);
            document.querySelector("#array").innerHTML = guessArray.join(" ");
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            document.querySelector("#win-image").src = "assets/images/" + ansWord.toLocaleLowerCase() + ".jpeg";
            setTimeout(newGame, 2000);

        } else if (guessRemaining < 1) {
            console.log("YOU LOSE!");
            document.querySelector("#statement").innerHTML = "Sorry, out of guesses.  You lose.";
            losses++;
            console.log(losses);
            document.querySelector("#array").innerHTML = ansWord;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            setTimeout(newGame, 2000);
        } else {
            console.log("you have " + guessRemaining + " guesses left");
            document.querySelector("#statement").innerHTML = "You have " + guessRemaining + " guesses left";
            document.querySelector("#array").innerHTML = guessArray.join(" ");
            document.querySelector("#letters").innerHTML = guessedLetters.join(" ");
        }
    }
}

function newGame() {
    ansWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(ansWord);
    guessRemaining = ansWord.length * 2;
    console.log(guessRemaining);
    guessArray = [];
    guessedLetters = [];
    document.querySelector("#win-image").src = "assets/images/harryPotter.jpeg";

    for (i = 0; i < ansWord.length; i++) {
        guessArray[i] = "_";
    }

    remainingLetters = ansWord.length;

    document.querySelector("#statement").innerHTML = "Press any key to get started";
    document.querySelector("#array").innerHTML = guessArray.join(" ");
    document.querySelector("#letters").innerHTML = "";

    keyPress();
}

// MAIN PROCESS
//
//===================================================

keyPress();