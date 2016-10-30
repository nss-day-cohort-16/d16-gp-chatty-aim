var Chatty = (function (oldChatty) {
	var _currentMessages = [];

	oldChatty.getMessages = function () {
		return _currentMessages;
	};

	oldChatty.writeMessages = function (messageObj) {
		_currentMessages.push(messagesObj);
	};

	oldChatty.removeMessages = function (index) {
		//
	};

    oldChatty.putMessageOnDOM = function (elementID, messageObj, idNumber) {
        var outputMessage = "";

        outputMessage += `<li class="alert alert-danger">${currentMessage.message} 
      	<button type="button" class="btn btn-success" id="${currentMessage.id}">Delete</button></li>`;

        elementID.innerHTML += outputMessage;
     };

	return oldChatty;

})(Chatty || {});

