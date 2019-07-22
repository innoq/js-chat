import {getMessages} from "../services/messages.js";
import Chat from "../modules/chat.js";

class MemberList extends HTMLElement {
    connectedCallback() {
        const headerElement = document.createElement("h2");
        headerElement.innerHTML = "Members";

        this.ulElement = document.createElement("ul");
        this.ulElement.innerHTML = "<li>Dummy</li>";

        this.appendChild(headerElement);
        this.appendChild(this.ulElement);

        this.updateMembers();
        setInterval(() => this.updateMembers(), 1000);
    }

    async updateMembers() {
        const messages = await getMessages();
        const members = Chat.extractMembers(messages);
        this.ulElement.innerHTML = members.map(member => `<li>${member}</li>`).join("");
    }
}

customElements.define("member-list", MemberList);