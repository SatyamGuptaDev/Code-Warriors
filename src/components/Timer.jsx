import React, { useState, useEffect, useMemo } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <div>
      <h1>Time Left: {timeLeft}</h1>
    </div>
  );
};
