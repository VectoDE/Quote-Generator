require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Quote = require('../models/quotesModel');

const quotesFilePath = path.join(__dirname, '../database/quotes.json');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { });
        console.log('Verbunden mit der Datenbank.');

        await importQuotesFromJSON();

        fs.watchFile(quotesFilePath, async () => {
            console.log('Detected change in quotes.json. Updating database...');
            await importQuotesFromJSON();
            console.log('Database updated successfully.');
        });

    } catch (error) {
        console.error('Fehler bei der Verbindung zur Datenbank:', error);
        process.exit(1);
    }
};

const importQuotesFromJSON = async () => {
    try {
        const quotesData = require(quotesFilePath);
        
        for (const quoteData of quotesData) {
            const existingQuote = await Quote.findOne({ id: quoteData.id });

            if (existingQuote) {
                existingQuote.text = quoteData.text;
                existingQuote.author = quoteData.author;
                existingQuote.category = quoteData.category;
                existingQuote.likes = quoteData.likes;
                existingQuote.comments = quoteData.comments;
                await existingQuote.save();
            } else {
                await Quote.create(quoteData);
            }
        }
    } catch (error) {
        console.error('Fehler beim Importieren von quotes.json in die Datenbank:', error);
        throw error;
    }
};

module.exports = connectDB;
