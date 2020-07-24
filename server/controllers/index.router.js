var express = require('express');
var router = express.Router();
var Restaurents = require("./Restaurents/routes/restaurents.router");

router.use("/restaurents", Restaurents);


module.exports = router;