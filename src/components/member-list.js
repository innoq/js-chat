import {getMessages} from "../services/messages.js";
import Chat from "../modules/chat.js";

class MemberList extends HTMLElement {
    connectedCallback() {
        this.headerElement = document.createElement("h2");
        this.headerElement.innerHTML = "Members";

        this.ulElement = document.createElement("ul");
        this.ulElement.innerHTML = "<li>Dummy</li>";

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
        const members = Chat.extractMembers(messages);
        this.ulElement.innerHTML = members.map(member => `<li>${member}</li>`).join("");
    }
}

customElements.define("member-list", MemberList);