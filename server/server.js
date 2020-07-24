require("dotenv").config();

const express = require("express"),
    path = require("path"),
    bodyparser = require("body-parser"),
    methodOverride = require("method-override"),
    app = express();
const pool = require("./config/db_config");
const IndexRouter = require("./controllers/index.router");


app.use(express.static('public'));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(methodOverride("_method"));

//ROUTES

app.use("/api", IndexRouter);

const port = process.env.PORT || 8080;
app.listen(port, function(req, res) {
    console.log("Server Started! ");
    console.log(`Go to http://localhost/${port}`);
})