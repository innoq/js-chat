const TYPE_SYSTEM = "system";
const TYPE_USER = "user";

const m1 = {
    textBody: "Lisa enters the chat",
    type: TYPE_SYSTEM,
    render: renderMessage
};

const m2 = {
    textBody: "Paul enters the chat",
    type: TYPE_SYSTEM,
    render: renderMessage
};

const m3 = {
    sender: "Paul",
    textBody: "Hello!",
    type: TYPE_USER,
    render: renderMessage
};

const m4 = {
    sender: "Lisa",
    textBody: "Hello Paul! How are you?",
    type: TYPE_USER,
    render: renderMessage
};

const m5 = {
    sender: "Paul",
    textBody: "Hi Lisa, i'm fine, thanks. How are you?",
    type: TYPE_USER,
    render: renderMessage
};

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
