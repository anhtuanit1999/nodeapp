const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

var htmlFile;

fs.readFile('./home.html', function (err, data) {
  if(err) {
    throw err;
  }
  htmlFile = data;
});

var server = http.createServer(function (req, res) {
  fs.readFile('./' + req.url, function (err, data) {
    if (!err) {
      var dotOffset = req.url.lastIndexOf('.');
      var mineType = dotOffset == -1 ? 'text/plain'
                              : {
                                '.html' : 'text/html',
                                '.icon' : 'image/x-icon',
                                '.jpg' : 'image/jpeg',
                                '.png' : 'image/png',
                                '.gif' : 'image/gif',
                                '.css' : 'text/css',
                                '.js' : 'text/javascript'
                              }[req.url.substr(dotOffset)];
      res.setHeader('Content-Type', mineType);
      res.end(data);
      console.log(req.url, mineType);
    }
    else {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(htmlFile);
      res.end();
    }
  });
});

server.listen(port,() => {
  console.log(`Server running at port `+ port);
});
