(function () {

    class Message {
        constructor(textBody) {
            this.textBody = textBody;
        }

        render() {
            return this.textBody;
        }
    }

    class SystemMessage extends Message {
        render() {
            return "..." + this.textBody + "...";
        }
    }

    class UserMessage extends Message {
        constructor(textBody, sender) {
            super(textBody);
            this.sender = sender;
        }

        render() {
            return `${this.sender}: ${this.textBody}`;
        }
    }


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
})();