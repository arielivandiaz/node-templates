var express = require('express');
var router = express.Router();
var machine = require('os').hostname;
const Test = require('../models/Test');
const { VariantAlsoNegotiates } = require('http-errors');


var name = machine();

/* GET home page. */


router.get('/', function (req, res, next) {

  Test.findAll({
    where: {
      name
    }
  }).then(row => {
    if (row.length) {
      row[0].increment('counter', { by: 1 });
      res.render('index', { title: 'Laguna' });
    }
    else {
      Test.create({
        name
      }).then(users => {
        console.log(users)
      }).catch(err => {
        console.log(err)
      });
      res.render('index', { title: 'Laguna' });
    }

  }).catch(err => {
    console.log(err);
  })

});

module.exports = router;
