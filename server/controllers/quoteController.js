const Quote = require('../models/quotesModel');

exports.getRandomQuote = async (req, res) => {
    try {
        const count = await Quote.countDocuments();
        const random = Math.floor(Math.random() * count);
        const randomQuote = await Quote.findOne().skip(random);
        res.json(randomQuote);
    } catch (error) {
        console.error('Fehler beim Laden eines zufälligen Zitats:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getQuoteByCategory = async (req, res) => {
    const category = req.params.category.toLowerCase();
    try {
        const count = await Quote.countDocuments({ category });
        const random = Math.floor(Math.random() * count);
        const randomQuote = await Quote.findOne({ category }).skip(random);
        if (randomQuote) {
            res.json(randomQuote);
        } else {
            res.status(404).json({ error: 'No quotes found in this category.' });
        }
    } catch (error) {
        console.error('Fehler beim Laden eines Zitats nach Kategorie:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getQuoteByAuthor = async (req, res) => {
    const author = req.params.author.toLowerCase();
    try {
        const count = await Quote.countDocuments({ author });
        const random = Math.floor(Math.random() * count);
        const randomQuote = await Quote.findOne({ author }).skip(random);
        if (randomQuote) {
            res.json(randomQuote);
        } else {
            res.status(404).json({ error: 'No quotes found by this author.' });
        }
    } catch (error) {
        console.error('Fehler beim Laden eines Zitats nach Autor:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getQuoteLikes = async (req, res) => {
    const quoteId = req.params.id;
    try {
        const quote = await Quote.findOne({ id: quoteId });
        if (quote) {
            res.json({ likes: quote.likes || 0 });
        } else {
            res.status(404).json({ error: 'Zitat nicht gefunden.' });
        }
    } catch (error) {
        console.error('Fehler beim Laden der Likes für ein Zitat:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.likeQuote = async (req, res) => {
    const quoteId = req.params.id;
    try {
        const quote = await Quote.findOne({ id: quoteId });
        if (quote) {
            quote.likes = (quote.likes || 0) + 1;
            await quote.save();
            res.json({ likes: quote.likes });
        } else {
            res.status(404).json({ error: 'Zitat nicht gefunden.' });
        }
    } catch (error) {
        console.error('Fehler beim Liken eines Zitats:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getComments = async (req, res) => {
    const quoteId = req.params.id;
    try {
        const quote = await Quote.findOne({ id: quoteId });
        if (quote) {
            res.json(quote.comments || []);
        } else {
            res.status(404).json({ error: 'Zitat nicht gefunden.' });
        }
    } catch (error) {
        console.error('Fehler beim Laden der Kommentare für ein Zitat:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.addComment = async (req, res) => {
    const quoteId = req.params.id;
    const { text } = req.body;

    try {
        const quote = await Quote.findOne({ id: quoteId });
        if (quote) {
            quote.comments.push({ text });
            await quote.save();
            res.json({ text });
        } else {
            res.status(404).json({ error: 'Zitat nicht gefunden.' });
        }
    } catch (error) {
        console.error('Fehler beim Hinzufügen eines Kommentars zu einem Zitat:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
