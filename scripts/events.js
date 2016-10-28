// DOM VARIABLES

var largeCheck = document.getElementById('largeCheck');
var inputField = document.getElementById('inputField');

// EVENT LISTENERS

largeCheck.addEventListener('click', largeFunc);
inputField.addEventListener('keyup', checkEnter);

// FUNCTIONS

function largeFunc() { // Toggles font-size to be larger when checked
	console.log('click event on largeCheck');
}

function checkEnter(e) { // Checks value of inputField on "Enter" press
	if (e.keyCode === 13 && inputField.value.length) { // Only submits if inputField is has 1 or more characters
		console.log('Enter keyup event');
		clearInput();

	}
}

function clearInput() {
	console.log("clear inputField after enter press");
}