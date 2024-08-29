/* 
This was a simple Rock/Paper/Scissors game I coded with prompts from codecademy.com.
I've been wanting to practice writing tests, so I decided 
to use Node.js and Jest and add tests for the program.

Carina Young 08/29/2024
*/

// A function to check that the user choice is valid
function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();

  if (['rock', 'scissors', 'paper'].includes(userInput)) {
    return userInput;
  } else {
    console.log('Did not choose rock, paper, or scissors');
    return 'Did not choose rock, paper, or scissors'
  }
}


// A function to get the computer choice
function getComputerChoice() {
  let computerNum = Math.floor(Math.random() * 3);

  if (computerNum === 0) {
    return 'rock';
  } else if (computerNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// determine the winner- human or computer?
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Game was a tie!'
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'You won!'
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'You won!'
    }
  }
} 

function playGame() {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();

  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame()

// Export functions for testing
module.exports = { getUserChoice, getComputerChoice, determineWinner, playGame };