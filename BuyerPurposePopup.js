import React from 'react';

function BuyerPurposePopup({ isOpen, onClose, onPurposeSelect }) {
  if (!isOpen) return null;

  const handlePurposeSelect = (purpose) => {
    onPurposeSelect(purpose);
    onClose();
  };

  return (
    <div className="popup">
      <p>What is your purpose?</p>
      <button className="button" onClick={() => handlePurposeSelect('For Renting')}>
        For Renting
      </button>
      <button className="button" onClick={() => handlePurposeSelect('For Living')}>
        For Living
      </button>
    </div>
  );
}

export default BuyerPurposePopup;
