"use strict";

let counter = 0;

function playGame() {
	let userInput = promptUserForInput();
	convertUserInputToNumberOfPlayers(userInput);
	startPlaying();
	let initialRollResults = rollD4();
	rollD6(initialRollResults);
	rollD8(initialRollResults);
	rollD10(initialRollResults);
	rollD12(initialRollResults);
	let scorePlayerOne = rollD20(initialRollResults);
	if (convertUserInputToNumberOfPlayers(userInput) === 2) {
		counter = 0;
		confirm("Now it\'s Player 2\'s turn.");
		let initialRollResults = rollD4();
		rollD6(initialRollResults);
		rollD8(initialRollResults);
		rollD10(initialRollResults);
		rollD12(initialRollResults);
		let scorePlayerTwo = rollD20PlayerTwo(initialRollResults);
		if (scorePlayerOne < scorePlayerTwo) {
			confirm("Player 1 scored " + scorePlayerOne + ". Player 2 scored " + scorePlayerTwo + ". Player 1 wins! The game is now over. To play again, reload the page.");
		}
		if (scorePlayerTwo < scorePlayerOne) {
			confirm("Player 1 scored " + scorePlayerOne + ". Player 2 scored " + scorePlayerTwo + ". Player 2 wins! The game is now over. To play again, reload the page.");
		}
		if (scorePlayerOne === scorePlayerTwo) {
			confirm("Player 1 scored " + scorePlayerOne + ". Player 2 scored " + scorePlayerTwo + ". You have tied! Refresh the page to play again to break the tie.");
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

function startPlaying() {
	let beginGame = confirm("Press OK to begin the game.");
}

function rollDie(numberOfSides) {
	let roll = Math.floor(Math.random() * numberOfSides) + 1;
	return roll;
}

function rollD4() {
	confirm("Press OK to roll the 4-sided dice.");
	let initialRoll = rollDie(4);
	counter++;
	let message = confirm("You have rolled " + initialRoll + ". Roll each additional dice until it rolls a " + initialRoll + ". Your score is now " + counter + ". 1 point will be added to your score for each roll. The player who gets all the dice to match the first roll in the fewest turns will win.");
	return initialRoll;
}

function rollD6(initialRollToMatch) {
	confirm("Press OK to roll the 6-sided dice.");
	let d6Roll = rollDie(6);
	counter++;
	let message;
	for (let i = 1; d6Roll !== initialRollToMatch; i++) {
		message = confirm("You have rolled " + d6Roll + ". Your score is now " + counter + ". Keep rolling until you roll a " + initialRollToMatch + ".");
		d6Roll = rollDie(6);
		counter++;
	}
	message = confirm("You have rolled " + d6Roll + "! Your score is now " + counter + ". Proceed to roll the 8-sided dice.");
}

function rollD8(initialRollToMatch) {
	confirm("Press OK to roll the 8-sided dice.");
	let d8Roll = rollDie(8);
	counter++;
	let message;
	for (let i = 1; d8Roll !== initialRollToMatch; i++) {
		message = confirm("You have rolled " + d8Roll + ". Your score is now " + counter + ". Keep rolling until you roll a " + initialRollToMatch + ".");
		d8Roll = rollDie(8);
		counter++;
	}
	message = confirm("You have rolled " + d8Roll + "! Your score is now " + counter + ". Proceed to roll the 10-sided dice.");
}

function rollD10(initialRollToMatch) {
	confirm("Press OK to roll the 10-sided dice.");
	let d10Roll = rollDie(10);
	counter++;
	let message;
	for (let i = 1; d10Roll !== initialRollToMatch; i++) {
		message = confirm("You have rolled " + d10Roll + ". Your score is now " + counter + ". Keep rolling until you roll a " + initialRollToMatch + ".");
		d10Roll = rollDie(10);
		counter++;
	}
	message = confirm("You have rolled " + d10Roll + "! Your score is now " + counter + ". Proceed to roll the 12-sided dice.");
}

function rollD12(initialRollToMatch) {
	confirm("Press OK to roll the 12-sided dice.");
	let d12Roll = rollDie(12);
	counter++;
	let message;
	for (let i = 1; d12Roll !== initialRollToMatch; i++) {
		message = confirm("You have rolled " + d12Roll + ". Your score is now " + counter + ". Keep rolling until you roll a " + initialRollToMatch + ".");
		d12Roll = rollDie(12);
		counter++;
	}
	message = confirm("You have rolled " + d12Roll + "! Your score is now " + counter + ". Proceed to roll the 20-sided dice.");
}

function rollD20(initialRollToMatch) {
	confirm("Press OK to roll the 20-sided dice.");
	let d20Roll = rollDie(20);
	counter++;
	let message;
	for (let i = 1; d20Roll !== initialRollToMatch; i++) {
		message = confirm("You have rolled " + d20Roll + ". Your score is now " + counter + ". Keep rolling until you roll a " + initialRollToMatch + ".");
		d20Roll = rollDie(20);
		counter++;
	}
	message = confirm("You have rolled " + d20Roll + "! Your final score is " + counter + ".");
	let scorePlayerOne = counter;
	return scorePlayerOne;
}

function rollD20PlayerTwo(initialRollToMatch) {
	confirm("Press OK to roll the 20-sided dice.");
	let d20Roll = rollDie(20);
	counter++;
	let message;
	for (let i = 1; d20Roll !== initialRollToMatch; i++) {
		message = confirm("You have rolled " + d20Roll + ". Your score is now " + counter + ". Keep rolling until you roll a " + initialRollToMatch + ".");
		d20Roll = rollDie(20);
		counter++;
	}
	message = confirm("You have rolled " + d20Roll + "! Your final score is " + counter + ".");
	let scorePlayerTwo = counter;
	return scorePlayerTwo;
}