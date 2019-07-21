const express = require("express");

const PORT = 3000;
const app = express();

app.use(express.static("frontend"));

app.listen(PORT, function(){
    console.log("backend listening on " + PORT);
});