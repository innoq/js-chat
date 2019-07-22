# Assignment 12 - UI Components
Encapsulate your member-list in a custom element, that can be reused in different places

1. Define a custom element, register it and use it in you're `index.html`:
    1. Create a new class `MemberList` that extends `HTMLElement` e.g. in `src/components/member-list.js` and import the 
    file at a reasonable point.
    2. Append the header "Member List" as a child of `member-list`, within `MemberList`. Which custom element API can 
    you use for this?
    3. Also append the `ul` list element for the members with a dummy `li` child.
    4. Register your custom element using `customElements.define()` with `"member-list"` as its name.
    5. Use your new `member-list` in your HTML, replacing the original member list section.
    4. Make sure, the old `#members` element is not referenced anywhere anymore, i.e. you have to remove at least 
    `renderMemberList()` from `src/modules/chat.js`.
    5. Now, check that it actually works.
    
2. Connect your custom element to the backend and render the actual members:
    1. Extract the receiving of messages into a new function `getMessages()` within a separate module, e.g. 
    `src/services/messages.js`, so that it can also be used within `MemberList`.
    2. Also, refactor the `get members()` function of the `Chat` class, such that it can be used within MemberList. Name 
    the new function `extractMembers()`.
    Hint: There are many options, but one is to use `static`.
    3. Now, use `getMessages()` and `extractMembers()` within a new function `updateMembers()` of `MemberList`. This new 
    function shall 
        1. receive the messages,
        2. extract the member list from it, and
        3. render each member as an `li` child of the member-list's `ul` element.
    3. Call the new function periodically, somewhere within `MemberList`.
    4. Check if it works.
    
3. Use your browser debugging console, to move the `member-list` to the end of the `body` element. Do you observe any 
strange behavior? If yes, do you know how to fix it?

