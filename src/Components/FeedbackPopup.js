import React, { useState } from 'react';

const FeedbackPopup = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage popup open/close

  // Function to handle closing the popup
  const handleClose = () => {
    window.location.href = '/Doubt';; 
  };

  return (
    <>
      {isOpen && (
        <div className="popup popup-fb open">
          <div className="popup-bg"></div>
          <div className="popup-box">
            <div className="popup_hed">
              <div className="popup_hed-left">
                <h2>How was the quality of Scholar Sense AI?</h2>
                <p>Your feedback is anonymous. Scholar Sense AI uses it to help improve your user experience.</p>
              </div>
              <div className="popup_hed-right">
                <img
                  src="https://image.prepladder.com/content/iSpvxZ08wWoOSlAnQTbr1695205744.svg"
                  alt="close"
                  className="dark_icon"
                  onClick={handleClose} // Attach onClick handler for closing
                />
              </div>
            </div>
            <div className="popup-box-content">
              <div className="feedback">
                <div className="popup-fb-rating">
                  {/* Rating icons can go here */}
                  {/* Replace with your rating component logic */}
                </div>
                <textarea placeholder="Enter your detailed feedback (optional)"></textarea>
              </div>
              <div className="popup-box-footer">
                <div className="popup-btn">
                  <button className="btn btn-border" onClick={handleClose}>Cancel</button>
                  <button disabled className="btn btn-theme">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackPopup;