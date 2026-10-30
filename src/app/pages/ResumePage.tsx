import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Download } from 'lucide-react';
import { ImpactStat } from '../components/ImpactStat';

const RESUME_FILE = `${import.meta.env.BASE_URL}Malav-Akhani-Resume.pdf`;

const experiences = [
  {
    title: 'Product Marketing Manager',
    company: 'The EGC Group · Melville, NY',
    period: 'Jan 2026 – Present',
    tags: ['Product Marketing', 'GTM Strategy', 'Competitive Intelligence'],
    impact: 57,
    impactLabel: 'Profile visits',
    achievements: [
      'Owned positioning, messaging, and GTM recommendations for four client accounts, translating audience and performance data into message tests and creative recommendations that lifted engagement by up to 38%, using Google Ads, Meta Ads Manager, and Brandwatch',
      "Informed a content and messaging shift associated with a 29% increase in total interactions by benchmarking eight competitor brands and measuring Jovia Financial Credit Union's share of voice across Instagram, Facebook, LinkedIn, TikTok, and X using Brandwatch",
      "Became EGC's first Claude adopter, building nearly 14 AI-powered workflows and tools that shifted the entire team onto Claude, cutting competitive intelligence turnaround 62% and freeing up 22% of team capacity",
      'Built pitch decks, prospect profiles, competitor comparisons, talking points, and call-preparation briefs for agency new business; analyzed 40+ competitive and CRM reports and win-loss patterns, supporting $997K in won business and reducing prospecting time by approximately 30%',
      "Translated customer research for Windward and Catholic Health into audience, positioning, and GTM recommendations; launched Designs for Vision's 15-partner creator program, increasing profile visits by 57%",
    ],
  },
  {
    title: 'Product Marketing Coordinator',
    company: 'Hofstra University · Hempstead, NY',
    period: 'Jan 2025 – Dec 2025',
    tags: ['GTM Planning', 'Email Marketing'],
    impact: 30,
    impactLabel: 'Recruitment growth',
    achievements: [
      "Repositioned Hofstra's brand messaging and visual identity across LinkedIn, Instagram, and the website, lifting professional brand perception 30% and student engagement 10%",
      "Built the go-to-market plan for Hofstra's flagship events, segmenting audiences and pairing organic with paid Meta/Facebook promotion to lift visibility 25% and attendance 15%",
      'Built a Claude-automated workflow to segment a 150K-contact prospective-student database and run targeted Mailchimp campaigns, contributing to 30% recruitment-pipeline growth',
    ],
  },
  {
    title: 'Product Marketing Manager',
    company: 'The Creative Roots · Mumbai, MH',
    period: 'Dec 2023 – Jan 2025',
    tags: ['GTM Strategy', 'Brand Positioning'],
    impact: 30,
    impactLabel: 'Reach growth',
    achievements: [
      "Built and led a two-phase GTM strategy for Sling TV's 2024 T20 World Cup campaign, positioning its $10 offer to South Asian cricket audiences and extending the value proposition from tournament acquisition to Dakshin and Desi entertainment; contributed to 25% subscription growth and a 30% increase in reach",
      "Developed the 'World Cup Experience Home Delivered' campaign proposition and audience-specific social, influencer, and SEO content plan, including a dedicated India versus Pakistan activation across Instagram, Facebook, and X",
      'Built brand narratives and influencer content strategy for athletes including Hardik Pandya and Virat Kohli, raising brand engagement by 20%, using AI-assisted scheduling and social-listening tools',
      'Translated brand, audience, and channel insights into creative and investment recommendations for a 10+ brand roster, including Godrej and Samsung, contributing to an average ROI increase of 20%',
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
          Product marketing manager with 5+ years across agency and in-house marketing, applying competitive
          intelligence, audience research, messaging, and campaign performance data to sharpen GTM strategy,
          positioning, and sales enablement.
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
