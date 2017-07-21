//Extending orm object from orm.js to call orm.
var orm = require("../config/orm.js");

var burger = {
	//selectall will be from function selectall
  selectAll: function (cb) {
    orm.selectAll("burgers...", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(value, cb) {
  	
    orm.insertOne("burgers... ", value, function(res) {
      cb(res);
    });
  },
  updateOne: function (update, item, cb) {
    console.log(update, item);

    orm.updateOne("burgers...", update, item, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;