import React from 'react';
import { Github, Instagram, Mail, MapPin, Phone, Globe, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-dark-surface border-t border-neon-purple/10">
      {/* Top Gradient Border */}
      <div className="gradient-divider" />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/itobot-logo.png" alt="ITOBOT 6038" className="h-14 w-14" />
              <h3 className="text-2xl font-bold gradient-text">ITOBOT 6038</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Not making only robots, but building the future with past savings and future investments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about/team', label: 'About Us' },
                { to: '/robots', label: 'Robots' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+905437298963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                >
                  <Phone className="h-4 w-4 text-neon-purple" />
                  +90 543 729 89 63
                </a>
              </li>
              <li>
                <a
                  href="mailto:itobot6038@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                >
                  <Mail className="h-4 w-4 text-neon-purple" />
                  itobot6038@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/itobot6038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-neon-pink transition-colors duration-300"
                >
                  <Instagram className="h-4 w-4 text-neon-purple" />
                  itobot6038
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/itobot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                >
                  <Linkedin className="h-4 w-4 text-neon-purple" />
                  ITOBOT-6038
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com/hamz011/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                >
                  <Github className="h-4 w-4 text-neon-purple" />
                  Itobot-Software
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Location</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://maps.app.goo.gl/xNzCkAPszZ5jRWDh6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-400 hover:text-neon-purple transition-colors duration-300"
              >
                <MapPin className="h-4 w-4 mt-0.5 text-neon-purple flex-shrink-0" />
                İstanbul Ticaret Odası Mesleki ve Teknik Anadolu Lisesi, İstanbul, Türkiye
              </a>
              <a
                href="https://itomtal.meb.k12.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-400 hover:text-neon-cyan transition-colors duration-300"
              >
                <Globe className="h-4 w-4 mt-0.5 text-neon-purple flex-shrink-0" />
                https://itomtal.meb.k12.tr/
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ITOBOT Software Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
