// Gissningsbara ord
// var secretWord = ["APA","GRODA","DELFIN","VITHAJ","KATT","HUND","PUDEL","JAVASCRIPT", "PROGRAMMERING"];

var secretWords = ["Chicago", "Houston", "Philadelphia", "Phoenix", "Dallas", "Austin", "Indianapolis", "Jacksonville", "Columbus", "Charlotte", "Detroit", "Memphis", "Seattle", "Denver", "Washington", "Boston", "Baltimore", "Portland", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Mesa", "Atlanta", "Omaha", "Raleigh", "Miami", "Oakland", "Minneapolis", "Tulsa", "Cleveland", "Wichita", "Arlington", "New Orleans", "Bakersfield", "Tampa", "Honolulu", "Aurora", "Anaheim", "Riverside", "Pittsburgh", "Anchorage", "Stockton", "Cincinnati", "Toledo", "Greensboro", "Newark", "Plano", "Henderson", "Lincoln", "Buffalo", "Orlando", "Chandler", "Laredo", "Norfolk", "Durham", "Madison", "Lubbock", "Irvine", "Glendale", "Garland", "Hialeah", "Reno", "Chesapeake", "Gilbert", "Baton Rouge", "Irving", "Scottsdale", "Fremont", "Richmond"];
secretWord = secretWords.map(function (x) { return x.toUpperCase() });
//Slumpa ut ord
var randomWord, randomWordArray, letters, pickedLetter, pickedCharacters;

letters = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
pickedCharacters = [];
pickedLetter = document.getElementById("word");  //Hemliga ordets rad


var startLines, hangmanRound, hangman, winner, restartButton, gameOver, scoreDisplay, score, pickedArray, triesDisplay, tries;

startLines = [];
hangmanRound = 0;
hangman = document.querySelector(".hangman");
winner = document.querySelector(".winner");
restartButton = document.querySelector("#playAgainButton");
gameOver = document.querySelector(".gameOver");
scoreDisplay = document.querySelector("#score");
triesDisplay = document.querySelector("#tries");
score = 0;
tries = 0;
pickedArray = [];
var checks = 0;

//Restart --------------------------------------------------------------------------------------------
restartButton.addEventListener("click", function () {
  console.log("restart");
  checks = 0;
  gameOver.classList.remove('display');
  pickedArray = [];
  winner.innerHTML = "";
  letters = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  hangmanRound = 0;
  setUpWord();
  setupClickHandlers();

  for (var i = 0; i < pickedCharacters.length; i++) {
    pickedCharacters[i].classList.remove('completed');
  };
  pickedCharacters = [];
  hangman.src = 'img/hangman_' + hangmanRound + '.jpg';
});

var allLetters = [];
function setupClickHandlers() {

  allLetters = document.getElementsByClassName("char");
  setupStartString(randomWordArray);

  // for (var i = 0, l = allLetters.length; i < l; i++) {                       //Lyssna efter vilken bokstav som väljs.
  // 	allLetters[i].addEventListener("click", generateClickHandler(i+1));
  // }
};



function generateClickHandler(trackNumber) {
  //Denna kod körs 26 gånger.

  return function clickHandler() {
    checks = 0;
    // var checks = 0; // Kontroll för att se om loopen var if eller else
    // Enbart lägga till ifall bokstaven finns i ordet
    for (var i = 0; i < randomWordArray.length; i++) {
      if (letters[trackNumber] === randomWordArray[i]) {
        pickedArray.push(letters[trackNumber]);    // Lägg till bokstaven som valts
        startLines[i] = letters[trackNumber];	   // Ersätta _ med rätt bokstav
        pickedLetter.innerHTML = startLines.join("");
      } else {
        checks++;  // kontrollera alla bokstäver i ordet	
      }
    };

    countTry();

    hangman.src = 'img/hangman_' + hangmanRound + '.jpg'; // Uppdatera gubbe
    letters.splice(trackNumber, 1, " ");    // Ta bort bokstaven som valts från array letters
    this.classList.add('completed');       // Lägg till markerad class på vald bokstav
    pickedCharacters.push(this);
  }
};

function setUpWord() {
  randomWord = secretWord[Math.floor(Math.random() * secretWord.length)];
  randomWordArray = randomWord.split('');
  console.log(randomWordArray);
  letters = letters.map(function (x) { return x.toUpperCase() })  //Göra om bokstäver till stor bokstav
};


function setupStartString(arr) {	                // Sätta ihop hemligt ords linjer _ _ _ _ _ 
  pickedLetter.innerHTML = "";
  startLines = [];
  for (var x = 0; x < arr.length; x++) {
    startLines.push(" _ ");
  }
  pickedLetter.innerHTML = startLines.join("");
};

function countTry() {
  //Kontrollera om man valt rätt eller fel	
  if (checks === randomWordArray.length && hangmanRound < 6) {
    //Fel svarat
    hangmanRound++;
    if (hangmanRound === 6) {
      winner.innerHTML = "You lost!"
      tries++;
      triesDisplay.innerHTML = tries;
      gameOver.classList.add('display');
    }
  }
  else {
    //Rätt svarat / Kolla om ordet är fullständigt
    let win = pickedArray.length === randomWordArray.length ? "You won!" : "false";
    if (win === "You won!") {
      winner.innerHTML = "You won!"
      score++;
      tries++;
      scoreDisplay.innerHTML = score;
      triesDisplay.innerHTML = tries;
      gameOver.classList.add('display');
    }
  }
  console.log("hangmanRound innifrån Try " + hangmanRound);
};


setUpWord();
setupClickHandlers();




for (var i = 0, l = allLetters.length; i < l; i++) {                       //Lyssna efter vilken bokstav som väljs.
  allLetters[i].addEventListener("click", generateClickHandler(i + 1));
}



// function hideImage (){
//   setTimeout(function(){
//     var image = document.getElementsByTagName("img");
//     image[image.length-1].style.display = 'none';
//   }, 500);  
// };
// hideImage();