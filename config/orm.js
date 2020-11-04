const connection = require("../config/connection.js");

//// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  
    let arr = [];
  
    for (let key in ob) {
      if (ob.hasOwnProperty(key)) {
        arr.push(key + '=' + ob[key]);
      }
    }
  
    return arr.toString();
  }
  
  const orm = {
    //cb represents the anonymous function being passed from server.js
    
    selectAll: function(table, cb) {
      let queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
  },
  
  insertOne: function(table, burger_name, cb) {
      let queryString = "INSERT INTO" + table + " (burger_name) VALUE ('" + burger_name + "')";
      console.log(queryString);
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
  },
  
  updateOne: function(table, objColVals, condition, cb) {
      let queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };
  
  module.exports = orm;