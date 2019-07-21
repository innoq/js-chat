# Assignment 2 - Objects

1. Create several objects `m1, m2, ...` within `./script.js` with an equal structure that represent chat messages. 
Each chat message object should have a `textBody`, a `sender` and a `type` property. The `type` 
may have one of the values "user" or "system".

2. Create constant variable `TYPE_USER` and `TYPE_SYSTEM` for the type values, to avoid typos during implementation. 
Reference those variables during the creation of the message objects.

3. Create a function `sendMessage`, that prints out a chat message to the console using `console.log(someString)`. 
Format it differently, depending on the type value, e.g. prepending the username for user messages and/or surrounding 
system messages with three dots. Call the function several 
times to log each chat message to the debugging console. 
