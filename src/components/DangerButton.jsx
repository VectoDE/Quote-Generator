import React from 'react';
import '../assets/css/DangerButton.css';

const DangerButton = ({ onClick, children }) => (
    <button className="danger-button" onClick={onClick}>
        {children}
    </button>
);

export default DangerButton;
