// src/components/HelloWorld.js
import React from 'react';

const HelloWorld = ({ greeting = 'Hello', name = 'World' }) => {
  return (
    <div>
      <h1>{greeting}, {name}!</h1>
    </div>
  );
};

export default HelloWorld;
