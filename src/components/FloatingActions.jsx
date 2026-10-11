import React, { useState, useRef, useEffect } from 'react';
import { Phone, Volume2, VolumeX } from 'lucide-react';

export default function FloatingActions({ phone = "+916364469555" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.6;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio playback error:', err);
      });
    }
  };

  return (
    <div className="eng007-floating-controls" aria-label="Quick Actions">
      {/* Background Audio Element */}
      <audio ref={audioRef} src="/assets/audio.mp3" preload="metadata" />

      {/* Floating Call Button */}
      <a
        id="call-btn"
        href={`tel:${phone}`}
        title="Call Organizer"
        aria-label="Call Organizer"
      >
        <Phone size={24} />
      </a>

      {/* Floating Audio Toggle Button */}
      <button
        id="music-btn-main"
        type="button"
        onClick={toggleAudio}
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
      >
        {isPlaying ? (
          <div className="music-waves" title="Music Playing">
            <span className="music-bar" />
            <span className="music-bar" />
            <span className="music-bar" />
            <span className="music-bar" />
          </div>
        ) : (
          <VolumeX size={24} />
        )}
      </button>
    </div>
  );
}
