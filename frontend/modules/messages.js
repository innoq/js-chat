export class Message {
    constructor(textBody) {
        this.textBody = textBody;
    }

    render() {
        return this.textBody;
    }

    renderHTML() {
        const liElement = document.createElement("li");
        liElement.textContent = this.textBody;
        return liElement
    }

    static fromJSON(jsonObj) {
        let newMessage;
        const {textBody, sender} = jsonObj;

        if (sender === undefined) {
            newMessage = new SystemMessage(textBody);
        } else {
            newMessage = new UserMessage(textBody, sender);
        }

        return newMessage;
    }
}

export class SystemMessage extends Message {
    render() {
        return "..." + this.textBody + "...";
    }

    renderHTML() {
        const liElement = document.createElement("li");
        const emElement = document.createElement("em");
        emElement.textContent = ` ... ${this.textBody} ... `;
        liElement.appendChild(emElement);
        return liElement;
    }
}

export class UserMessage extends Message {
    constructor(textBody, sender) {
        super(textBody);
        this.sender = sender;
    }

    render() {
        return `${this.sender}: ${this.textBody}`;
    }

    renderHTML() {
        const liElement = document.createElement("li");
        const bElement = document.createElement("b");
        bElement.textContent = this.sender;
        const textElement = document.createTextNode(`: ${this.textBody}`);
        liElement.appendChild(bElement);
        liElement.appendChild(textElement);
        return liElement;
    }
}
