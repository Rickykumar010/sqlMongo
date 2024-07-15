// routes/bookRoutes.js
const express = require('express');
const { getReviewsByBook } = require('../controllers/bookController');
const authenticateJWT = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/reviews/:bookId', authenticateJWT, getReviewsByBook);

module.exports = router;
