const express = require('express');
const {
  getWelcomePage,
  getTours,
  addTour,
  getTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
} = require('./../controllers/tourController');
const router = express.Router();

router.param('id', checkID);

router.route('/').get(getWelcomePage);

router.route('/').get(getTours).post(checkBody,addTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
