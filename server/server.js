require("dotenv").config();
const express = require("express"),
    bodyparser = require("body-parser"),
    app = express();

const port = process.env.PORT || 8080;
app.listen(port, function(req, res) {
    console.log("Server Started! ");
    console.log(`Go to http://localhost/${port}`);
})