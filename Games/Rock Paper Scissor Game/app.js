const computerChoiceDisplay=document.getElementById("computer-choice")
const userChoiceDisplay=document.getElementById("user-choice")
const resultDisplay=document.getElementById("result")
const buttonChoices=document.querySelectorAll("button")
let computerChoice
let userChoice
let result
let randomNumber
buttonChoices.forEach((buttonChoice) => buttonChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;
    generateComputerChoice();
    getResult();

})
    
);
function generateComputerChoice(){
     randomNumber=Math.floor(Math.random()*3);
     if(randomNumber===0)
     {
        computerChoice='Rock'
     }
     if(randomNumber===1)
     {
        computerChoice='Paper'
     }
     if(randomNumber===2)
     {
        computerChoice='Scissors'
     }
     computerChoiceDisplay.innerText=computerChoice;

}
function getResult(){
    if(userChoice==computerChoice){
        result="It's a draw!"
    }
    if(computerChoice=="Rock"&& userChoice=="Paper"){
        result="Congrats,You Win."
    }
    if(computerChoice=="Rock" && userChoice=="Scissors"){
        result="You Lose..."
    }
    if(computerChoice=="Scissors" && userChoice=="Paper"){
        result="You Lose..."
    }
    if(computerChoice=="Paper" && userChoice=="Scissors"){
        result="Congrats,You win."
    }
    if(computerChoice=="Paper" && userChoice=="Rock"){
        result="You Lose..."
    }
    if(computerChoice=="Scissors" && userChoice=="Rock"){
        result="Congrats,You win."
    }
    resultDisplay.innerText=result;
}