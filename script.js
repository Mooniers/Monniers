//Initialize variables for dice rolling

//Indicates if dice are currently rolling
let rolling = false;

//Stores the interval ID for rolling updates
let intervalId;

//Get references to HTML elements
const numDiceInput = document.getElementById("numDice");
const numSidesInput = document.getElementById("numSides");
const startStopButton = document.getElementById("startStopButton");
const outputDiv = document.getElementById("output");
const totalDiv = document.getElementById("total");

//Event listener for "Roll Dice" button
startStopButton.addEventListener("click", () => {
  if (rolling) {
    //If dice are rolling, stop the rolling and update the button text
    clearInterval(intervalId);
    startStopButton.textContent = "Roll Dice";
    rolling = false;
  } else {
    //If dice are not rolling, start rolling and update the button text
    startRollingDice();
    startStopButton.textContent = "Stop Rolling";
    rolling = true;
  }
});

//Function to start rolling the dice
function startRollingDice() {
  const numDice = parseInt(numDiceInput.value);
  const numSides = parseInt(numSidesInput.value);

  //Set up an interval to simulate dice rolls
  intervalId = setInterval(() => {
    //Stores individual dice roll results
    const results = [];
    //Stores total of all dice rolls
    let total = 0;

    //Simulate rolling each die and calculate the total
    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * numSides) + 1;
      results.push(`Die ${i + 1}: ${roll}`);
      total += roll;
    }

    //Display the results and total
    outputDiv.textContent = results.join(",");
    totalDiv.textContent = `Total: ${total}`;
  }, 100);
}