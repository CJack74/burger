//Dependencies
const express = require('express')
const mysql = require('mysql')
const exphbs = require("express-handlebars");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: 'Password',
//     database: 'burger',
// });


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8081;

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");






// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });