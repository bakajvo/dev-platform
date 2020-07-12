const express = require('express');

// Constants
const PORT = 3001;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello AuthServer!!');
});

app.get('/auth', (req, res) => {
  res.send('Snad to bude fungovat');
});

app.get('/foo', (req, res) => {
  res.send('fooooooo');
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);