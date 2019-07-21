const TYPE_SYSTEM = "system";
const TYPE_USER = "user";

const m1 = {
    textBody: "Lisa enters the chat",
    type: TYPE_SYSTEM
};

const m2 = {
    textBody: "Paul enters the chat",
    type: TYPE_SYSTEM
};

const m3 = {
    sender: "Paul",
    textBody: "Hello!",
    type: TYPE_USER
};

const m4 = {
    sender: "Lisa",
    textBody: "Hello Paul! How are you?",
    type: TYPE_USER
};

const m5 = {
    sender: "Paul",
    textBody: "Hi Lisa, i'm fine, thanks. How are you?",
    type: TYPE_USER
};

function renderMessage(message) {
    let formattedMessage = "";

    if (message.type === TYPE_SYSTEM) {
        formattedMessage = "..." + message.textBody + "...";
    } else {
        formattedMessage = `${message.sender}: ${message.textBody}`;
    }

    return formattedMessage;
}

function sendMessage(message, renderFunction) {
    console.log(message);
    renderFunction && console.log(renderFunction(message));
}

sendMessage(m1, renderMessage);
sendMessage(m2, renderMessage);
sendMessage(m3, renderMessage);
sendMessage(m4, renderMessage);
sendMessage(m5, renderMessage);
