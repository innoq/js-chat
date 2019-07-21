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


    class Chat {
        constructor() {
            this.messages = [];
        }

        sendMessage(message) {
            this.messages.push(message);
            console.log(message);
            console.log(message.render());
        }

        get wordsPerMember() {
            const wordsPerMember = this.messages.reduce((wordsPerMember, message) => {
                const {sender, textBody} = message;
                const wordCount = textBody.split(" ").length;
                sender && (wordsPerMember[sender] ?
                    wordsPerMember[sender] += wordCount :
                    wordsPerMember[sender] = wordCount);

                return wordsPerMember;
            }, {});

            return wordsPerMember;
        }

        get members() {
            const membersOfUserMsgs = this.messages
                .map(message => message.sender)
                .filter(member => member !== undefined);

            const distinctMembers = Array.from(new Set(membersOfUserMsgs));

            return distinctMembers;
        }
    }


    // init code
    const chat = new Chat();

    const initialMessages = [
        new SystemMessage("Lisa enters the chat"),
        new SystemMessage("Paul enters the chat"),
        new UserMessage("Hello!", "Paul"),
        new UserMessage("Hello Paul! How are you?", "Lisa"),
        new UserMessage("Hi Lisa, i'm fine, thanks. How are you?", "Paul")
    ];

    initialMessages.forEach(message => chat.sendMessage(message));

    console.log("Member names: ", chat.members);
    console.log("Words per Member: ", chat.wordsPerMember);
})();