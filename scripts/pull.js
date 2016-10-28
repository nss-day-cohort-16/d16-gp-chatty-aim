var Chatty = (function(oldChatty) {
     var _messages = [];

     oldChatty.loadMessages = function() {
          var loader = new XHMLHttpRequest();
          loader.open("GET", "message.json");
          loader.send();
          loader.addEventListener("load", parseData);
          loader.addEventListener("error", failAlert);
     };

     function parseData() {
          _messages = JSON.parse(this.responseText.messages);
          console.log("_messages", _messages);
     }

     function failAlert() {
          console.log("The data didn't come!");
     }

     oldChatty.getMessages = function() {
          console.log(oldChatty);
          return _messages;
     };
})(Chatty || {});