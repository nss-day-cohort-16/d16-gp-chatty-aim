var Chatty = (function (oldChatty) {

	oldChatty.removeMessage = function(element) {
		console.log(element);
		Chatty.removeMessages(parseInt(element.id));
		outputBox.removeChild(element);

		var temp = outputBox.getElementsByTagName("li");

		for (var i = parseInt(element.id); i < temp.length; i++) {
			temp[i].setAttribute("id", i);
		}
	};

	return oldChatty;

})(Chatty || {});