import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Download } from 'lucide-react';
import { ImpactStat } from '../components/ImpactStat';

const RESUME_FILE = `${import.meta.env.BASE_URL}Malav-Akhani-Resume.pdf`;

const experiences = [
  {
    title: 'Product Marketing Manager',
    company: 'The EGC Group · Melville, NY',
    period: 'Dec 2025 – Present',
    tags: ['Product Marketing', 'Competitive Intelligence'],
    impact: 57,
    impactLabel: 'Profile visits',
    achievements: [
      'Drove 19–38% higher engagement across four client accounts by turning audience and performance data into digital campaign strategy, message tests, and creative recommendations using Google Ads, Meta Ads Manager, and Brandwatch',
      "Informed a content and messaging shift associated with a 29% increase in total interactions by benchmarking eight competitor brands and measuring Jovia Financial Credit Union's share of voice across Instagram, Facebook, LinkedIn, TikTok, and X using Brandwatch",
      "Lifted social engagement 16% and improved conversion rates by using MRI-Simmons Catalyst to identify audience segments and refine Molloy University's targeting, messages, and content plan",
      'Contributed to $500K in new business won by the agency team and cut prospecting time about 30% by synthesizing 40+ competitor media-spend reports with Klue, HubSpot, and Google Analytics data into prospecting insights',
      'Ran market research surveys for Windward and Catholic Health, translating audience feedback into customer insights for account messaging decisions',
      "Contributed to a 57% increase in profile visits for Designs for Vision's creator marketing program by coordinating creator identification, outreach, briefing, and deliverable planning for 15 dental creators",
    ],
  },
  {
    title: 'Marketing Coordinator',
    company: 'Hofstra University · Hempstead, NY',
    period: 'Jan 2025 – Nov 2025',
    tags: ['Content Design', 'Email Marketing'],
    impact: 30,
    impactLabel: 'Recruitment growth',
    achievements: [
      "Improved professional image 30% and student engagement 10% by redesigning Hofstra's digital communications across LinkedIn, Instagram, and the website using Canva-crafted visual content and brand-consistent design",
      "Grew Hofstra's recruitment pipeline 30% by running Mailchimp email campaigns to a 150K-contact database",
      'Lifted event visibility 25% and attendance 15% by driving event awareness through organic and paid Meta/Facebook promotion',
    ],
  },
  {
    title: 'Sr. Digital Media Manager',
    company: 'The Creative Roots · Mumbai, MH',
    period: 'Dec 2023 – Jan 2025',
    tags: ['Influencer Strategy', 'Content Campaigns'],
    impact: 30,
    impactLabel: 'Audience reach expansion',
    achievements: [
      "Grew subscriptions 25% and reach 30% by leading Sling TV's Cricket World Cup campaign across Instagram, Facebook, and Twitter",
      'Raised brand engagement 20% by building brand narratives and influencer content strategy for athletes including Hardik Pandya and Virat Kohli, using AI-assisted scheduling and social-listening tools',
      'Grew average ROI 20% across a 10+ brand roster, including Samsung and other consumer brands, by running social media content strategy and using performance data to guide creative and content-calendar decisions',
    ],
  },
  {
    title: 'Brand Strategist',
    company: 'Pixelfox · Mumbai, MH',
    period: 'Aug 2022 – Dec 2023',
    tags: ['PR', 'Paid Social'],
    impact: 66,
    impactLabel: 'Reach growth',
    achievements: [
      'Grew positive brand coverage 40% by placing client stories in Vogue, Forbes, and Fortune for Netflix India and Dyson India',
      'Grew social following 21% and reach 66% by managing content strategy and building influencer marketing partnerships',
      'Increased sales 20% by pairing Meta Ads, LinkedIn Ads, and YouTube Ads campaigns with Mailchimp email promotion',
      "Lifted client retention 25% by delivering innovative platform use that earned the 'Best Use of Instagram & Social Media' award",
    ],
  },
  {
    title: 'Marketing Manager (Part-time)',
    company: 'Energy Mission Machineries India Ltd · Ahmedabad, GJ',
    period: 'Feb 2021 – Jul 2022',
    tags: ['Social Analytics', 'Lead Generation'],
    impact: 30,
    impactLabel: 'Qualified leads',
    achievements: [
      'Generated a 30% increase in qualified leads for hydraulic shearing and CNC press bending machines by running social media analytics and multichannel campaign optimization',
      'Increased web traffic 30% by coordinating social content and optimizing the company website with Google Analytics',
    ],
  },
];

const education = [
  {
    degree: 'MBA in Marketing',
    institution: 'Hofstra University, Frank G. Zarb School of Business · Hempstead, NY',
    period: 'Jan 2025 – Dec 2026 (expected) · GPA 3.6',
  },
  {
    degree: 'Bachelor of Engineering in Mechanical Engineering',
    institution: 'L.J. Institute of Engineering and Technology · Ahmedabad, India',
    period: '2023',
  },
];

function EntryCard({ item }: { item: (typeof experiences)[number] }) {
  const showHero = item.impact >= 50;
  return (
    <div>
      <p className="text-sm text-[#B3B3B3] mb-1">{item.period}</p>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">{item.title}</h3>
      <p className="text-[#1DB954] text-sm font-medium mb-3">{item.company}</p>
      {showHero && (
        <div className="mb-4">
          <ImpactStat value={item.impact} label={item.impactLabel} size="md" />
        </div>
      )}
      <ul className="space-y-2 mb-3">
        {item.achievements.map((a, i) => (
          <li key={i} className="text-[#B3B3B3] text-sm leading-relaxed relative pl-4">
            <span className="absolute top-2 left-0 w-1 h-1 rounded-full bg-[#1DB954]/60" />
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
    </div>
  );
}

function TimelineEntry({ item, index, total, scrollYProgress, reduced }) {
  const start = index / total;
  const end = (index + 0.6) / total;
  const dotScale = useTransform(scrollYProgress, [start, end], [0.6, 1]);
  const dotOpacity = useTransform(scrollYProgress, [start, end], [0.35, 1]);
  return (
    <div className="relative flex gap-6 md:gap-8 mb-14 md:mb-16 last:mb-0">
      <div className="relative flex-shrink-0 w-4 flex justify-center pt-1.5">
        <motion.span
          style={reduced ? { opacity: 1, scale: 1 } : { scale: dotScale, opacity: dotOpacity }}
          className="w-4 h-4 rounded-full bg-[#1DB954] ring-4 ring-[#121212] z-10"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex-1 pb-2 min-w-0"
      >
        <EntryCard item={item} />
      </motion.div>
    </div>
  );
}

export default function ResumePage() {
  const timelineRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="bg-green-gradient min-h-[calc(100vh-60px)]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        <div className="sticky top-[60px] md:top-[108px] z-10 bg-[#0D1F0D]/95 backdrop-blur-sm py-6 flex items-center justify-between border-b border-[#1DB954]/20 mb-10">
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

        <p className="text-[#B3B3B3] mb-14 max-w-xl">
          Product marketing manager and digital marketer with 5+ years across U.S. agency and India-based roles.
          Uses competitive intelligence, audience research, message testing, and performance data to sharpen
          campaign strategy and sales prospecting.
        </p>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-2 top-1.5 bottom-8 w-px bg-[#282828]" />
          <motion.div
            style={
              reduced
                ? { scaleY: 1, transformOrigin: 'top' }
                : { scaleY: scrollYProgress, transformOrigin: 'top' }
            }
            className="absolute left-2 top-1.5 bottom-8 w-px bg-[#1DB954]"
          />
          {experiences.map((item, i) => (
            <TimelineEntry
              key={item.company}
              item={item}
              index={i}
              total={experiences.length}
              scrollYProgress={scrollYProgress}
              reduced={!!reduced}
            />
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
