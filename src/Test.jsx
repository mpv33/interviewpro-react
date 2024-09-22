import React, { useState, memo, useCallback } from 'react';

// Child component that re-renders every time the parent re-renders
const ChildComponent = memo(({ handleClick }) => {
  console.log('Child component re-rendered');
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
    >
      Click Child Button
    </button>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // This function gets recreated on every render
  const handleClick = useCallback(() => {
    console.log('Child button clicked');
  },[otherState]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Without useCallback Example</h1>
      <p>Parent Count: {count}</p>
      
      {/* Increment Parent Count */}
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white py-2 px-4 rounded mt-2"
      >
        Increment Parent Count
      </button>

      {/* Change unrelated state */}
      <button
        onClick={() => setOtherState(otherState + 1)}
        className="bg-red-500 text-white py-2 px-4 rounded mt-2 ml-4"
      >
        Change Other State
      </button>

      {/* Passing the non-memoized function to the child */}
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
