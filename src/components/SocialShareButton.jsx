import React from 'react';
import '../assets/css/SocialShareButton.css';

const SocialShareButton = ({ onClick, children }) => (
    <button className="social-share-button" onClick={onClick}>
        {children}
    </button>
);

export default SocialShareButton;
