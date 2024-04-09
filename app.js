const express = require('express');

const { getTourById, getTours, postTour } = require('./api-callbacks');

const app = express();
const listeningPortNumber = 8000;
const ipAddress = '127.0.0.1';

app.use(express.json());

app.route('/api/v1/tours').get(getTours).post(postTour);
app.route('/api/v1/tour/:id').get(getTourById);

app.listen(listeningPortNumber, ipAddress, () => {
  console.log(
    `Listening at ${'http://' + ipAddress + ':' + listeningPortNumber}`
  );
});
