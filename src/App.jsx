import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/css/App.css';
import QuoteView from './components/QuoteView';
import PrimaryButton from './components/PrimaryButton';
import DangerButton from './components/DangerButton'; // Füge diesen Import hinzu

function App() {
  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/quote/random');
      setQuote(response.data);
    } catch (error) {
      console.error('Fehler beim Laden eines zufälligen Zitats:', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote Generator</h1>
        <QuoteView quote={quote} />
        <div>
          <PrimaryButton onClick={fetchRandomQuote}>Zufälliges Zitat</PrimaryButton>
          <DangerButton onClick={() => setQuote(null)}>Zitat zurücksetzen</DangerButton> {/* Beispiel für die Verwendung von DangerButton */}
        </div>
      </header>
    </div>
  );
}

export default App;
