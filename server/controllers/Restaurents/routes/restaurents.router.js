var express = require('express');
var router = express.Router();
const pool = require("../../../config/db_config");
const { route } = require('../../index.router');

// GET all restaurents

router.get("/", async function(req, res) {

    try {

        const data = await pool.query(
            "SELECT * FROM restaurents"
        );
        res.json(data.rows);

    } catch (error) {
        console.log(error.message);
    }
});

// Create (POST) restaurent

router.post("/", async function(req, res) {

    try {

        const { name } = req.body.restro.name;
        const { location } = req.body.restro.location;
        const { price } = req.body.restro.price;

        const insertedData = await pool.query(
            "INSERT INTO restaurent (name,location,price_range) VALUES($1,$2,$3)", [name, location, price]
        );
        res.redirect("/");

    } catch (error) {
        console.log(error.message);
    }
});




module.exports = router;