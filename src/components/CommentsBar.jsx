import React from 'react';
import '../assets/css/CommentsBar.css';

const CommentsBar = ({ onClick, children }) => (
    <textarea className="comments-bar" onClick={onClick}>
        {children}
    </textarea>
);

export default CommentsBar;
