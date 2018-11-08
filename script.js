const R = "ROCK";
const P = "PAPER";
const S = "SCISSORS";
const ROUNDS = 5;

function game() {

  let playerWins = 0;
  let computerWins = 0;
  let pChoice, cChoice, endResult;

  for(let i=1; i<=ROUNDS; i++) {
    pChoice = takeUserInput();
    cChoice = computerPlayGenerator();

    switch(parseInt(roundDecisionCalculator(pChoice, cChoice))) {
      case 0:
        ++computerWins;
        alert(`Computer wins round, ${cChoice} beats ${pChoice}!` );
        break;

      case 1:
        ++playerWins;
        alert(`You won round, ${pChoice} beats ${cChoice}!`);
        break;

      case 2:
        alert(`Draw round, ${pChoice} draws ${cChoice}!`);
        break;

      case 3:
        alert(`Invalid Input! round lost against ${cChoice}`);
        ++computerWins;
        break;

      default:
        alert("Error!");
    }
    displayCurrentScore(playerWins, computerWins, i);
  }

  endResult = ((playerWins>computerWins)? 1:( (playerWins==computerWins)? 2:0 ));
  endResultDisplay(endResult);
}

function displayCurrentScore(pWins, cWins, round) {
  alert(`Round=${round}\n Player=${pWins}\nComputer=${cWins}`);
}

function takeUserInput() {
  let playerChoice = prompt("Enter choice: ", "Rock, Paper, Scissors");

  if(checkValidity(playerChoice)) return playerChoice;
  else return "ERROR";
}

function checkValidity(userInput) {
  let input = userInput.toUpperCase();

  if( (input==R) || (input==S) || (input==P) ) {
    return true;
  } else return false;

}

function computerPlayGenerator() {
  let ranGenerated = parseInt(Math.floor(Math.random()*3) +1);
  switch(ranGenerated) {
    case 1:
      return "Scissors";
      break;
    case 2:
      return "Rock";
      break;
    default:
      return "Paper";
  }
}

function roundDecisionCalculator(playerChoice, compChoice) {
  let pChoice = playerChoice.toUpperCase();
  let cChoice = compChoice.toUpperCase();

  let decision;

  if(pChoice == "ERROR") decision = 3;
  else {
    if((pChoice==R && cChoice==S) || (pChoice==S && cChoice==P) || (pChoice==P && cChoice==R)){
      decision = 1;
    } else if((pChoice==R && cChoice==R) || (pChoice==S && cChoice==S) || (pChoice==P && cChoice==P)){
      decision = 2;
    } else decision = 0;
  }

  return decision;
}

function endResultDisplay(endResult) {
  result = parseInt(endResult);

  switch(result) {
    case 1:
      alert("Congratulations! You won the game!");
      break;
    case 2:
      alert("Meh! It's a draw!");
      break;
    case 0:
      alert("You lost the game!");
      break;
    default:
      alert("Error!");
  }
}

game();


























/*function game() {

    const ROUNDS = 5;
    let pWins = 0;
    let cWins = 0;
    let pChoice;
    let cChoice = 'scissors';

    function playRound (playerSelection, computerSelection ) {
    
        const R = "ROCK";
        const S = "SCISSORS";
        const P = "PAPER";

        let pSec = playerSelection.toUpperCase();
        let cSec = computerSelection.toUpperCase();

        if((pSec == R && cSec == S) || (pSec == S && cSec == P) || (pSec == P && cSec == R)) return  1;
        else if((pSec == R && cSec == R) || (pSec == S && cSec == P) || (pSec == S && cSec == S)) return  2;
        else return 0;
    }

    for(let i=0; i<ROUNDS; i++) {
       pChoice =  prompt("Enter move:");
       let roundResult = playRound(pChoice, cChoice);

       if(roundResult == 1) {
           pWins++;
           alert("You Won the round!");
       } else if(roundResult ==0) {
           cWins++;
           alert("You lost the round!");
       } else {
           alert("Draw Round!");
       }
    }
    
    if(pWins > cWins) {
        alert("player won the game!");
    } else if (pWins == cWins){
        alert("player lost the game!");
    } else {
        alert("draw game!");
    }
}

game();
*/