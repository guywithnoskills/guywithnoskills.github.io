import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/profile.webp';
import pixelfoxLogo from 'figma:asset/c43cf05a710c189a3942d6e9d546839c52216c3c.png';
import energyMissionLogo from 'figma:asset/5b9b71543399cf1011dd8138f18e9c76a8ec3219.png';
import jakes58Logo from '../../assets/client-jakes58.webp';
import joviaLogo from '../../assets/client-jovia.webp';
import vaughnLogo from '../../assets/client-vaughn.webp';
import dfvLogo from '../../assets/client-dfv.webp';
import egcLogo from '../../assets/client-egc.webp';
import molloyLogo from '../../assets/client-molloy.webp';

const skillGroups = [
  { label: 'Strategy & Insights', items: ['Brand Strategy', 'Integrated Marketing', 'Consumer Insights', 'Audience Segmentation', 'Competitive Intelligence', 'Social Listening', 'Go-to-Market Strategy'] },
  { label: 'Channels & Activation', items: ['Social Media', 'Influencer Marketing', 'Content Strategy', 'Community Management', 'Paid Social', 'Email Marketing', 'Public Relations'] },
  { label: 'Analytics & Platforms', items: ['GA4', 'MRI-Simmons', 'MediaRadar 360', 'Brandwatch', 'HubSpot', 'Meta Ads Manager', 'LinkedIn Ads', 'Mailchimp'] },
];

const brands = [
  { name: 'The EGC Group', logo: egcLogo },
  { name: 'Jovia Financial Credit Union', logo: joviaLogo },
  { name: 'Molloy University', logo: molloyLogo },
  { name: "Jake's 58 Casino Hotel", logo: jakes58Logo },
  { name: 'Vaughn College', logo: vaughnLogo },
  { name: 'Designs for Vision', logo: dfvLogo },
  { name: 'Dyson', logo: null },
  { name: 'Pixelfox', logo: pixelfoxLogo },
  { name: 'Energy Mission Machineries', logo: energyMissionLogo },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
        <img src={profileImage} alt="Malav Akhani" className="w-28 h-28 rounded-full object-cover flex-shrink-0 ring-2 ring-[#1DB954]/40" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">About</h1>
          <p className="text-[#B3B3B3] leading-relaxed">
            I'm an MBA Marketing candidate at Hofstra University, graduating December 2026, with
            5+ years of marketing experience spanning U.S. agency and India-based roles. I build
            brand, social, influencer, and integrated campaigns grounded in consumer insight and
            competitive intelligence. I've supported brands across financial services, higher
            education, entertainment, retail, and consumer products.
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm text-[#1DB954] font-medium mb-2">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-sm px-3 py-1.5 rounded-full border border-[#1DB954]/30 text-[#B3B3B3]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Brands I've Worked With</h2>
        <div className="flex flex-wrap items-center gap-4">
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
      </section>

      <section className="mb-12 border-l-2 border-[#1DB954]/40 pl-5">
        <p className="text-[#B3B3B3] leading-relaxed italic">
          "I had the pleasure of working closely with Malav during his time as a Marketing
          Strategist at The Creative Roots. He's a rare blend of strategic thinker and
          on-ground executor. Malav will be an asset to any team looking for someone who's
          adaptable, committed, and genuinely collaborative."
        </p>
        <p className="text-sm text-[#B3B3B3]/70 mt-3">
          Jigar Thakar, Founder at The Creative Roots, managed Malav directly
        </p>
      </section>

      <section className="py-6 border-t border-[#282828]">
        <p className="text-sm text-[#B3B3B3] leading-relaxed">
          Currently on F-1 status, enrolled full-time in the MBA program at Hofstra University
          (expected December 2026), and eligible for STEM OPT. Based in New York.
        </p>
      </section>

      <div className="mt-8">
        <Link to="/resume" className="text-sm text-[#1DB954] hover:underline">
          See the full career timeline →
        </Link>
      </div>
    </div>
  );
}
