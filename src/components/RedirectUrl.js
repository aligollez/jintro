const http = require("http");

http.createServer(function(req, res) {
  res.writeHead(301,{Location: 'https://google.com'});
  res.end();
}).listen(8888);
