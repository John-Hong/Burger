//Calling connection from connection.js
var connection = require('./connection');

function selectAll(table, callback) {
  connection.query('SELECT * FROM ' + table, function (err, data) {
    if (err) throw err;
    callback(data);
  });
}

function insertOne(table, value, callback) {
  connection.query('INSERT INTO ' + table + ' SET ?', value, function (err, data) {
    if (err) throw err;
    callback(data);
  });
}

function updateOne(table, update, item, callback) {
  connection.query('UPDATE ' + table + ' SET ? WHERE ?', [update, item],  function (err, data) {
    if (err) throw err;
    callback(data);
  })
}

var orm = {
	
  selectAll: selectAll,
  updateOne: updateOne,
  insertOne: insertOne
}

module.exports = orm; 