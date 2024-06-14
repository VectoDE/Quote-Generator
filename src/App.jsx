import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/css/App.css';
import QuoteView from './components/QuoteView';
import PrimaryButton from './components/PrimaryButton';
import DangerButton from './components/DangerButton';
import SocialShareButton from './components/SocialShareButton';
import LikeButton from './components/LikeButton';
import CommentsBar from './components/CommentsBar';

function App() {
  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/quotes/random');
      setQuote(response.data);
    } catch (error) {
      console.error('Fehler beim Laden eines zufälligen Zitats:', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const currentUrl = window.location.href;

  const handleLikeClick = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/quotes/likes/${quote.id}`);
      setQuote({ ...quote, likes: response.data.likes });
    } catch (error) {
      console.error('Fehler beim Liken des Zitats:', error);
    }
  };

  const handleAddComment = async (text) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/quotes/comments/${quote.id}`, { text });
      setQuote({ ...quote, comments: [...quote.comments, response.data] });
    } catch (error) {
      console.error('Fehler beim Hinzufügen eines Kommentars:', error);
    }
  };

  const handleRandomQuote = () => {
    fetchRandomQuote();
  };

  const handleResetQuote = () => {
    setQuote(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote Generator</h1>
        <QuoteView quote={quote} />
        <div>
          <PrimaryButton onClick={handleRandomQuote}>Zufälliges Zitat</PrimaryButton>
          <DangerButton onClick={handleResetQuote}>Zitat zurücksetzen</DangerButton>
          {quote && <LikeButton quoteId={quote.id} onClick={handleLikeClick} />}
        </div>
        {quote && (
          <div className="social-share-buttons">
            <SocialShareButton
              platform="twitter"
              url={currentUrl}
              text={`"${quote.text}" - ${quote.author}`}
            />
            <SocialShareButton
              platform="facebook"
              url={currentUrl}
              text={`"${quote.text}" - ${quote.author}`}
            />
            <SocialShareButton
              platform="linkedin"
              url={currentUrl}
              text={`"${quote.text}" - ${quote.author}`}
            />
          </div>
        )}
        {quote && <CommentsBar quoteId={quote.id} onAddComment={handleAddComment} />}
      </header>
    </div>
  );
}

export default App;
