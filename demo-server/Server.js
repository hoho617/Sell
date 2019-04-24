let http = require('http');
let url = require('url');

let fs = require('fs');

http.createServer((req,res)=>{
  let pathName = url.parse(req.url).pathname.substr(1);
  console.log(pathName);

  fs.readFile(pathName,(err,data)=>{
    if(err){
      res.writeHead(404,{
        "Content-Type":"text/html"
      })
    }else {
      res.writeHead(200,{
        "Content-Type":"text/html"
      })
      res.write(data.toString())
    }
    res.end();
  })


}).listen(3000,'127.0.0.1',()=>{
  console.log( `服务器已经启动，请打开浏览器浏览`)
})

