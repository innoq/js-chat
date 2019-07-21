# Assignment 7 - DOM Interaction

Use the provided HTML template `index.html` to accept user defined chat messages from an html form and output messages 
and the member list as HTML.

1. Render messages to the DOM:
    1. Extend each message class by a `renderHTML` function that returns an new `li` `HTMLElement` (possibly including 
    children) that can be appended to the `#messages` `ol` element.
    2. Extend your `sendMessage` function to append the rendered HTML element of the message to the `#messages` element.
    3. Verify that the existing `sendMessage` calls, are actually rendering the messages to the DOM.  
    Hint: `sendMessage` might throw an error in the first run (`Cannot read property 'appendChild' of null`). Take the 
    execution order of scripts in the DOM into account, and execute your script not before the corresponding elements 
    are available in the DOM. Do you know how to do this?

2. Replace your initial `sendMessage` calls by using the `#messageForm` provided in the HTML template. Send a new 
message whenever the user submits the form. For this you need to
    1. add a corresponding event listener to the form element
    2. within the form listener, create a new `UserMessage` and send it, using the `chat`s `sendMessage` function.  
Hint: You can read and write the value of an input element using `inputElement.value`.

3. Whenever a message is sent by a new member,
    1. update the HTML member list with the correct set of members  
    Hint: To set `innerHTML` from an array, `array.map()` and `array.join("")` make life easy.
    2. send a `SystemMessage` before the actual `UserMessage`, welcoming the new member.  
    Hint: If you want, you can do a recursive call to `sendMessage`.


