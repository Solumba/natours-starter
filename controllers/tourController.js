const fs = require('fs');
//this function can run synchronously because we only need to get all the tours once
//you should not run synchronouse codes in your routes
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

//route handlers
exports.getWelcomePage = (req, res) => {
  res.status(200).send('<h1>Welcome page</h1>');
};

exports.getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    requestTime: req.reqTime,
    data: {
      tours,
    },
  });
};

exports.addTour = (req, res) => {
  //get the id of the last object and add 1 to it
  const newId = tours[tours.length - 1].id + 1;
  //merge the body object and the newId to form one object
  const newTour = Object.assign({ id: newId }, req.body);
  console.log(newTour);
  //push the newTour object to the array of tours
  tours.push(newTour);

  //writing to the dummy DB - tours-simple.json
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) throw new Error(err.message);
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => {
    return el.id === id;
  });
  if (!tour) {
    return res.status(404).json({
      status: 'failed',
      message: 'INVALID ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'INVALID ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<update tour>',
    },
  });
};

exports.deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'INVALID ID',
    });
  }
  res.status(204).json({
    status: 'successful',
    data: null,
  });
};
