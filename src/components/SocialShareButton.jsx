import React from 'react';
import '../assets/css/SocialShareButton.css';

const SocialShareButton = ({ platform, url, text }) => {
    const shareUrl = encodeURIComponent(url);
    const shareText = encodeURIComponent(text);

    let shareLink = '';
    switch (platform) {
        case 'twitter':
            shareLink = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
            break;
        case 'facebook':
            shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
            break;
        case 'linkedin':
            shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
            break;
        default:
            break;
    }

    return (
        <a
            href={shareLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-share-button ${platform}`}
        >
            Share on {platform.charAt(0).toUpperCase() + platform.slice(1)}
        </a>
    );
};

export default SocialShareButton;
