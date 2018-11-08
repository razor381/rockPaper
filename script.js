function playRound (playerSelection, computerSelection ) {
    
    const R = "ROCK";
    const S = "SCISSORS";
    const P = "PAPER";

    let pSec = playerSelection.toUpperCase();
    let cSec = computerSelection.toUpperCase();

    let  winner = true;

    if((pSec == R && cSec == S) || (pSec == S && cSec == P) || (pSec == P && cSec == R)) winner = true;
    else winner = false;

    if(winner) console.log("You won! "+playerSelection+" beats "+computerSelection);
    else console.log("You lost! "+computerSelection+" beats "+playerSelection);
}

playRound("scissors","paper");
