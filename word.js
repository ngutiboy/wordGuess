var inquirer = require("inquirer");

// Using the require keyword lets us access all of the exports in our word.js file
var letter = require("./letter.js");

var wordSelection = ["ku bootcamp", "fortran", "Daniel",
    "overland park", "university of kansas", "Kevin Hard",
    "sparse conditional constant propagation", "design compiler"
];

// randomized word chosen from wordOptons[]
var chosenWord = "";

// number of "__ __"  so when I call placeHolder I can have it === "__"
var spaceHolder = "__";

// split word and store in var
var lettersInWord = [];

// constructor function used to create objects
function Word(chosenWord, spaceHolder, lettersInWord) {
    this.chosenWord = chosenWord;
    this.spaceHolder = spaceHolder;
    this.lettersInWord = lettersInWord;
};
// placeholders for all words in wordSelection - starts each game
Word.prototype.placeHolder = function() {

    this.chosenWord = wordSelection[Math.floor(Math.random() * wordSelection.length)];
    this.lettersInWord = chosenWord.split("");
    this.spaceHolder = lettersInWord.length;

    // based on # of letters in chosenWord.
    for (var i = 0; i < lettersInWord.length; i++) {
        spaceHolder += lettersInWord.length;
    }
    console.log(this.spaceHolder);
};


var word = new Word(chosenWord, spaceHolder, lettersInWord);
// run placeholder prototype function @ start of game "__ __ " 
word.placeHolder();


// module.exports is an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.
module.exports = wordSelection;
module.exports = Word;
module.exports = word;