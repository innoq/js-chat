import { createMessage, getMessages } from "../services/messages.js";
import { Message, SystemMessage } from "./messages.js";

export default class Chat {
    constructor() {
        this.messages = [];
        this.updateMessages();
        setInterval(() => this.updateMessages(), 1000);
    }

    async sendMessage(message) {
        const { sender } = message;
        const isNewMember =
            !(message instanceof SystemMessage) && !this.members.has(sender);

        if (isNewMember) {
            this.sendMessage(
                new SystemMessage(`${sender} has entered the chat`)
            );
        }

        await createMessage(message);

        this.updateMessages();
    }

    async updateMessages() {
        const messages = await getMessages();
        const newMessages = messages.slice(this.messages.length);

        newMessages.forEach((message) => {
            this.messages.push(message);
            document
                .querySelector("#messages")
                .appendChild(message.renderHTML());
        });
    }

    // TODO: this is unused
    get wordsPerMember() {
        const wordsPerMember = this.messages.reduce(
            (wordsPerMember, message) => {
                const { sender, textBody } = message;
                const wordCount = textBody.split(" ").length;
                sender &&
                    (wordsPerMember[sender]
                        ? (wordsPerMember[sender] += wordCount)
                        : (wordsPerMember[sender] = wordCount));

                return wordsPerMember;
            },
            {}
        );

        return wordsPerMember;
    }

    get members() {
        return Chat.extractMembers(this.messages);
    }

    static extractMembers(messages) {
        const membersOfUserMsgs = messages
            .map((message) => message.sender)
            .filter((member) => member !== undefined);

        return new Set(membersOfUserMsgs);
    }
}
