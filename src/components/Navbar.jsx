import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'tracks', label: 'TRACKS' },
    { id: 'timeline', label: 'TIMELINE' },
    { id: 'sponsors', label: 'SPONSORS' },
    { id: 'team', label: 'TEAM' },
    { id: 'prizes', label: 'PRIZES' },
    { id: 'location', label: 'FIND US' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleDownloadPPT = () => {
    // Open Google Docs presentation in new tab
    window.open('https://docs.google.com/presentation/d/1nLcUWZf3fxeff_A62P4u_RqpbArnlU_TCCK5EE9kZvE/edit?usp=drivesdk', '_blank');
  };

  return (
    <>
      {/* Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-primary/10' 
          : 'bg-gray-900/80 backdrop-blur-md shadow-lg'
      } mx-4 mt-4 rounded-2xl border border-gray-800/30 hover:border-primary/20`}>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-[#dddf23]/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#dddf23] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-lg">N</span>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-[#dddf23] bg-clip-text text-transparent tracking-wider font-mono">
              Nexovate 2025
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group ${
                  activeSection === item.id 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-300 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-[#dddf23] transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </a>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={handleDownloadPPT}
              className="ml-4 bg-gradient-to-r from-primary to-[#dddf23] text-black px-6 py-2.5 rounded-full font-bold text-sm tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
            >
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2-2H5a2 2 0 01-2-2z" />
                </svg>
                <span>DOWNLOAD PPT</span>
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-primary transition-colors duration-300 focus:outline-none"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'top-3 rotate-45' : 'top-1'
              }`}></span>
              <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'top-3'
              }`}></span>
              <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'top-3 -rotate-45' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute top-20 left-4 right-4 bg-accent rounded-2xl border border-gray-700/50 p-6 transform transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
        }`}>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-center py-3 px-4 rounded-lg font-semibold tracking-wide transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-primary bg-primary/10 border border-primary/20' 
                    : 'text-gray-300 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <button
              onClick={() => {
                handleDownloadPPT();
                setIsMenuOpen(false);
              }}
              className="bg-gradient-to-r from-primary to-[#dddf23] text-black py-3 px-6 rounded-full font-bold text-center tracking-wide hover:scale-105 transition-all duration-300 mt-4"
            >
              DOWNLOAD PPT FORMAT
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;