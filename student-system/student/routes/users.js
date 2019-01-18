var express = require('express')
var db = require('./../db')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  const mysqlQuery = 'SELECT * FROM student'
  db.DBConnection.query(mysqlQuery, (err, rows, fields) => {
    if (err) {
      console.log(err)
      return
    }
    res.render('user', { students: rows })
  })
})

module.exports = router
