const express = require('express');

const {
  getTourById,
  getTours,
  postTour,
  updateTour,
  deleteTour,
} = require('../controller/tours');

const router = express.Router();

router.route('/').get(getTours).post(postTour);
router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = router;
