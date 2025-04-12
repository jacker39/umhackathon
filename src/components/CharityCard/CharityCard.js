import React from 'react';
import './CharityCard.css'; // Import standard CSS

function CharityCard({ imageSrc, title, organization, progress, amount, endDate }) {
  return (
    // Use string literals for classNames
    <div className="card">
      <img src={imageSrc} alt={title} className="cardImage" />
      <div className="cardContent">
        <h3 className="cardTitle">{title}</h3>
        <p className="organization">By {organization}</p>

        <div className="progressContainer">
            <div className="progressBar">
            <div
                className="progressFill"
                style={{ width: `${progress}%` }} // Inline style remains
            ></div>
            </div>
           <span className="progressPercent">{progress}%</span>
        </div>

        <p className="amount">{amount}</p>
        <p className="endDate">Donation ends on {endDate}</p>

        <button className="viewButton">Q View Charity</button>
      </div>
    </div>
  );
}

export default CharityCard;