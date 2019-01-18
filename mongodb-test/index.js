const mongoose = require('mongoose')

// 定义MongoDB地址
const uri = 'mongodb://localhost/article'

// 连接MongoDB

mongoose.connect(
  uri,
  err => {
    if (err) {
      console.log('connect failed')
      console.log(err)
      return
    }
    console.log('connect success')
  }
)
