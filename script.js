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

sendMessage(messages[0]);
sendMessage(messages[1]);
sendMessage(messages[2]);
sendMessage(messages[3]);
sendMessage(messages[4]);
