import React from 'react';
import '../assets/css/LikeButton.css';

const LikeButton = ({ onClick, children }) => (
    <button className="like-button" onClick={onClick}>
        {children}
    </button>
);

export default LikeButton;
