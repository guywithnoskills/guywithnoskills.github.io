import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MusicContextType {
  isMuted: boolean;
  volume: number;
  isAudioReady: boolean;
  isPlaying: boolean;
  currentTrack: number;
  trackInfo: { title: string; artist: string; };
  setMuted: (muted: boolean) => void;
  setVolume: (volume: number) => void;
  togglePlayPause: () => void;
  nextTrack: () => void;
  initializeAudio: () => Promise<void>;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};

interface MusicProviderProps {
  children: ReactNode;
}

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.08);
  const [isAudioReady, setIsAudioReady] = useState(true); // Always ready since no actual audio
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  
  // Mock track library for UI display purposes only
  const tracks = [
    {
      title: "Ambient Workspace",
      artist: "Portfolio Sounds"
    },
    {
      title: "Creative Flow", 
      artist: "Focus Music"
    },
    {
      title: "Productivity Zone",
      artist: "Work Vibes"
    },
    {
      title: "Innovation Mode",
      artist: "Inspiration Beats"
    }
  ];
  
  const trackInfo = tracks[currentTrack];

  // Mock initialization - no actual audio
  const initializeAudio = async (): Promise<void> => {
    // Just return success for UI purposes
    return Promise.resolve();
  };

  // Toggle play/pause - UI only
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Switch to next track - UI only
  const nextTrack = () => {
    const nextTrackIndex = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextTrackIndex);
  };

  const setMuted = (muted: boolean) => {
    setIsMuted(muted);
  };

  const handleSetVolume = (vol: number) => {
    const newVolume = Math.max(0, Math.min(1, vol));
    setVolume(newVolume);
  };

  return (
    <MusicContext.Provider value={{ 
      isMuted, 
      volume, 
      isAudioReady,
      isPlaying,
      currentTrack,
      trackInfo,
      setMuted, 
      setVolume: handleSetVolume,
      togglePlayPause,
      nextTrack,
      initializeAudio
    }}>
      {children}
    </MusicContext.Provider>
  );
};