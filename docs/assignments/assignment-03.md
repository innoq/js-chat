# Assignment 3 - Functions

1. Write a function `render(message)`, that extracts the formatting logic of the previously defined `sendMessage` 
function, i.e. it must return a string containing the formatted `textBody` of the message object. 
Use this function within your `sendMessage(message)` function.

2. Re-write your `sendMessage` function such that
    1. it logs the complete message object to the console, instead of the formatted message text.    
    2. it accepts an optional second parameter `renderFunction`. If `renderFunction` is provided, it shall be used to 
    log a nicely formatted text output to the console, in addition to the logged message object.
    
3. Add a property `render` to each message objecting, referencing the `render(message)` function. Then, remove the 
`message` parameter from the original `render(message)` function and replace its references within the function with 
`this`, which refers to the corresponding calling message object. What do you have to change in `sendMessage` to adopt 
to the changed behavior?

4. Optional: Instead of declaring the message object manually, write a function `createMessage(sender, text, type)` 
that returns corresponding message objects. Use an arrow function for the function definition. Use this function when 
declaring `m1, m2, m3, ...`.
