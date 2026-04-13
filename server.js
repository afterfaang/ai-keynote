const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  let filePath;
  if (req.url === '/ik' || req.url === '/ik/') {
    filePath = path.join(__dirname, 'ik.html');
  } else {
    filePath = path.join(__dirname, 'index.html');
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
