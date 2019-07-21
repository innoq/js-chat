function Message(textBody) {
    this.textBody = textBody;
}

Message.prototype.render = function () {
    return this.textBody;
};


function SystemMessage(textBody) {
    Message.call(this, textBody);
}

SystemMessage.prototype = Object.create(Message.prototype); // What happens when using "new Message() "instead?
SystemMessage.prototype.constructor = SystemMessage;

SystemMessage.prototype.render = function () {
    return "..." + this.textBody + "...";
};

function UserMessage(textBody, sender) {
    Message.call(this, textBody); // Why not just "Message(textBody)"?
    this.sender = sender;
}

UserMessage.prototype = Object.create(Message.prototype);
UserMessage.prototype.constructor = UserMessage;

UserMessage.prototype.render = function () {
    return `${this.sender}: ${this.textBody}`;
};


const messages = [
    new SystemMessage("Lisa enters the chat"),
    new SystemMessage("Paul enters the chat"),
    new UserMessage("Hello!", "Paul"),
    new UserMessage("Hello Paul! How are you?", "Lisa"),
    new UserMessage("Hi Lisa, i'm fine, thanks. How are you?", "Paul")
];

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

const wordsPerMember = messages.reduce((wordsPerMember, message) => {
    const {sender, textBody} = message;
    const wordCount = textBody.split(" ").length;
    sender && (wordsPerMember[sender] ?
        wordsPerMember[sender] += wordCount :
        wordsPerMember[sender] = wordCount);

    return wordsPerMember;
}, {});

console.log("Words per Member: ", wordsPerMember);
