var express = require('express');
var router = express.Router();
const pool = require("../../../config/db_config");

// GET all restaurents

router.get("/", async function(req, res) {

    try {

        const allResaturents = await pool.query(
            "SELECT * FROM restaurents"
        );
        res.render("index", { restaurents: allResaturents.rows });

    } catch (error) {
        console.log(error.message);
    }
});

// Add restaurent

router.post("/", async function(req, res) {

    try {

        const name = req.body.restro.name;
        const location = req.body.restro.location;
        const price = req.body.restro.price;

        const insertedData = await pool.query(
            "INSERT INTO restaurents (name,location,price_range) VALUES($1,$2,$3)", [name, location, price]
        );
        res.redirect("/api/restaurents");

    } catch (error) {
        console.log(error.message);
    }
});


//ADD review

router.post("/:id/reviews", async function(req, res) {

    try {

        const { id } = req.params;
        const name = req.body.review.name;
        const review = req.body.review.review;
        const rating = req.body.review.rating;
        console.log(id);

        const insertedData = await pool.query(
            "INSERT INTO reviews (restaurent_id,name,review,rating) VALUES($1,$2,$3,$4)", [id, name, review, rating]
        );
        res.redirect(`/api/restaurents/${id}`);

    } catch (error) {
        console.log(error.message);
    }
});

// SHOW ROUTE

router.get("/:id", async function(req, res) {

    try {

        const { id } = req.params;
        const Review = await pool.query(
            "SELECT * FROM reviews WHERE restaurent_id = $1", [id]
        );

        const Restaurent = await pool.query(
            "SELECT * FROM restaurents WHERE id = $1", [id]
        );

        const details = {
                review: Review.rows,
                restaurent: Restaurent.rows
            }
            // console.log(Review.rows);
            // console.log(Restaurent.rows);
            // console.log(details.review);
            // console.log(details.restaurent);
        res.render("show", { details: details });

    } catch (error) {
        console.log(error.message);
    }

});


// EDIT Route

router.get("/:id/edit", async function(req, res) {
    try {

        const { id } = req.params;
        const record = await pool.query(
            "SELECT * FROM restaurents WHERE id= $1", [id]
        );
        // console.log(record.rows[0]);
        res.render("edit", { restaurent: record.rows[0] });

    } catch (error) {
        console.log(error.message);
    }
});

router.put("/:id", async function(req, res) {

    try {
        const { id } = req.params;
        const name = req.body.restro.name;
        const location = req.body.restro.location;
        const price = req.body.restro.price;

        const updatedRecord = await pool.query(
            "UPDATE restaurents SET name = $1,location = $2,price_range = $3 WHERE id = $4", [name, location, price, id]
        );
        res.redirect("/api/restaurents")

    } catch (error) {
        console.log(error.message);
    }
});


router.delete("/:id", async function(req, res) {

    try {

        // console.log(req.params);
        const { id } = req.params;
        const deleteRecord = await pool.query(
            "DELETE FROM restaurents WHERE id = $1", [id]
        );
        res.redirect("/api/restaurents");

    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;