var Chatty = (function (oldChatty) {

     oldChatty.loadMessages = function (callbackFunction) {
          var loader = new XMLHttpRequest();
          loader.open("GET", "json/messages.json");
          loader.send();

          loader.addEventListener("load", function() {
               var messagesArray = JSON.parse(event.target.responseText);
               callbackFunction(messagesArray.messages);
          });

          loader.addEventListener("error", function() {
               alert("The data didn't come!");
          });
     };

     return oldChatty;

})(Chatty || {});

