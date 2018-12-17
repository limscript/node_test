const querystring = require('querystring')

// let str = 'keyWord=node.js&name=limscript'
// let obj = querystring.parse(str)
// console.log(obj)

let obj = { keyWord: 'node.js', name: 'limscript' }
let str = querystring.stringify(obj)
console.log(str)
