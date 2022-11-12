/* eslint-disable prettier/prettier */
const express = require('express');
const {
  getWelcomePage,
  getTours,
  addTour,
  getTour,
  updateTour,
  deleteTour
} = require("../controllers/tourController");

const router = express.Router();

router.route('/').get(getWelcomePage);

router.route('/').get(getTours).post(addTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
