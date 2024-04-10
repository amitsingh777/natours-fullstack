const fs = require('fs');

const toursFilePath = `${__dirname}/../../dev-data/data/tours-simple.json`;
const tours = JSON.parse(fs.readFileSync(toursFilePath));

const checkId = (req, res, next, val) => {
  console.log(val, 'ID ');
  const tour = tours.find((t) => t.id === val * 1);
  if (!tour) {
    return res.status(404).json({
      status: 'Not Found',
      data: {
        tour: {},
      },
    });
  }
  next();
};
const checkValidTour = (req, res, next) => {
  if (!(req.body.name && req.body.price)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Bad Request!',
    });
  }
  next();
};

const getTours = (req, res) => {
  res.status(200).send({
    status: 'success',
    results: tours.length,
    tours,
  });
};

const postTour = (req, res) => {
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
};

const getTourById = (req, res) => {
  const tour = tours.find((t) => t.id === req.params.id * 1);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};
const updateTour = () => {};

const deleteTour = () => {};

module.exports = {
  getTourById,
  getTours,
  postTour,
  updateTour,
  deleteTour,
  checkId,
  checkValidTour,
};
