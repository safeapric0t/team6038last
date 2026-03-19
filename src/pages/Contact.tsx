import React from 'react';
import { Mail, Instagram, Phone, MapPin, Globe, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      {/* ═══ SPLIT LAYOUT: Left info + Right map/visual ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="animate-fade-in-up">
            <p className="text-neon-purple text-sm font-medium tracking-widest uppercase mb-3">Get in Touch</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10">
              We'd love to hear from you! Reach out through any of the channels below.
            </p>

            {/* Contact Cards - vertical stack */}
            <div className="space-y-4">
              <a
                href="mailto:itobot6038@gmail.com"
                className="glass neon-border-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center group-hover:bg-neon-purple/20 transition-colors">
                  <Mail className="h-5 w-5 text-neon-purple" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="text-white font-medium group-hover:text-neon-purple transition-colors">itobot6038@gmail.com</p>
                </div>
                <Send className="h-4 w-4 text-gray-600 ml-auto group-hover:text-neon-purple transition-colors" />
              </a>

              <a
                href="https://www.instagram.com/itobot6038/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass neon-border-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center group-hover:bg-neon-pink/20 transition-colors">
                  <Instagram className="h-5 w-5 text-neon-pink" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Instagram</p>
                  <p className="text-white font-medium group-hover:text-neon-pink transition-colors">@itobot6038</p>
                </div>
                <Send className="h-4 w-4 text-gray-600 ml-auto group-hover:text-neon-pink transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/company/itobot"
                target="_blank"
                rel="noopener noreferrer"
                className="glass neon-border-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">LinkedIn</p>
                  <p className="text-white font-medium group-hover:text-neon-cyan transition-colors">ITOBOT-6038</p>
                </div>
                <Send className="h-4 w-4 text-gray-600 ml-auto group-hover:text-neon-cyan transition-colors" />
              </a>

              <a
                href="https://www.github.com/hamz011/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass neon-border-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Github className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">GitHub</p>
                  <p className="text-white font-medium group-hover:text-gray-300 transition-colors">Itobot-Software</p>
                </div>
                <Send className="h-4 w-4 text-gray-600 ml-auto group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Location + Map embed */}
          <div className="space-y-6 animate-fade-in-up-delay-1">
            <div className="glass neon-glow p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-neon-purple/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-neon-purple" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Location</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                İstanbul Ticaret Odası Mesleki ve Teknik Anadolu Lisesi, İstanbul, Türkiye
              </p>
              {/* Map embed */}
              <div className="rounded-xl overflow-hidden border border-neon-purple/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.6!2d28.97!3d41.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzI0LjAiTiAyOMKwNTgnMTIuMCJF!5e0!3m2!1str!2str!4v1640000000000!5m2!1str!2str"
                  width="100%"
                  height="250"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                  allowFullScreen
                  loading="lazy"
                  title="ITOBOT Location"
                />
              </div>
            </div>

            <a
              href="https://itomtal.meb.k12.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass neon-border-hover p-6 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                <Globe className="h-5 w-5 text-neon-cyan" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">School Website</p>
                <p className="text-white font-medium group-hover:text-neon-cyan transition-colors text-sm">
                  https://itomtal.meb.k12.tr/
                </p>
              </div>
            </a>

            <a
              href="tel:+905437298963"
              className="glass neon-border-hover p-6 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-neon-purple" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                <p className="text-white font-medium group-hover:text-neon-purple transition-colors">+90 543 729 89 63</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
