import React, { useState, useMemo, useEffect } from 'react';

const ExampleComp = () => {
  const [number, setNumber] = useState(0);
  const [updatedNumber, setUpdatedNumber] = useState(0);

  // Calculate the square of the number using useMemo
  const squaredNumber = useMemo(() => {
    console.log('Calculating square...');
    return number * number;
  }, [number]);

  // useEffect to update state after a delay
  useEffect(() => {
    console.log('Updating number after delay...');
    const timeout = setTimeout(() => {
      
      console.log('Updating number after delay... in timer');
      setUpdatedNumber(number);
    }, 6000);

    return () => clearTimeout(timeout);
  }, [number]);

  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <h2>Squared Number: {squaredNumber}</h2>
      <h3>Updated Number (after delay): {updatedNumber}</h3>
    </div>
  );
};

export default ExampleComp;
