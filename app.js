const express = require('express');

const app = express();

app.get('/', (req, res) =>
  res.status(200).json({ message: 'hello from the server' })
);
app.post('/api', (req, res) =>
  res.status(200).send('you can post to this endpoint...')
);

const port = 3000;
app.listen(port, () => console.log('App Running'));

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end("hello world");
//     }
// })

// server.listen(3000, '127.0.0.1', ()=> console.log("server running"))
