import React from 'react';
import '../assets/css/BackButton.css';

const BackButton = ({ onClick, children }) => (
    <button className="back-button" onClick={onClick}>
        {children}
    </button>
);

export default BackButton;
