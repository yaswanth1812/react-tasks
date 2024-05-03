import React, { useState } from 'react';

function ToogleButtton() {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="App">
      <button onClick={toggleCard}>{showCard ? 'Hide Card' : 'Show Card'}</button>
      {showCard && (
        <div className="card">
          <h2>This is a Simple Card</h2>
          <p>This is the content of the card.</p>
        </div>
      )}
    </div>
  );
}

export default ToogleButtton;
