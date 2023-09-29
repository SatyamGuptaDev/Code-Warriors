import React, { useState, useEffect } from 'react';
import './css/volume.css';
import 'font-awesome/css/font-awesome.min.css';

function Volume({url}) {
  const [isMuted, setIsMuted] = useState(false);

  // Function to toggle mute/unmute and adjust audio volume
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Update audio volume when isMuted state changes
  useEffect(() => {
    const audioElement = document.getElementById('backgroundAudio');

    if (audioElement) {
      audioElement.volume = isMuted ? 0 : 1;
    }
  }, [isMuted]);

  return (
    <div className={`sound ${isMuted ? 'sound-mute' : ''}`} onClick={toggleMute}>
      <div className="sound--icon">
        <i className={`fa ${isMuted ? 'fa-volume-off' : 'fa-volume-up'}`} style={{ fontSize: 'var(--icon-size)' }}></i>
      </div>
      <div className="sound--wave sound--wave_one"></div>
      <div className="sound--wave sound--wave_two"></div>

      <audio id="backgroundAudio" autoPlay loop>
        <source src={url} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default Volume;
