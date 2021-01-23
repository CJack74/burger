var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "c754lghjk9owpcnp",
    password: "cp4t1nu89bzffttk",
    database: "pchilwkizrq8urg1"
});

connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    connection.query(`CREATE TABLE IF NOT EXISTS burger (id int NOT NULL AUTO_INCREMENT, burger_name varchar(50) NOT NULL, devoured BOOLEAN,  PRIMARY KEY (id));`)

    console.log("connected as id" + connection.threadId);
});

module.exports = connection