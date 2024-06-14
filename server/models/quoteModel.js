const mongoose = require('mongoose');

const quoteModel = mongoose.model({
    text: String,
    author: String,
    category: String
});

module.exports = quoteModel;