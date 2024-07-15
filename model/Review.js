// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    bookId: mongoose.Schema.Types.ObjectId,
    customerId: Number,
    reviewText: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
