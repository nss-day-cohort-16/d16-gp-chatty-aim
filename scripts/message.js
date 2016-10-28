var Chatty = (function (oldChatty) {
	var currentMessages = [];

	oldChatty.showMessages = currentMessages.forEach(function(item) {
		outputBox.innerHTML += `<div id=${item.id}>${item.message}<button class="btn btn-danger" id="delete${item.id}">Delete</button></div>`;
		});

	var addNewMessage = function(userInput) {
		oldChatty.addMessage(userInput);
// Pulling new message from "pull.js"
	};

// Add new message to well

return oldChatty;

})(Chatty || {});

Chatty.getMessages(Chatty.showMessages);