const express = require('express');

const {
  getTourById,
  getTours,
  postTour,
  updateTour,
  deleteTour,
  checkId,
  checkValidTour,
} = require('../controller/tours');

const router = express.Router();

router.param('id', checkId);

router.route('/').get(getTours).post(checkValidTour, postTour);
router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = router;
