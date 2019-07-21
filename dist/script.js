(function () {

    const TYPE_SYSTEM = "system";
    const TYPE_USER = "user";

    const createMessage = (textBody, type, sender) => ({textBody, type, sender, render: renderMessage});

    const messages = [
        createMessage("Lisa enters the chat", TYPE_SYSTEM),
        createMessage("Paul enters the chat", TYPE_SYSTEM),
        createMessage("Hello!", TYPE_USER, "Paul"),
        createMessage("Hello Paul! How are you?", TYPE_USER, "Lisa"),
        createMessage("Hi Lisa, i'm fine, thanks. How are you?", TYPE_USER, "Paul")
    ];

    function renderMessage() {
        let formattedMessage = "";

        if (this.type === TYPE_SYSTEM) {
            formattedMessage = "..." + this.textBody + "...";
        } else {
            formattedMessage = `${this.sender}: ${this.textBody}`;
        }

        return formattedMessage;
    }

    function sendMessage(message) {
        console.log(message);
        message.render && console.log(message.render());
    }

    messages.forEach(message => sendMessage(message));

    const membersOfUserMsgs = messages
        .map(message => message.sender)
        .filter(member => member !== undefined);

    const memberNames = Array.from(new Set(membersOfUserMsgs));
    console.log("Member names: ", memberNames);
})();