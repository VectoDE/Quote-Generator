const express = require('express');
const { getRandomQuote, getQuoteByCategory } = require('../controllers/quoteController');
const router = express.Router();

router.get('/random', getRandomQuote);
router.get('/category/:category', getQuoteByCategory);

module.exports = router;
