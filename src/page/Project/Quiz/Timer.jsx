import React, { useState, useEffect, useCallback } from 'react';

function Timer({ initialSeconds, onTimeout }) {
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds(remainingSeconds - 1);
      } else {
        clearInterval(timer);
        onTimeout();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [remainingSeconds, onTimeout]);

  return (
    <div className="timer">
      <p className="timer__text" style={{ whiteSpace: 'nowrap' }}>
        Remaining time:{' '}
      </p>
      <span className="timer__seconds">{remainingSeconds} Sec</span>
    </div>
  );
}

export default React.memo(Timer);

// The rest of your code remains the same with the suggested optimizations.
