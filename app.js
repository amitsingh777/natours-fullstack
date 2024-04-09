const express = require('express');

const app = express();
const listeningPortNumber = 8000;
const ipAddress = '127.0.0.1';
app.get('/', (req, res) => {
  res.status(200).send('Here are your resources');
});
app.listen(listeningPortNumber, ipAddress, () => {
  console.log(
    `Listening at ${'http://' + ipAddress + ':' + listeningPortNumber}`
  );
});
