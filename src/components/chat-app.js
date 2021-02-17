import { getMessages } from "../services/messages.js";
import { UserMessage, SystemMessage } from "../modules/messages.js";

class ChatApp extends HTMLElement {
    connectedCallback() {
        this.messages = [];
        this.members = new Set();

        this.updateMessages();
        setInterval(this.updateMessages.bind(this), 1000);
    }

    async updateMessages() {
        const messages = await getMessages();
        const newMessages = messages.slice(this.messages.length);

        newMessages.forEach((message) => {
            this.messages.push(message);
            let messageEvent = new CustomEvent("new-message", {
                detail: message,
            });
            this.dispatchEvent(messageEvent);

            if (
                message instanceof UserMessage &&
                !this.members.has(message.sender)
            ) {
                this.members.add(message.sender);

                let systemMessage = new SystemMessage(
                    `${message.sender} has entered the chat`
                );
                let memberEvent = new CustomEvent("new-message", {
                    detail: systemMessage,
                });
                this.dispatchEvent(memberEvent);
            }
        });
    }
}

customElements.define("chat-app", ChatApp);

export function subscribeToNewMessages(fn) {
    const app = document.querySelector("chat-app");

    app.messages.forEach((message) => {
        fn(message);
    });

    app.addEventListener("new-message", (ev) => {
        fn(ev.detail);
    });
}
