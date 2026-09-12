import React from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  Linkedin, 
  MessageCircle,
  Camera,
  Phone,
  Gamepad2
} from 'lucide-react';

// Custom TikTok and X icons as SVGs since they're not in lucide-react
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.996 1.482-1.996.699 0 1.037.219 1.037 1.142 0 .695-.442 1.736-.67 2.695-.191.808.399 1.472 1.186 1.472 1.421 0 2.515-1.50 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1.001-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A12.013 12.013 0 0 0 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
);

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  hoverColor: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    url: 'https://instagram.com',
    hoverColor: 'hover:text-pink-400'
  },
  {
    name: 'YouTube',
    icon: <Youtube className="w-5 h-5" />,
    url: 'https://youtube.com',
    hoverColor: 'hover:text-red-500'
  },
  {
    name: 'TikTok',
    icon: <TikTokIcon />,
    url: 'https://tiktok.com',
    hoverColor: 'hover:text-black dark:hover:text-white'
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    url: 'https://facebook.com',
    hoverColor: 'hover:text-blue-500'
  },
  {
    name: 'X',
    icon: <XIcon />,
    url: 'https://x.com',
    hoverColor: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://linkedin.com',
    hoverColor: 'hover:text-blue-600'
  },
  {
    name: 'WhatsApp',
    icon: <Phone className="w-5 h-5" />,
    url: 'https://whatsapp.com',
    hoverColor: 'hover:text-green-500'
  },
  {
    name: 'Snapchat',
    icon: <Camera className="w-5 h-5" />,
    url: 'https://snapchat.com',
    hoverColor: 'hover:text-yellow-400'
  },
  {
    name: 'Pinterest',
    icon: <PinterestIcon />,
    url: 'https://pinterest.com',
    hoverColor: 'hover:text-red-600'
  },
  {
    name: 'Discord',
    icon: <Gamepad2 className="w-5 h-5" />,
    url: 'https://discord.com',
    hoverColor: 'hover:text-indigo-500'
  }
];

interface SocialLinksProps {
  variant?: 'floating' | 'inline' | 'footer';
  className?: string;
}

export default function SocialLinks({ variant = 'floating', className = '' }: SocialLinksProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const getContainerClasses = () => {
    switch (variant) {
      case 'floating':
        return `fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 ${className}`;
      case 'inline':
        return `flex flex-wrap gap-4 justify-center ${className}`;
      case 'footer':
        return `flex flex-wrap gap-6 justify-center ${className}`;
      default:
        return className;
    }
  };

  const getItemClasses = (link: SocialLink) => {
    const baseClasses = `
      group relative p-3 rounded-full backdrop-blur-sm border border-white/10
      text-white/70 transition-all duration-300 ease-out
      hover:text-white hover:border-white/30 hover:scale-110
      focus:outline-none focus:ring-2 focus:ring-portfolio-accent/50
      ${link.hoverColor}
    `;

    switch (variant) {
      case 'floating':
        return `${baseClasses} bg-black/40 hover:bg-black/60 hover:shadow-lg hover:shadow-portfolio-accent/20`;
      case 'inline':
        return `${baseClasses} bg-portfolio-card-bg/50 hover:bg-portfolio-card-bg/80`;
      case 'footer':
        return `${baseClasses} bg-portfolio-secondary-bg/50 hover:bg-portfolio-secondary-bg/80`;
      default:
        return baseClasses;
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={getContainerClasses()}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.95 }}
          className={getItemClasses(link)}
          aria-label={`Visit ${link.name}`}
        >
          {link.icon}
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-accent-secondary/20 blur-md -z-10" />
          
          {/* Tooltip */}
          {variant === 'floating' && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {link.name}
            </div>
          )}
        </motion.a>
      ))}
    </motion.div>
  );
}