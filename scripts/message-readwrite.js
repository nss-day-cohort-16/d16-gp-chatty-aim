var Chatty = (function (oldChatty) {
	var _currentMessages = [];

	oldChatty.getMessages = function () {
		return _currentMessages;
	};

	oldChatty.writeMessages = function (messageObj) {
		_currentMessages.push(messageObj);
	};

	oldChatty.removeMessages = function (index) {
		//
	};

    oldChatty.putMessageOnDOM = function (elementID, messageObj, idNumber) {
        var outputMessage = "";

        outputMessage += `<li class="alert alert-danger">${messageObj.message} 
      	<button type="button" class="btn btn-success" id="${messageObj.id}">Delete</button></li>`;

        elementID.innerHTML += outputMessage;
     };

	return oldChatty;

})(Chatty || {});

