import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/profile.webp';
import pixelfoxLogo from 'figma:asset/c43cf05a710c189a3942d6e9d546839c52216c3c.png';
import phoenixMillsLogo from 'figma:asset/b99caa44dc87ef7901e8c23bce701518f14df6ff.png';
import houseOfHiranandaniLogo from 'figma:asset/dba27f58310e1259b05805d98beda4da7e845b60.png';
import energyMissionLogo from 'figma:asset/5b9b71543399cf1011dd8138f18e9c76a8ec3219.png';
import amazonPrimeLogo from 'figma:asset/00d3e2ec7a983bfe7d4973b47f787f6286416e66.png';
import godrejLogo from 'figma:asset/b9392f9a019a1070f0fa70ddbead601f0e6ae455.png';

const skillGroups = [
  {
    label: 'Strategy & Insights',
    items: ['Brand Strategy', 'Integrated Marketing', 'Consumer Insights', 'Audience Segmentation', 'Competitive Intelligence', 'Social Listening', 'Go-to-Market Strategy'],
  },
  {
    label: 'Channels & Activation',
    items: ['Social Media', 'Influencer Marketing', 'Content Strategy', 'Community Management', 'Paid Social', 'Email Marketing', 'Public Relations'],
  },
  {
    label: 'Analytics & Platforms',
    items: ['GA4', 'MRI-Simmons', 'MediaRadar 360', 'Brandwatch', 'HubSpot', 'Meta Ads Manager', 'LinkedIn Ads', 'Mailchimp'],
  },
];

const brands = [
  { name: 'Amazon Prime Video', logo: amazonPrimeLogo },
  { name: 'Godrej', logo: godrejLogo },
  { name: 'Dyson', logo: null },
  { name: 'Phoenix Mills', logo: phoenixMillsLogo },
  { name: 'Pixelfox', logo: pixelfoxLogo },
  { name: 'House of Hiranandani', logo: houseOfHiranandaniLogo },
  { name: 'Energy Mission Machineries', logo: energyMissionLogo },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
        <img
          src={profileImage}
          alt="Malav Akhani"
          className="w-28 h-28 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <h1 className="font-serif text-3xl md:text-4xl text-[#211D18] mb-2">About</h1>
          <p className="text-[#4A4339] leading-relaxed">
            I'm an MBA Marketing candidate at Hofstra University, graduating December 2026, with
            5+ years of marketing experience spanning U.S. agency and India-based roles. I build
            brand, social, influencer, and integrated campaigns grounded in consumer insight and
            competitive intelligence — and I've supported brands across financial services, higher
            education, entertainment, retail, and consumer products.
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-[#211D18] mb-6">Skills</h2>
        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm text-[#B3452A] font-medium mb-2">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full border border-[#E4DCCC] text-[#4A4339]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-[#211D18] mb-6">Brands I've Worked With</h2>
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

      <section className="mb-12 border-l-2 border-[#B3452A]/40 pl-5">
        <p className="text-[#4A4339] leading-relaxed italic">
          "I had the pleasure of working closely with Malav during his time as a Marketing
          Strategist at The Creative Roots... he's a rare blend of strategic thinker and
          on-ground executor. Malav will be an asset to any team looking for someone who's
          adaptable, committed, and genuinely collaborative."
        </p>
        <p className="text-sm text-[#6E6255] mt-3">
          Jigar Thakar, Founder at The Creative Roots — managed Malav directly
        </p>
      </section>

      <section className="py-6 border-t border-[#E4DCCC]">
        <p className="text-sm text-[#6E6255] leading-relaxed">
          Currently on F-1 status, enrolled full-time in the MBA program at Hofstra University
          (expected December 2026), and eligible for STEM OPT. Based in New York.
        </p>
      </section>

      <div className="mt-8">
        <Link to="/resume" className="text-sm text-[#B3452A] hover:underline">
          See the full career timeline →
        </Link>
      </div>
    </div>
  );
}
