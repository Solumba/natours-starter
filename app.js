const fs = require('fs');
const express = require('express');
const app = express();

//use middle ware to ensure the body is passed on to request
app.use(express.json());

//this function can run synchronously because we only need to get all the tours once
//you should not run synchronouse codes in your routes
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`)
);

//route handling
app.get('/', (req, res) => {
  res.header({ 'Content-Type': 'text/HTML' });
  res.status(200).send('<h1>Welcome to Natours</h1>');
});
app.post('/api/v1/tours', (req, res) => {
  //get the id of the last object and add 1 to it
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({
    id: newId,
    tour: req.body,
  });
  console.log(newId);
});

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
});

const port = 3000;
app.listen(port, () => console.log(`App running at http://127.0.0.1:${port}`));
