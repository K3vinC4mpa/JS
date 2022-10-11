const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()

}))

function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // or 3
    console.log(randomNumber)
    
    if (randomNumber === 1){
         computerChoice = "rock";
    }
    if(randomNumber === 2){
        computerChoice = "paper";
    }
    if (randomNumber === 3) {
        computerChoice = "scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if (computerChoice === userChoice){
        result = "It's a draw boi....."
    }
    else if(computerChoice === 'rock' && userChoice === 'paper'){
        result = "You wins!!!"
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You lose."
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You lose."
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You wins!!!"
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You lose."
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You wins!!!"
    }
    resultDisplay.innerHTML = result;
}