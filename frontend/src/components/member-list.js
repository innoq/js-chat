import { getMessages } from "../services/messages.js";
import Chat from "../modules/chat.js";

class MemberList extends HTMLElement {
    connectedCallback() {
        this.headerElement = document.createElement("h2");
        this.headerElement.textContent = "Members";

        this.ulElement = document.createElement("ul");
        const li = document.createElement("li");
        li.textContent = "Dummy element";
        this.ulElement.appendChild(li);
        this.appendChild(this.headerElement);
        this.appendChild(this.ulElement);

        this.updateMembers();
        this.updateTimer = setInterval(() => this.updateMembers(), 1000);
    }

    disconnectedCallback() {
        clearInterval(this.updateTimer);

        this.headerElement.remove();
        this.ulElement.remove();
    }

    async updateMembers() {
        const messages = await getMessages();
        const existingMembers = Array.from(this.ulElement.querySelectorAll("li")).textContent;
        const newMembers = Chat.extractMembers(messages).filter((member) => !existingMembers.includes(member));
        newMembers.forEach((member) => {
            const li = document.createElement("li");
            li.textContent = member;
            this.ulElement.appendChild(li);
        });
    }
}

customElements.define("member-list", MemberList);
