import React from 'react';
import { Award, Rocket, Target, PenTool as Tool, Trophy, Users } from 'lucide-react';

const AboutTeam = () => {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      {/* ═══ HERO: Full-bleed with overlapping card ═══ */}
      <div className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/mainfoto.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
          <p className="text-neon-purple text-sm font-medium tracking-widest uppercase mb-2 animate-fade-in-up">Who we are</p>
          <h1 className="text-5xl md:text-7xl font-black text-white animate-fade-in-up">About Us</h1>
          <p className="text-gray-400 text-lg mt-2 animate-fade-in-up-delay-1">We are a family.</p>
        </div>
      </div>

      {/* ═══ MISSION/VISION: Overlapping cards ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid md:grid-cols-5 gap-6">
          {/* Mission: spans 3 cols */}
          <div className="md:col-span-3 glass neon-glow p-8 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neon-purple/20 flex items-center justify-center">
                <Rocket className="h-5 w-5 text-neon-purple" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At Itobot, our mission is to grow together as a team through science, technology, and teamwork. As a school-based FRC team, we are dedicated to continuous learning, innovation, and pushing our limits — both as individuals and as a team — to build creative solutions and inspire others in our community.
            </p>
          </div>
          {/* Vision: spans 2 cols */}
          <div className="md:col-span-2 glass neon-border-hover p-8 animate-fade-in-up-delay-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/20 flex items-center justify-center">
                <Target className="h-5 w-5 text-neon-cyan" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Our vision is to become a team that not only competes at the highest levels of robotics but also shapes future leaders who are passionate, curious, and driven to make a positive impact through technology. We aim to be a symbol of growth, unity, and inspiration within the FRC community and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* ═══ JOURNEY: Horizontal Timeline ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-black text-white mb-4">Our <span className="gradient-text">Journey</span></h2>
        <div className="gradient-divider mb-12 w-20" />

        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-5 w-5" />,
                year: '2015',
                title: 'Founded in 2015',
                desc: 'Started with a small group of passionate students and mentors, driven by the desire to compete in FRC.',
                pos: 'md:mt-0',
              },
              {
                icon: <Award className="h-5 w-5" />,
                year: '2016',
                title: 'First Regional Win - 2016',
                desc: 'When FRC first came to Turkey, all the organizations were made as off season and our team showed great success in this competition, competing abroad.',
                pos: 'md:mt-24',
              },
              {
                icon: <Target className="h-5 w-5" />,
                year: 'Now',
                title: 'Community Impact',
                desc: 'Expanded our reach through STEM outreach programs, mentoring younger students, and community workshops.',
                pos: 'md:mt-0',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative ${item.pos} animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Dot connector */}
                <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-dark-bg border-2 border-neon-purple items-center justify-center animate-pulse-neon">
                  <div className="w-2 h-2 rounded-full bg-neon-purple" />
                </div>

                <div className="glass neon-border-hover p-6 mt-4">
                  <span className="text-xs font-bold text-neon-purple tracking-widest uppercase">{item.year}</span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ ACHIEVEMENTS: Large hero stat + side stats ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-4xl font-black text-white mb-4">Our <span className="gradient-text">Achievements</span></h2>
        <div className="gradient-divider mb-12 w-20" />

        <div className="grid md:grid-cols-3 gap-6">
          {/* Hero Achievement - takes more visual weight */}
          <div className="md:row-span-2 glass neon-glow-intense p-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-neon-purple/10 flex items-center justify-center mb-4 animate-float">
              <Trophy className="h-10 w-10 text-neon-purple" />
            </div>
            <p className="text-5xl font-black gradient-text">4</p>
            <h3 className="text-xl font-bold text-white mt-2">Awards in 1 season</h3>
            <p className="text-gray-400 text-sm mt-2">Including Regional 1st place, quality award, woodie flowers and best alumni awards</p>
          </div>

          <div className="glass neon-border-hover p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-neon-cyan/10 flex items-center justify-center flex-shrink-0">
              <Tool className="h-7 w-7 text-neon-cyan" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10</p>
              <h3 className="text-sm font-semibold text-white">Seasons</h3>
              <p className="text-gray-400 text-xs mt-1">Of continuous growth and improvement</p>
            </div>
          </div>

          <div className="glass neon-border-hover p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-neon-pink/10 flex items-center justify-center flex-shrink-0">
              <Users className="h-7 w-7 text-neon-pink" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">18+</p>
              <h3 className="text-sm font-semibold text-white">Members and lots of Mentors,Alumnis</h3>
              <p className="text-gray-400 text-xs mt-1">Growing stronger each year with our experiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;