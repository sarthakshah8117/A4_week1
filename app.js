const express = require('express'); //like a PHP require
const path = require('path');
const server = express();


server.set("views", path.join(__dirname, 'views'));

server.use(express.static(path.join(__dirname, 'public')));

server.get("/", (req, res) => {
  console.log('hit the home route');
  res.sendFile('index.html')
})

server.get("/contact", (req, res) =>{
  console.log('hit the home route');
  res.sendFile('contact.html');
})

const port = process.env.PORT || 3000; //localhost:3000


server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});