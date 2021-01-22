//Dependencies
const express = require('express')
const bodyParser = require("body-parser");
const mysql = require('mysql')
const exphbs = require("express-handlebars");



// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// // Serve static content for the app from the "public" directory in the application directory.
app.use("/public", express.static('./public/'));

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });