const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    id: String,
    text: String,
    author: String,
    category: String,
    likes: { type: Number, default: 0 },
    comments: [{
        text: String,
    }]
});

module.exports = mongoose.model('Quote', quoteSchema);
