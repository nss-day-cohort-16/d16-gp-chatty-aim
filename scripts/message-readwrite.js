var Chatty = (function (oldChatty) {
	var _currentMessages = [];

	oldChatty.getMessages = function () {
		return _currentMessages;
	};

	oldChatty.writeMessages = function (messageObj) {
		_currentMessages.push(messageObj);
	};

	oldChatty.removeMessages = function (index) {
		var messageA = _currentMessages.slice(0, index);
		var messageB = _currentMessages.slice(index + 1);
		_currentMessages = messageA.concat(messageB);
	};

    oldChatty.putMessageOnDOM = function (elementID, messageObj, idNumber) {
        var outputMessage = "";

        outputMessage += `<li class="alert alert-info" id="${idNumber}">${messageObj.message} 
      	<button type="button" class="btn btn-success pull-right" id="${idNumber}">Delete</button></li>`;

        elementID.innerHTML += outputMessage;
     };

	return oldChatty;

})(Chatty || {});

