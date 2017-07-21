// Importing express, router, and burger...
var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function (req, res) {
  res.redirect('/server');
});


// Index Page (render all burgers to DOM)
router.get('/server', function (req, res) {
  burger.selectAll(function(data) {
    var burger_Object = { burgers: data };
    //console.log(hbsObject);
    res.render('server', burger_Object);
  });
});


// Create a New Burger
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/server');
  });
});


// Devour a Burger
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/server');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = router;