# Assignment 10 - Communicating with a Server (HTTP and AJAX)
Now, send your messages to the server and get all message updates from there.

1. Remove the simulated delay functionality.

2. Send message objects to the servers `"api/messages"` endpoint by using the `fetch` API and the JSON format. 
    1. Send a `POST` request using the `fetch` function. Serialize the message object to JSON (`JSON.stringify`) and set
    it as the requests `body`.  
    Hint 1: Don't forget to set the correct messages body mime type (`Content-Type: application/json`) within the 
    headers.  
    Hint 2: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    2. For now, don't change anything in the logic of rendering sent messages: Just assume that the request will 
    reach their target and render them right after `fetch` was called.
    3. Check if it actually works by sending a GET to`"api/messages'` in the browser, i.e. opening the URL in 
    the browser.
    
3. Now, update the clients view on the messages from the server, each time a message was sent.
    1. To encapsulate this functionality, add a new `updateMessages()` function to the `Chat` class. 
    2. Within  `sendMessage()`, replace the following functionality by a call to `updateMessages()`
        1. adding the new message to `this.messages`,
        2. rendering the new message to the `document`, and 
        3. updating the member list with `this.renderMemberList()`
    3. To be able to create instances of `SystemMessage` and `UserMessage` from the plain objects, that are contained in 
    the response of `GET "api/messages"`, write a `static` method `fromJSON` on the `Message` type, that creates a 
    corresponding new `Message` instance. You may guess from the non-existence of the `sender` property, that the object
    is a `SystemMessage`.
    4. Within `updateMessages()`,
        1. receive the messages array from the server by sending a `GET` request to `"api/messages"`
        2. deserialize the JSON response to a JavaScript object (or array)  
        Hint: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        3. transform the returned array into an array of `Message` instances, using `Message.fromJSON()`
        3. compare the received messages with those the client already had, and add the new messages to `this.messages` 
        and render it to the document.
        Hint: (comparing the length of the messages array is sufficient in this example; also `Array.prototype.slice()` 
        might help)
        4. finally, update the member list in the document.
        
4. Optionally: Update the messages  as soon as the chat is created and from then on every second.  
Hint: `setInterval(callbackFn, milliseconds)` will support you, here.



