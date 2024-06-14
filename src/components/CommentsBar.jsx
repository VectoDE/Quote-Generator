import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/CommentsBar.css';

const CommentsBar = ({ quoteId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/quotes/${quoteId}/comments`);
                setComments(response.data);
            } catch (error) {
                console.error('Fehler beim Laden der Kommentare:', error);
            }
        };

        fetchComments();
    }, [quoteId]);

    const handleAddComment = async () => {
        if (newComment.trim() === '') return;

        try {
            const response = await axios.post(`http://localhost:5000/api/quotes/comments/${quoteId}`, {
                text: newComment
            });
            setComments([...comments, response.data]);
            setNewComment('');
        } catch (error) {
            console.error('Fehler beim Hinzufügen des Kommentars:', error);
        }
    };

    return (
        <div className="comments-bar">
            <h3>Kommentare</h3>
            <ul className="comments-list">
                {comments.map((comment, index) => (
                    <li key={index} className="comment-item">
                        <p className="comment-author">{comment.author}</p>
                        <p className="comment-text">{comment.text}</p>
                    </li>
                ))}
            </ul>
            <form className="comment-form" onSubmit={handleAddComment}>
                <input
                    type="text"
                    className="comment-input"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Neuen Kommentar hinzufügen"
                />
                <button type="submit" className="comment-submit">Kommentar hinzufügen</button>
            </form>
        </div>
    );
};

export default CommentsBar;
