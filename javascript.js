
const div =document.querySelector("div");
const body=document.querySelector("body");
const container=document.createElement("div");
body.appendChild(container);
const paragraph=document.createElement("p");
const score=document.createElement("p")

container.appendChild(paragraph);
container.appendChild(score);

let humanChoice="";
let humanScore=0;
let computerScore=0;

div.addEventListener("click",(e)=>{
    let choice=e.target.dataset.choice;
    humanChoice=choice;
    
    let computerSelection=getComputerChoice();
    let human=humanselect(humanChoice);
    playRound(human,computerSelection);
   
    
   
 


    
    


})


function humanselect(humanSelection){
    return humanSelection;

}



function getComputerChoice(){
    let randomInt=Math.random();
    if(randomInt<=0.33){
        return "rock";
    }
    else if(randomInt<=0.66){
        return "paper"
    }
    else{
        return "scissors";
    }
}


function playRound(humanChoice,computerChoice){
    if(humanChoice==="rock" && computerChoice==="rock"){
        paragraph.textContent="Match Draw";
    }

    else if(humanChoice==="rock" && computerChoice==="paper"){
        humanScore++;
        
        paragraph.textContent="human Win";
        
    }

    else if(humanChoice==="rock" && computerChoice==="scissors"){
        computerScore++;
        paragraph.textContent="computerWin";
        
    }

    else if(humanChoice==="paper" && computerChoice==="rock"){
        humanScore++;
        paragraph.textContent="humanWin";
        
    }
    else if(humanChoice==="paper" && computerChoice==="paper"){
        paragraph.textContent="Match draw";
    }
    else if(humanChoice==="paper" && computerChoice==="scissors"){
        computerScore++;
        paragraph.textContent="computerWin";
        
    }
    else if(humanChoice==="scissors" && computerChoice==="rock"){
        computerScore++;
        paragraph.textContent="computer win";
        
    }
    else if(humanChoice==="scissors" && computerChoice==="paper"){
        humanScore++;
        paragraph.textContent="humanWin";
        
    }

    else if(humanChoice==="scissors" && computerChoice==="scissors"){
        paragraph.textContent="Match draw";
    }
    score.textContent=`Player: ${humanScore} | Computer: ${computerScore}`

}















