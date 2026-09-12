import { useNavigate, useLocation } from 'react-router-dom';

interface SearchResult {
  keywords: string[];
  path: string;
  title: string;
  section?: string;
  context: 'both' | 'recruiter' | 'stalker';
  description?: string;
  location: string;
}

// Define all searchable content with context awareness
export const searchableContent: SearchResult[] = [
  // Pages - Available to both modes
  { 
    keywords: ['home', 'landing', 'main', 'start', 'recruiter', 'stalker'], 
    path: '/', 
    title: 'Home Page', 
    context: 'both',
    location: 'Home'
  },
  { 
    keywords: ['cv', 'resume', 'portfolio'], 
    path: '/cv', 
    title: 'CV Page', 
    context: 'both',
    location: 'CV'
  },
  { 
    keywords: ['workfolio', 'work', 'portfolio', 'projects', 'campaigns'], 
    path: '/workfolio', 
    title: 'Workfolio', 
    context: 'both',
    location: 'Workfolio'
  },
  { 
    keywords: ['books', 'reading', 'literature', 'book recommendations'], 
    path: '/books', 
    title: 'Books', 
    context: 'both',
    location: 'Books'
  },
  { 
    keywords: ['blogs', 'case studies', 'insights', 'articles', 'writing'], 
    path: '/blogs', 
    title: 'Blogs & Case Studies', 
    context: 'both',
    location: 'Blogs'
  },
  { 
    keywords: ['contact', 'get in touch', 'email', 'reach out', 'connect'], 
    path: '/contact', 
    title: 'Contact', 
    context: 'both',
    location: 'Contact'
  },

  // Recruiter Mode Content
  { 
    keywords: ['work permit', 'f-1', 'stem opt', 'visa', 'authorization', 'work authorization'], 
    path: '/cv', 
    section: 'work-permit',
    title: 'Work Authorization', 
    context: 'recruiter',
    location: 'Recruiter > Work Authorization',
    description: 'F-1 status and work eligibility information'
  },
  { 
    keywords: ['skills', 'expertise', 'abilities', 'social media', 'brand strategy', 'marketing'], 
    path: '/cv', 
    section: 'skills',
    title: 'Skills & Expertise', 
    context: 'recruiter',
    location: 'Recruiter > Skills',
    description: 'Professional skills and competencies'
  },
  { 
    keywords: ['experience', 'work history', 'jobs', 'career', 'zarb', 'creative roots', 'pixelfox', 'energy mission'], 
    path: '/cv', 
    section: 'experience',
    title: 'Professional Experience', 
    context: 'recruiter',
    location: 'Recruiter > Experience',
    description: 'Work history and achievements'
  },
  { 
    keywords: ['education', 'degree', 'academics', 'qualifications', 'coursework', 'studies'], 
    path: '/cv', 
    section: 'experience-education',
    title: 'Education', 
    context: 'recruiter',
    location: 'Recruiter > Experience > Education',
    description: 'Academic qualifications and degrees'
  },
  { 
    keywords: ['mba', 'master\'s', 'business', 'marketing mba', 'hofstra', 'zarb', 'graduate', 'gpa', '2026', 'business school'], 
    path: '/cv', 
    section: 'experience-education-mba',
    title: 'MBA in Marketing', 
    context: 'recruiter',
    location: 'Recruiter > Experience > Education > MBA',
    description: 'Master of Business Administration at Hofstra University'
  },
  { 
    keywords: ['mechanical engineering', 'bachelor\'s', 'b.tech', 'undergrad', 'engineering', '2023', 'gujarat technological university', 'gtustudent'], 
    path: '/cv', 
    section: 'experience-education-mechanical',
    title: 'Mechanical Engineering', 
    context: 'recruiter',
    location: 'Recruiter > Experience > Education > Mechanical',
    description: 'Bachelor of Technology in Mechanical Engineering'
  },
  { 
    keywords: ['projects', 'campaigns', 'hoh cyclothon', 'dyson', 'phoenix gift card', 'gallery'], 
    path: '/cv', 
    section: 'projects',
    title: 'Projects & Gallery', 
    context: 'recruiter',
    location: 'Recruiter > Projects',
    description: 'Key projects and creative work'
  },
  { 
    keywords: ['brands', 'companies', 'clients', 'amazon', 'godrej', 'dyson', 'phoenix'], 
    path: '/cv', 
    section: 'brands',
    title: 'Brands Worked With', 
    context: 'recruiter',
    location: 'Recruiter > Brands',
    description: 'Client portfolio and brand partnerships'
  },
  { 
    keywords: ['recommendations', 'testimonials', 'references', 'jigar thakar'], 
    path: '/cv', 
    section: 'recommendations',
    title: 'Recommendations', 
    context: 'recruiter',
    location: 'Recruiter > Recommendations',
    description: 'Professional testimonials'
  },

  // Stalker Mode Content
  { 
    keywords: ['skills', 'talents', 'what can you do'], 
    path: '/cv', 
    section: 'skills',
    title: 'Skills & Abilities', 
    context: 'stalker',
    location: 'Stalker > Skills',
    description: 'What I can actually do'
  },
  { 
    keywords: ['experience', 'work', 'jobs', 'where have you worked'], 
    path: '/cv', 
    section: 'experience',
    title: 'Work Experience', 
    context: 'stalker',
    location: 'Stalker > Experience',
    description: 'Where I\'ve been and what I\'ve done'
  },
  { 
    keywords: ['education', 'degree', 'academics', 'qualifications', 'coursework', 'studies'], 
    path: '/cv', 
    section: 'experience-education',
    title: 'Education', 
    context: 'stalker',
    location: 'Stalker > Experience > Education',
    description: 'Academic background and learning'
  },
  { 
    keywords: ['mba', 'master\'s', 'business', 'marketing mba', 'hofstra', 'zarb', 'graduate', 'gpa', '2026', 'business school'], 
    path: '/cv', 
    section: 'experience-education-mba',
    title: 'MBA in Marketing', 
    context: 'stalker',
    location: 'Stalker > Experience > Education > MBA',
    description: 'Business school journey at Hofstra University'
  },
  { 
    keywords: ['mechanical engineering', 'bachelor\'s', 'b.tech', 'undergrad', 'engineering', '2023', 'gujarat technological university', 'gtustudent'], 
    path: '/cv', 
    section: 'experience-education-mechanical',
    title: 'Mechanical Engineering', 
    context: 'stalker',
    location: 'Stalker > Experience > Education > Mechanical',
    description: 'Engineering foundation from Gujarat'
  },
  { 
    keywords: ['projects', 'work', 'what have you made', 'portfolio pieces'], 
    path: '/cv', 
    section: 'projects',
    title: 'Projects', 
    context: 'stalker',
    location: 'Stalker > Projects',
    description: 'Things I\'ve actually created'
  },
  { 
    keywords: ['brands', 'companies', 'who do you work with'], 
    path: '/cv', 
    section: 'brands',
    title: 'Brand Partners', 
    context: 'stalker',
    location: 'Stalker > Brands',
    description: 'Companies I\'ve worked with'
  },

  // External Links
  { 
    keywords: ['music', 'spotify', 'playlists', 'songs'], 
    path: 'https://open.spotify.com/user/3bjnivwzwk5lbpqjx7scbd9gw?si=b565ac786a4f4e12', 
    title: 'Spotify Profile', 
    context: 'both',
    location: 'External > Spotify',
    description: 'My music and playlists'
  },
  { 
    keywords: ['linkedin', 'professional network', 'social'], 
    path: 'https://www.linkedin.com/in/malavakhani/', 
    title: 'LinkedIn Profile', 
    context: 'both',
    location: 'External > LinkedIn',
    description: 'Professional networking profile'
  },
];

export const useSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current mode from URL params or current location
  const getCurrentMode = (): 'recruiter' | 'stalker' => {
    const urlParams = new URLSearchParams(location.search);
    const mode = urlParams.get('mode');
    
    // If we're on the CV page, check for mode parameter
    if (location.pathname === '/cv' && mode) {
      return mode as 'recruiter' | 'stalker';
    }
    
    // Default to recruiter mode
    return 'recruiter';
  };

  const searchContent = (query: string): SearchResult[] => {
    if (!query.trim()) {
      return [];
    }

    const searchTerm = query.toLowerCase().trim();
    const currentMode = getCurrentMode();
    
    // Split search term into words for better matching
    const searchWords = searchTerm.split(/\s+/);
    
    // Filter content based on current mode and search term
    return searchableContent
      .filter(item => {
        // Check if content is available in current mode
        const contextMatch = item.context === 'both' || item.context === currentMode;
        
        if (!contextMatch) return false;
        
        // Check if search term matches keywords, title, or description
        const textToSearch = [
          ...item.keywords,
          item.title,
          item.description || '',
          item.location
        ].join(' ').toLowerCase();
        
        // Check if any search word matches
        const hasMatch = searchWords.some(word => {
          if (word.length < 2) return false; // Skip very short words
          
          return item.keywords.some(keyword => 
            keyword.toLowerCase().includes(word) || 
            word.includes(keyword.toLowerCase())
          ) || 
          textToSearch.includes(word);
        });
        
        return hasMatch;
      })
      .sort((a, b) => {
        // Prioritize exact matches in title
        const aExactTitle = a.title.toLowerCase().includes(searchTerm);
        const bExactTitle = b.title.toLowerCase().includes(searchTerm);
        
        if (aExactTitle && !bExactTitle) return -1;
        if (!aExactTitle && bExactTitle) return 1;
        
        // Prioritize exact keyword matches
        const aExactKeyword = a.keywords.some(k => k.toLowerCase() === searchTerm);
        const bExactKeyword = b.keywords.some(k => k.toLowerCase() === searchTerm);
        
        if (aExactKeyword && !bExactKeyword) return -1;
        if (!aExactKeyword && bExactKeyword) return 1;
        
        return 0;
      })
      .slice(0, 6); // Limit to 6 results for performance
  };

  const navigateToResult = (result: SearchResult) => {
    const currentMode = getCurrentMode();
    
    // Handle external links
    if (result.path.startsWith('http')) {
      window.open(result.path, '_blank');
      return { found: true, result };
    }

    // Navigate to the page with current mode preserved
    let targetPath = result.path;
    
    // If it's a CV page with a section, add the section and mode
    if (result.path === '/cv' && result.section) {
      targetPath = `/cv?mode=${currentMode}&section=${result.section}`;
    } else if (result.path === '/cv') {
      targetPath = `/cv?mode=${currentMode}`;
    } else if (result.path !== '/' && !result.path.startsWith('http')) {
      // For other pages, preserve the mode if we're in CV mode
      targetPath = `${result.path}?mode=${currentMode}`;
    }

    navigate(targetPath);

    // Enhanced section navigation with tab auto-opening
    if (result.section) {
      // Map sections to their parent tabs for auto-opening
      const getParentTab = (section: string): string => {
        if (section.includes('education')) {
          return 'experience'; // Education is nested within experience
        }
        // Extract the main section from compound section names
        if (section.includes('-')) {
          return section.split('-')[0];
        }
        return section;
      };

      const parentTab = getParentTab(result.section);
      
      // Custom event to ensure tab is opened before scrolling
      const ensureTabOpenAndScroll = () => {
        // Dispatch custom event to open the parent tab first
        window.dispatchEvent(new CustomEvent('openTabAndScroll', {
          detail: {
            section: result.section,
            parentTab: parentTab,
            isEducation: result.section.includes('education')
          }
        }));
      };

      // Allow time for navigation, then ensure tab opening and scroll
      setTimeout(() => {
        ensureTabOpenAndScroll();
      }, 100);
    }

    return { found: true, result };
  };

  const performSearch = (query: string): { found: boolean; result?: SearchResult } => {
    const results = searchContent(query);
    
    if (results.length > 0) {
      return navigateToResult(results[0]);
    }

    return { found: false };
  };

  return { 
    performSearch, 
    searchContent, 
    navigateToResult, 
    getCurrentMode 
  };
};