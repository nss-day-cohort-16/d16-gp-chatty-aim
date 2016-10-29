// DOM VARIABLES

var largeCheck = document.getElementById('largeCheck');
var darkCheck = document.getElementById('darkCheck');
var inputField = document.getElementById('inputField');
var clearMessages = document.getElementById('clearMessages');
var outputBox = document.getElementById('outputBox');

// console.log("chatty", Chatty);

// EVENT LISTENERS

inputField.addEventListener('keyup', checkEnter);
clearMessages.addEventListener('click', messagesClear);
largeCheck.addEventListener('click', largeFunc);
darkCheck.addEventListener('click', darkFunc);

// document.querySelector("body").addEventListener("click", function(event) {
//   console.log(event);

//   // Handle the click event on any li
//   if (event.target.tagName.toLowerCase() === "li") {
//     console.log("You clicked on an <li> element");
//   }

//   // Handle the click event on any DOM element with a certain class
//   if (event.target.className === "article-section") {
//     console.log("You clicked on an `article-section` element");
//   }

//   // Inspect the `id` property of the event target
//   if (event.target.id === "page-title") {
//     console.log("You clicked on the page-title element");
//   }
// });

// FUNCTIONS

function largeFunc() { // Toggles font-size to be larger when checked
	console.log('click event on largeCheck');
	outputBox.classList.toggle('larger-text');
}

function darkFunc() { // Toggles to dark theme when checked
	console.log('click event on darkCheck');
	outputBox.classList.toggle('darktheme');
}

function checkEnter(e) { // Checks value of inputField on "Enter" press
	if (e.keyCode === 13 && inputField.value.length) { // Only submits if inputField is has 1 or more characters
		console.log('Enter keyup event');
		submitMessage();
		clearInput();
	}
}

function clearInput() {
	console.log("clear inputField after enter press");
	inputField.value = "";
}

function messagesClear() {
	console.log('click clearMessages');
}



// CALLS
// var _messages = [];
Chatty.loadMessages(Chatty.listMessages);
