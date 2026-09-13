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
  Images,
  Download
} from 'lucide-react';
import { useMusic } from '../components/MusicContext';
import { JoviaPerformance, Jakes58Performance } from '../components/CaseStudyCharts';
import { ImpactStat } from '../components/ImpactStat';
import { SpotlightCard } from '../components/SpotlightCard';
import jakes58Logo from '../../assets/client-jakes58.webp';
import joviaLogo from '../../assets/client-jovia.webp';
import dfvLogo from '../../assets/client-dfv.webp';
import molloyLogo from '../../assets/client-molloy.webp';
import dysonLogo from '../../assets/client-dyson.svg';

const projects = [
  {
    id: 'jovia-listening',
    title: 'Social Media Listening Report',
    brand: { name: 'Jovia Financial Credit Union', logo: joviaLogo },
    description: "Built a social listening report for Jovia Financial Credit Union's Long Island Marathon sponsorship, tracking mentions, reach, sentiment, and platform mix across the sponsorship week.",
    details: 'Mentions jumped 8x and reach surged 14x week over week, with a presence score of 14 putting Jovia ahead of 46% of tracked brands. Facebook led, with TikTok and Instagram close behind.',
    videoUrl: null,
    attachmentUrl: `${import.meta.env.BASE_URL}Jovia-Marathon-Social-Listening-Report.pdf`,
    attachmentLabel: 'View full report (PDF)',
    category: 'Social Media Listening',
    impact: 147.7,
    impactLabel: 'Impressions growth',
    chart: <JoviaPerformance />
  },
  {
    id: 'jakes58-performance',
    title: "Jake's 58 Casino Hotel",
    brand: { name: "Jake's 58 Casino Hotel", logo: jakes58Logo },
    description: 'Manage organic content and community across Instagram and Facebook for Jake\'s 58, tracking views, follower quality, and content-type performance to guide what gets made next.',
    details: 'Facebook views grew 27.6% and net follows grew 487.5% period over period, while Instagram posts and reels drove the bulk of reach.',
    videoUrl: null,
    category: 'Social Media Management',
    impact: 487.5,
    impactLabel: 'Net follows growth',
    chart: <Jakes58Performance />
  },
  {
    id: 'molloy-persona',
    title: 'Nursing Brand Persona',
    brand: { name: 'Molloy University', logo: molloyLogo },
    description: "Built a data-driven brand persona for Molloy's nursing and allied health prospect using MRI-Simmons 2026 Spring Doublebase survey data.",
    details: "Surfaced a core tension between high ambition (63% call it a career, not a job) and real financial strain, shaping messaging around cost, peer proof, and platforms like TikTok and Snapchat.",
    videoUrl: null,
    attachmentUrl: `${import.meta.env.BASE_URL}Molloy-Nursing-Brand-Persona.xlsx`,
    attachmentLabel: 'Download analysis (XLSX)',
    category: 'Brand Persona · MRI-Simmons',
    impact: 63,
    impactLabel: 'See nursing as a career, not a job'
  },
  {
    id: 'dyson-campaign',
    title: 'Dyson India Localization',
    brand: { name: 'Dyson', logo: dysonLogo },
    description: "Collaborated with Dyson's global team to localize a high-impact campaign for the Indian market. Adapted brand messaging and visual storytelling to resonate with Indian audiences.",
    details: "Played key role from brainstorming to execution, ensuring campaign stayed true to Dyson's global standards while capturing local attention through strategic positioning and culturally relevant communication.",
    videoUrl: 'https://www.youtube.com/watch?v=EdZYyoqlktg',
    category: 'Global Localization'
  },
  {
    id: 'designs-for-vision',
    title: 'Designs for Vision',
    brand: { name: 'Designs for Vision', logo: dfvLogo },
    description: 'Ran identification, outreach, briefing, and deliverable planning for 15 dental creators as part of an emerging creator and community marketing program.',
    details: 'Contributed to a 57% increase in profile visits for the program.',
    videoUrl: null,
    category: 'Creator Marketing',
    impact: 57,
    impactLabel: 'Profile visits'
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
                <PlayCircle className="text-[#1DB954]" size={20} />
                <h2 className="text-xl font-bold text-white">Key Projects</h2>
              </div>
              <div className="space-y-6">
                {projects.map((project) => {
                  const highlighted = project.impact != null;
                  const showHero = highlighted && !project.chart;
                  return (
                    <SpotlightCard
                      key={project.id}
                      className={`rounded-lg p-6 hover:bg-[#333333] transition-all duration-300 group bg-[#2a2a2a] ${
                        highlighted ? 'border border-[#1DB954]/40 shadow-[0_0_22px_rgba(29,185,84,0.18)]' : 'border border-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                          <img src={project.brand.logo} alt={project.brand.name} className="w-7 h-7 object-contain" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wide text-[#B3B3B3]">Client</p>
                          <p className="text-sm font-semibold text-white">{project.brand.name}</p>
                        </div>
                      </div>
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
                          {showHero && (
                            <div className="mb-3">
                              <ImpactStat value={project.impact as number} label={project.impactLabel as string} size="md" />
                            </div>
                          )}
                          <p className="text-[#B3B3B3] mb-3">{project.description}</p>
                          <p className="text-[#B3B3B3] text-sm">{project.details}</p>
                        </div>
                        {project.videoUrl && (
                          <button
                            onClick={() => window.open(project.videoUrl, '_blank')}
                            className="ml-4 bg-[#1DB954] hover:bg-[#1ed760] text-black p-3 rounded-full transition-all duration-300 hover:scale-110 btn-glow-green"
                          >
                            <PlayCircle size={20} />
                          </button>
                        )}
                      </div>
                      {project.videoUrl && (
                        <button
                          onClick={() => window.open(project.videoUrl, '_blank')}
                          className="w-full bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/30 text-[#1DB954] font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <PlayCircle size={16} />
                          Watch Campaign Video
                        </button>
                      )}
                      {project.attachmentUrl && (
                        <a
                          href={project.attachmentUrl}
                          download
                          className="w-full bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/30 text-[#1DB954] font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Download size={16} />
                          {project.attachmentLabel}
                        </a>
                      )}
                      {project.chart}
                    </SpotlightCard>
                  );
                })}
              </div>
            </div>

            <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
