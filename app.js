const express = require('express');
const morgan = require('morgan');

const {
  getTourById,
  getTours,
  postTour,
  updateTour,
  deleteTour,
} = require('./controller/tours');
const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require('./controller/users');

const app = express();
const listeningPortNumber = 8000;
const ipAddress = '127.0.0.1';

app.use(morgan('dev'));
app.use(express.json());

const tourRouter = express.Router();
const userRouter = express.Router();

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

tourRouter.route('/').get(getTours).post(postTour);
tourRouter.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

userRouter.route('/').get(getUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

app.listen(listeningPortNumber, ipAddress, () => {
  console.log(
    `Listening at ${'http://' + ipAddress + ':' + listeningPortNumber}`
  );
});
