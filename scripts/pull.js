var Chatty = (function(oldChatty) {
     var _messages = [];

     oldChatty.loadMessages = function() {
          var loader = new XMLHttpRequest();
          loader.open("GET", "messages.JSON");
          loader.send();
          loader.addEventListener("load", parseData);
          loader.addEventListener("error", failAlert);
     };

     function parseData() {
          _messages = JSON.parse(this.responseText).messages;
          // console.log("_messages", _messages);
     }

     function failAlert() {
          console.log("The data didn't come!");
     }

     oldChatty.getMessages = function() {
          // console.log(oldChatty.getMessages);
          return _messages;
     };


     return oldChatty;

})(Chatty || {});

// console.log("chatty", Chatty);