const express = require("express");

const PORT = 3000;
const app = express();

app.use(express.static("frontend/dist"));
app.use(express.json());

const messages = [];

const getMessages = (req, res) => {
    res.status(200).json(messages);
};

const addMessage = (req, res) => {
    messages.push(req.body);
    res.status(201).end();
};

app.get("/api/messages", getMessages);
app.post("/api/messages", addMessage);

app.listen(PORT, function(){
    console.log("backend listening on " + PORT);
});
