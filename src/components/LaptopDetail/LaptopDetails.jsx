import React from 'react';
import './LaptopDetails.css';

const LaptopDetails = ({ id, name, description, image, price, onClose }) => {
  return (
    <div className='laptop-details-modal'>
      <div className='laptop-details-content'>
        <h2>{name}</h2>
        <img className='laptop-details-image' src={image} alt={name} />
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Price:</strong> ₹{price}/hr </p>
        <button className='laptop-details-close' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LaptopDetails;
