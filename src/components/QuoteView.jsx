import React from 'react';
import '../assets/css/QuoteView.css';

const QuoteView = ({ quote }) => (
    <div className="quote-container">
        {quote ? (
            <div className="quote-content">
                <p className="quote-text">"{quote.text}"</p>
                <p className="quote-author">- {quote.author}</p>
            </div>
        ) : (
            <p className="loading-text">Lade Zitat...</p>
        )}
    </div>
);

export default QuoteView;
