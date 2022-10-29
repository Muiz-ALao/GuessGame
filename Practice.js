/*
// function for addition
function calcAddition(firstNo, secondNo) {
  result = (firstNo + secondNo);
  return result;
}


//function for Subtraction
function calcSubtraction(firstNo, secondNo) {
  result = (firstNo - secondNo);
  return result;
}

//function for division
function calcDivision(firstNo, secondNo) {
  result = (firstNo / secondNo);
  return result;
}

//function for multiplication
function calcMultiply(firstNo, secondNo) {
  result = (firstNo * secondNo);
  return result;
}
console.log(calcAddition(43, 43),
            calcSubtraction(12, 6),
            calcDivision(49, 7),
            calcMultiply(12, 12));
*/

// Guess game
alert('Are you In for a Guess game');
alert('Guess the number from 1 to 10 with three(3) attempt');
let answer = 7;
let guess = prompt('What\'s your guess?',0);


for (i = 0; i < 3; i++) {
  if(guess<=0 || guess>10)
  {
    alert('Game over. You have violated the rule!');
    break;
  }
  else if(answer == guess) {
    alert('You guessed Correctly');
    break;
  } else {
    guess = prompt('Please Try Again');
  }



}