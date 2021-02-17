import { getMessages } from "../services/messages.js";
import Chat from "../modules/chat.js";

class MemberList extends HTMLElement {
    connectedCallback() {
        this.headerElement = document.createElement("h2");
        this.headerElement.textContent = "Members";

        this.ulElement = document.createElement("ul");

        this.appendChild(this.headerElement);
        this.appendChild(this.ulElement);

        this.updateMembers();
        this.updateTimer = setInterval(this.updateMembers.bind(this), 1000);
    }

    disconnectedCallback() {
        clearInterval(this.updateTimer);
    }

    async updateMembers() {
        const messages = await getMessages();
        const members = Chat.extractMembers(messages);
        this.textContent = "";
        members.forEach((member) => {
            const li = document.createElement("li");
            li.textContent = member;
            this.appendChild(li);
        });
    }
}

customElements.define("member-list", MemberList);
