'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/'));

function madLib(adjective1, place, adjective2, adverb, adjective3, name, noun) {
  const madLibstring = `There's a ${adjective1} new ${name} in ${place} and everyone's talking. Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it. However, ${name} has a secret - ${name}'s a vile vampire.
Will it end with a bite, or with a stake through the ${noun}?`;
  return madLibstring;
}

app.get('/echo/', (req, res) => {
  const {adjective1, place, adjective2, adverb, adjective3, name, noun} = req.query;
  res.send(madLib(adjective1, place, adjective2, adverb, adjective3, name, noun));
});

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});