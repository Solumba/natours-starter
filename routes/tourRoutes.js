/* eslint-disable prettier/prettier */
const express = require('express');
const {
  getTours,
  addTour,
  getTour,
  updateTour,
  deleteTour
} = require("../controllers/tourController");

const router = express.Router();

router.route('/').get(getTours).post(addTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
