# Assignment 5 - Prototypal Inheritance

1. Re-implement your message objects using JavaScript's prototypal inheritance to differentiate between the type of 
message:
    1. Define a type `Message` and two subtypes `SystemMessage` und `UserMessage`. 
    2. Use the constructors to set the initial values. Define common properties on `Message`, define properties that 
    only make sense on one of the subtypes on the corresponding subtype.  
    Hint: Don't forget to call the super-constructor within the constructors of the subtypes. 
    3. Redefine the `render` function on `Message` to simply log `this.textBody` to the console for now.
    4. Fill your `messages` array with instances of `SystemMessage`s and `UserMessages` instead of calling 
    `createMessage()`.
    5. Check on the browsers debug console that everything works as expected.
    6. Can you explain the difference between the following three variants of defining `render` 
        1. in the constructor using `this.render = function(){...}`,
        2. in the constructor using `this.render = render`, where the right-hand-side `render` refers to a predefined 
        function,
        3. on the prototype using `Message.prototype.render = function(){...}`.

2. Now, overwrite `render` on `SystemMessage` and `UserMessage` to differentiate the output between the two types. Use 
the same rendering logic as before. Where in your code do you actually have to set `SystemMessage.prototype.render` 
(respectively `UserMessage`) so that everything works as expected?

