// DOM VARIABLES

var largeCheck = document.getElementById('largeCheck');
var inputField = document.getElementById('inputField');

// EVENT LISTENERS

largeCheck.addEventListener('click', largeFunc);
inputField.addEventListener('keyup', checkEnter);

// FUNCTIONS

function largeFunc() { // Toggles font-size to be larger when checked
	console.log('click');
};

function checkEnter(keyup) { // Checks value of inputField on "Enter" press
	if (keyup.keyCode === 13 && inputField.value.length >= 1) { // Only submits if inputField is has 1 or more characters
		console.log('keyup')
		clearInput();

	};
};

function clearInput() {
	console.log("clearInput");
};