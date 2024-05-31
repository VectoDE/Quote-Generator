import React from 'react';
import '../assets/css/DangerButton.css'; // Erstelle und importiere diese Datei für benutzerdefiniertes Styling

const DangerButton = ({ onClick, children }) => (
    <button className="danger-button" onClick={onClick}>
        {children}
    </button>
);

export default DangerButton;
