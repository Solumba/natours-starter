const Tours = require('../models/tourModel');
/* eslint-disable prettier/prettier */

//route handlers
exports.getWelcomePage = (req, res) => {
  res.status(200).send('<h1>Welcome page</h1>');
};

exports.getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    // result: tours.length,
    // requestTime: req.reqTime,
    // data: {
    //   tours,
    // },
  });
};

exports.addTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    // data: {
    //   tour: newTour,
    // },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find((el) => {
  //   return el.id === id;
  // });
  // if (!tour) {
  //   return res.status(404).json({
  //     status: 'failed',
  //     message: 'INVALID ID',
  //   });
  // }
  res.status(200).json({
    status: 'success',
    // data: {
    //   tour,
    // },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<update tour>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'successful',
    data: null,
  });
};
