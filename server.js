const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log('Database Connection Successful'));

const app = require('./app');

//Start Server
const port = 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App running at http://127.0.0.1:${port}`));
