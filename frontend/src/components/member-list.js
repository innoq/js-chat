class MemberList extends HTMLElement {
    connectedCallback() {
        const headerElement = document.createElement("h2");
        headerElement.innerHTML = "Members";

        const ulElement = document.createElement("ul");
        ulElement.innerHTML = "<li>Dummy</li>";

        this.appendChild(headerElement);
        this.appendChild(ulElement);
    }
}

customElements.define("member-list", MemberList);