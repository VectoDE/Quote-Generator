const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.get('/random', quoteController.getRandomQuote);
router.get('/category/:category', quoteController.getQuoteByCategory);
router.get('/author/:author', quoteController.getQuoteByAuthor);

module.exports = router;
