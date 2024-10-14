// SideMenu.js
import React from 'react';

const SideMenu = ({ isOpen, onClose, subject }) => {
  if (!isOpen) return null;

  return (
    <div className="side-menu" onClick={onClose}>
      <div className="side-menu-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>{subject.display_name}</h2>
        {/* Add more content or components here */}
        <p>Submenu content for {subject.display_name}</p>
      </div>
    </div>
  );
};

export default SideMenu;
