//These are my variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0
var losses = 0
var lettersGuessed = [];
var guessesLeft = 10

//user starts game by pressing a key

document.onkeyup = function (event) {
    var userGuess = event.key;

    //the userGuess is put the lettersGuessed Array
    lettersGuessed.push(userGuess);
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    //Guesses are decremented  
    guessesLeft--;

    //html is updated
    document.getElementById("guessesleft").innerHTML = guessesLeft;
    document.getElementById("lettersguessed").innerHTML = lettersGuessed;

//If the user guess is also the computer guess, the Winning Alert Message shows on screen and the game resets
    if (userGuess === computerGuess && (guessesLeft > 0)) {

        alert("Winner, Winner, Chicken Dinner! You ARE Psychic! I was thinking of letter " + computerGuess);
        wins++
        document.getElementById("wins").innerHTML = wins;
        guessesLeft = 10; //reset variable
        lettersGuessed = [];  //reset array so it's empty
        document.getElementById("guessesleft").innerHTML = guessesLeft;  //reset guesses
        document.getElementById("lettersguessed").innerHTML = lettersGuessed;    //reset letters guessed
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]; //reset computer guess

        //If the user fails to guess and gets to 0 guesses, the Lose Alert Message shows on screen and the computer reveals the correct letter
    } if (guessesLeft === -1) {
        alert("You aren't psychic! I was thinking of letter " + computerGuess);
        losses++;
        document.getElementById("losses").innerHTML = losses;

        guessesLeft = 10; //reset variable
        lettersGuessed = [];  //reset array so it's empty
        document.getElementById("guessesleft").innerHTML = guessesLeft;  //reset guesses
        document.getElementById("lettersguessed").innerHTML = lettersGuessed;    //reset letters guessed
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]; //reset computer guess
    }
}


