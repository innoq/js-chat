import { subscribeToNewMessages } from "./chat-app.js";

class MessageList extends HTMLElement {
    connectedCallback() {
        subscribeToNewMessages((message) => {
            this.appendMessage(message);
        });
    }

    appendMessage(message) {
        this.querySelector("ol").appendChild(message.renderHTML());
    }
}

customElements.define("message-list", MessageList);
