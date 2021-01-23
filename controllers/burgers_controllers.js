var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

//GET route for index
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all(function (burgerData) {
        //will return burger data to handlebars
        res.render("index", {
            burger_data: burgerData
        });
    });
});

//POST route for created burger
router.post("/burgers/create", function (req, res) {
	// console.log("result from post route: ")
	// console.log(res);
	// console.log("################################");
	// console.log("request from post route: ")
	// console.log(req);
    // console.log("################################")



    burger.create(req.body.burger_name, function (result) {
	// 	console.log("result from burger.create: ")
		console.log(result);
	// 	console.log("################################")
       res.redirect("/");
    });
});

//PUT route
router.put("/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        // updates mysql and logs in console
        console.log(result);
        //Allows page to reload
        res.sendStatus(200);
    });
});

module.exports = router;