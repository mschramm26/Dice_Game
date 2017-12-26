"use strict";

function playGame() {
	let userInput = promptUserForInput();
	convertUserInputToNumberOfPlayers(userInput);
	confirm("Press OK to begin the game.");
	let initialRollResults = rollD4();
	let sixSidedDice = rollD6(initialRollResults);
	let eightSidedDice = rollD8(initialRollResults, sixSidedDice);
	let tenSidedDice = rollD10(initialRollResults, eightSidedDice);
	let twelveSidedDice = rollD12(initialRollResults, tenSidedDice);
	let scorePlayerOne = rollD20(initialRollResults, twelveSidedDice);
	if (convertUserInputToNumberOfPlayers(userInput) === 2) {
		confirm("Now it\'s Player 2\'s turn.");
		let initialRollResults = rollD4();
		let sixSidedDicePlayerTwo = rollD6(initialRollResults);
		let eightSidedDicePlayerTwo = rollD8(initialRollResults, sixSidedDicePlayerTwo);
		let tenSidedDicePlayerTwo = rollD10(initialRollResults, eightSidedDicePlayerTwo);
		let twelveSidedDicePlayerTwo = rollD12(initialRollResults, tenSidedDicePlayerTwo);
		let scorePlayerTwo = rollD20(initialRollResults, twelveSidedDicePlayerTwo);
		if (scorePlayerOne < scorePlayerTwo) {
			confirm("Player 1 scored " + scorePlayerOne + ". Player 2 scored " + scorePlayerTwo + ". Player 1 wins! \nThe game is now over. To play again, reload the page.");
		}
		if (scorePlayerTwo < scorePlayerOne) {
			confirm("Player 1 scored " + scorePlayerOne + ". Player 2 scored " + scorePlayerTwo + ". Player 2 wins! \nThe game is now over. To play again, reload the page.");
		}
		if (scorePlayerOne === scorePlayerTwo) {
			confirm("Player 1 scored " + scorePlayerOne + ". Player 2 scored " + scorePlayerTwo + ". Player 1 and Player 2 have tied! Refresh the page to play again to break the tie.");
		}
	}
}

playGame();


function promptUserForInput() {
	let userInput = prompt("Please enter 1 or 2 in the following field to indicate the number of players at this time.");
	return userInput
}

function convertUserInputToNumberOfPlayers(userInput) {
	let numberOfPlayers = parseInt(userInput);
	return numberOfPlayers;
}

function rollDie(numberOfSides) {
	let roll = Math.floor(Math.random() * numberOfSides) + 1;
	return roll;
}

function rollD4() {
	confirm("Press OK to roll the 4-sided dice.");
	let initialRoll = rollDie(4);
	confirm("You have rolled " + initialRoll + ". Roll each additional dice until a " + initialRoll + " appears. Your score is now 1. 1 point will be added to your score for each roll. The player who gets all the dice to match in the fewest rolls will win.");
	return initialRoll;
}

function rollD6(initialRollToMatch) {
	let counter = 1;
	confirm("Press OK to roll the 6-sided dice.");
	let d6Roll = rollDie(6);
	counter++;
	for (let i = 1; d6Roll !== initialRollToMatch; i++) {
		confirm("You have rolled " + d6Roll + ". Your score is now " + counter + ". Keep rolling the 6-sided dice until you roll a " + initialRollToMatch + ".");
		d6Roll = rollDie(6);
		counter++;
	}
	confirm("You have rolled " + d6Roll + "! Your score is now " + counter + ". Proceed to roll the 8-sided dice.");
	return counter;
}

function rollD8(initialRollToMatch, currentCounter) {
	confirm("Press OK to roll the 8-sided dice.");
	let d8Roll = rollDie(8);
	currentCounter++;
	for (let i = 1; d8Roll !== initialRollToMatch; i++) {
		confirm("You have rolled " + d8Roll + ". Your score is now " + currentCounter + ". Keep rolling the 8-sided dice until you roll a " + initialRollToMatch + ".");
		d8Roll = rollDie(8);
		currentCounter++;
	}
	confirm("You have rolled " + d8Roll + "! Your score is now " + currentCounter + ". Proceed to roll the 10-sided dice.");
	return currentCounter;
}

function rollD10(initialRollToMatch, currentCounter) {
	confirm("Press OK to roll the 10-sided dice.");
	let d10Roll = rollDie(10);
	currentCounter++;
	for (let i = 1; d10Roll !== initialRollToMatch; i++) {
		confirm("You have rolled " + d10Roll + ". Your score is now " + currentCounter + ". Keep rolling the 10-sided dice until you roll a " + initialRollToMatch + ".");
		d10Roll = rollDie(10);
		currentCounter++;
	}
	confirm("You have rolled " + d10Roll + "! Your score is now " + currentCounter + ". Proceed to roll the 12-sided dice.");
	return currentCounter;
}

function rollD12(initialRollToMatch, currentCounter) {
	confirm("Press OK to roll the 12-sided dice.");
	let d12Roll = rollDie(12);
	currentCounter++;
	for (let i = 1; d12Roll !== initialRollToMatch; i++) {
		confirm("You have rolled " + d12Roll + ". Your score is now " + currentCounter + ". Keep rolling the 12-sided dice until you roll a " + initialRollToMatch + ".");
		d12Roll = rollDie(12);
		currentCounter++;
	}
	confirm("You have rolled " + d12Roll + "! Your score is now " + currentCounter + ". Proceed to roll the 20-sided dice.");
	return currentCounter;
}

function rollD20(initialRollToMatch, currentCounter) {
	confirm("Press OK to roll the 20-sided dice.");
	let d20Roll = rollDie(20);
	currentCounter++;
	for (let i = 1; d20Roll !== initialRollToMatch; i++) {
		confirm("You have rolled " + d20Roll + ". Your score is now " + currentCounter + ". Keep rolling the 20-sided dice until you roll a " + initialRollToMatch + ".");
		d20Roll = rollDie(20);
		currentCounter++;
	}
	confirm("You have rolled " + d20Roll + "! Your final score is " + currentCounter + ".");
	return currentCounter;
}