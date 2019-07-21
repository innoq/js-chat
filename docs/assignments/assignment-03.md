# Assignment 3 - Functions

1. Wrap your code in an IIFE. Verify on the console, that your declarations are no longer globally available.  
Hint: Add the `sendMessage()` calls again, to see something on the console.

2. Write a function `render(message)`, that extracts the formatting logic of the previously defined `sendMessage` 
function, i.e. it must return a string containing the formatted `textBody` of the message object. 
Use this function within your `sendMessage(message)` function.

3. Re-write your `sendMessage` function such that
    1. it logs the complete message object to the console, instead of the formatted message text.    
    2. it accepts an optional second parameter `renderFunction`. If `renderFunction` is provided, it shall be used to 
    log a nicely formatted text output to the console, in addition to the logged message object.
    
4. Add a property `render` to each message objecting, referencing the `render(message)` function. Then, remove the 
`message` parameter from the original `render(message)` function and replace its references within the function with 
`this`, which refers to the corresponding calling message object. What do you have to change in `sendMessage` to adopt 
to the changed behavior?

5. Optional: Instead of declaring the message object manually, write a function `createMessage(sender, text, type)` 
that returns corresponding message objects. Use an arrow function for the function definition. Use this function when 
declaring `m1, m2, m3, ...`.