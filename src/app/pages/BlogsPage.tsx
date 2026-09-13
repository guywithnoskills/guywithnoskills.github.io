import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PenTool, ExternalLink, Calendar, Eye, ThumbsUp, Linkedin } from 'lucide-react';

export default function BlogsPage() {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "The Psychology Behind Consumer Decision-Making",
      description: "Deep dive into understanding how consumer psychology influences purchasing decisions. Exploring behavioral triggers and emotional drivers that successful brands leverage.",
      date: "2024-11-28",
      category: "Consumer Psychology",
      readTime: "5 min read",
      views: "2.8k",
      likes: "210",
      linkedinUrl: "https://www.linkedin.com/posts/malavakhani6_marketing-brandstrategy-consumerbehavior-activity-7292346367811715072-uJbg?utm_source=share&utm_medium=member_desktop&rcm=ACoAACuluHkBghX47G1zc5xR23PZmex3jLMM-ZA",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Trending Models Challenge: Social Media Marketing Insights",
      description: "Analysis of viral social media trends and how brands can authentically participate in cultural moments without appearing forced or inauthentic.",
      date: "2024-12-24",
      category: "Social Media",
      readTime: "4 min read",
      views: "3.2k",
      likes: "185",
      linkedinUrl: "https://www.linkedin.com/posts/malavakhani6_modelchallenge-trending-socialmedia-activity-7351320136756137985-cIWe?utm_source=share&utm_medium=member_desktop&rcm=ACoAACuluHkBghX47G1zc5xR23PZmex3jLMM-ZA",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Studio Ghibli Meets ChatGPT: Creative Marketing Fusion",
      description: "Exploring the intersection of beloved storytelling traditions and AI-powered creativity. How brands can blend nostalgia with innovation in their marketing approach.",
      date: "2024-11-28",
      category: "Creative Strategy",
      readTime: "6 min read",
      views: "2.1k",
      likes: "156",
      linkedinUrl: "https://www.linkedin.com/posts/malavakhani6_studioghibli-chatgpt-marketing-activity-7321269160448000000-3zi8?utm_source=share&utm_medium=member_desktop&rcm=ACoAACuluHkBghX47G1zc5xR23PZmex3jLMM-ZA",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Diageo's Marketing Excellence: Brand Strategy Decoded",
      description: "Case study analysis of Diageo's sophisticated marketing strategies and how they maintain premium positioning across diverse markets and consumer segments.",
      date: "2024-11-02",
      category: "Brand Strategy",
      readTime: "7 min read",
      views: "1.9k",
      likes: "142",
      linkedinUrl: "https://www.linkedin.com/posts/malavakhani6_marketing-branding-diageo-activity-7303523280374632449-hryl?utm_source=share&utm_medium=member_desktop&rcm=ACoAACuluHkBghX47G1zc5xR23PZmex3jLMM-ZA",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Luxury Brands Evolution: Adapting to Modern Markets",
      description: "How luxury brands are evolving their strategies to remain relevant in changing consumer landscapes while maintaining their premium appeal and exclusivity.",
      date: "2024-10-20",
      category: "Luxury Marketing",
      readTime: "8 min read",
      views: "2.5k",
      likes: "189",
      linkedinUrl: "https://www.linkedin.com/posts/malavakhani6_luxury-brands-are-evolving-heres-how-activity-7299867342212104192-uBvu?utm_source=share&utm_medium=member_desktop&rcm=ACoAACuluHkBghX47G1zc5xR23PZmex3jLMM-ZA",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Marketing Insights from Hofstra University",
      description: "Sharing key learnings and insights from my MBA Marketing journey at Hofstra University, blending academic theories with real-world marketing applications.",
      date: "2024-10-07",
      category: "Education",
      readTime: "5 min read",
      views: "1.7k",
      likes: "98",
      linkedinUrl: "https://www.linkedin.com/posts/malavakhani6_marketing-hofstrauniversity-activity-7288314560074129427-8DhH?utm_source=share&utm_medium=member_desktop&rcm=ACoAACuluHkBghX47G1zc5xR23PZmex3jLMM-ZA",
      thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const theme = {
    bg: 'bg-green-gradient',
    cardBg: 'bg-[#1A2A1A]',
    accent: '#1DB954',
    accentHover: '#1ED760'
  };

  const featuredBlog = blogs.find(blog => blog.featured) || blogs[0];
  const otherBlogs = blogs.filter(blog => !blog.featured);

  return (
    <div className={`min-h-[calc(100vh-60px)] ${theme.bg}`}>
      {/* Header */}
      <div className="bg-[#121212] border-b border-[#282828] px-4 md:px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate('/about')}
          className="p-2 rounded-full bg-[#090909] text-white hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-110"
        >
          <ArrowLeft size={16} />
        </button>
        <div className="flex items-center gap-3">
          <PenTool className="text-[#1DB954]" size={24} />
          <h1 className="text-xl md:text-2xl font-bold text-white">Blogs & Case Studies</h1>
        </div>
      </div>

      <div className="p-4 md:p-8">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Marketing Insights & Case Studies</h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            Sharing insights from real campaigns, consumer psychology, and strategic marketing approaches. All insights from my LinkedIn posts and industry experience.
          </p>
        </div>

        {/* Featured Article */}
        <div className={`${theme.cardBg} rounded-xl overflow-hidden mb-8 md:mb-12 card-glow-green`}>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img 
                src={featuredBlog.thumbnail} 
                alt={featuredBlog.title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: theme.accent }}
                >
                  Featured
                </span>
                <span className="text-[#B3B3B3] text-sm">{featuredBlog.category}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-[#1DB954] transition-colors duration-300">
                {featuredBlog.title}
              </h3>
              
              <p className="text-[#B3B3B3] mb-6 text-lg leading-relaxed">
                {featuredBlog.description}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4 text-[#B3B3B3] text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{formatDate(featuredBlog.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>{featuredBlog.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp size={16} />
                    <span>{featuredBlog.likes}</span>
                  </div>
                </div>
                <span className="text-[#B3B3B3] text-sm">{featuredBlog.readTime}</span>
              </div>
              
              <button
                onClick={() => window.open(featuredBlog.linkedinUrl, '_blank')}
                className="w-full bg-[#0077b5] hover:bg-[#0088cc] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Linkedin size={16} />
                Read on LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">More Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherBlogs.map((blog, index) => (
              <div
                key={blog.id}
                className={`${theme.cardBg} rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 group card-glow-green`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Article Thumbnail */}
                <div className="relative overflow-hidden">
                  <img 
                    src={blog.thumbnail} 
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-2 py-1 rounded text-xs font-medium text-white"
                      style={{ backgroundColor: theme.accent }}
                    >
                      {blog.category}
                    </span>
                  </div>
                  
                  {/* LinkedIn Link Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => window.open(blog.linkedinUrl, '_blank')}
                      className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Article Details */}
                <div className="p-4 md:p-6">
                  <h4 className="text-white font-bold mb-3 group-hover:text-[#1DB954] transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h4>
                  
                  <p className="text-[#B3B3B3] text-sm mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-[#B3B3B3] text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{formatDate(blog.date)}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 text-[#B3B3B3] text-xs">
                      <div className="flex items-center gap-1">
                        <Eye size={12} />
                        <span>{blog.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp size={12} />
                        <span>{blog.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => window.open(blog.linkedinUrl, '_blank')}
                    className="w-full bg-[#0077b5]/10 hover:bg-[#0077b5]/20 border border-[#0077b5]/30 text-[#0077b5] font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Linkedin size={16} />
                    Read on LinkedIn
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Writing Stats */}
        <div className={`mt-12 md:mt-16 ${theme.cardBg} rounded-xl p-6 md:p-8 max-w-4xl mx-auto`}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Content Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#1DB954] mb-2">14k+</div>
              <div className="text-[#B3B3B3]">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#1DB954] mb-2">980+</div>
              <div className="text-[#B3B3B3]">Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#1DB954] mb-2">6</div>
              <div className="text-[#B3B3B3]">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#1DB954] mb-2">25+</div>
              <div className="text-[#B3B3B3]">Brand Analyses</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Let's Discuss Marketing</h3>
          <p className="text-[#B3B3B3] mb-6">
            Have questions about any of these insights or want to discuss marketing strategies? I'd love to connect and share more thoughts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://www.linkedin.com/in/malavakhani6/', '_blank')}
              className="bg-[#0077b5] hover:bg-[#0088cc] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}