const fs = require('fs');
const express = require('express');
const app = express();

//this function can run synchronously because we only need to get all the tours once
//you should not run synchronouse codes in your routes
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`)
);
console.log(tours);

//route handling
app.get('/', (req, res) => {
  res.header({ 'Content-Type': 'text/HTML' });
  res.status(200).send('<h1>Welcome to Natours</h1>');
});

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});

const port = 3000;
app.listen(port, () => console.log(`App running at http://127.0.0.1:${port}`));
