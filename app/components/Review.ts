const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  title: String,
  body: String,
  name: String, // Add the 'name' field
  date: Date,   // Add the 'date' field
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
