// 配置文件，用来放置网页地址和图片文件夹路径

const url = 'https://segmentfault.com/a/1190000012811886'
const path = require('path')
const imgDir = path.join(__dirname, 'img')

module.exports.url = url
module.exports.imgDir = imgDir
