import React, { useState, useEffect } from 'react';

function IntervalTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
      console.log('Counter incremented');
    }, 1000); 

      return () => {
      clearInterval(intervalId);
      console.log('Interval cleared');
    };
  }, []); 

  return (
    <div>
      <h1>Interval Counter</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default IntervalTimer;