import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsAboutOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${isActive(to) ? 'text-neon-purple' : 'text-gray-300 hover:text-white'
        }`}
    >
      {label}
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-neon-purple to-neon-cyan transition-all duration-300 ${isActive(to) ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
      />
    </Link>
  );

  const MobileNavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${isActive(to)
          ? 'text-neon-purple bg-neon-purple/10'
          : 'text-gray-300 hover:text-white hover:bg-white/5'
        }`}
    >
      {label}
    </Link>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-xl shadow-lg shadow-neon-purple/5'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/itobot-logo.png"
              alt="ITOBOT"
              className="h-14 w-14 sm:h-16 sm:w-16 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold gradient-text">
              ITOBOT 6038
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" label="Home" />

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 ${isAboutOpen ? 'text-neon-purple' : 'text-gray-300 hover:text-white'
                  }`}
              >
                About
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {isAboutOpen && (
                <div className="absolute left-0 mt-2 w-56 glass neon-glow overflow-hidden z-50">
                  <Link
                    to="/about/frc"
                    className={`block px-4 py-3 text-sm font-medium transition-all duration-300 ${isActive('/about/frc')
                        ? 'text-neon-purple bg-neon-purple/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    FRC
                  </Link>
                  <Link
                    to="/about/team"
                    className={`block px-4 py-3 text-sm font-medium transition-all duration-300 ${isActive('/about/team')
                        ? 'text-neon-purple bg-neon-purple/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    ITOBOT
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/robots" label="Robots" />
            <NavLink to="/gallery" label="Gallery" />
            <NavLink to="/team" label="Team" />
            <NavLink to="/join-us" label="Join" />

            <Link
              to="/contact"
              className="ml-4 btn-gradient text-sm !py-2 !px-5 inline-flex items-center"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-500 ${isOpen ? 'visible' : 'invisible'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-dark-surface/95 backdrop-blur-xl border-r border-neon-purple/10 p-6 space-y-2 transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          {/* Mobile Logo */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <img src="/itobot-logo.png" alt="ITOBOT" className="h-10 w-10" />
              <span className="text-lg font-bold gradient-text">ITOBOT 6038</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <MobileNavLink to="/" label="Home" />

          {/* Mobile About */}
          <div>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              About
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''
                  }`}
              />
            </button>
            {isAboutOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-neon-purple/20 pl-3">
                <MobileNavLink to="/about/frc" label="FRC" />
                <MobileNavLink to="/about/team" label="ITOBOT" />
              </div>
            )}
          </div>

          <MobileNavLink to="/robots" label="Robots" />
          <MobileNavLink to="/gallery" label="Gallery" />
          <MobileNavLink to="/team" label="Team" />
          <MobileNavLink to="/join-us" label="Join" />

          <div className="pt-4">
            <Link
              to="/contact"
              className="block text-center btn-gradient text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
