const http = require('http'); //like a PHP require
//require is same as JS import

// const hostname = '127.0.0.1';//this is localhost
const port = process.env.PORT || 3000; //localhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('8 days and World');
});

server.listen(port, () => {
  console.log(`Server is now running at http://${hostname}:${port}/`);
});