import React from 'react';
import CharityCard from '../CharityCard/CharityCard'; // CharityCard uses standard CSS now too
import './CharitySection.css'; // Import standard CSS
import charityImg1 from './charityImg1.png'; // Import images directly
import charityImg2 from './charityImg2.jpg'; // Import images directly
import charityImg3 from './charityImg3.jpg'; // Import images directly

// Correctly assign the imported variables to imageSrc
const charityData = [
  { id: 1, imageSrc: charityImg1, title: 'Palestine Relief Fund', organization: 'ORG NAME', progress: 80, amount: 'RMX/RMY', endDate: 'DD/MM/YYYY' },
  { id: 2, imageSrc: charityImg2, title: 'Umrah For The Needy', organization: 'ORG NAME', progress: 30, amount: 'RMX/RMY', endDate: 'DD/MM/YYYY' },
  { id: 3, imageSrc: charityImg3, title: 'Surau Building Waqf', organization: 'ORG NAME', progress: 50, amount: 'RMX/RMY', endDate: 'DD/MM/YYYY' }
];
// Fill in other details as needed

function CharitySection() {
  return (
    // Use string literals for classNames
    <section className="charitySection">
      <h2>Charitable Causes You Can Donate To Right Now:</h2>
      <p className="subtitle">Make the world a better place, one action at a time.</p>
      <div className="cardGrid">
        {charityData.map(charity => (
          <CharityCard
            key={charity.id}
            imageSrc={charity.imageSrc} // Pass the correct image source here
            title={charity.title}
            organization={charity.organization}
            progress={charity.progress}
            amount={charity.amount}
            endDate={charity.endDate}
          />
        ))}
      </div>
    </section>
  );
}

export default CharitySection;