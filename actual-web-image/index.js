// 项目入口文件
const request = require('request')
const path = require('path')
const config = require('./config')
const analyze = require('./analyze')
const fs = require('fs')

function start() {
  request(config.url, (err, res, body) => {
    console.log('start', err)
    if (!err && res) {
      console.log('start')
      analyze.findImg(body, downLoad)
    }
  })
}

function downLoad(imgUrl, i) {
  if (imgUrl) {
    let ext = imgUrl.split('.').pop()
    console.log(ext)
    request(imgUrl).pipe(
      fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
        encoding: 'utf8'
      })
    )
    console.log(i)
  }
}

start()
