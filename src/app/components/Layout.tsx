import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Volume1, Settings } from 'lucide-react';
import { useMusic } from './MusicContext';
import { Play, Pause, SkipForward } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [nowPlayingBlink, setNowPlayingBlink] = useState(true);
  const [mobileVolumeOpen, setMobileVolumeOpen] = useState(false);
  const { isMuted, volume, isPlaying, trackInfo, setMuted, setVolume, togglePlayPause, nextTrack } = useMusic();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setNowPlayingBlink(prev => !prev);
    }, 2000); // Slower blink for more peaceful feel

    return () => clearInterval(interval);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleVolumeToggle = () => {
    setMuted(!isMuted);
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return VolumeX;
    if (volume < 0.5) return Volume1;
    return Volume2;
  };

  const VolumeIcon = getVolumeIcon();
  const isLandingPage = location.pathname === '/';

  // Close mobile volume panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileVolumeOpen && !(event.target as Element).closest('.mobile-volume-panel')) {
        setMobileVolumeOpen(false);
      }
    };

    if (mobileVolumeOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [mobileVolumeOpen]);

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Fixed Top Bar - Sleek and Simple */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#121212] border-b border-[#1DB954] h-[60px] flex items-center justify-between px-4 md:px-6">
        {/* Left side - Now Playing indicator */}
        <div className="flex items-center gap-3">
          <div 
            className={`w-3 h-3 rounded-full bg-[#1DB954] transition-opacity duration-500 ${
              (nowPlayingBlink && !isMuted && isPlaying) ? 'opacity-100' : 'opacity-40'
            }`}
          ></div>
          <span className="text-white text-sm md:text-lg font-medium">
            <span className="hidden sm:inline">Spotify UI Inspired Portfolio</span>
            <span className="sm:hidden">Spotify UI Inspired Portfolio</span>
          </span>
        </div>

        {/* Right side - Music controls */}
        <div className="flex items-center gap-2 md:gap-4 relative">
          {/* Track info and status - Desktop only */}
          {isPlaying && !isMuted && (
            <div className="hidden lg:flex items-center gap-3 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-[#1DB954]/30">
              <div className="w-2 h-2 bg-[#1DB954] rounded-full animate-pulse"></div>
              <div className="text-xs">
                <div className="text-[#1DB954] font-medium">{trackInfo.title}</div>
                <div className="text-[#B3B3B3]">{trackInfo.artist}</div>
              </div>
            </div>
          )}

          {/* Paused indicator - Desktop only */}
          {!isPlaying && (
            <div className="hidden lg:flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 border border-[#B3B3B3]/30">
              <div className="w-2 h-2 bg-[#B3B3B3] rounded-full"></div>
              <span className="text-[#B3B3B3] text-xs">Paused</span>
            </div>
          )}

          {/* Muted indicator - Desktop only */}
          {isMuted && (
            <div className="hidden lg:flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 border border-[#B3B3B3]/30">
              <div className="w-2 h-2 bg-[#B3B3B3] rounded-full"></div>
              <span className="text-[#B3B3B3] text-xs">Muted</span>
            </div>
          )}

          {/* Desktop Music Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isPlaying ? 'text-[#1DB954] hover:text-[#1ed760]' : 'text-[#B3B3B3] hover:text-white'
              }`}
              title={isPlaying ? 'Pause Music' : 'Play Music'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            {/* Next Track Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextTrack();
              }}
              className="p-2 rounded-full text-[#1DB954] hover:text-[#1ed760] transition-all duration-300 hover:scale-110"
              title="Next Track"
            >
              <SkipForward size={18} />
            </button>
            
            {/* Volume Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleVolumeToggle();
              }}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isMuted ? 'text-[#B3B3B3] hover:text-white' : 'text-[#1DB954] hover:text-[#1ed760]'
              }`}
              title={isMuted ? 'Unmute Background Music' : 'Mute Background Music'}
            >
              <VolumeIcon size={18} />
            </button>
            
            {/* Volume slider - Desktop */}
            <div className="flex items-center gap-2">
              <div className="w-20 h-1 bg-[#4a4a4a] rounded-full cursor-pointer relative overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    isMuted ? 'bg-[#B3B3B3]' : 'bg-[#1DB954]'
                  }`}
                  style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                ></div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    const newVolume = parseFloat(e.target.value);
                    if (newVolume > 0 && isMuted) {
                      setMuted(false);
                    }
                    setVolume(newVolume);
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  title="Adjust background volume"
                />
              </div>
            </div>
          </div>

          {/* Mobile Volume Controls */}
          <div className="md:hidden flex items-center gap-2 relative mobile-volume-panel">
            {/* Mobile Music Controls Toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileVolumeOpen(!mobileVolumeOpen);
              }}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                mobileVolumeOpen ? 'text-[#1DB954] bg-[#1DB954]/20' : isPlaying && !isMuted ? 'text-[#1DB954] hover:text-[#1ed760]' : 'text-[#B3B3B3] hover:text-white'
              }`}
              title="Music Controls"
            >
              <Settings size={18} />
            </button>

            {/* Mobile Music Panel */}
            {mobileVolumeOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#181818] border border-[#1DB954]/30 rounded-lg p-4 shadow-lg backdrop-blur-sm min-w-[240px]">
                {/* Track info */}
                <div className="mb-4 pb-3 border-b border-[#404040]">
                  <div className="text-[#1DB954] text-sm font-medium">{trackInfo.title}</div>
                  <div className="text-[#B3B3B3] text-xs">{trackInfo.artist}</div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <div 
                    className={`w-2 h-2 rounded-full ${
                      isMuted ? 'bg-[#B3B3B3]' : isPlaying ? 'bg-[#1DB954] animate-pulse' : 'bg-[#B3B3B3]'
                    }`}
                  ></div>
                  <span className={`text-xs ${isMuted ? 'text-[#B3B3B3]' : isPlaying ? 'text-[#1DB954]' : 'text-[#B3B3B3]'}`}>
                    {isMuted ? 'Muted' : isPlaying ? 'Playing' : 'Paused'}
                  </span>
                </div>

                {/* Music controls */}
                <div className="flex gap-2 mb-4">
                  {/* Play/Pause button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg transition-all duration-300 ${
                      isPlaying 
                        ? 'bg-[#1DB954]/20 hover:bg-[#1DB954]/30 text-[#1DB954]' 
                        : 'bg-[#404040] hover:bg-[#505050] text-[#B3B3B3]'
                    }`}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    <span className="text-sm font-medium">
                      {isPlaying ? 'Pause' : 'Play'}
                    </span>
                  </button>

                  {/* Next Track button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextTrack();
                    }}
                    className="px-3 py-3 bg-[#1DB954]/20 hover:bg-[#1DB954]/30 text-[#1DB954] rounded-lg transition-all duration-300"
                    title="Next Track"
                  >
                    <SkipForward size={16} />
                  </button>
                </div>

                {/* Mute/Unmute button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVolumeToggle();
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 mb-3 ${
                    isMuted 
                      ? 'bg-[#404040] hover:bg-[#505050] text-[#B3B3B3]' 
                      : 'bg-[#1DB954]/20 hover:bg-[#1DB954]/30 text-[#1DB954]'
                  }`}
                >
                  <VolumeIcon size={18} />
                  <span className="text-sm font-medium">
                    {isMuted ? 'Unmute' : 'Mute'}
                  </span>
                </button>

                {/* Volume slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xs">Volume</span>
                    <span className="text-[#1DB954] text-xs font-medium">
                      {Math.round((isMuted ? 0 : volume) * 100)}%
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full h-2 bg-[#4a4a4a] rounded-full cursor-pointer relative overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          isMuted ? 'bg-[#B3B3B3]' : 'bg-[#1DB954]'
                        }`}
                        style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                      ></div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={(e) => {
                          const newVolume = parseFloat(e.target.value);
                          if (newVolume > 0 && isMuted) {
                            setMuted(false);
                          }
                          setVolume(newVolume);
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        title="Adjust background volume"
                      />
                    </div>
                  </div>
                  
                  {/* Quick volume presets */}
                  <div className="flex gap-1 mt-2">
                    {[0.25, 0.5, 0.75, 1].map((preset) => (
                      <button
                        key={preset}
                        onClick={(e) => {
                          e.stopPropagation();
                          setVolume(preset);
                          if (isMuted) setMuted(false);
                        }}
                        className={`flex-1 py-1 px-2 rounded text-xs transition-all duration-300 ${
                          Math.abs(volume - preset) < 0.05 && !isMuted
                            ? 'bg-[#1DB954] text-black'
                            : 'bg-[#404040] text-[#B3B3B3] hover:bg-[#505050] hover:text-white'
                        }`}
                      >
                        {Math.round(preset * 100)}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>



      {/* Main Content */}
      <div className="pt-[60px]">
        {children}
      </div>

      {/* Contact Footer */}
      <footer className="bg-[#181818] border-t border-[#282828] py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-white font-semibold mb-2">Malav Akhani</h3>
              <p className="text-[#B3B3B3] text-sm">Brand Strategist | MBA Marketing Student</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Contact</h4>
              <a 
                href="mailto:malav.akhani8@gmail.com?subject=Inquiry%20from%20your%20website&body=Hi%20Malav%2C%0A%0AI'd%20like%20to%20ask%20about..."
                className="text-[#B3B3B3] hover:text-[#1DB954] transition-colors text-sm mb-1 block"
              >
                malav.akhani8@gmail.com
              </a>
              <a 
                href="https://maps.app.goo.gl/cMQdmjbPgPBTB4Rn7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B3B3B3] hover:text-[#1DB954] transition-colors text-sm"
              >
                New York, USA
              </a>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Connect</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a 
                  href="https://www.linkedin.com/in/malavakhani6/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#B3B3B3] hover:text-[#1DB954] transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://coffee-celestyna-14.tiiny.site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#B3B3B3] hover:text-[#1DB954] transition-colors"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}