import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import recruiterImage from "figma:asset/c3febfbb91de3363202ddd533dc9bbc059eea494.png";
import stalkerImage from "figma:asset/e73769efa201fa94cbd1a5578325e1219005191a.png";

export default function LandingPage() {
  const navigate = useNavigate();
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleRecruiterClick = () => {
    navigate("/cv?mode=recruiter");
  };

  const handleStalkerClick = () => {
    navigate("/cv?mode=stalker");
  };

  const stats = [
    { label: "Years Experience", value: "3+", delay: 0.2 },
    { label: "Clients Handled", value: "80+", delay: 0.4 },
    { label: "Projects Delivered", value: "100+", delay: 0.6 },
    { label: "Brands Worked With", value: "50+", delay: 0.8 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-60px)] relative overflow-hidden bg-green-gradient">
      {/* Enhanced background with green accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 via-transparent to-[#2ECC71]/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(29,185,84,0.1),transparent)] opacity-60"></div>
      
      {/* Main Content */}
      <div className="min-h-[calc(100vh-60px)] flex items-center justify-center p-6 md:p-8 pb-16">
        <motion.div 
          className="w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Spotify UI Inspiration Badge */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <motion.div 
              className="px-4 py-2 bg-[#1A2A1A]/60 border border-[#1DB954]/20 rounded-full backdrop-blur-sm"
              whileHover={{ 
                borderColor: "rgba(29, 185, 84, 0.4)",
                backgroundColor: "rgba(26, 42, 26, 0.8)"
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs text-[#1DB954]/80 font-medium tracking-wide">
                ✨ Spotify UI-inspired Design
              </p>
            </motion.div>
          </motion.div>

          {/* Header - Restored to Sleek and Prominent but Smaller */}
          <div className="text-center mb-6 md:mb-10">
            <div className="mb-4">
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight"
              >
                Malav Akhani
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-[#1DB954] font-medium mb-6"
              >
                BRAND STRATEGIST | MBA MARKETING STUDENT
              </motion.p>
              
              {/* Stats Row */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8"
                variants={containerVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center"
                    custom={index}
                  >
                    <motion.div 
                      className="text-2xl md:text-3xl font-black text-[#1DB954] mb-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: stat.delay, 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15 
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs md:text-sm text-[#B3B3B3] uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Resume, LinkedIn, and Workfolio Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                variants={containerVariants}
              >
                <motion.a
                  href="https://coffee-celestyna-14.tiiny.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 min-w-[180px] bg-[#1DB954] hover:bg-[#1ed760] text-black font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1DB954]/25"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </motion.a>

                <motion.button
                  onClick={() => navigate("/workfolio")}
                  className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 min-w-[180px] bg-transparent border-2 border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-black font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1DB954]/25"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Workfolio
                </motion.button>

                <motion.a
                  href="https://www.linkedin.com/in/malavakhani6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 min-w-[180px] bg-transparent border-2 border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-black font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1DB954]/25"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Choose Your Experience - Header for Cards */}
          <motion.div 
            className="text-center mb-4 md:mb-6"
            variants={itemVariants}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #1DB954 50%, #1ED760 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02
                }}
              >
                Choose Your Experience
              </motion.h2>
              
              {/* Gradient underline */}
              <motion.div 
                className="flex justify-center"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <div 
                  className="h-1 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, #1DB954 20%, #1ED760 50%, #1DB954 80%, transparent 100%)"
                  }}
                ></div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Character Selection - Unified with Header */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {/* Recruiter */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              onClick={handleRecruiterClick}
              className="group cursor-pointer relative"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleRecruiterClick();
                }
              }}
            >
              <div className="relative overflow-hidden rounded-3xl transition-all duration-700 card-glow-green">
                <div className="w-full h-64 md:h-80 bg-gradient-to-br from-[#1DB954]/30 to-[#2ECC71]/20 flex items-center justify-center overflow-hidden">
                  <motion.img 
                    src={recruiterImage} 
                    alt="Professional Recruiter Character"
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <motion.div 
                  className="absolute inset-0 bg-[#1DB954]/0 group-hover:bg-[#1DB954]/20"
                  initial={false}
                  whileHover={{ backgroundColor: "rgba(29, 185, 84, 0.2)" }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Fixed Play Button - Using correct CSS classes */}
                <div className="play-button-hover">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-[#1DB954]/20 rounded-full animate-ping"></div>
                    {/* Main button */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-[#1DB954] rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:bg-[#1ed760] hover:scale-110">
                      {/* Inner shadow for depth */}
                      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                      {/* Play icon with perfect centering */}
                      <svg 
                        className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5.14v13.72L19 12z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Text */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-[#1DB954] transition-colors duration-500"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Recruiter
                  </motion.h2>
                  <motion.p 
                    className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                    whileHover={{ y: -5 }}
                  >
                    Professional insights & achievements
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Stalker */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              onClick={handleStalkerClick}
              className="group cursor-pointer relative"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleStalkerClick();
                }
              }}
            >
              <div className="relative overflow-hidden rounded-3xl transition-all duration-700 card-glow-green">
                <div className="w-full h-64 md:h-80 bg-gradient-to-br from-purple-500/30 to-indigo-500/20 flex items-center justify-center overflow-hidden">
                  <motion.img 
                    src={stalkerImage} 
                    alt="Personal Explorer Character"
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <motion.div 
                  className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20"
                  initial={false}
                  whileHover={{ backgroundColor: "rgba(147, 51, 234, 0.2)" }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Fixed Play Button - Using correct CSS classes */}
                <div className="play-button-hover">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-purple-500/20 rounded-full animate-ping"></div>
                    {/* Main button */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-purple-500 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:bg-purple-400 hover:scale-110">
                      {/* Inner shadow for depth */}
                      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                      {/* Play icon with perfect centering */}
                      <svg 
                        className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5.14v13.72L19 12z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Text */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors duration-500"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Stalker
                  </motion.h2>
                  <motion.p 
                    className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                    whileHover={{ y: -5 }}
                  >
                    Personal journey & interests
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}