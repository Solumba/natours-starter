/* eslint-disable prettier/prettier */
const Tours = require('../models/tourModel');
/* eslint-disable prettier/prettier */

//route handlers
exports.getWelcomePage = (req, res) => {
  res.status(200).send('<h1>Welcome page</h1>');
};

exports.getTours = async (req, res) => {
  try {
    const tours = await Tours.find();
    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.addTour = async (req, res) => {
  //first method is to create an instance of the Model
  // const newTour2 = new Tour(req.body);
  // newTour.save().then(() => console.log('tour saved successfully'));
  try {
    const newTour = await Tours.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tours.findById(id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await Tours.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(200).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  const { id } = req.params;
  try {
    await Tours.findByIdAndDelete(id);
    const tours = await Tours.find();
    res.status(204).json({
      status: 'successful',
      data: tours,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};
