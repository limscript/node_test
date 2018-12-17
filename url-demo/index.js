const url = require('url')

// let parseUrl = 'https://www.google.com/?q=node.js'
// let urlObj = url.parse(parseUrl)
// console.log(urlObj)

let urlObj = {
  host: 'www.google.com',
  port: 80,
  protocol: 'https',
  search: '?q=node.js',
  query: 'q=node.js',
  path: '/'
}
let urlAddress = url.format(urlObj)
console.log(urlAddress)
