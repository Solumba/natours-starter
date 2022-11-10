const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;

const app = require('./app');

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//Start Server
const port = 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App running at http://127.0.0.1:${port}`));
