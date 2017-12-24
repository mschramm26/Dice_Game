"use strict";

function playGame() {
	getUserInput();
	startPlaying();
	let counter = 0;
	let initialRollResults = rollD4();
	rollD6();
	rollD8();
	rollD10();
	rollD12();
	rollD20();
	nextPlayerTakesTurn(getUserInput);
	determineWinner(getUserInput);
}

playGame();


function getUserInput() {
	let userInput = prompt("Please enter 1 or 2 in the following field to indicate the number of players at this time.");
	let numberOfPlayers = parseInt(userInput);
	numberOfPlayers;
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
	let counter;
	counter++;
	let message = confirm("You have rolled " + initialRoll + ". Roll each additional dice until it rolls a " + initialRoll + ". Your score is now " + counter + ". 1 point will be added to your score for each roll. The player who gets all the dice to match the first roll in the fewest turns will win.");
	return initialRoll;
}




function rollD6() {
	confirm("Press OK to roll the 6-sided dice.");
	let d6Roll = rollDie(6);
	counter++;
	let message;
	for (let i = 1; d6Roll !== initialRollResults; i++) {
		message = confirm("You have rolled " + d6Roll + ". Your score is now " + counter + ". Keep rolling until you roll a " + initialRollResults + ".");
		d6Roll = rollDie(6);
		counter++;
	}
	message = confirm("You have rolled " + d6Roll + "! Your score is now " + counter + ". Proceed to roll the 8-sided dice.");
}




function rollD8() {
	confirm("Press OK to roll the 8-sided dice.");
	let d8Roll = rollDie(8);
	counter++;
	let message;
	for (let i = 1; d8Roll !== initialRollResults; i++) {
		message = confirm("You have rolled " + d8Roll + ". Your score is now " + counter + ". Keep rolling until you roll a " + initialRollResults + ".");
		d8Roll = rollDie(8);
		counter++;
	}
	message = confirm("You have rolled " + d8Roll + "! Your score is now " + counter + ". Proceed to roll the 10-sided dice.");
}


function rollD10() {
	confirm("Press OK to roll the 10-sided dice.");
	let d10Roll = rollDie(10);
	counter++;
	let message;
	for (let i = 1; d10Roll !== initialRollResults; i++) {
		message = confirm("You have rolled " + d10Roll + ". Your score is now " + counter + ". Keep rolling until you roll a " + initialRollResults + ".");
		d10Roll = rollDie(10);
		counter++;
	}
	message = confirm("You have rolled " + d10Roll + "! Your score is now " + counter + ". Proceed to roll the 12-sided dice.");
}



function rollD12() {
	confirm("Press OK to roll the 12-sided dice.");
	let d12Roll = rollDie(12);
	counter++;
	let message;
	for (let i = 1; d12Roll !== initialRollResults; i++) {
		message = confirm("You have rolled " + d12Roll + ". Your score is now " + counter + ". Keep rolling until you roll a " + initialRollResults + ".");
		d12Roll = rollDie(12);
		counter++;
	}
	message = confirm("You have rolled " + d12Roll + "! Your score is now " + counter + ". Proceed to roll the 20-sided dice.");
}



function rollD20() {
	confirm("Press OK to roll the 12-sided dice.");
	let d20Roll = rollDie(20);
	counter++;
	let message;
	for (let i = 1; d20Roll !== initialRollResults; i++) {
		message = confirm("You have rolled " + d20Roll + ". Your score is now " + counter + ". Keep rolling until you roll a " + initialRollResults + ".");
		d20Roll = rollDie(20);
		counter++;
	}
	message = confirm("You have rolled " + d20Roll + "! Your final score is " + counter + ".");
	let scorePlayerOne = counter;
	return scorePlayerOne;
}


function nextPlayerTakesTurn(getUserInput) {
	if (numberOfPlayers > 1) {
		let initialRollResults = rollD4();
		rollD6();
		rollD8();
		rollD10();
		rollD12();
		rollD20();
		let scorePlayerTwo = score;
		return scorePlayerTwo;
	}
}



function determineWinner(getUserInput) {
	if ((numberOfPlayers = 2) && (scorePlayerOne < scorePlayerTwo)) {
		message = confirm("Player 1 wins!");
	}
	if ((numberOfPlayers = 2) && (scorePlayerTwo < scorePlayerOne)) {
		message = confirm("Player 2 wins!");
	}
}


