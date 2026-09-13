import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Linkedin } from 'lucide-react';

const posts = [
  {
    title: 'The Psychology Behind Consumer Decision-Making',
    description: 'How consumer psychology shapes purchasing decisions — the behavioral triggers and emotional drivers brands lean on.',
    date: 'Nov 2024',
    category: 'Consumer Psychology',
    linkedinUrl: 'https://www.linkedin.com/posts/malavakhani6_marketing-brandstrategy-consumerbehavior-activity-7292346367811715072-uJbg',
  },
  {
    title: 'Trending Models Challenge: Social Media Marketing Insights',
    description: 'How brands can authentically participate in viral moments without looking forced.',
    date: 'Dec 2024',
    category: 'Social Media',
    linkedinUrl: 'https://www.linkedin.com/posts/malavakhani6_modelchallenge-trending-socialmedia-activity-7351320136756137985-cIWe',
  },
  {
    title: 'Studio Ghibli Meets ChatGPT: Creative Marketing Fusion',
    description: 'Where storytelling tradition meets AI-powered creativity — blending nostalgia with innovation.',
    date: 'Nov 2024',
    category: 'Creative Strategy',
    linkedinUrl: 'https://www.linkedin.com/posts/malavakhani6_studioghibli-chatgpt-marketing-activity-7321269160448000000-3zi8',
  },
  {
    title: "Diageo's Marketing Excellence: Brand Strategy Decoded",
    description: 'A case study on how Diageo maintains premium positioning across diverse markets.',
    date: 'Nov 2024',
    category: 'Brand Strategy',
    linkedinUrl: 'https://www.linkedin.com/posts/malavakhani6_marketing-branding-diageo-activity-7303523280374632449-hryl',
  },
  {
    title: 'Luxury Brands Evolution: Adapting to Modern Markets',
    description: 'How luxury brands evolve their strategy while protecting exclusivity.',
    date: 'Oct 2024',
    category: 'Luxury Marketing',
    linkedinUrl: 'https://www.linkedin.com/posts/malavakhani6_luxury-brands-are-evolving-heres-how-activity-7299867342212104192-uBvu',
  },
  {
    title: 'Marketing Insights from Hofstra University',
    description: 'Key learnings from my MBA journey, connecting academic theory to real campaigns.',
    date: 'Oct 2024',
    category: 'Education',
    linkedinUrl: 'https://www.linkedin.com/posts/malavakhani6_marketing-hofstrauniversity-activity-7288314560074129427-8DhH',
  },
];

export default function BlogsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h1 className="font-serif text-3xl md:text-4xl text-[#211D18] mb-3">Case Studies & Notes</h1>
      <p className="text-[#6E6255] mb-10 max-w-xl">
        Short write-ups on campaigns, consumer psychology, and marketing strategy — originally
        posted on LinkedIn.
      </p>

      <div className="divide-y divide-[#E4DCCC]">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 py-6 hover:bg-white/50 -mx-2 px-2 rounded-md transition-colors"
          >
            <div>
              <p className="text-xs text-[#B3452A] mb-1">{post.category} · {post.date}</p>
              <h3 className="font-serif text-lg text-[#211D18] group-hover:text-[#B3452A] transition-colors mb-1">
                {post.title}
              </h3>
              <p className="text-sm text-[#6E6255] leading-relaxed">{post.description}</p>
            </div>
            <ExternalLink size={16} className="text-[#6E6255] flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[#E4DCCC] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#6E6255]">Want to talk about any of this?</p>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/malavakhani6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#211D18] text-[#211D18] rounded-full text-sm hover:bg-[#211D18] hover:text-[#F7F3EC] transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-[#211D18] text-[#F7F3EC] rounded-full text-sm hover:bg-[#3A3229] transition-colors"
          >
            Send a message
          </Link>
        </div>
      </div>
    </div>
  );
}
