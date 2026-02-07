
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6 flex items-center justify-between ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm border-b border-zinc-100 py-4' : 'bg-transparent text-white'
      }`}
    >
      <div className={`font-serif text-2xl tracking-widest ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
        AETHER ESTATES
      </div>

      <nav className="hidden md:flex items-center space-x-12">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`text-xs font-medium tracking-widest hover:opacity-70 transition-opacity ${
              isScrolled ? 'text-zinc-900' : 'text-white'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button 
        className={`px-8 py-3 text-xs font-medium tracking-widest border transition-all duration-300 ${
          isScrolled 
            ? 'border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white' 
            : 'border-white text-white hover:bg-white hover:text-zinc-900'
        }`}
      >
        INQUIRE NOW
      </button>
    </header>
  );
};

export default Header;
