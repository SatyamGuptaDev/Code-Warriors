import React, { useState, useEffect, useRef } from 'react';
import './css/Volume.css';

function Volume({ url , audioElementId }) {
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (isMuted) {
      audioElement.volume = 0;
    } else {
      audioElement.volume = 1;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={`sound ${isMuted ? 'sound-mute' : ''}`} onClick={toggleMute}>
      <div className="sound--icon" style={{ color: 'white' }}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "#ffffff" }} height="1.2em" viewBox="0 0 320 512">
          <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z" />
        </svg>
      </div>
      <div className="sound--wave sound--wave_one"></div>
      <div className="sound--wave sound--wave_two"></div>
      <audio ref={audioRef} id={audioElementId} autoPlay loop>
        <source src={url} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default Volume;
``
