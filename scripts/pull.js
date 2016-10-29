var Chatty = (function(oldChatty) {
     var _messages = [];

     oldChatty.loadMessages = function(callbackFunction) {
          var loader = new XMLHttpRequest();
          loader.open("GET", "messages.JSON");
          loader.send();
          loader.addEventListener("load", function() {
          _messages = JSON.parse(this.responseText).messages;
          // console.log("_messages", _messages);
          callbackFunction(_messages);
          Chatty.loadMessages(Chatty.listMessages);
          });
          loader.addEventListener("error", function() {
          console.log("The data didn't come!");
          });
     };



     oldChatty.listMessages = function (messages) {
     //List messages in DOM
          var outputBox = document.getElementById("outputBox");
          var outputMessage = "";

          for (var i = 0; i < messages.length; i++) {
               var currentMessage = messages[i];

               outputMessage += `<div class="alert alert-danger">
                         ${currentMessage.message} <button type="button" class="btn btn-success" id="${currentMessage.id}">Delete</button></div>`;
          }

          outputBox.innerHTML = outputMessage;
     };





     oldChatty.getMessages = function() {
          // console.log(oldChatty.getMessages);
          return _messages;
     };


     return oldChatty;

})(Chatty || {});

