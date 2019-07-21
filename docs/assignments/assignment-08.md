# Assignment 8 - Asynchronous Programming
Simulate network latency with `setTimeout()`, promises and async/await.

1. Wrap the message sending functionality in a `setTimeout()` call, to add a noticeable delay (e.g. 1 second) between 
the point where the user submits the message and the time it appears in the messages section.

2. Wrap setTimeout in a promise:
    1. Write a new function `delay(milliseconds)` that returns a promise that resolves after the specified time in 
    milliseconds.  
    Hint: You can ignore the reject callback of the promise constructor in this case.
    2. Use this function instead of `setTimeout` to use `.then()` for the delayed execution of `sendMessage()`.
    
3. Re-implement your call to `delay` using `await` instead of working with the returned promise explicitly. What else do 
you have to change in your function definition?

