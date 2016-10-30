/* DOM VARIABLES */

var largeCheck = document.getElementById('largeCheck');
var darkCheck = document.getElementById('darkCheck');
var inputField = document.getElementById('inputField');
var clearMessages = document.getElementById('clearMessages');
var outputBox = document.getElementById('outputBox');


/* EVENT LISTENERS */

inputField.addEventListener('keyup', checkEnter);
clearMessages.addEventListener('click', messagesClear);
largeCheck.addEventListener('click', largeFunc);
darkCheck.addEventListener('click', darkFunc);
outputBox.addEventListener('click', outputBoxFunc);

/* HELPER FUNCTIONS */

function initMessage(messagesArg) {
	console.log(messagesArg);
  for (var i = 0; i < messagesArg.length; i++){
    Chatty.writeMessages(messagesArg[i]);
    Chatty.putMessageOnDOM(outputBox, messagesArg[i], i);
  }
}

/* EVENT LISTENER CALLBACKS */

function checkEnter(e) { // Checks value of inputField on "Enter" press
	if (e.keyCode === 13 && inputField.value.length) { // Only submits if inputField is has 1 or more characters
		console.log('Enter keyup event');
		submitMessage();
		clearInput();
	}
}

function messagesClear() {
	console.log('click clearMessages');
}

function largeFunc() { // Toggles font-size to be larger when checked
	console.log('click event on largeCheck');
	outputBox.classList.toggle('larger-text');
}

function darkFunc() { // Toggles to dark theme when checked
	console.log('click event on darkCheck');
	outputBox.classList.toggle('darktheme');
}

function outputBoxFunc() {

}

function clearInput() {
	console.log("clear inputField after enter press");
	inputField.value = "";
}

/* INITIALISE MESSAGES */

Chatty.loadMessages(initMessage);