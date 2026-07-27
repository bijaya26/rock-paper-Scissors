function getComputerChoice(){
    let choice=Math.random();
    if(choice<=0.33){
        return "rock";
    }
    else if(choice<=0.66){
        return"paper";
    }

    else{
        return"scissors"
    }

}

function getHumanChoice(){
    return prompt("Which one you choose").toLowerCase();
}



let humanScore=0;
let computerScore=0;


function playRound(humanChoice,computerChoice){
    if(computerChoice==="rock" && humanChoice==="rock"){
    console.log("draw");
    }
    else if (computerChoice==="scissors" && humanChoice==="scissors"){
        console.log("draw")
    }
    else if(computerChoice==="paper" && humanChoice==="paper"){
        console.log("draw");
    }

    else if(computerChoice==="rock" && humanChoice==="paper"){
        humanScore++;
        console.log("user win");

    }

    else if(computerChoice==="rock" && humanChoice==="scissors"){
        computerScore++;
        console.log("computer win");

    }

    else if(computerChoice==="scissors" && humanChoice==="paper"){
        computerScore++;
        console.log("computer win");
    }

    else if (computerChoice=="paper" && humanChoice==="rock"){
        humanScore++;
        console.log("user win");
    }

    else if (computerChoice==="paper"&&humanChoice==="scissors"){
        humanScore++;
        console.log("user win");
    }

    else if(computerChoice==="scissors" && humanChoice==="rock"){
        humanScore++;
        console.log("userWin");
    }

    console.log(`Total computer number is:${computerScore}`);
    console.log(`Total user number is:${humanScore}`);


}


function playGame(){
    for(i=1;i<=5;i++){
    const humanSelection=getHumanChoice();
    const computerSelection=getComputerChoice();
    playRound(humanSelection,computerSelection);

    if(computerScore>humanScore){
        console.log("sorry computer win");
    }

    else if(computerScore<humanScore){
        console.log("Congratulations you win")
    }
    else{
        console.log("sorry match is draw");
    }

}

}

playGame();







