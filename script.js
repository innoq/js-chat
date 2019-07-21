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

const wordsPerMember = messages.reduce((wordsPerMember, message) => {
    const {sender, textBody} = message;
    const wordCount = textBody.split(" ").length;
    sender && (wordsPerMember[sender] ?
        wordsPerMember[sender] += wordCount :
        wordsPerMember[sender] = wordCount);

    return wordsPerMember;
}, {});

console.log("Words per Member: ", wordsPerMember);


const memberNames2 = messages.reduce((memberNames, message) => {
    const {sender} = message;
    if (sender !== undefined && memberNames.indexOf(sender) === -1) {
        memberNames.push(sender)
    }
    return memberNames;
}, []);

console.log("Members names: ", memberNames2);
