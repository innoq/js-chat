class MessageForm extends HTMLElement {
    connectedCallback() {
        this.form = this.querySelector("form");
        this.form.addEventListener("submit", this.onSubmit.bind(this));
    }

    /*
     * We could also use FormData here:
     * const formData = new FormData(this.form);
     * JSON.stringify(Object.fromEntries(formData));
     *
     * But: The form fields do not have the same names as they have on the server
     *
     * We could also set the method and target in the form
     * Then we could just use form-data instead of JSON
     */
    async onSubmit(event) {
        event.preventDefault();

        const userNameInput = this.form.querySelector("#username");
        const messageInput = this.form.querySelector("#message");

        const userName = userNameInput.value;
        const messageText = messageInput.value;

        messageInput.value = "";

        await fetch("api/messages", {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify({
                sender: userName,
                textBody: messageText,
            }),
        });
    }
}

customElements.define("message-form", MessageForm);
