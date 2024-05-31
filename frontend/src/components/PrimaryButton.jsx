import React from 'react';
import '../assets/css/PrimaryButton.css'; // Stelle sicher, dass du das CSS importierst, falls du es hast

const PrimaryButton = ({ onClick, children }) => (
    <button className="primary-button" onClick={onClick}>
        {children}
    </button>
);

export default PrimaryButton;
