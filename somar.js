var http = require('http');
var dt = require('./modulos/modulo');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.somar());
  res.end();
}).listen(8080);