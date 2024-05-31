const quotes = require('../database/quotes.json');

exports.getRandomQuote = (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
};

exports.getQuoteByCategory = (req, res) => {
    const category = req.params.category.toLowerCase();
    const filteredQuotes = quotes.filter(quote => quote.category.toLowerCase() === category);
    if (filteredQuotes.length > 0) {
        const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
        res.json(randomQuote);
    } else {
        res.status(404).json({ error: "Keine Zitate in dieser Kategorie gefunden." });
    }
};
