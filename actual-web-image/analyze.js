// 文件用来存储分析DOM的方法

const cheerio = require('cheerio')

function findImg(dom, callback) {
  let $ = cheerio.load(dom)
  $('img').each((i, elem) => {
    let imgSrc = elem.attribs['src']
    callback(imgSrc, i)
  })
}

module.exports.findImg = findImg
