import React from 'react';
import { Users, Brain, ChevronRight, AtomIcon, Trophy, Calendar, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-dark-bg">
      {/* ═══ HERO: Split-Screen Layout ═══ */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src="../../mainfoto.jpg" alt="Robot Competition" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-bg/85" />
          <div className="absolute inset-0 gradient-mesh" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen grid md:grid-cols-2 gap-8 items-center pt-24 pb-12">
          {/* Left: Text */}
          <div className="animate-fade-in-up order-2 md:order-1">
            <div className="inline-block px-4 py-1.5 glass text-neon-purple text-sm font-medium mb-6">
              FRC Team #6038
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
              <span className="gradient-text">ITO</span>
              <span className="text-white">BOT</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-md mb-10">
              ITOBOT 6038 is a journey filled with robotic engineering and team spirit.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/about/team" className="btn-gradient inline-flex items-center text-lg">
                More About Us <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="/gallery" className="btn-outline-neon inline-flex items-center text-lg">
                Frc Gallery
              </a>
            </div>
          </div>

          {/* Right: Floating Stats Cluster */}
          <div className="relative order-1 md:order-2 flex items-center justify-center min-h-[350px]">
            {/* Large center stat */}
            <div className="glass neon-glow-intense p-8 text-center w-44 h-44 flex flex-col items-center justify-center rounded-2xl animate-float z-10">
              <Trophy className="h-8 w-8 text-neon-purple mb-2" />
              <p className="text-4xl font-black gradient-text">4</p>
              <p className="text-xs text-gray-400 mt-1">Awards</p>
            </div>
            {/* Top-right stat */}
            <div className="absolute top-4 right-8 glass neon-border-hover p-4 text-center w-28 h-28 flex flex-col items-center justify-center rounded-xl animate-fade-in-up-delay-1">
              <Users className="h-5 w-5 text-neon-cyan mb-1" />
              <p className="text-2xl font-bold text-white">18</p>
              <p className="text-[10px] text-gray-400">Members</p>
            </div>
            {/* Bottom-left stat */}
            <div className="absolute bottom-8 left-4 glass neon-border-hover p-4 text-center w-28 h-28 flex flex-col items-center justify-center rounded-xl animate-fade-in-up-delay-2">
              <Calendar className="h-5 w-5 text-neon-pink mb-1" />
              <p className="text-2xl font-bold text-white">10</p>
              <p className="text-[10px] text-gray-400">Years</p>
            </div>
            {/* Bottom-right stat */}
            <div className="absolute bottom-2 right-16 glass neon-border-hover p-3 text-center w-24 h-24 flex flex-col items-center justify-center rounded-xl animate-fade-in-up-delay-3">
              <Zap className="h-4 w-4 text-neon-purple mb-1" />
              <p className="text-xl font-bold text-white">100%</p>
              <p className="text-[10px] text-gray-400">Spirit</p>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path fill="#050508" d="M0,0 L1440,60 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </div>

      {/* ═══ FEATURES: Horizontal Scroll Strip ═══ */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left: Title Block */}
            <div className="md:w-1/3 md:sticky md:top-32 animate-fade-in-up">
              <h2 className="text-5xl font-black leading-tight">
                Why <br />
                <span className="gradient-text">ITOBOT</span>?
              </h2>
              <p className="mt-4 text-gray-400 text-lg">
                Excellence in robotics, engineering, and teamwork
              </p>
              <div className="mt-6 gradient-divider w-16" />
            </div>

            {/* Right: Stacked Feature Cards */}
            <div className="md:w-2/3 space-y-6">
              {[
                {
                  icon: <Brain className="h-7 w-7" />,
                  title: 'Innovation',
                  desc: 'Pushing the boundaries of robotics technology with cutting-edge solutions and creative problem-solving.',
                  accent: 'from-neon-purple to-neon-violet',
                },
                {
                  icon: <Users className="h-7 w-7" />,
                  title: 'Teamwork',
                  desc: 'Collaboration and dedication drive our success, fostering a strong community of future leaders.',
                  accent: 'from-neon-cyan to-neon-purple',
                },
                {
                  icon: <AtomIcon className="h-7 w-7" />,
                  title: 'Team Spirit',
                  desc: 'Our team members are passionate about robotics and engineering, and we work together to achieve our goals.',
                  accent: 'from-neon-pink to-neon-purple',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="glass neon-border-hover p-6 flex items-start gap-6 group animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;