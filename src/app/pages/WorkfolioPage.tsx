import React, { useEffect } from 'react';
import { ExternalLink, PlayCircle } from 'lucide-react';

const projects = [
  {
    title: 'HOH Cyclothon Campaign',
    category: 'Campaign Strategy',
    description: 'End-to-end creative strategy from ideation to execution, focused on high-impact visibility for a city-wide cycling event.',
    details: 'Defined the audience — fitness enthusiasts, families, socially-conscious urban youth — and built facade assets and social creative around an energetic, inclusive tone.',
    videoUrl: 'https://www.youtube.com/watch?v=cNWMhQiyR4o',
  },
  {
    title: 'Dyson India Localization',
    category: 'Global Localization',
    description: "Localized Dyson's global campaign for the Indian market with their global team.",
    details: "Adapted brand messaging and visual storytelling to resonate locally while staying true to Dyson's global standards.",
    videoUrl: 'https://www.youtube.com/watch?v=EdZYyoqlktg',
  },
  {
    title: 'Rakshabandhan × Phoenix Gift Card',
    category: 'Revenue Generation',
    description: 'Positioned the Phoenix Gift Card as the go-to gifting solution for a major Indian holiday.',
    details: 'Generated ₹8L+ in revenue through emotional storytelling grounded in market research, paired with targeted promotions.',
    videoUrl: 'https://www.youtube.com/watch?v=TJpY0mozxlc',
  },
];

export default function WorkfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h1 className="font-serif text-3xl md:text-4xl text-[#211D18] mb-3">Work</h1>
      <p className="text-[#6E6255] mb-10 max-w-xl">
        Campaigns and case studies from agency and brand-side work — strategy through execution.
      </p>

      <div className="space-y-8 mb-14">
        {projects.map((project) => (
          <div key={project.title} className="border border-[#E4DCCC] rounded-lg p-6 bg-white">
            <span className="text-xs text-[#B3452A] font-medium">{project.category}</span>
            <h3 className="font-serif text-xl text-[#211D18] mt-1 mb-3">{project.title}</h3>
            <p className="text-[#4A4339] text-sm leading-relaxed mb-2">{project.description}</p>
            <p className="text-[#6E6255] text-sm leading-relaxed mb-4">{project.details}</p>
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#211D18] hover:text-[#B3452A] transition-colors"
            >
              <PlayCircle size={16} />
              Watch campaign video
            </a>
          </div>
        ))}
      </div>

      <div className="border-t border-[#E4DCCC] pt-10">
        <h2 className="font-serif text-xl text-[#211D18] mb-2">Content Archive</h2>
        <p className="text-sm text-[#6E6255] mb-4 max-w-xl">
          Social media posts, reels, stories, and campaign assets from across my content work.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1A30_aYk-DgjiBnytV77CJ3AD0SJbE8z2?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#211D18] text-[#211D18] rounded-full text-sm hover:bg-[#211D18] hover:text-[#F7F3EC] transition-colors"
        >
          <ExternalLink size={16} />
          View full gallery
        </a>
      </div>
    </div>
  );
}
