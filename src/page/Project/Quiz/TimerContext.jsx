// TimerContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children, initialSeconds }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds(remainingSeconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [remainingSeconds]);

  const resetTimer = () => {
    setRemainingSeconds(initialSeconds);
  };

  return (
    <TimerContext.Provider value={{ remainingSeconds, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  return useContext(TimerContext);
};
