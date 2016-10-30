var Chatty = (function (oldChatty) {

     oldChatty.loadMessages = function (hollarbackFunction) {
          var loader = new XMLHttpRequest();
          loader.open("GET", "json/messages.json");
          loader.send();

          loader.addEventListener("load", function() {
               var messagesArray = JSON.parse(this.responseText).messages;
               hollarbackFunction(messagesArray.messages);
          });

          loader.addEventListener("error", function() {
               alert("The data didn't come!");
          });
     };

     return oldChatty;

})(Chatty || {});

