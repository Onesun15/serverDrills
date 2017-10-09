'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/'));

app.get('/echo/:what', (req, res) => {
  
  const {hostname, query, params} = req;
  res.json({
    hostname,
    query,
    params
  });
});

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});