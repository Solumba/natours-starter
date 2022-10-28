const express = require('express');
const morgan = require('morgan');
const toursRouter = require('./routes/tourRoutes');
const usersRouter = require('./routes/userRoutes');
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

//use the new route as a middleware, that's the only way to use it
app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

//Start Server
const port = 3000;
app.listen(port, () => console.log(`App running at http://127.0.0.1:${port}`));