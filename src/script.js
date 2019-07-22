import Chat from "./modules/chat.js";
import {UserMessage} from "./modules/messages.js";
import "./components/member-list.js";

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