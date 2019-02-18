var inquirer = require("inquirer");


var wordSelection = ["ku bootcamp", "ambrose", "formatting", "computer", "processor",
    "olathe", "transform", "web developer", "data",
    "conditional", "constant", "propagation", "compiler"
];

// randomized word chosen from wordOptons[]
var chosenWord = wordSelection[Math.floor(Math.random() * wordSelection.length)];
// blank space array  "__ __" to use in placeHolder();
var spaceHolder = [];
// split word and store in var
var lettersInWord = chosenWord.split("");
// display "__" + letterGuessed correctly
//var lettersWithPlaceholders = [];
var lettersWithPlaceholders = [];
// string for user guesses
var letterGuessed = "";
// letters in word length
var lettersInWordLength = lettersInWord.length;
var numberOfGuesses = lettersInWordLength;
// constructor function used to create objects

function Word(chosenWord, spaceHolder, lettersInWordLength, letterGuessed, lettersInWord) {
    this.chosenWord = chosenWord;
    this.spaceHolder = spaceHolder;
    this.lettersInWordLength = lettersInWordLength;
    this.lettersInWord = lettersInWord;
    this.letterGuessed = letterGuessed; 
};

// placeholders for all words in wordSelection - starts each game
Word.prototype.placeHolder = function() {
    // based on # of letters in chosenWord.
    for (var i = 0; i < lettersInWordLength; i++) {
        spaceHolder.push("__");
        //spaceHolder.toString();
    }
    console.log(spaceHolder.join(" ")); // supposed to 'join' the "__" in word array
};

var word = new Word(chosenWord, letterGuessed, lettersInWord);
// run placeholder prototype function to start game "__ __ " 
word.placeHolder();

var startGame = function() {
  inquirer.prompt([{
    name: "currentguess",
    type: "input",
    message: 'Guess a letter!',
    validate: function(value) {
        if (isNaN(value) === true) {
          console.log('true');
          return true;
        }
        console.log('false');
        return false;
    }

  }]).then(function(res) {
    console.log("res: ", res);
    letterGuessed = res.currentguess;
    var lengthOfWord = word.lettersInWordLength.length;
    var wordArray = word.lettersInWordLength;

    console.log("chosenWord: ", chosenWord); 
    console.log("letterGuessed: ", letterGuessed) 
    console.log("wordArray: ", wordArray);
    console.log("lettersInWord: ", lettersInWord)
    console.log("lengthOfWord: ", lengthOfWord);
    console.log("Number of Guesses: ", numberOfGuesses); 
    console.log("Hangman Word: ", spaceHolder);
   
      for (var i = 0; i < lettersInWord.length; i++)  // lettersInWord shows hangman letter in spaceholder NOT wordArray
        {   
          if (lettersInWord[i] === letterGuessed) 
          {
              spaceHolder[i] = letterGuessed;
              console.log(letterGuessed + " is correct!"); 
            
            } else {
              console.log(letterGuessed + " is incorrect!");
              }    
            }
          numberOfGuesses--;
          console.log("Your Hangman: ", spaceHolder.join(' '))
          console.log(numberOfGuesses + "number of guesses remaining!");
          startGame();
          endGame();
          })
        }

var endGame = function() {

  if (spaceHolder.toString() === lettersInWord.toString()) 
    {
      console.log(spaceHolder.toString(), lettersInWord.toString()) 
      console.log("You win! PLease play again!");
      startGame();

  } else if (numberOfGuesses === 0) 
    {
    // run inquirer to ask user if they want to start a new game after guesses run out
    inquirer.prompt([{
        type: 'input',
        message: 'You are now all out of guesses. Would you like to play again?',
        name: "confirm",
        default: true
    }, ])
    .then(function(res) {

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

startGame();
endGame();
