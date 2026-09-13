import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  ExternalLink,
  FolderOpen,
  PlayCircle,
  Images
} from 'lucide-react';
import { useMusic } from '../components/MusicContext';

const projects = [
  {
    id: 'hoh-cyclothon',
    title: 'HOH Cyclothon Campaign',
    description: "Led end-to-end creative strategy from ideation to execution, focusing on high-impact visibility and engagement. Developed facade assets and social media creatives aligned with the campaign's energetic spirit.",
    details: 'Strategically defined target audience (fitness enthusiasts, families, socially-conscious urban youth) and crafted inclusive, inspiring messaging. Used vibrant, positive tonality with bold typography and dynamic imagery.',
    videoUrl: 'https://www.youtube.com/watch?v=cNWMhQiyR4o',
    category: 'Campaign Strategy'
  },
  {
    id: 'dyson-campaign',
    title: 'Dyson India Localization',
    description: "Collaborated with Dyson's global team to localize a high-impact campaign for the Indian market. Adapted brand messaging and visual storytelling to resonate with Indian audiences.",
    details: "Played key role from brainstorming to execution, ensuring campaign stayed true to Dyson's global standards while capturing local attention through strategic positioning and culturally relevant communication.",
    videoUrl: 'https://www.youtube.com/watch?v=EdZYyoqlktg',
    category: 'Global Localization'
  },
  {
    id: 'phoenix-gift-card',
    title: 'Rakshabandhan x Phoenix Gift Card',
    description: 'Celebrated sibling bonds through market research and emotional insights. Positioned PGC as the perfect gifting solution with engaging storytelling and targeted promotions.',
    details: 'Campaign generated ₹8L+ in revenue through emotional storytelling that blended sentiment with versatility, using engaging visuals and strategic promotional hooks.',
    videoUrl: 'https://www.youtube.com/watch?v=TJpY0mozxlc',
    category: 'Revenue Generation'
  }
];

export default function WorkfolioPage() {
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { isPlaying, togglePlayPause, nextTrack } = useMusic();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setButtonsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-green-gradient text-white relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/20 to-[#2ECC71]/10 opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(29,185,84,0.15),transparent)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(46,204,113,0.1),transparent)] opacity-40"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between p-6 md:p-8">
          <button
            onClick={() => navigate('/')}
            className="w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ArrowLeft size={20} className="text-white" />
          </button>

          <div className={`flex items-center gap-4 bg-black/40 backdrop-blur-lg rounded-full px-4 py-2 transition-all duration-500 ${
            buttonsVisible ? 'animate-buttonFlashGreen' : 'opacity-0'
          }`}>
            <button className="text-[#B3B3B3] hover:text-white transition-colors duration-300">
              <SkipBack size={16} />
            </button>
            <button
              onClick={togglePlayPause}
              className={`w-8 h-8 ${isPlaying ? 'bg-[#1DB954]' : 'bg-white'} hover:bg-[#1ed760] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110`}
            >
              {isPlaying ? <Pause size={16} className="text-black" /> : <Play size={16} className="text-black ml-0.5" />}
            </button>
            <button onClick={nextTrack} className="text-[#B3B3B3] hover:text-white transition-colors duration-300">
              <SkipForward size={16} />
            </button>
            <button className="text-[#B3B3B3] hover:text-white transition-colors duration-300">
              <Volume2 size={16} />
            </button>
          </div>
        </div>

        <div className="px-6 md:px-8 pb-8" ref={contentRef}>
          <div className="bg-[#1A2A1A] rounded-xl p-6 md:p-8 animate-tabSlideIn card-glow-green">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <FolderOpen className="text-[#1DB954]" size={32} />
              Workfolio, Projects & Gallery
            </h1>

            <div className="mb-8 pb-8 border-b border-[#2a2a2a]">
              <div className="flex items-center gap-3 mb-6">
                <Images className="text-[#1DB954]" size={20} />
                <h2 className="text-xl font-bold text-white">Gallery</h2>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-6 hover:bg-[#333333] transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#1DB954] transition-colors duration-300 mb-3">
                      Social Media Content Archive
                    </h3>
                    <p className="text-[#B3B3B3] mb-4 leading-relaxed">
                      A comprehensive collection of my creative work including social media posts, reels, stories, and campaigns.
                      This gallery showcases my content creation journey, visual storytelling abilities, and brand communication
                      strategies across various platforms and projects.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Instagram Posts', 'Reels', 'Stories', 'Campaign Assets'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => window.open('https://drive.google.com/drive/folders/1A30_aYk-DgjiBnytV77CJ3AD0SJbE8z2?usp=sharing', '_blank')}
                    className="ml-4 bg-[#1DB954] hover:bg-[#1ed760] text-black p-3 rounded-full transition-all duration-300 hover:scale-110 btn-glow-green"
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
                <button
                  onClick={() => window.open('https://drive.google.com/drive/folders/1A30_aYk-DgjiBnytV77CJ3AD0SJbE8z2?usp=sharing', '_blank')}
                  className="w-full bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/30 text-[#1DB954] font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  View Complete Gallery
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <PlayCircle className="text-[#1DB954]" size={20} />
                <h2 className="text-xl font-bold text-white">Key Projects</h2>
              </div>
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-[#2a2a2a] rounded-lg p-6 hover:bg-[#333333] transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-white group-hover:text-[#1DB954] transition-colors duration-300">
                            {project.title}
                          </h3>
                          <span className="px-2 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded text-xs font-medium">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-[#B3B3B3] mb-3">{project.description}</p>
                        <p className="text-[#B3B3B3] text-sm">{project.details}</p>
                      </div>
                      <button
                        onClick={() => window.open(project.videoUrl, '_blank')}
                        className="ml-4 bg-[#1DB954] hover:bg-[#1ed760] text-black p-3 rounded-full transition-all duration-300 hover:scale-110 btn-glow-green"
                      >
                        <PlayCircle size={20} />
                      </button>
                    </div>
                    <button
                      onClick={() => window.open(project.videoUrl, '_blank')}
                      className="w-full bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/30 text-[#1DB954] font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <PlayCircle size={16} />
                      Watch Campaign Video
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
