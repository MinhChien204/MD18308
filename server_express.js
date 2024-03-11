const express = require('express');
const app = express();
const port = 3002;

app.get('/home', (req, res) => {
  res.send('Welcome to Server_Express!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});