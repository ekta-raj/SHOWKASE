import React from 'react';

function PopupModal({ isOpen, onClose, title, content, renovationCost, buyerPurpose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>Close</button>
        </div>
        {isOpen && (
          <div className="modal-content">
            <h3>Here's your result:</h3>
            {/* Placeholders for images */}
            <div className="image-placeholders">
              <img src={process.env.PUBLIC_URL + '/placeholder1.png'} alt="Placeholder 1" />
              <img src={process.env.PUBLIC_URL + '/placeholder2.png'} alt="Placeholder 2" />
              {/* Add more placeholders as needed */}
            </div>
            {/* Textbox for additional text */}
            <div className="additional-text">
              <p>From our analysis, we have calculated the following renovation cost:</p>
              <p>{renovationCost}</p>
              {/* You can add more text or placeholders here */}
            </div>
            {buyerPurpose && <p>Buyer purpose: {buyerPurpose}</p>}
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopupModal;
