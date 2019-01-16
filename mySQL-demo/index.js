// node.js 连接MySQL

// 引入
const mysql = require('mysql')

// 创建连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '408123.li',
  database: 'nodeSQL'
})

// 连接mysql
connection.connect(err => {
  // 连接出错的处理
  if (err) {
    console.error('error connecting:' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})
const table = 'data'
// 查询数据
connection.query('SELECT * FROM ?', [table], (err, rows) => {
  if (err) {
    console.log(err)
  } else {
    console.log(rows)
  }
})
