import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [inputError, setInputError] = useState('');

  const handleTimeChange = (value, setter, maxValue) => {
    const number = Number(value);
    if (isNaN(number) || number < 0) {
      setInputError('Please enter a valid non-negative number.');
      setter(0);
    } else if (number > maxValue) {
      setInputError(`Value cannot exceed ${maxValue}.`);
      setter(maxValue);
    } else {
      setInputError('');
      setter(number);
    }
  };

  useEffect(() => {
    let timer;
    if (isActive && (hours > 0 || minutes > 0 || seconds > 0)) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else {
          setIsActive(false);  // Stop the timer when it reaches zero
        }
      }, 1000);
    }

    // Clear the interval when the timer stops
    return () => clearInterval(timer);
  }, [isActive, hours, minutes, seconds]);

  const resetTimer = () => {
    setIsActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  // Re-enable start button when timer reaches zero
  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0 && isActive) {
      setIsActive(false);
    }
  }, [hours, minutes, seconds, isActive]);

  const isStartDisabled = hours === 0 && minutes === 0 && seconds === 0;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Countdown Timer</h1>
      {inputError && <div className="text-red-500 mb-4">{inputError}</div>}
      <div className="flex space-x-4 mb-8">
        <input
          type="number"
          value={hours}
          onChange={(e) => handleTimeChange(e.target.value, setHours, 99)}
          className="w-20 p-2 border border-gray-300 rounded text-center"
          placeholder="HH"
          disabled={isActive}
        />
        <input
          type="number"
          value={minutes}
          onChange={(e) => handleTimeChange(e.target.value, setMinutes, 59)}
          className="w-20 p-2 border border-gray-300 rounded text-center"
          placeholder="MM"
          disabled={isActive}
        />
        <input
          type="number"
          value={seconds}
          onChange={(e) => handleTimeChange(e.target.value, setSeconds, 59)}
          className="w-20 p-2 border border-gray-300 rounded text-center"
          placeholder="SS"
          disabled={isActive}
        />
      </div>
      <div className="text-3xl font-mono mb-8">
        {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-6 py-2 font-bold rounded ${isActive ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
          disabled={isStartDisabled || inputError}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-2 font-bold rounded bg-gray-500 text-white"
          disabled={isStartDisabled && !isActive}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
