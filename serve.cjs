const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8081;
const ROOT = path.join(__dirname, 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
};

http.createServer((req, res) => {
  let filePath = path.join(ROOT, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain', 'Access-Control-Allow-Origin': '*', 'Cross-Origin-Embedder-Policy': 'credentialless', 'Cross-Origin-Resource-Policy': 'cross-origin' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log('OK! 网站已启动: http://localhost:' + PORT + '/');
});
