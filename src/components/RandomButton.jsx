import React from 'react';
import '../assets/css/RandomButton.css';

const RandomButton = ({ onClick, children }) => (
    <button className="random-button" onClick={onClick}>
        {children}
    </button>
);

export default RandomButton;
