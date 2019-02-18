// dependency for inquirer npm package
// access all of the exports in our word.js file
var word = require("./word.js"); 
var inquirer = require("inquirer");

return module.exports;

// display "__" + letterGuessed correctly
var lettersWithPlaceholders = [];

// counts how many times 'guess a letter' question occurs
var numberOfGuesses = 25;

function Letter(lettersGuessed, lettersWithPlaceholders) {
    this.letterGuessed = letterGuessed;
    this.lettersWithPlaceholders = lettersWithPlaceholders;
}


var startGame = function() {

// run placeholder prototype function @ start of game "__ __ " 
word.placeHolder();

    // runs inquirer and asks the user a series of questions 
    // replies are stored in variable answers inside .then statement
    inquirer.prompt([{
        type: "input",
        message: 'Guess a letter!',
        validate: function(value) {
            if (isNaN(value) === true) {
                return true;
            }
            return false;
        },
    }, ]).then(function(res) {
        // initializes the variable to be an object user answers to questions
        var letter = new Letter(res.letterGuessed);

        for (var i = 0; i < chosenWord.length; i++) {
            if (this.lettersInWord[i] === this.letter) {

                // letter match? then, set bool to TRUE
                this.letterGuessed = true;
                console.log("Your letter guess " + res.letterGuessed + " is correct!");

            } else {
                console.log("Your letter guess " + res.letterGuessed + " is not correct! Guess again!");
            }
        }

        // letter is indiced in chosenWord then loop through and populate 
        if (this.letterGuessed) {

            // Loop through the chosenWord which is all placeHolder 
            for (var j = 0; j < placeHolder.length; j++) {

                // match letter for letters in word
                if (this.lettersInWord[j] === this.letter) {

                    // set specific blank spaces to equal the correct letter if match
                    this.placeHolder[j] = this.letter;
                }
            }
            // show current state of chosenWord which will be placeholders with letters combined
            console.log(lettersWithPlaceholders);
        }
        // add one to count to increment our recursive loop by one
        numberOfGuesses++;
        // run the askquestion function again - either end the loop or ask the questions again
        startGame();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
}
// call startGame to run code
startGame();

function endGame() {

  if (lettersInWord.toString() === placeHolder.toString()) {
      alert("You win! PLease play again!");
      // Restart the game
      startGame();

  } else if (numberOfGuesses === 0) {

      // run inquirer to ask user if they want to start a new game after guesses run out
      inquirer.prompt([{
              type: 'input',
              message: 'You are now all out of guesses. Would you like to play again?',
              name: "confirm",
              default: true
          }, ])
          .then(function(err, res) {

              if (res.confirm) {
                  console.log("\nGreat, a new hangman game will begin!\n");
                  // Restart the game
                  startGame();
              } else {
                  console.log("\nPlay again when you are ready!\n");
              }
          });
    }
}

endGame();