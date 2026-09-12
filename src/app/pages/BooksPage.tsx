import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink, Star, Calendar, User } from 'lucide-react';

export default function BooksPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'recruiter';

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      rating: 5,
      year: "2018",
      category: "Self-Help",
      amazonLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
      color: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      description: "Timeless lessons on wealth, greed, and happiness",
      rating: 5,
      year: "2020",
      category: "Finance",
      amazonLink: "https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681",
      color: "bg-gradient-to-br from-green-600 to-green-800"
    },
    {
      id: 3,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      description: "The landmark bestseller now revised and updated for the 21st century",
      rating: 4,
      year: "1937",
      category: "Business",
      amazonLink: "https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331",
      color: "bg-gradient-to-br from-purple-600 to-purple-800"
    },
    {
      id: 4,
      title: "The Lean Startup",
      author: "Eric Ries",
      description: "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
      rating: 4,
      year: "2011",
      category: "Business",
      amazonLink: "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898",
      color: "bg-gradient-to-br from-orange-600 to-orange-800"
    },
    {
      id: 5,
      title: "The Immortals of Meluha",
      author: "Amish Tripathi",
      description: "The first book in the Shiva Trilogy",
      rating: 4,
      year: "2010",
      category: "Fiction",
      amazonLink: "https://www.amazon.com/Immortals-Meluha-Shiva-Trilogy-Book/dp/9350295180",
      color: "bg-gradient-to-br from-red-600 to-red-800"
    },
    {
      id: 6,
      title: "The Secret of the Nagas",
      author: "Amish Tripathi",
      description: "The second book in the Shiva Trilogy",
      rating: 4,
      year: "2011",
      category: "Fiction",
      amazonLink: "https://www.amazon.com/Secret-Nagas-Shiva-Trilogy-Book/dp/9350295199",
      color: "bg-gradient-to-br from-indigo-600 to-indigo-800"
    },
    {
      id: 7,
      title: "The Oath of the Vayuputras",
      author: "Amish Tripathi",
      description: "The third book in the Shiva Trilogy",
      rating: 4,
      year: "2013",
      category: "Fiction",
      amazonLink: "https://www.amazon.com/Oath-Vayuputras-Shiva-Trilogy-Book/dp/9350295202",
      color: "bg-gradient-to-br from-pink-600 to-pink-800"
    },
    {
      id: 8,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      description: "A groundbreaking tour of the mind",
      rating: 5,
      year: "2011",
      category: "Psychology",
      amazonLink: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
      color: "bg-gradient-to-br from-teal-600 to-teal-800"
    },
    {
      id: 9,
      title: "The Power of Your Subconscious Mind",
      author: "Joseph Murphy",
      description: "Unlock the hidden potential of your mind",
      rating: 4,
      year: "1963",
      category: "Psychology",
      amazonLink: "https://www.amazon.com/Power-Your-Subconscious-Mind/dp/1604591706",
      color: "bg-gradient-to-br from-cyan-600 to-cyan-800"
    },
    {
      id: 10,
      title: "The Social Animal",
      author: "David Brooks",
      description: "The Hidden Sources of Love, Character, and Achievement",
      rating: 4,
      year: "2011",
      category: "Psychology",
      amazonLink: "https://www.amazon.com/Social-Animal-Sources-Character-Achievement/dp/0812979370",
      color: "bg-gradient-to-br from-emerald-600 to-emerald-800"
    }
  ];

  const handleBackClick = () => {
    navigate(`/cv?mode=${mode}`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-600"} 
      />
    ));
  };

  const getThemeColors = () => {
    return mode === 'recruiter' ? {
      bg: 'bg-green-gradient',
      cardBg: 'bg-[#1A2A1A]',
      accent: '#1DB954',
      accentHover: '#1ED760'
    } : {
      bg: 'bg-gradient-to-b from-[#2A1A2A] to-[#1A1A2A]',
      cardBg: 'bg-[#2A1A2A]',
      accent: '#9B59B6',
      accentHover: '#BB79D6'
    };
  };

  const theme = getThemeColors();

  return (
    <div className={`min-h-[calc(100vh-60px)] ${theme.bg}`}>
      {/* Header */}
      <div className="bg-[#121212] border-b border-[#282828] px-4 md:px-6 py-4 flex items-center gap-4">
        <button 
          onClick={handleBackClick}
          className="p-2 rounded-full bg-[#090909] text-white hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-110"
        >
          <ArrowLeft size={16} />
        </button>
        <div className="flex items-center gap-3">
          <BookOpen className="text-[#1DB954]" size={24} />
          <h1 className="text-xl md:text-2xl font-bold text-white">My Reading List</h1>
        </div>
      </div>

      <div className="p-4 md:p-8">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Books That Shaped My Thinking</h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            A curated collection of books that have influenced my approach to business, psychology, and life. From ancient wisdom to modern insights.
          </p>
        </div>

        {/* Books Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {books.map((book, index) => (
              <div
                key={book.id}
                className={`${theme.cardBg} rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 group card-glow-green`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Book Header with Gradient */}
                <div className={`relative ${book.color} h-32 flex items-center justify-center`}>
                  <div className="text-center p-4">
                    <BookOpen size={32} className="text-white mx-auto mb-2" />
                    <span 
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                    >
                      {book.category}
                    </span>
                  </div>
                  
                  {/* Amazon Link Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => window.open(book.amazonLink, '_blank')}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={14} className="text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Book Details */}
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {renderStars(book.rating)}
                    <span className="text-[#B3B3B3] text-xs ml-2">{book.year}</span>
                  </div>
                  
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#1DB954] transition-colors duration-300 line-clamp-2">
                    {book.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <User size={14} className="text-[#B3B3B3]" />
                    <span className="text-[#B3B3B3] text-sm">{book.author}</span>
                  </div>
                  
                  <p className="text-[#B3B3B3] text-sm mb-4 line-clamp-3">
                    {book.description}
                  </p>
                  
                  <button
                    onClick={() => window.open(book.amazonLink, '_blank')}
                    className="w-full bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/30 text-[#1DB954] font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-[#1DB954] group-hover:text-black"
                  >
                    <BookOpen size={16} />
                    View on Amazon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reading Stats */}
        <div className={`mt-12 md:mt-16 ${theme.cardBg} rounded-xl p-6 md:p-8 max-w-4xl mx-auto`}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Reading Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#1DB954] mb-2">10+</div>
              <div className="text-[#B3B3B3]">Books Read This Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#1DB954] mb-2">5</div>
              <div className="text-[#B3B3B3]">Favorite Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#1DB954] mb-2">4.6★</div>
              <div className="text-[#B3B3B3]">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Book Recommendations?</h3>
          <p className="text-[#B3B3B3] mb-6">
            I'm always looking for great books to add to my reading list. Have a recommendation? I'd love to hear it!
          </p>
          <button 
            onClick={() => navigate(`/contact?mode=${mode}`)}
            className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Share a Recommendation
          </button>
        </div>
      </div>
    </div>
  );
}