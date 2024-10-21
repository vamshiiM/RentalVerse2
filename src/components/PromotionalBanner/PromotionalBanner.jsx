import React from 'react';
import './PromotionalBanner.css';

const PromotionalBanner = () => {
    return (
        <div className="promotional-banner">
            <div className="banner-content">
                <h2>Special Offer!</h2>
                <p>Rent the latest laptops starting at just ₹1,499 per month!</p>
                <button className="explore-btn">Explore Now</button>
            </div>
        </div>
    );
};

export default PromotionalBanner;
