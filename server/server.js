require("dotenv").config();

const express = require("express"),
    bodyparser = require("body-parser"),
    app = express();
const pool = require("./config/db_config");
const IndexRouter = require("./controllers/index.router");

app.use(bodyparser.json());

//ROUTES

app.use("/api", IndexRouter);

const port = process.env.PORT || 8080;
app.listen(port, function(req, res) {
    console.log("Server Started! ");
    console.log(`Go to http://localhost/${port}`);
})