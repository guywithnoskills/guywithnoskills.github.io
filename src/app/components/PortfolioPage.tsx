import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Search, 
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  ExternalLink,
  FileText,
  Briefcase,
  Award,
  Music,
  BookOpen,
  PenTool,
  Mail,
  ArrowLeft
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [nowPlayingBlink, setNowPlayingBlink] = useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setNowPlayingBlink(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const topPicks = [
    {
      id: 'work-permit',
      title: 'Work Permit',
      description: 'Legal authorization to work',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      action: () => window.open('https://malavakhanicv.tiiny.site', '_blank')
    },
    {
      id: 'skills',
      title: 'Skills',
      description: 'Technical expertise & abilities',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      action: () => {}
    },
    {
      id: 'experience',
      title: 'Experience',
      description: 'Professional journey & roles',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&h=300&fit=crop',
      action: () => {}
    },
    {
      id: 'certifications',
      title: 'Certifications',
      description: 'Verified achievements',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
      action: () => {}
    }
  ];

  const continueWatching = [
    {
      id: 'music',
      title: 'Music',
      description: 'Playlists & favorite tracks',
      icon: Music,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      action: () => {}
    },
    {
      id: 'reading',
      title: 'Reading',
      description: 'Books & articles I enjoy',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      action: () => {}
    },
    {
      id: 'blogs',
      title: 'Blogs',
      description: 'Thoughts & insights',
      icon: PenTool,
      image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=400&h=300&fit=crop',
      action: () => {}
    },
    {
      id: 'contact',
      title: 'Contact Me',
      description: 'Get in touch',
      icon: Mail,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      action: () => window.open('https://www.linkedin.com/in/malavakhani6/', '_blank')
    }
  ];

  const handleCardClick = (item: any) => {
    if (item.action) {
      item.action();
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#121212] border-b border-[#282828] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('landing')}
            className="p-2 rounded-full bg-[#090909] text-white hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full bg-[#1DB954] transition-opacity duration-300 ${nowPlayingBlink ? 'opacity-100' : 'opacity-40'}`}></div>
            <span className="text-white/80 text-sm">Now Playing</span>
          </div>
        </div>
        
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B3B3B3]" size={16} />
            <input 
              type="text" 
              placeholder="Search for anything..." 
              className="w-full bg-[#2a2a2a] border border-[#404040] rounded-full pl-10 pr-4 py-2 text-white placeholder-[#B3B3B3] focus:border-[#1DB954] focus:outline-none transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#1DB954] rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">MA</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-b from-[#1a1a1a] to-[#121212] p-8 overflow-y-auto">
        {/* Profile Header */}
        <div className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#1DB954] to-[#1ed760] rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-2xl font-black text-black">MA</span>
            </div>
            <div>
              <h1 className="text-4xl font-black text-white mb-2">Malav Akhani</h1>
              <p className="text-[#B3B3B3] text-lg">Software Developer & Tech Enthusiast</p>
            </div>
          </div>
        </div>

        {/* Today's Top Picks */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Today's Top Picks for recruiter</h2>
            <button className="text-[#B3B3B3] hover:text-white text-sm font-medium transition-colors duration-300">
              Show all
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPicks.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="group cursor-pointer bg-[#181818] hover:bg-[#2a2a2a] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-32 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-[#1DB954]/0 group-hover:bg-[#1DB954]/20 transition-all duration-500"></div>
                  
                  {/* Play Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center shadow-xl">
                      <Play size={16} className="text-black ml-0.5" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1 group-hover:text-[#1DB954] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#B3B3B3] text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Watching */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Continue Watching for recruiter</h2>
            <button className="text-[#B3B3B3] hover:text-white text-sm font-medium transition-colors duration-300">
              Show all
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {continueWatching.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="group cursor-pointer bg-[#181818] hover:bg-[#2a2a2a] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 transform"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-32 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-[#1DB954]/0 group-hover:bg-[#1DB954]/20 transition-all duration-500"></div>
                  
                  {/* Play Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center shadow-xl">
                      <Play size={16} className="text-black ml-0.5" />
                    </div>
                  </div>
                  
                  {/* Progress Bar for Continue Watching */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4a4a4a]">
                    <div 
                      className="h-full bg-[#1DB954] transition-all duration-500"
                      style={{ width: `${Math.random() * 70 + 10}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1 group-hover:text-[#1DB954] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#B3B3B3] text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => window.open('https://malavakhanicv.tiiny.site', '_blank')}
              className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <ExternalLink size={16} />
              View Resume
            </button>
            <button 
              onClick={() => window.open('https://www.linkedin.com/in/malavakhani6/', '_blank')}
              className="bg-[#0077b5] hover:bg-[#0088cc] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <ExternalLink size={16} />
              LinkedIn
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Player */}
      <div className="bg-[#181818] border-t border-[#282828] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#1DB954] rounded-lg flex items-center justify-center">
            <span className="text-black font-bold">MA</span>
          </div>
          <div>
            <div className="text-white font-medium">Professional Portfolio</div>
            <div className="text-[#B3B3B3] text-sm">Malav Akhani</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[#B3B3B3] hover:text-white transition-colors duration-300">
            <SkipBack size={20} />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            {isPlaying ? <Pause size={20} className="text-black" /> : <Play size={20} className="text-black ml-0.5" />}
          </button>
          <button className="text-[#B3B3B3] hover:text-white transition-colors duration-300">
            <SkipForward size={20} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Volume2 size={20} className="text-[#B3B3B3]" />
          <div className="w-20 h-1 bg-[#4a4a4a] rounded-full cursor-pointer">
            <div className="w-1/3 h-full bg-white rounded-full transition-all duration-300 hover:bg-[#1DB954]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}