import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { personalInfo } from '@/data/portfolio';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Apply styles to body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position and styles
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMenuOpen]);

  const navItems = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.education'), href: '#education' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 dark:bg-white/20 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <header className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white dark:bg-black backdrop-blur-md border-b-2 border-black dark:border-white shadow-sm' 
          : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-black dark:text-white">
            {personalInfo.name}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-black dark:text-white hover:opacity-70 transition-opacity font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <div className="w-px h-6 bg-black dark:bg-white"></div>
            <Button
              variant="outline"
              onClick={() => window.print()}
              className="rounded-full px-4 py-2 border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Download Resume
            </Button>
            {[
              { icon: Github, href: personalInfo.github },
              { icon: Linkedin, href: personalInfo.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` }
            ].map((social, index) => (
              <Button key={index} variant="ghost" size="icon" asChild className="text-black dark:text-white hover:opacity-70 transition-opacity">
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Mobile Actions - Fixed spacing and accessibility */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black dark:text-white hover:opacity-70 transition-opacity w-10 h-10 flex items-center justify-center"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Improved spacing and animation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <nav className="py-4 border-t-2 border-black dark:border-white bg-white dark:bg-black">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-black dark:text-white hover:opacity-70 transition-opacity font-medium py-3 px-4 rounded-md w-full"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Links - Better spacing */}
              <div className="flex justify-center space-x-4 pt-4 mt-2 border-t-2 border-black dark:border-white">
                {[
                  { icon: Github, href: personalInfo.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
                ].map((social) => (
                  <Button 
                    key={social.label} 
                    variant="ghost" 
                    size="icon" 
                    asChild 
                    className="text-black dark:text-white hover:opacity-70 transition-opacity w-12 h-12"
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;