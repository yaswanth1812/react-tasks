import React from 'react';

const ValueComponent = () => {
  const handleChange = (event) => {
    console.log("Target value:", event.target.value);
    console.log("Current target value:", event.currentTarget.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ValueComponent;
