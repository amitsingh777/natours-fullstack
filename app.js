const fs = require('fs');
const express = require('express');

const app = express();
const listeningPortNumber = 8000;
const ipAddress = '127.0.0.1';

const toursFilePath = `${__dirname}/dev-data/data/tours-simple.json`;
const tours = JSON.parse(fs.readFileSync(toursFilePath));

app.use(express.json());

app.get('/api/v1/tours', (req, res) => {
  res.status(200).send({
    status: 'success',
    results: tours.length,
    tours,
  });
});
app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  const latestTours = [...tours, newTour];
  fs.writeFile(toursFilePath, JSON.stringify(latestTours), (error) => {
    if (error) {
      res.status(500).json({
        status: 'fail',
        message: 'Internal Server error',
      });
    }
    res.status(201).json({
      status: 'success',
      data: newTour,
    });
  });
});

app.listen(listeningPortNumber, ipAddress, () => {
  console.log(
    `Listening at ${'http://' + ipAddress + ':' + listeningPortNumber}`
  );
});
