const choices = ["rock", "paper", "scissors"];

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((yourChoice) =>
  yourChoice.addEventListener("click", (e) => {
    clearValues();

    // asign the value of our choice to a variable and display it
    const userChoice = e.currentTarget.id;
    userChoiceDisplay.textContent = userChoice;

    setTimeout(() => {
      // asign the value of computer choice randomly into a variable and display it.
      const computerChoice = choices[generateComputerChoice()];
      computerChoiceDisplay.innerHTML = computerChoice;

      // call the function that determines the result of match.
      getResult(userChoice, computerChoice);
    }, 1500);
  })
);

// generate a  random number for the choices array
function generateComputerChoice() {
  return Math.floor(Math.random() * choices.length);
}

// Determines the result of match
function getResult(userChoice, computerChoice) {
  if (computerChoice === userChoice) {
    result = "It's a draw";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "You wins!!!";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lose.";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose.";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You wins!!!";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lose.";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You wins!!!";
  }

  if (result === `You wins!!!`) {
    document.body.style.backgroundColor = "green";
  } else if (result === `You lose.`) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "grey";
  }
  resultDisplay.innerHTML = result;
}

function clearValues() {
  computerChoiceDisplay.textContent = "";
  userChoiceDisplay.textContent = "";
  resultDisplay.textContent = "";
}
