var express = require('express')
var db = require('./../db')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/', (req, res, next) => {
  const mysqlParams = [req.body.name, req.body.chinese, req.body.english, req.body.math]
  const mysqlQuery = 'INSERT student (name, chinese, english, math) VALUES(?,?,?,?)'
  db.DBConnection.query(mysqlQuery, mysqlParams, (err, rows, fields) => {
    if (err) {
      console.log(err)
      return
    }
    const success = {
      message: '增加成功'
    }
    res.send(success)
  })
})
module.exports = router
