let user = require('./User')

console.log(`userName为:${user.userName}`)


//创建一个http server服务器

let http = require('http');
let url = require('url');
let util = require('util');
let server = http.createServer((req,res)=>{
  res.statusCode = 200;

  res.setHeader("Content-Type","text/plain;charset=utf-8");
  // url.parse(req.url) 解析 URL 字符串并返回 URL 对象。
// util.inspect 调试 将url作为字符串输出
  // res.end("Hello,Node js") //响应结束 输出
  res.end(util.inspect(url.parse(req.url))) //响应结束 输出
})
server.listen(3000,'127.0.0.1',()=>{
  console.log( `服务器已经启动，请打开浏览器浏览`)
})

