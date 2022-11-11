const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;

const app = require('./app');

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log('Database Connection Successful'));

//Create Schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'A name is required'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A rating is required'],
  },
});

//Create Model
const Tours = mongoose.model('Tours', tourSchema);

//Start Server
const port = 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App running at http://127.0.0.1:${port}`));
