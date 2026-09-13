import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

interface MusicContextType {
  isMuted: boolean;
  volume: number;
  isPlaying: boolean;
  currentTrack: number;
  trackInfo: { title: string; artist: string };
  setMuted: (muted: boolean) => void;
  setVolume: (volume: number) => void;
  togglePlayPause: () => void;
  nextTrack: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};

const BASE = import.meta.env.BASE_URL;

const tracks = [
  { title: 'Friends Like Us', artist: 'Easy_Eva', src: `${BASE}audio/track1.mp3` },
  { title: 'Pop Vibe', artist: 'JonasBlakewood', src: `${BASE}audio/track2.mp3` },
  { title: 'Indie Pop', artist: 'JonasBlakewood', src: `${BASE}audio/track3.mp3` },
];

interface MusicProviderProps {
  children: ReactNode;
}

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  if (!audioRef.current) {
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.preload = 'auto';
  }

  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  // Load the current track whenever it changes
  useEffect(() => {
    const audio = audioRef.current!;
    audio.src = tracks[currentTrack].src;
    audio.load();
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrack]);

  // Keep volume/mute in sync
  useEffect(() => {
    audioRef.current!.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // Pause audio when the tab is hidden, resume if it was playing
  useEffect(() => {
    const handleVisibility = () => {
      const audio = audioRef.current!;
      if (document.hidden) {
        audio.pause();
      } else if (isPlaying) {
        audio.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [isPlaying]);

  const togglePlayPause = () => {
    const audio = audioRef.current!;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const setMuted = (muted: boolean) => {
    setIsMuted(muted);
  };

  const handleSetVolume = (vol: number) => {
    setVolume(Math.max(0, Math.min(1, vol)));
  };

  const trackInfo = tracks[currentTrack];

  return (
    <MusicContext.Provider
      value={{
        isMuted,
        volume,
        isPlaying,
        currentTrack,
        trackInfo,
        setMuted,
        setVolume: handleSetVolume,
        togglePlayPause,
        nextTrack,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
