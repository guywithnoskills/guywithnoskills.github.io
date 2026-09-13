import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import profileImage from '../../assets/profile.webp';
import energyMissionLogo from 'figma:asset/5b9b71543399cf1011dd8138f18e9c76a8ec3219.png';
import jakes58Logo from '../../assets/client-jakes58.webp';
import joviaLogo from '../../assets/client-jovia.webp';
import dfvLogo from '../../assets/client-dfv.webp';
import egcLogo from '../../assets/client-egc.webp';
import molloyLogo from '../../assets/client-molloy.webp';
import nikeLogo from '../../assets/client-nike.png';
import dysonLogo from '../../assets/client-dyson.svg';

const RESUME_FILE = `${import.meta.env.BASE_URL}Malav-Akhani-Resume.pdf`;

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Clients Handled', value: '80+' },
  { label: 'Projects Delivered', value: '100+' },
];

const brands = [
  { name: 'The EGC Group', logo: egcLogo },
  { name: 'Jovia Financial Credit Union', logo: joviaLogo },
  { name: 'Molloy University', logo: molloyLogo },
  { name: "Jake's 58 Casino Hotel", logo: jakes58Logo },
  { name: 'Nike', logo: nikeLogo },
  { name: 'Designs for Vision', logo: dfvLogo },
  { name: 'Dyson', logo: dysonLogo },
  { name: 'Energy Mission Machineries', logo: energyMissionLogo },
];

const work = [
  { title: 'Social Media Listening Report', tag: 'Jovia Financial Credit Union', result: "An 8x jump in mentions and 14x surge in reach for Jovia's Long Island Marathon sponsorship, tracked week over week" },
  { title: 'Nursing Brand Persona', tag: 'Molloy University', result: 'Built a data-driven prospect persona from MRI-Simmons national survey data to guide nursing recruitment messaging' },
  { title: 'Dyson India Localization', tag: 'Global Localization', result: "Adapted Dyson's global campaign for the Indian market while staying on brand" },
];

const experienceSnapshot = [
  { title: 'Marketing Strategy Associate', company: 'The EGC Group', period: '2025 – Present' },
  { title: 'Marketing Coordinator', company: 'Hofstra University', period: '2025' },
  { title: 'Brand Marketing Strategist', company: 'The Creative Roots', period: '2023 – 2025' },
  { title: 'Brand Marketing Strategist', company: 'Pixelfox', period: '2022 – 2023' },
  { title: 'Marketing Manager', company: 'Energy Mission Machineries', period: '2021 – 2022' },
];

const focusAreas = [
  'Brand Strategy', 'Integrated Marketing', 'Consumer Insights', 'Competitive Intelligence',
  'Social Listening', 'Influencer Marketing', 'Paid Social', 'Go-to-Market Strategy',
];

export default function LandingPage() {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-green-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 via-transparent to-[#2ECC71]/5 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 pt-14 pb-10">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-4 py-2 bg-[#1A2A1A]/60 border border-[#1DB954]/20 rounded-full backdrop-blur-sm">
            <p className="text-xs text-[#1DB954]/80 font-medium tracking-wide">Marketing Strategist Portfolio</p>
          </div>
        </motion.div>

        <div className="text-center mb-10">
          <motion.img
            src={profileImage}
            alt="Malav Akhani"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mx-auto mb-5 ring-2 ring-[#1DB954]/50"
          />
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight"
          >
            Malav Akhani
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#1DB954] font-medium mb-3"
          >
            MARKETING STRATEGIST | MBA MARKETING STUDENT
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-[#B3B3B3] max-w-xl mx-auto mb-8"
          >
            I plan and run marketing campaigns, social, paid, and brand work, for companies
            ranging from financial services to higher education to consumer brands.
          </motion.p>

          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  className="text-2xl md:text-3xl font-black text-[#1DB954] mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: statsVisible ? 1 : 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm text-[#B3B3B3] uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={RESUME_FILE}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-w-[180px] bg-[#1DB954] hover:bg-[#1ed760] text-black font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
            <Link
              to="/workfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-w-[180px] bg-transparent border-2 border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-black font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              Workfolio
            </Link>
            <a
              href="https://www.linkedin.com/in/malavakhani6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-w-[180px] bg-transparent border-2 border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-black font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Brands */}
        <div className="mb-14 pb-10 border-b border-[#282828]">
          <p className="text-xs uppercase tracking-wider text-[#B3B3B3] mb-5 text-center">Brands I've worked with</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden hover:scale-110 transition-transform"
                title={brand.name}
              >
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} className="w-12 h-12 object-contain" />
                ) : (
                  <span className="text-black font-bold text-xs text-center px-1">{brand.name.split(' ').map(w => w[0]).join('').slice(0, 3)}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected work */}
        <div className="mb-14 pb-10 border-b border-[#282828]">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Work</h2>
            <Link to="/workfolio" className="text-sm text-[#1DB954] hover:underline">View all</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {work.map((item) => (
              <Link
                key={item.title}
                to="/workfolio"
                className="block p-5 rounded-xl bg-[#1A2A1A] hover:bg-[#223322] transition-colors card-glow-green"
              >
                <span className="text-xs text-[#1DB954] font-medium">{item.tag}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-[#B3B3B3] leading-relaxed">{item.result}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* About preview */}
        <div className="mb-14 pb-10 border-b border-[#282828] grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <img src={profileImage} alt="Malav Akhani" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover ring-2 ring-[#1DB954]/40" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">About</h2>
            <p className="text-[#B3B3B3] leading-relaxed max-w-2xl mb-3">
              I plan and run marketing campaigns, social, paid, and brand work, for companies ranging
              from global consumer brands to local event organizers. My approach starts with research,
              then story, then media. Understand who we're talking to before deciding how loud to say it.
            </p>
            <Link to="/about" className="text-sm text-[#1DB954] hover:underline">Read the full bio →</Link>
          </div>
        </div>

        {/* Experience snapshot */}
        <div className="mb-14 pb-10 border-b border-[#282828]">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Experience</h2>
            <Link to="/resume" className="text-sm text-[#1DB954] hover:underline">Full timeline</Link>
          </div>
          <div className="divide-y divide-[#282828]">
            {experienceSnapshot.map((role) => (
              <div key={role.company} className="flex items-baseline justify-between py-3">
                <div>
                  <span className="text-white font-medium">{role.title}</span>
                  <span className="text-[#B3B3B3]"> · {role.company}</span>
                </div>
                <span className="text-sm text-[#B3B3B3] whitespace-nowrap ml-4">{role.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Focus areas */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Focus Areas</h2>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span key={area} className="text-sm px-3 py-1.5 rounded-full border border-[#1DB954]/30 text-[#B3B3B3]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
