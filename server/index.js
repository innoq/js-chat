const express = require("express");

const PORT = 3000;
const app = express();

app.use(express.static("dist"));
app.use(express.json());

const messages = [];

app.get("/api/messages", (req, res) => {
    res.status(200).json(messages);
});

app.post("/api/messages", (req, res) => {
    messages.push(req.body);
    res.status(201).end();
});

app.listen(PORT, () => {
    console.log(`backend listening on ${PORT}`);
});
