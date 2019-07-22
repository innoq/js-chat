import {Message, SystemMessage} from "./messages.js";

export default class Chat {
    constructor() {
        this.messages = [];
        this.updateMessages();
        setInterval(() => this.updateMessages(), 1000);
    }

    async sendMessage(message) {
        const {sender} = message;
        const isNewMember =
            !(message instanceof SystemMessage) &&
            (this.members.indexOf(sender) === -1);

        if (isNewMember) {
            this.sendMessage(new SystemMessage(`${sender} has entered the chat`))
        }

        await fetch("api/messages", {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json"}),
            body: JSON.stringify(message)
        });

        this.updateMessages();
    }

    async updateMessages() {
        const response = await fetch("api/messages", {method: "GET"});
        const serverMessages = await response.json();
        const newMessages = serverMessages.slice(this.messages.length);

        newMessages.forEach((messageObj) => {
            const message = Message.fromJSON(messageObj);
            this.messages.push(message);
            document.querySelector("#messages").appendChild(message.renderHTML());
        });
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
        return Chat.extractMembers(this.messages);
    }

    static extractMembers(messages) {
        const membersOfUserMsgs = messages
            .map(message => message.sender)
            .filter(member => member !== undefined);

        const distinctMembers = Array.from(new Set(membersOfUserMsgs));

        return distinctMembers;
    }
}