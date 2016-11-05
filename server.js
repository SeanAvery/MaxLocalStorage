var http = require('http')
var fs = require('fs')
var serveStatic = require('serve-static')


var index = fs.readFileSync('index.html')

http.createServer(function(req, res) {
  res.writeHeader(200, {"Content-Type": "text/html"});  
  res.end(index)
}).listen(3001)
