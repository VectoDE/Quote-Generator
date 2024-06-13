import React from 'react';
import '../assets/css/NextButton.css';

const NextButton = ({ onClick, children }) => (
    <button className="next-button" onClick={onClick}>
        {children}
    </button>
);

export default NextButton;
