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

function checkEnter(event) { 
	// Checks value of inputField on "Enter" press
	if (event.keyCode === 13 && inputField.value.length) {
		var index = Chatty.getMessages().length;
		var messageObj = {
			"message": inputField.value
		};
		Chatty.putMessageOnDOM(outputBox, messageObj, index);
		Chatty.writeMessages(messageObj);
		inputField.value = '';
		clearMessages.disabled = false;
	}
}

function messagesClear() {
	// Clears all messages from the DOM
	clearMessages.disabled = true;
	outputBox.innerHTML = "";
}

function largeFunc() { 
	// Toggles font-size to be larger when checked
	console.log('click event on largeCheck');
	outputBox.classList.toggle('larger-text');
}

function darkFunc() { 
	// Toggles to dark theme when checked
	console.log('click event on darkCheck');
	outputBox.classList.toggle('darktheme');
}

function outputBoxFunc(event) {
	// Removes the message from the DOM
	if (event.target.innerHTML == "Delete") {
		var messageEl = event.target.parentElement;
		Chatty.removeMessage(messageEl);
	}
}


/* INITIALISE MESSAGES */

Chatty.loadMessages(initMessage);

/* PLAY WEEZER */

var begin = new Audio("audio/weezer.mp4");
begin.play();
