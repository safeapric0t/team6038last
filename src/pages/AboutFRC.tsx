import React from 'react';
import { Trophy, Target, Users, Brain, Lightbulb, Heart } from 'lucide-react';

const AboutFRC = () => {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      {/* ═══ HERO: Minimal text-only with large typography ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-frc.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-bg/90" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="text-neon-cyan text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in-up">What is FRC?</p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight animate-fade-in-up">
              FIRST Robotics <span className="gradient-text">Competition</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mt-8 animate-fade-in-up-delay-1">
              FIRST Robotics Competition (FRC) combines the excitement of sport with the rigors of science and technology.
              Under strict rules, limited time and resources, teams of students are challenged to raise funds, design a team
              "brand," hone teamwork skills, and build and program industrial-size robots to play a difficult field game
              against like-minded competitors.
            </p>
          </div>
        </div>
      </div>

      {/* ═══ CORE VALUES: Zigzag alternating layout ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-black text-white mb-4">Core <span className="gradient-text">Values</span></h2>
        <div className="gradient-divider mb-16 w-20" />

        <div className="space-y-6">
          {[
            {
              icon: <Trophy className="h-6 w-6" />,
              title: 'Gracious Professionalism',
              desc: 'Encouraging high-quality work, emphasizing the value of others, and respecting individuals and the community.',
              color: 'neon-purple',
              align: 'mr-auto',
            },
            {
              icon: <Target className="h-6 w-6" />,
              title: 'Coopertition',
              desc: 'Displaying unqualified kindness and respect in the face of fierce competition.',
              color: 'neon-cyan',
              align: 'ml-auto',
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: 'Teamwork',
              desc: 'Learning to work together effectively to achieve common goals and overcome challenges.',
              color: 'neon-pink',
              align: 'mr-auto',
            },
            {
              icon: <Brain className="h-6 w-6" />,
              title: 'Innovation',
              desc: 'Encouraging creative thinking and problem-solving to develop unique solutions.',
              color: 'neon-purple',
              align: 'ml-auto',
            },
          ].map((value, i) => (
            <div
              key={i}
              className={`glass neon-border-hover p-6 flex items-start gap-5 max-w-xl ${value.align} animate-fade-in-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-${value.color}/10 flex items-center justify-center text-${value.color}`}>
                {value.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{value.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ IMPACT: Large number strip ═══ */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl font-black text-white mb-4">Impact on <span className="gradient-text">Students</span></h2>
          <div className="gradient-divider mb-16 w-20" />

          <div className="flex flex-col md:flex-row gap-8">
            {[
              { value: '87%', label: 'More interested in STEM education', color: 'from-neon-purple to-neon-violet' },
              { value: '92%', label: 'Better problem-solving skills', color: 'from-neon-cyan to-neon-purple' },
              { value: '95%', label: 'Improved teamwork abilities', color: 'from-neon-pink to-neon-purple' },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex-1 glass neon-border-hover p-8 text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <p className={`text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
                <p className="mt-3 text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFRC;