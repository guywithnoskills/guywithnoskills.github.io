import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import profileImage from '../../assets/profile.webp';
import pixelfoxLogo from 'figma:asset/c43cf05a710c189a3942d6e9d546839c52216c3c.png';
import phoenixMillsLogo from 'figma:asset/b99caa44dc87ef7901e8c23bce701518f14df6ff.png';
import houseOfHiranandaniLogo from 'figma:asset/dba27f58310e1259b05805d98beda4da7e845b60.png';
import energyMissionLogo from 'figma:asset/5b9b71543399cf1011dd8138f18e9c76a8ec3219.png';
import amazonPrimeLogo from 'figma:asset/00d3e2ec7a983bfe7d4973b47f787f6286416e66.png';
import godrejLogo from 'figma:asset/b9392f9a019a1070f0fa70ddbead601f0e6ae455.png';

const RESUME_FILE = `${import.meta.env.BASE_URL}Malav-Akhani-Resume.pdf`;

const brands = [
  { name: 'Amazon Prime Video', logo: amazonPrimeLogo },
  { name: 'Godrej', logo: godrejLogo },
  { name: 'Dyson', logo: null },
  { name: 'Phoenix Mills', logo: phoenixMillsLogo },
  { name: 'Pixelfox', logo: pixelfoxLogo },
  { name: 'House of Hiranandani', logo: houseOfHiranandaniLogo },
  { name: 'Energy Mission Machineries', logo: energyMissionLogo },
];

const work = [
  {
    title: 'HOH Cyclothon Campaign',
    tag: 'Campaign Strategy',
    result: 'End-to-end creative strategy driving city-wide event visibility and turnout',
  },
  {
    title: 'Dyson India Localization',
    tag: 'Global Localization',
    result: "Adapted Dyson's global campaign for the Indian market while staying on brand",
  },
  {
    title: 'Rakshabandhan × Phoenix Gift Card',
    tag: 'Revenue Generation',
    result: '₹8L+ in revenue through emotional storytelling and targeted promotions',
  },
];

const experienceSnapshot = [
  { title: 'Marketing Strategy Associate', company: 'The EGC Group', period: '2025 – Present' },
  { title: 'Marketing Coordinator', company: 'Hofstra University', period: '2025' },
  { title: 'Brand Marketing Strategist', company: 'The Creative Roots', period: '2023 – 2025' },
  { title: 'Brand Marketing Strategist', company: 'Pixelfox', period: '2022 – 2023' },
  { title: 'Marketing Manager', company: 'Energy Mission Machineries', period: '2021 – 2022' },
];

const focusAreas = [
  'Brand Strategy',
  'Integrated Marketing',
  'Consumer Insights',
  'Competitive Intelligence',
  'Social Listening',
  'Influencer Marketing',
  'Paid Social',
  'Go-to-Market Strategy',
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      {/* Hero */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-5xl leading-tight text-[#211D18] max-w-3xl"
        >
          I've spent the last five years figuring out what makes people stop scrolling — for
          brands like Godrej, Dyson, and Amazon Prime Video.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#6E6255] mt-4 max-w-2xl"
        >
          Marketing Strategist, currently getting an MBA in Marketing at Hofstra University. Based
          in New York.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          <Link
            to="/workfolio"
            className="px-5 py-2.5 bg-[#211D18] text-[#F7F3EC] rounded-full text-sm hover:bg-[#3A3229] transition-colors"
          >
            See the work
          </Link>
          <a
            href={RESUME_FILE}
            download
            className="px-5 py-2.5 border border-[#211D18] text-[#211D18] rounded-full text-sm hover:bg-[#211D18] hover:text-[#F7F3EC] transition-colors"
          >
            Download resume
          </a>
        </motion.div>
      </section>

      {/* Logo strip */}
      <section className="pb-16 border-b border-[#E4DCCC]">
        <p className="text-xs uppercase tracking-wider text-[#6E6255] mb-5">Brands I've worked with</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
          {brands.map((brand) => (
            <div key={brand.name} className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
              {brand.logo ? (
                <img src={brand.logo} alt={brand.name} className="h-6 object-contain" />
              ) : (
                <span className="text-sm font-medium text-[#6E6255]">{brand.name}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="py-16 border-b border-[#E4DCCC]">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-[#211D18]">Selected Work</h2>
          <Link to="/workfolio" className="text-sm text-[#B3452A] hover:underline">
            View all
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {work.map((item) => (
            <Link
              key={item.title}
              to="/workfolio"
              className="block p-5 rounded-lg border border-[#E4DCCC] hover:border-[#B3452A]/50 bg-white transition-colors"
            >
              <span className="text-xs text-[#B3452A] font-medium">{item.tag}</span>
              <h3 className="font-serif text-lg text-[#211D18] mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-[#6E6255] leading-relaxed">{item.result}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="py-16 border-b border-[#E4DCCC] grid md:grid-cols-[auto_1fr] gap-8 items-start">
        <img
          src={profileImage}
          alt="Malav Akhani"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
        />
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-[#211D18] mb-3">About</h2>
          <p className="text-[#4A4339] leading-relaxed max-w-2xl mb-3">
            I plan and run marketing campaigns — social, paid, and brand work — for companies
            ranging from global consumer brands to local event organizers. My approach starts with
            research, then story, then media: understand who we're talking to before deciding how
            loud to say it.
          </p>
          <Link to="/about" className="text-sm text-[#B3452A] hover:underline">
            Read the full bio →
          </Link>
        </div>
      </section>

      {/* Experience snapshot */}
      <section className="py-16 border-b border-[#E4DCCC]">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-[#211D18]">Experience</h2>
          <Link to="/resume" className="text-sm text-[#B3452A] hover:underline">
            Full timeline
          </Link>
        </div>
        <div className="divide-y divide-[#E4DCCC]">
          {experienceSnapshot.map((role) => (
            <div key={role.company} className="flex items-baseline justify-between py-3">
              <div>
                <span className="text-[#211D18] font-medium">{role.title}</span>
                <span className="text-[#6E6255]"> · {role.company}</span>
              </div>
              <span className="text-sm text-[#6E6255] whitespace-nowrap ml-4">{role.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-16">
        <h2 className="font-serif text-2xl md:text-3xl text-[#211D18] mb-6">Focus Areas</h2>
        <div className="flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="text-sm px-3 py-1.5 rounded-full border border-[#E4DCCC] text-[#4A4339]"
            >
              {area}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
