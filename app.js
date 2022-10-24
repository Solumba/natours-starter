const express = require('express');
const morgan = require('morgan');
//file system to be a ble to read and write to files
const fs = require('fs');
//callin the express function to create a server we can listen on
const app = express();

//Middlewares
app.use(morgan('dev'));
//use express.json() middleware to ensure the body is passed on to request
app.use(express.json());
//use our middleware to pass time on our request
app.use((req, res, next) => {
  //reqTime is a variable set on the request object
  req.reqTime = new Date().toISOString();
  console.log(req.reqTime);
  //call the next function to
  next();
});

//this function can run synchronously because we only need to get all the tours once
//you should not run synchronouse codes in your routes
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//route handlers

const getWelcomePage = (req, res) => {
  res.status(200).send('<h1>Welcome page</h1>');
};

const getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    requestTime: req.reqTime,
    data: {
      tours,
    },
  });
};

const addTour = (req, res) => {
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

const getTour = (req, res) => {
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

const updateTour = (req, res) => {
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

const deleteTour = (req, res) => {
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

//turns json data to standard object
const usersData = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/users.json`)
);
const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      usersData,
    },
  });
};

const getUser = (req, res) => {
  const id = req.params.id * 1;
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};

const addNewUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};

//Routes
const toursRoute = express.Router();
const usersRoute = express.Router();
//use the new route as a middleware, that's the only way to use it
toursRoute.use('/api/v1/tours', toursRoute);
usersRoute.use('/api/v1/users', usersRoute);

toursRoute.route('/')
  .get(getWelcomePage);

toursRoute.route('/')
  .get(getTours)
  .post(addTour);

toursRoute
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

usersRoute
  .route('/')
  .get(getAllUsers)
  .post(addNewUser);

usersRoute
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

//Start Server
const port = 3000;
app.listen(port, () => console.log(`App running at http://127.0.0.1:${port}`));