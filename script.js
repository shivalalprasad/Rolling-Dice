// function rollDice() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// function updateDiceDisplay(player, diceNumber) {
//   const diceImage = document.createElement('img');
//   diceImage.src = `assets/dice-${diceNumber}.png`; // Adjust the image path as needed
//   diceImage.alt = `Dice ${diceNumber}`;
//   document.getElementById(player + '-dice').innerHTML = ''; // Clear previous dice
//   document.getElementById(player + '-dice').appendChild(diceImage);
// }

// const rollButton = document.getElementById('roll-dice');

// rollButton.addEventListener('click', () => {
//     const player1Roll = rollDice();
//     const player2Roll = rollDice();

//     updateDiceDisplay('player1', player1Roll);
//     updateDiceDisplay('player2', player2Roll);

//     // Determine the winner and display the result
//     if (player1Roll > player2Roll) {
//         document.getElementById('result').textContent = "Player 1 wins!";
//     } else if (player1Roll < player2Roll) {
//         document.getElementById('result').textContent = "Player 2 wins!";
//     } else {
//         document.getElementById('result').textContent = "It's a draw!";
//     }
// });


// Roll Dice Function
function rollDice() {
  const player1Rolling = document.getElementById("player1-rolling");
  const player2Rolling = document.getElementById("player2-rolling");
  const player1Result = document.getElementById("player1-result");
  const player2Result = document.getElementById("player2-result");

  // Show rolling GIF and hide the current dice images
  player1Rolling.classList.remove("hidden");
  player2Rolling.classList.remove("hidden");
  player1Result.classList.add("hidden");
  player2Result.classList.add("hidden");
  // Simulate rolling delay
  setTimeout(() => {

    // Generate random dice numbers (1-6)
    const player1Dice = Math.floor(Math.random() * 6) + 1;
    const player2Dice = Math.floor(Math.random() * 6) + 1;

    // Update result images
    player1Result.src = `/assets/dice-${player1Dice}.png`; // e.g., dice1.png, dice2.png
    player2Result.src = `/assets/dice-${player2Dice}.png`;

    // Hide rolling GIF and show result dice images
    player1Rolling.classList.add("hidden");
    player2Rolling.classList.add("hidden");
    player1Result.classList.remove("hidden");
    player2Result.classList.remove("hidden");

    // Determine the winner
    determineWinner(player1Dice, player2Dice);
  }, 2000); // 2000ms delay
}

// Helper Function: Determine Winner
function determineWinner(player1, player2) {
  const resultEl = document.getElementById("result");
  if (player1 > player2) {
    resultEl.textContent = "Player 1 Wins!";
    resultEl.classList.remove("hidden");
  } else if (player1 < player2) {
    resultEl.textContent = "Player 2 Wins!";
    resultEl.classList.remove("hidden");
  } else {
    resultEl.textContent = "It's a Tie!";
    resultEl.classList.remove("hidden");
  }
}

// Add Event Listener to Roll Button
document.getElementById("roll-dice").addEventListener("click", rollDice);
