import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { 
  Search, 
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  ExternalLink,
  FileText,
  Briefcase,
  Award,
  Music,
  BookOpen,
  PenTool,
  Mail,
  ArrowLeft,
  MapPin,
  Calendar,
  Target,
  Linkedin,
  User,
  FolderOpen,
  PlayCircle,
  Building2,
  Star,
  Quote,
  Images,
  GraduationCap,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useMusic } from "../components/MusicContext";
import SearchBar from "../components/SearchBar";
import profileImage from "figma:asset/640dd64deed2257c01460c91b4e724291854acc0.png";
import pixelfoxLogo from "figma:asset/c43cf05a710c189a3942d6e9d546839c52216c3c.png";
const creativeRootsLogo = "";
import phoenixMillsLogo from "figma:asset/b99caa44dc87ef7901e8c23bce701518f14df6ff.png";
import houseOfHiranandaniLogo from "figma:asset/dba27f58310e1259b05805d98beda4da7e845b60.png";
const dysonLogo = "";
import energyMissionLogo from "figma:asset/5b9b71543399cf1011dd8138f18e9c76a8ec3219.png";
import amazonPrimeLogo from "figma:asset/00d3e2ec7a983bfe7d4973b47f787f6286416e66.png";
import godrejLogo from "figma:asset/b9392f9a019a1070f0fa70ddbead601f0e6ae455.png";

export default function CVPage() {
  const [activeSection, setActiveSection] = useState("");
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [educationExpanded, setEducationExpanded] = useState(false);
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "recruiter";
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { isPlaying, togglePlayPause, nextTrack } = useMusic();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation effect for buttons
  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle section parameter from URL (for search navigation)
  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      // Determine parent tab for the section
      const getParentTab = (sectionName: string): string => {
        if (sectionName.includes('education')) {
          return 'experience';
        }
        if (sectionName.includes('-')) {
          return sectionName.split('-')[0];
        }
        return sectionName;
      };

      const parentTab = getParentTab(section);
      
      // Open the parent tab first
      setActiveSection(parentTab);
      
      // If it's an education section, expand education first
      if (section.includes("education")) {
        setEducationExpanded(true);
      }
      
      // Scroll to the section after a delay to ensure content is rendered
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, section.includes("education") ? 600 : 300); // Longer delay for education to allow expansion animation
    }
  }, [searchParams]);

  // Enhanced search navigation handler
  useEffect(() => {
    const handleOpenTabAndScroll = (event: CustomEvent) => {
      const { section, parentTab, isEducation } = event.detail;
      
      // First, ensure the parent tab is open
      setActiveSection(parentTab);
      
      // If it's an education section, expand education
      if (isEducation) {
        setEducationExpanded(true);
      }
      
      // Scroll to the target section with appropriate delay
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, isEducation ? 600 : 300); // Longer delay for education sections
    };

    // Add event listener for custom tab opening event
    window.addEventListener('openTabAndScroll', handleOpenTabAndScroll as EventListener);
    
    return () => {
      window.removeEventListener('openTabAndScroll', handleOpenTabAndScroll as EventListener);
    };
  }, []);

  // Scroll to content when activeSection changes (for mobile)
  useEffect(() => {
    if (activeSection && contentRef.current) {
      // Small delay to allow content to render
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }, 100);
    }
  }, [activeSection]);

  const skills = [
    "Social Media Strategy", "Content Creation", "Community Management", "Social Media Marketing", "Content Strategy", "Paid Social Advertising", 
    "Influencer Marketing", "Social Media Analytics", "Engagement Strategy", "Editorial Calendars", "Social Listening", "Campaign Management", 
    "Brand Strategy", "Brand Positioning", "Brand Marketing", "Brand Management", "Market Research", "Social Media", "Consumer Insights", 
    "Competitive Analysis", "Project Management", "Budget Management", "Creative Development", "Cross-functional Collaboration"
  ];

  const experiences = [
    {
      title: "Director of Marketing",
      company: "Zarb Graduate Business Association",
      period: "May 2025 – Present",
      achievements: [
        "Championed marketing campaigns for ZGBA events, increasing attendance by 20% & enhancing brand visibility via targeted social media ads",
        "Boosted monthly user engagement by 10% by distributing promotional content across Twitter, Facebook, Instagram & LinkedIn; Facebook drove highest engagement"
      ]
    },
    {
      title: "Brand Strategist",
      company: "The Creative Roots",
      period: "Dec 2023 – Jan 2025",
      achievements: [
        "Drove go-to-market campaigns for 100+ brand projects (Godrej, Hindustan Unilever, Government of Orissa), achieving over 20% average ROI growth",
        "Achieved 25% follower growth & 40% engagement increase for Godrej Soaps by implementing integrated social media strategies (Instagram, YouTube, LinkedIn, Twitter)",
        "Conceptualized Zydus's Logo & brand refresh using Adobe Creative Suite & Canva, implementing color theory to elevate brand recognition & market presence",
        "Transformed marketing campaigns with AI-driven insights & conversion optimization, enhancing campaign efficiency by 30% & heightening brand visibility",
        "Increased brand recognition & customer retention by 20% through directing rebranding initiatives, managing photoshoots & design projects"
      ]
    },
    {
      title: "Account Manager & Strategist",
      company: "PixelFox",
      period: "Nov 2022 – Dec 2023",
      achievements: [
        "Achieved 21% follower growth & 66% reach expansion managing social media & influencer partnerships for Palladium Ahmedabad & Phoenix Citadel",
        "Boosted brand-focused content creation & 90% in media relations & influencer campaigns for Daiso India, Netflix India, Dyson India & Conrad Hilton",
        "Developed content calendars using Hootsuite & Meta Business Suite, increasing engagement by 10%",
        "Initiated referral program campaigns (promotions, bundles, BOGO) with targeted email & survey optimizations, driving a 10% sales uplift",
        "Enhanced client retention & satisfaction by managing relationships; awarded \"Best Use of Instagram & Social Media\" by Jio Digies 2023"
      ]
    },
    {
      title: "Junior Marketing Manager",
      company: "Energy Mission Machineries India Ltd",
      period: "Feb 2021 – Jun 2022",
      achievements: [
        "Led multi-channel marketing campaigns for hydraulic shearing & CNC press bending machines, optimizing via Google Analytics, Meta Manager & SEO techniques, resulting in a 30% increase in leads",
        "Coordinated SEO-driven marketing collateral & website visuals using Google Analytics & SEMrush, increasing web traffic by 30%",
        "Executed SEM, social media, website & email campaigns, driving a 20% rise in customer acquisition"
      ]
    }
  ];

  const education = [
    {
      id: "mba",
      degree: "Master of Business Administration (MBA) in Marketing",
      institution: "Hofstra University, Frank G. Zarb School of Business",
      location: "Hempstead, NY",
      period: "Dec 2026",
      gpa: "3.6",
      anchor: "experience-education-mba"
    },
    {
      id: "mechanical",
      degree: "Bachelor of Technology (B.Tech) in Mechanical Engineering",
      institution: "Gujarat Technological University",
      location: "Ahmedabad, GJ",
      period: "June 2023",
      gpa: null,
      anchor: "experience-education-mechanical"
    }
  ];

  const projects = [
    {
      id: "hoh-cyclothon",
      title: "HOH Cyclothon Campaign",
      description: "Led end-to-end creative strategy from ideation to execution, focusing on high-impact visibility and engagement. Developed facade assets and social media creatives aligned with the campaign's energetic spirit.",
      details: "Strategically defined target audience (fitness enthusiasts, families, socially-conscious urban youth) and crafted inclusive, inspiring messaging. Used vibrant, positive tonality with bold typography and dynamic imagery.",
      videoUrl: "https://www.youtube.com/watch?si=8Cr60yOeDgVlios4&v=cNWMhQiyR4o&feature=youtu.be",
      category: "Campaign Strategy"
    },
    {
      id: "dyson-campaign",
      title: "Dyson India Localization",
      description: "Collaborated with Dyson's global team to localize a high-impact campaign for the Indian market. Adapted brand messaging and visual storytelling to resonate with Indian audiences.",
      details: "Played key role from brainstorming to execution, ensuring campaign stayed true to Dyson's global standards while capturing local attention through strategic positioning and culturally relevant communication.",
      videoUrl: "https://www.youtube.com/watch?v=EdZYyoqlktg",
      category: "Global Localization"
    },
    {
      id: "phoenix-gift-card",
      title: "Rakshabandhan x Phoenix Gift Card",
      description: "Celebrated sibling bonds through market research and emotional insights. Positioned PGC as the perfect gifting solution with engaging storytelling and targeted promotions.",
      details: "Campaign generated ₹8L+ in revenue through emotional storytelling that blended sentiment with versatility, using engaging visuals and strategic promotional hooks.",
      videoUrl: "https://www.youtube.com/watch?si=JUayX4Kpm8Uf1iOT&v=TJpY0mozxlc&feature=youtu.be",
      category: "Revenue Generation"
    }
  ];

  // Updated companies array with new high-quality logos  
  const brands = [
    { name: "Amazon Prime Video", logo: amazonPrimeLogo, textLogo: "APV" },
    { name: "Phoenix Mills", logo: phoenixMillsLogo, textLogo: "PHX" },
    { name: "Godrej", logo: godrejLogo, textLogo: "GDJ" },
    { name: "The Creative Roots", logo: creativeRootsLogo, textLogo: "TCR" },
    { name: "Pixelfox", logo: pixelfoxLogo, textLogo: "PXF" },
    { name: "Energy Mission Machineries", logo: energyMissionLogo, textLogo: "EMM" },
    { name: "Dyson", logo: dysonLogo, textLogo: "DYS" },
    { name: "House of Hiranandani", logo: houseOfHiranandaniLogo, textLogo: "HOH" }
  ];

  const recommendations = [
    {
      name: "Jigar Thakar",
      title: "Founder | Creative Producer | Scaling Brands with AI, CGI & Storytelling",
      company: "The Creative Roots",
      relationship: "1st degree connection - Jigar managed Malav directly",
      date: "June 26, 2025",
      content: "I had the pleasure of working closely with Malav Akhani during his time as a Marketing Strategist at The Creative Roots, and I can confidently say he's one of the most dependable, driven, and sharp professionals I've had on the team. Malav played a key role in bridging strategy and execution across our social media and content campaigns. Whether it was building out monthly marketing plans, managing on-ground shoot logistics, or coordinating between creative and client servicing teams — he approached everything with clarity, calm, and ownership. He was hands-on, proactive, and never missed a beat, even when deadlines were tight or briefs were evolving. What stood out the most was his ability to think like both a planner and a producer. He understood the \"why\" behind every campaign, brought structure to our execution process, and worked with cross-functional teams to bring ideas to life seamlessly. He's a rare blend of strategic thinker and on-ground executor. Malav will be an asset to any team looking for someone who's adaptable, committed, and genuinely collaborative. I highly recommend him and look forward to seeing where his journey takes him next.",
      avatar: "JT"
    }
  ];

  // Helper function to navigate with mode persistence
  const navigateWithMode = (path: string) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(`${path}?mode=${mode}`);
    }
  };

  // Different sections for recruiter vs stalker mode
  const recruiterSections = [
    {
      id: "experience",
      title: "Experience",
      description: "Professional journey & roles",
      icon: Briefcase,
      action: () => setActiveSection("experience")
    },
    {
      id: "projects",
      title: "Projects/Gallery",
      description: "Campaigns, posts & reels",
      icon: FolderOpen,
      action: () => setActiveSection("projects")
    },
    {
      id: "skills",
      title: "Skills",
      description: "Technical expertise & abilities",
      icon: Award,
      action: () => setActiveSection("skills")
    },
    {
      id: "brands",
      title: "Brands",
      description: "Brands I've worked with",
      icon: Building2,
      action: () => setActiveSection("brands")
    },
    {
      id: "work-permit",
      title: "Work Permit",
      description: "Legal authorization to work",
      icon: FileText,
      action: () => setActiveSection("work-permit")
    }
  ];

  const stalkerSections = [
    {
      id: "music",
      title: "Music",
      description: "Spotify playlists & tracks",
      icon: Music,
      action: () => window.open("https://open.spotify.com/user/3bjnivwzwk5lbpqjx7scbd9gw?si=b565ac786a4f4e12", "_blank")
    },
    {
      id: "reading",
      title: "Books",
      description: "Reading list & recommendations",
      icon: BookOpen,
      action: () => navigateWithMode("/books")
    },
    {
      id: "blogs",
      title: "Case Studies",
      description: "Insights & case studies",
      icon: PenTool,
      action: () => navigateWithMode("/blogs")
    },
    {
      id: "contact",
      title: "Contact Me",
      description: "Get in touch",
      icon: Mail,
      action: () => navigateWithMode("/contact")
    },
    {
      id: "brands",
      title: "Brands",
      description: "Brands I've worked with",
      icon: Building2,
      action: () => setActiveSection("brands")
    }
  ];

  const continueListening = mode === "recruiter" ? [
    {
      id: "music",
      title: "Music",
      description: "Spotify playlists & tracks",
      icon: Music,
      action: () => window.open("https://open.spotify.com/user/3bjnivwzwk5lbpqjx7scbd9gw?si=b565ac786a4f4e12", "_blank")
    },
    {
      id: "reading",
      title: "Books",
      description: "Reading list & recommendations",
      icon: BookOpen,
      action: () => navigateWithMode("/books")
    },
    {
      id: "blogs",
      title: "Case Studies",
      description: "Insights & case studies",
      icon: PenTool,
      action: () => navigateWithMode("/blogs")
    },
    {
      id: "recommendations",
      title: "Recommendations",
      description: "What colleagues say",
      icon: Star,
      action: () => setActiveSection("recommendations")
    },
    {
      id: "contact",
      title: "Contact Me",
      description: "Get in touch",
      icon: Mail,
      action: () => navigateWithMode("/contact")
    }
  ] : [
    {
      id: "work-permit",
      title: "Work Permit",
      description: "Legal authorization to work",
      icon: FileText,
      action: () => setActiveSection("work-permit")
    },
    {
      id: "skills",
      title: "Skills",
      description: "Technical expertise & abilities",
      icon: Award,
      action: () => setActiveSection("skills")
    },
    {
      id: "experience",
      title: "Experience",
      description: "Professional journey & roles",
      icon: Briefcase,
      action: () => setActiveSection("experience")
    },
    {
      id: "recommendations",
      title: "Recommendations",
      description: "What colleagues say",
      icon: Star,
      action: () => setActiveSection("recommendations")
    },
    {
      id: "contact",
      title: "Contact Me",
      description: "Get in touch",
      icon: Mail,
      action: () => navigateWithMode("/contact")
    }
  ];

  const topPicks = mode === "recruiter" ? recruiterSections : stalkerSections;

  const getThemeColors = () => {
    return mode === "recruiter" ? {
      bg: "bg-green-gradient",
      cardBg: "bg-[#1A2A1A]",
      accent: "#1DB954",
      accentHover: "#1ED760",
      gradientFrom: "from-[#1DB954]/20",
      gradientTo: "to-[#2ECC71]/10"
    } : {
      bg: "bg-gradient-to-b from-[#2A1A2A] to-[#1A1A2A]",
      cardBg: "bg-[#2A1A2A]",
      accent: "#9B59B6",
      accentHover: "#BB79D6",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-indigo-500/10"
    };
  };

  const theme = getThemeColors();

  const handleCardClick = (item: any) => {
    if (item.action) {
      item.action();
    }
  };

  const handleImageClick = () => {
    navigate("/");
  };

  const handlePlayClick = () => {
    togglePlayPause();
  };

  const handleNextTrack = () => {
    nextTrack();
  };

  const renderSectionContent = () => {
    if (!activeSection) return null;

    switch (activeSection) {
      case "work-permit":
        return (
          <div id="work-permit" className={`${theme.cardBg} rounded-xl p-6 md:p-8 animate-tabSlideIn card-glow-green`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="text-[#1DB954]" size={24} />
              Work Authorization Status
            </h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-[#B3B3B3] text-lg leading-relaxed">
                I, Malav Akhani, am currently in lawful F-1 non-immigrant status and am enrolled full-time in a Master of Business Administration in Marketing program at Hofstra University, Frank G. Zarb School of Business (expected December 2026). I maintain valid F-1 authorization and am eligible for all applicable STEM OPT benefits under U.S. immigration regulations.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#2a2a2a] rounded-lg p-4 text-center">
                  <MapPin className="text-[#1DB954] mx-auto mb-2" size={20} />
                  <div className="text-white font-medium">Location</div>
                  <div className="text-[#B3B3B3] text-sm">New York, USA</div>
                </div>
                <div className="bg-[#2a2a2a] rounded-lg p-4 text-center">
                  <Calendar className="text-[#1DB954] mx-auto mb-2" size={20} />
                  <div className="text-white font-medium">Status</div>
                  <div className="text-[#B3B3B3] text-sm">F-1 Student</div>
                </div>
                <div className="bg-[#2a2a2a] rounded-lg p-4 text-center">
                  <Target className="text-[#1DB954] mx-auto mb-2" size={20} />
                  <div className="text-white font-medium">STEM OPT</div>
                  <div className="text-[#B3B3B3] text-sm">Eligible</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "skills":
        return (
          <div id="skills" className={`${theme.cardBg} rounded-xl p-6 md:p-8 animate-tabSlideIn card-glow-green`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-[#1DB954]" size={24} />
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className={`bg-[#2a2a2a] hover:bg-[${theme.accent}] hover:text-black rounded-lg px-4 py-3 text-[#B3B3B3] hover:text-black transition-all duration-300 cursor-pointer transform hover:scale-105`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "experience":
        return (
          <div id="experience" className={`${theme.cardBg} rounded-xl p-6 md:p-8 animate-tabSlideIn card-glow-green`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="text-[#1DB954]" size={24} />
              Professional Experience
            </h3>
            
            {/* Work Experience Section */}
            <div className="space-y-6 mb-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="bg-[#2a2a2a] rounded-lg p-6 hover:bg-[#333333] transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <p className="text-[#1DB954] font-medium">{exp.company}</p>
                    <p className="text-[#B3B3B3] text-sm">{exp.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-[#B3B3B3] flex items-start gap-2">
                        <span className="text-[#1DB954] mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div id="experience-education" className="border-t border-[#2a2a2a] pt-6">
              <button
                onClick={() => setEducationExpanded(!educationExpanded)}
                className="w-full flex items-center justify-between bg-[#2a2a2a] hover:bg-[#333333] rounded-lg p-4 transition-all duration-300 mb-4"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-[#1DB954]" size={20} />
                  <h4 className="text-xl font-bold text-white">Education</h4>
                </div>
                {educationExpanded ? (
                  <ChevronUp className="text-[#B3B3B3]" size={20} />
                ) : (
                  <ChevronDown className="text-[#B3B3B3]" size={20} />
                )}
              </button>
              
              {educationExpanded && (
                <div className="space-y-4 animate-expandIn">
                  {education.map((edu, index) => (
                    <div
                      key={edu.id}
                      id={edu.anchor}
                      className="bg-[#2a2a2a] rounded-lg p-6 hover:bg-[#333333] transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="mb-3">
                        <h5 className="text-lg font-bold text-white mb-2">{edu.degree}</h5>
                        <p className="text-[#1DB954] font-medium">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-[#B3B3B3] text-sm mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                          {edu.gpa && (
                            <span className="flex items-center gap-1">
                              <Award size={14} />
                              GPA: {edu.gpa}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case "projects":
        return (
          <div id="projects" className={`${theme.cardBg} rounded-xl p-6 md:p-8 animate-tabSlideIn card-glow-green`}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <FolderOpen className="text-[#1DB954]" size={24} />
              Projects & Gallery
            </h3>
            
            {/* Gallery Section */}
            <div className="mb-8 pb-8 border-b border-[#2a2a2a]">
              <div className="flex items-center gap-3 mb-6">
                <Images className="text-[#1DB954]" size={20} />
                <h4 className="text-xl font-bold text-white">Gallery</h4>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-6 hover:bg-[#333333] transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-white group-hover:text-[#1DB954] transition-colors duration-300 mb-3">
                      Social Media Content Archive
                    </h5>
                    <p className="text-[#B3B3B3] mb-4 leading-relaxed">
                      A comprehensive collection of my creative work including social media posts, reels, stories, and campaigns. 
                      This gallery showcases my content creation journey, visual storytelling abilities, and brand communication 
                      strategies across various platforms and projects.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded-full text-xs font-medium">
                        Instagram Posts
                      </span>
                      <span className="px-3 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded-full text-xs font-medium">
                        Reels
                      </span>
                      <span className="px-3 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded-full text-xs font-medium">
                        Stories
                      </span>
                      <span className="px-3 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded-full text-xs font-medium">
                        Campaign Assets
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => window.open("https://drive.google.com/drive/folders/1A30_aYk-DgjiBnytV77CJ3AD0SJbE8z2?usp=sharing", "_blank")}
                    className="ml-4 bg-[#1DB954] hover:bg-[#1ed760] text-black p-3 rounded-full transition-all duration-300 hover:scale-110 btn-glow-green"
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
                <button
                  onClick={() => window.open("https://drive.google.com/drive/folders/1A30_aYk-DgjiBnytV77CJ3AD0SJbE8z2?usp=sharing", "_blank")}
                  className="w-full bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/30 text-[#1DB954] font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  View Complete Gallery
                </button>
              </div>
            </div>

            {/* Key Projects Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <PlayCircle className="text-[#1DB954]" size={20} />
                <h4 className="text-xl font-bold text-white">Key Projects</h4>
              </div>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-[#2a2a2a] rounded-lg p-6 hover:bg-[#333333] transition-all duration-300 group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h5 className="text-lg font-bold text-white group-hover:text-[#1DB954] transition-colors duration-300">
                            {project.title}
                          </h5>
                          <span className="px-2 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-[#B3B3B3] mb-3 leading-relaxed">
                          {project.description}
                        </p>
                        <p className="text-[#B3B3B3] text-sm leading-relaxed">
                          {project.details}
                        </p>
                      </div>
                      <button
                        onClick={() => window.open(project.videoUrl, "_blank")}
                        className="ml-4 bg-[#1DB954] hover:bg-[#1ed760] text-black p-3 rounded-full transition-all duration-300 hover:scale-110 btn-glow-green"
                      >
                        <ExternalLink size={20} />
                      </button>
                    </div>
                    <button
                      onClick={() => window.open(project.videoUrl, "_blank")}
                      className="w-full bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/30 text-[#1DB954] font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Watch Project Video
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "brands":
        return (
          <div id="brands" className={`${theme.cardBg} rounded-xl p-6 md:p-8 animate-tabSlideIn card-glow-green`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Building2 className="text-[#1DB954]" size={24} />
              Brands I've Worked With
            </h3>
            <div className="logo-banner">
              <div className="logo-track-infinite">
                {[...brands, ...brands].map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="logo-item-capsule group"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-12 h-12 md:w-16 md:h-16 bg-[#1DB954] rounded-full flex items-center justify-center">
                              <span class="text-black font-bold text-sm md:text-base">${brand.textLogo}</span>
                            </div>`;
                          }
                        }}
                      />
                    </div>
                    <span className="text-white text-xs font-medium text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "recommendations":
        return (
          <div id="recommendations" className={`${theme.cardBg} rounded-xl p-6 md:p-8 animate-tabSlideIn card-glow-green`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Star className="text-[#1DB954]" size={24} />
              Professional Recommendations
            </h3>
            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <div
                  key={rec.name}
                  className="bg-[#2a2a2a] rounded-lg p-6 hover:bg-[#333333] transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                      {rec.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white">{rec.name}</h4>
                      <p className="text-[#1DB954] font-medium text-sm">{rec.title}</p>
                      <p className="text-[#B3B3B3] text-sm">{rec.company}</p>
                      <p className="text-[#B3B3B3] text-xs mt-1">{rec.relationship}</p>
                      <p className="text-[#B3B3B3] text-xs">{rec.date}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="text-[#1DB954] mb-3" size={20} />
                    <p className="text-[#B3B3B3] leading-relaxed pl-6">
                      {rec.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-[#2A3A2A]">
        <SearchBar />
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-6 pb-24">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div 
              onClick={handleImageClick}
              className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl ring-4 ring-[#1DB954]/20"
            >
              <img 
                src={profileImage} 
                alt="Malav Akhani Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4 md:mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">
                Malav Akhani
              </h1>
              <p className="text-[#B3B3B3] text-lg md:text-xl mb-4">
                Brand Strategist | MBA Marketing Student at Hofstra University
              </p>
              <p className="text-[#B3B3B3] text-sm md:text-base leading-relaxed max-w-2xl">
                Passionate about transforming brand narratives through strategic marketing and creative storytelling. 
                Currently pursuing advanced marketing education while driving impactful campaigns for leading brands.
              </p>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start ${buttonsVisible ? 'animate-slideInFromBottom' : 'opacity-0'}`}>
              <button 
                onClick={() => navigate("/")}
                className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 animate-buttonFlashGreen text-sm"
                style={{ animationDelay: "0s" }}
              >
                <ArrowLeft size={14} />
                Back to Home
              </button>
              <button 
                onClick={() => window.open("https://www.linkedin.com/in/malavakhani6/", "_blank")}
                className="bg-[#0077B5] hover:bg-[#005885] text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 animate-buttonFlashGreen text-sm"
                style={{ animationDelay: "0.1s" }}
              >
                <Linkedin size={14} />
                LinkedIn
              </button>
              <button 
                onClick={() => window.open("https://coffee-celestyna-14.tiiny.site", "_blank")}
                className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 animate-buttonFlashGreen text-sm"
                style={{ animationDelay: "0.2s" }}
              >
                <FileText size={14} />
                Resume
              </button>
              <button 
                onClick={() => navigateWithMode("/workfolio")}
                className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 animate-buttonFlashGreen text-sm"
                style={{ animationDelay: "0.3s" }}
              >
                <User size={14} />
                Workfolio
              </button>
            </div>
          </div>
        </div>

        {/* Good Playlists for {mode} */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Good playlists for {mode}
            </h2>
            <button className="text-[#B3B3B3] hover:text-white text-sm font-medium transition-colors duration-300">
              Show all
            </button>
          </div>
          
          {/* Full Width Distributed Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
            {topPicks.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="group cursor-pointer bg-[#1A2A1A] hover:bg-[#2A3A2A] rounded-full px-4 py-4 transition-all duration-500 hover:scale-105 transform card-glow-green flex flex-col items-center gap-2 text-center min-h-[120px] justify-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} flex items-center justify-center`}>
                    <item.icon size={18} style={{ color: theme.accent }} />
                  </div>
                  
                  {/* Mobile-friendly Play Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 z-10">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-xl" style={{ backgroundColor: theme.accent }}>
                      <Play size={14} className="text-black ml-0.5" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-semibold group-hover:text-[#1DB954] transition-colors duration-300 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-[#B3B3B3] text-xs leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Content with ref for auto-scroll */}
        <div ref={contentRef}>
          {renderSectionContent()}
        </div>

        {/* Continue Listening */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Continue Listening for {mode}
            </h2>
            <button className="text-[#B3B3B3] hover:text-white text-sm font-medium transition-colors duration-300">
              Show all
            </button>
          </div>
          
          {/* Full Width Distributed Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
            {continueListening.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="group cursor-pointer bg-[#1A2A1A] hover:bg-[#2A3A2A] rounded-full px-4 py-4 transition-all duration-500 hover:scale-105 transform card-glow-green flex flex-col items-center gap-2 text-center min-h-[120px] justify-center relative"
                style={{ animationDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} flex items-center justify-center`}>
                    <item.icon size={18} style={{ color: theme.accent }} />
                  </div>
                  
                  {/* Mobile-friendly Play Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 z-10">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-xl" style={{ backgroundColor: theme.accent }}>
                      <Play size={14} className="text-black ml-0.5" />
                    </div>
                  </div>
                  
                  {/* Progress Bar for Continue Listening */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-[#4a4a4a] rounded-full">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${Math.random() * 70 + 10}%`,
                        backgroundColor: theme.accent
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-semibold group-hover:text-[#1DB954] transition-colors duration-300 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-[#B3B3B3] text-xs leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Player */}
      <div className="bg-[#1A2A1A] border-t border-[#2A3A2A] px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div 
            onClick={handleImageClick}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={profileImage} 
              alt="Malav Akhani Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-medium">Professional Portfolio</div>
            <div className="text-[#B3B3B3] text-sm">Brand Strategist | MBA Marketing Student</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[#B3B3B3] hover:text-white transition-colors duration-300">
            <SkipBack size={20} />
          </button>
          <button 
            onClick={handlePlayClick}
            className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            {isPlaying ? <Pause size={16} className="text-black md:w-5 md:h-5" /> : <Play size={16} className="text-black ml-0.5 md:w-5 md:h-5" />}
          </button>
          <button 
            onClick={handleNextTrack}
            className="text-[#B3B3B3] hover:text-white transition-colors duration-300"
          >
            <SkipForward size={20} />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Volume2 size={20} className="text-[#B3B3B3]" />
          <div className="w-20 h-1 bg-[#4a4a4a] rounded-full cursor-pointer">
            <div className="w-1/3 h-full bg-white rounded-full transition-all duration-300 hover:bg-[#1DB954]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}