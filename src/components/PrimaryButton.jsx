import React from 'react';
import '../assets/css/PrimaryButton.css';

const PrimaryButton = ({ onClick, children }) => (
    <button className="primary-button" onClick={onClick}>
        {children}
    </button>
);

export default PrimaryButton;
