import React, { useState } from 'react';

const ComplexCalculation = ({ multiplier }) => {
  const [input, setInput] = useState(0);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setInput(isNaN(value) ? 0 : value);  // Handle NaN gracefully
  };

  const result = input * multiplier;

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        aria-label="calculation-input"  // Added an accessible label
      />
      <p aria-label="calculation-result">Result: {result}</p>  {/* Added aria label for accessibility */}
    </div>
  );
};

export default ComplexCalculation;
