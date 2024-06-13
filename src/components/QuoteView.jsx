import React from 'react';

const QuoteView = ({ quote }) => (
    <div>
        {quote ? (
            <div>
                <p>"{quote.text}" - {quote.author}</p>
            </div>
        ) : (
            <p>Lade Zitat...</p>
        )}
    </div>
);

export default QuoteView;
