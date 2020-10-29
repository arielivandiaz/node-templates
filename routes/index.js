var express = require('express');
var router = express.Router();
var machine = require('os').hostname;
var sql = require('../services/sql');
var name = machine();

/* GET home page. */


router.get('/', function (req, res, next) {


  var str = "SELECT * FROM `test_table` WHERE `name`='" + name + "';";
  sql.query(str).then((rows) => {
    console.log(rows);
    if (rows.length) {

      var str2 = "UPDATE `test_table` SET `counter`=`counter`+1 WHERE `id`=" + rows[0].id;
    } else {
      var str2 = "INSERT INTO `test_table`( `name`) VALUES ('" + name + "')";
    }
    sql.query(str2).then((rows) => {
      console.log(rows);
      res.render('index', { title: 'Laguna' });

    })
      .catch((err) => {
        console.log(err);
      });


  })
    .catch((err) => {
      console.log(err);
    });

  /*
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
  */

});

module.exports = router;
