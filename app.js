const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
const listeningPortNumber = 8000;
const ipAddress = '127.0.0.1';

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.listen(listeningPortNumber, ipAddress, () => {
  console.log(
    `Listening at ${'http://' + ipAddress + ':' + listeningPortNumber}`
  );
});
