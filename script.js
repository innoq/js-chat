const TYPE_SYSTEM = "system";
const TYPE_USER = "user";

const createMessage = (textBody, type, sender) => ({textBody, type, sender, render: renderMessage});

const m1 = createMessage("Lisa enters the chat", TYPE_SYSTEM);
const m2 = createMessage("Paul enters the chat", TYPE_SYSTEM);
const m3 = createMessage("Hello!", TYPE_USER, "Paul");
const m4 = createMessage("Hello Paul! How are you?", TYPE_USER, "Lisa");
const m5 = createMessage("Hi Lisa, i'm fine, thanks. How are you?", TYPE_USER, "Paul");

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

sendMessage(m1);
sendMessage(m2);
sendMessage(m3);
sendMessage(m4);
sendMessage(m5);
