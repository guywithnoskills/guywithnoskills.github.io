import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Download } from 'lucide-react';

const RESUME_FILE = `${import.meta.env.BASE_URL}Malav-Akhani-Resume.pdf`;

const experiences = [
  {
    title: 'Marketing Strategy Associate',
    company: 'The EGC Group · Melville, NY',
    period: 'Dec 2025 – Present',
    tags: ['Integrated Strategy', 'Competitive Intelligence'],
    achievements: [
      'Orchestrated integrated brand, social, and content strategies for Jovia Financial Credit Union, Molloy University, Jake’s 58 Casino Hotel, Vaughn College, and other agency clients, achieving 18–22% higher engagement',
      'Benchmarked eight competitor brands via a cross-platform social audit for Jovia in Brandwatch, informing a content strategy shift tied to a 29% increase in total interactions',
      'Formulated organic content recommendations for Molloy University using MRI-Simmons Catalyst profiling, contributing to 16% higher social engagement',
      'Evaluated 40+ competitive media-spend reports in MediaRadar 360 to surface positioning opportunities, shortening prospecting time 30% for a $500K new-business pipeline',
      'Managed outreach and briefing for 15 dental creators, contributing to a 57% increase in profile visits for a client’s creator marketing program',
    ],
  },
  {
    title: 'Marketing Coordinator',
    company: 'Hofstra University · Hempstead, NY',
    period: 'Jan 2025 – Nov 2025',
    tags: ['Content Design', 'Email Marketing'],
    achievements: [
      'Transformed LinkedIn, Instagram, and website presence with brand-consistent visual content, lifting professional image 30% and student engagement 10%',
      'Drove 30% recruitment growth via Mailchimp campaigns to a 150K-contact database, boosting event visibility 25% and attendance 15%',
    ],
  },
  {
    title: 'Brand Marketing Strategist',
    company: 'The Creative Roots · Mumbai, MH',
    period: 'Dec 2023 – Jan 2025',
    tags: ['Influencer Strategy', 'Content Campaigns'],
    achievements: [
      "Led Sling TV's Cricket World Cup multi-platform content campaign, driving 25% subscription growth and 30% audience reach expansion",
      'Developed brand narratives and influencer strategy for talent including Hardik Pandya and Virat Kohli, boosting brand engagement 20%',
      'Owned social content strategy and AI-assisted optimization for 10+ brands including Samsung, achieving 20% average ROI growth',
    ],
  },
  {
    title: 'Brand Marketing Strategist',
    company: 'Pixelfox · Mumbai, MH',
    period: 'Aug 2022 – Dec 2023',
    tags: ['PR', 'Paid Social'],
    achievements: [
      'Secured features in Vogue, Forbes, and Fortune for clients including Netflix India and Dyson India, driving a 40% increase in positive coverage',
      'Grew followers 21% and reach 66% through social and influencer channel management',
      'Drove a 20% sales surge through Meta and LinkedIn Ads campaigns integrated with Mailchimp',
      "Earned the 'Best Use of Instagram & Social Media' award; lifted client retention 25%",
    ],
  },
  {
    title: 'Marketing Manager',
    company: 'Energy Mission Machineries India Ltd · Ahmedabad, GJ',
    period: 'Feb 2021 – Jul 2022',
    tags: ['SEO', 'Lead Generation'],
    achievements: [
      'Increased qualified leads 30% for hydraulic shearing and CNC press bending machines through social analytics and multichannel optimization',
      'Boosted web traffic 30% via content coordination and website optimization using Google Analytics',
    ],
  },
];

const education = [
  {
    degree: 'MBA in Marketing',
    institution: 'Hofstra University, Frank G. Zarb School of Business',
    period: 'Jan 2025 – Jan 2027 · GPA 3.6',
  },
];

function TimelineEntry({ item }: { item: (typeof experiences)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative pl-10 md:pl-14 pb-12 last:pb-0"
    >
      <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#1DB954] ring-4 ring-[#121212]" />
      <p className="text-sm text-[#B3B3B3] mb-1">{item.period}</p>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">{item.title}</h3>
      <p className="text-[#1DB954] text-sm font-medium mb-3">{item.company}</p>
      <ul className="space-y-2 mb-3">
        {item.achievements.map((a, i) => (
          <li key={i} className="text-[#B3B3B3] text-sm leading-relaxed pl-4 relative">
            <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-[#1DB954]/60" />
            {a}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-[#1DB954]/30 text-[#B3B3B3]">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ResumePage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.2', 'end 0.8'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-green-gradient min-h-[calc(100vh-60px)]">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        <div className="sticky top-16 z-10 bg-[#0D1F0D]/95 backdrop-blur-sm py-6 flex items-center justify-between border-b border-[#1DB954]/20 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Resume</h1>
          <a
            href={RESUME_FILE}
            download
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#1DB954] rounded-full text-sm text-[#1DB954] hover:bg-[#1DB954] hover:text-black transition-colors"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Download</span> PDF
          </a>
        </div>

        <p className="text-[#B3B3B3] mb-10 max-w-xl">
          Five-plus years across U.S. agency and India-based marketing roles, spanning brand, social,
          influencer, and integrated strategy for clients from financial services to entertainment.
        </p>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-[5px] top-1.5 bottom-0 w-px bg-[#282828]" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[5px] top-1.5 bottom-0 w-px bg-[#1DB954] origin-top"
          />
          {experiences.map((item) => (
            <TimelineEntry key={item.company} item={item} />
          ))}
        </div>

        <div className="border-t border-[#282828] mt-4 pt-10 pb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((ed) => (
              <div key={ed.degree} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <p className="text-white font-medium">{ed.degree}</p>
                  <p className="text-sm text-[#B3B3B3]">{ed.institution}</p>
                </div>
                <p className="text-sm text-[#B3B3B3] whitespace-nowrap">{ed.period}</p>
              </div>
            ))}
          </div>

          <a
            href={RESUME_FILE}
            download
            className="inline-flex items-center gap-2 mt-10 px-5 py-2.5 bg-[#1DB954] hover:bg-[#1ed760] text-black font-medium rounded-full text-sm transition-colors"
          >
            <Download size={16} />
            Download Full Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
