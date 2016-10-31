/* DOM VARIABLES */

var largeCheck = document.getElementById('largeCheck');
var darkCheck = document.getElementById('darkCheck');
var largeCheckID = document.getElementById('largeCheckID');
var darkCheckID = document.getElementById('darkCheckID');
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

var user = "Buddy Holly";

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
		var timestamp = Date();
		timestamp = timestamp.slice(0, timestamp.search("GMT") - 1);
		var messageObj = {
			"user": user,
			"message": inputField.value,
			"timestamp": timestamp
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
	if (largeCheckID.checked) {
		outputBox.classList.add('larger-text');
	}

	if (!largeCheckID.checked) {
		outputBox.classList.remove('larger-text');
	}
}

function darkFunc() {
	if (darkCheckID.checked) {
		messageContainer.classList.add('darktheme');
		document.getElementsByTagName("body")[0].classList.add('darkBody');
		console.log(document.getElementsByTagName("body")[0]);
		var messages = document.getElementsByTagName("li");
			for (var i = 0; i < messages.length; i++) {
				messages[i].classList.remove('alert-info');
				messages[i].classList.add('dark-info');
			}
	}

	if (!darkCheckID.checked) {
		messageContainer.classList.remove('darktheme');
		document.getElementsByTagName("body")[0].classList.remove('darkBody');
		console.log(document.getElementsByTagName("body")[0]);
		var messages = document.getElementsByTagName("li");
			for (var i = 0; i < messages.length; i++) {
				messages[i].classList.add('alert-info');
				messages[i].classList.remove('dark-info');
			}
	}
}

function outputBoxFunc(event) {
	// Removes the message from the DOM
	if (event.target.innerHTML == "Delete") {
		var messageEl = event.target.parentElement;
		Chatty.removeMessage(messageEl);
	}
	var listItems = document.getElementsByTagName("li");
	if (listItems.length === 0) {
		clearMessages.disabled = true;
	}
}

/* INITIALISE MESSAGES */

Chatty.loadMessages(initMessage);

/* PLAY WEEZER */

var begin = new Audio("audio/weezer.mp4");
begin.play();
