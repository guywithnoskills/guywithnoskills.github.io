import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Work', path: '/workfolio' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export default function Layout({ children }: LayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#211D18]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F3EC]/95 backdrop-blur-sm border-b border-[#E4DCCC]">
        <div className="h-16 flex items-center justify-between px-4 md:px-8 max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="font-serif text-lg font-medium tracking-tight text-[#211D18] hover:text-[#B3452A] transition-colors"
          >
            Malav Akhani
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path) ? 'text-[#B3452A]' : 'text-[#6E6255] hover:text-[#211D18]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden p-2 text-[#211D18]"
            title="Menu"
          >
            {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileNavOpen && (
          <nav className="md:hidden border-t border-[#E4DCCC] px-4 py-3 flex flex-col gap-1 bg-[#F7F3EC]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileNavOpen(false)}
                className={`px-2 py-2.5 text-sm rounded-md ${
                  isActive(link.path) ? 'text-[#B3452A]' : 'text-[#6E6255] hover:text-[#211D18]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="pt-16">{children}</main>

      <footer className="border-t border-[#E4DCCC] py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="font-serif text-base text-[#211D18]">Malav Akhani</p>
            <p className="text-sm text-[#6E6255]">Marketing Strategist · New York</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href="mailto:malav.akhani8@gmail.com"
              className="text-[#211D18] hover:text-[#B3452A] transition-colors"
            >
              malav.akhani8@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/malavakhani6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6E6255] hover:text-[#B3452A] transition-colors"
            >
              LinkedIn
            </a>
            <Link to="/resume" className="text-[#6E6255] hover:text-[#B3452A] transition-colors">
              Resume
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
