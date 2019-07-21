class Message {
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

class SystemMessage extends Message {
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

class UserMessage extends Message {
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


class Chat {
    constructor() {
        this.messages = [];
        this.updateMessages();
        setInterval(() => this.updateMessages(), 1000);
    }

    async sendMessage(message) {
        const {sender} = message;
        const isNewMember =
            !(message instanceof SystemMessage) &&
            (this.members.indexOf(sender) === -1);

        if (isNewMember) {
            this.sendMessage(new SystemMessage(`${sender} has entered the chat`))
        }

        await fetch("api/messages", {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json"}),
            body: JSON.stringify(message)
        });

        this.updateMessages();
    }

    async updateMessages() {
        const response = await fetch("api/messages", {method: "GET"});
        const serverMessages = await response.json();
        const newMessages = serverMessages.slice(this.messages.length);

        newMessages.forEach((messageObj) => {
            const message = Message.fromJSON(messageObj);
            this.messages.push(message);
            document.querySelector("#messages").appendChild(message.renderHTML());
        });

        this.renderMemberList();
    }

    renderMemberList() {
        const memberListElement = document.querySelector("#members");
        const newChildren = this.members.map(member => {
            const li = document.createElement("li");
            li.textContent = member;
            return li;
        });
        memberListElement.replaceChildren(...newChildren);
    }

    get wordsPerMember() {
        const wordsPerMember = this.messages.reduce((wordsPerMember, message) => {
            const {sender, textBody} = message;
            const wordCount = textBody.split(" ").length;
            sender && (wordsPerMember[sender] ?
                wordsPerMember[sender] += wordCount :
                wordsPerMember[sender] = wordCount);

            return wordsPerMember;
        }, {});

        return wordsPerMember;
    }

    get members() {
        const membersOfUserMsgs = this.messages
            .map(message => message.sender)
            .filter(member => member !== undefined);

        const distinctMembers = Array.from(new Set(membersOfUserMsgs));

        return distinctMembers;
    }
}

window.addEventListener("load", () => {
    // init code
    const chat = new Chat();

    const messageForm = document.querySelector("#messageForm");

    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const userNameInput = document.querySelector("#username");
        const messageInput = document.querySelector("#message");

        const userName = userNameInput.value;
        const messageText = messageInput.value;

        messageInput.value = "";
        chat.sendMessage(new UserMessage(messageText, userName));
    });
});
