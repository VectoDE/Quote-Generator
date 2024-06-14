import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/LikeButton.css';

const LikeButton = ({ quoteId }) => {
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/quotes/${quoteId}/likes`);
                setLikes(response.data.likes);
            } catch (error) {
                console.error('Fehler beim Laden der Likes:', error);
            }
        };

        fetchLikes();
    }, [quoteId]);

    const handleClick = async () => {
        try {
            const response = await axios.post(`http://localhost:5000/api/quotes/likes/${quoteId}`);
            setLikes(response.data.likes);
        } catch (error) {
            console.error('Fehler beim Liken des Zitats:', error);
        }
    };

    return (
        <button className="like-button" onClick={handleClick}>
            Like {likes}
        </button>
    );
};

export default LikeButton;
