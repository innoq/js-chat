const express = require("express");

const PORT = 3000;
const app = express();

app.use(express.static("frontend"));

const messages = [];

const getMessages = (req, res) => {
    res.status(200).json(messages);
};

app.get("/api/messages", getMessages);

app.listen(PORT, function(){
    console.log("backend listening on " + PORT);
});