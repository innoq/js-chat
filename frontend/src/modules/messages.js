export class Message {
    constructor(textBody) {
        this.textBody = textBody;
    }

    render() {
        return this.textBody;
    }

    renderHTML() {
        const liElement = document.createElement("li");
        liElement.innerHTML = this.textBody;
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
        liElement.innerHTML = `<em> ... ${this.textBody} ... </em>`;
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
        liElement.innerHTML = `<b>${this.sender}</b>: ${this.textBody}`;
        return liElement;
    }
}