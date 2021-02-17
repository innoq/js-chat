import { subscribeToNewMessages } from "./chat-app.js";

class MemberList extends HTMLElement {
    connectedCallback() {
        this.members = new Set();

        subscribeToNewMessages((message) => {
            this.updateMembersWith(message);
        });
    }

    async updateMembersWith(message) {
        if (message.sender && !this.members.has(message.sender)) {
            this.members.add(message.sender);
            const li = document.createElement("li");
            li.textContent = message.sender;
            this.querySelector("ul").appendChild(li);
        }
    }
}

customElements.define("member-list", MemberList);
