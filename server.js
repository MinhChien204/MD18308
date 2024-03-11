const http = require('http');
const hostname = '192.168.1.12'
const port = 3001;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html;charset="UTF-8');
  res.write('<h1>Lab2-NodeJS</h1>');
  res.write('br'); 
  res.write('<p>Nội dung văn bản</p>');
  res.write(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  <h1>Chào mừng bạn đến với lab 2</h1>
    
  </body>
  </html>`)
  res.end();
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});