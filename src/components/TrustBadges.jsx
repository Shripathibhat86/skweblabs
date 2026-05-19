import React from 'react';
import './TrustBadges.css';
import { Star } from 'lucide-react';

const TrustBadges = () => {
  return (
    <div className="trust-badges border-y glass">
      <div className="container badge-container">
        
        <div className="badge-item">
          <span className="badge-logo designrush">DESIGNRUSH</span>
          <div className="rating">
            <span className="score">4.8</span>
            <Star size={14} className="star-icon" fill="currentColor" />
          </div>
        </div>

        <div className="badge-item">
          <span className="badge-logo clutch">Clutch</span>
          <div className="rating">
            <span className="score">4.9</span>
            <Star size={14} className="star-icon" fill="currentColor" />
          </div>
        </div>

        <div className="badge-item">
          <span className="badge-logo trustpilot"><Star size={16} fill="#00b67a" color="#00b67a" /> Trustpilot</span>
          <div className="rating">
            <span className="score">4.9</span>
            <Star size={14} className="star-icon" fill="currentColor" />
          </div>
        </div>

        <div className="badge-item">
          <span className="badge-logo goodfirms">GoodFirms</span>
          <div className="rating">
            <span className="score">4.8</span>
            <Star size={14} className="star-icon" fill="currentColor" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustBadges;
