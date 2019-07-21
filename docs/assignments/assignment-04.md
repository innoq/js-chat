# Assignment 4 - Arrays

1. Declare a `messages` array and add the message objects to it, instead of declaring individual variables 
`m1, m2, m3, ...`.

2. Iterate over the `messages` to call `sendMessage` for each message,
    1. using a `for` loop,
    2. using the `forEach` function.
    
3. Use the arrays `map` function to create a list of chat members. Filter out the system messages using the arrays 
`filter()` function. As the chat member names shall only be listed once, use the `Set` type.
    
4. Use the arrays `reduce` function to calculate the number of words typed per chat member. It shall return an object 
of the form:
```javascript
{
    chatMember1: totalNumberOfWords,
    chatMember2: totalNumberOfWords,
    ...
}
```
Hint: Use `split` function defined on `String` to obtain the number of words of one message 
(see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).

5. Optional: Create a list of distinct chat member names, as in 3., but this time without the help of the `Set` type.  
Hint: You can use `reduce` to map an array to a new array with a different length.
