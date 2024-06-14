const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

// Random Quote
router.get('/random', quoteController.getRandomQuote);

// Quote by Category
router.get('/category/:category', quoteController.getQuoteByCategory);

// Quote by Author
router.get('/author/:author', quoteController.getQuoteByAuthor);

// Likes
router.get('/:id/likes', quoteController.getQuoteLikes);
router.post('/likes/:id', quoteController.likeQuote);

// Comments
router.get('/:id/comments', quoteController.getComments);
router.post('/comments/:id', quoteController.addComment);

module.exports = router;
