/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

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
module.exports = Tours;