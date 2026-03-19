import React from 'react';
import TeamCard from '../components/TeamCard';
import { Star } from 'lucide-react';

const teamData = [
  {
    title: 'Lead Mentors',
    members: [
      { name: 'Metin Kaya', role: 'Head Mentor', image: '/team_members/metin_men.jpg' },
      { name: 'Özgür Şahin', role: 'Head Mentor', image: '/team_members/ozgur_men.jpg' },
    ],
  },
  {
    title: 'Mentors',
    members: [
      { name: 'Oğuzcan', role: 'Alumni/Mentor', image: '/team_members/oguzcan_men.jpg' },
      { name: 'Yunus', role: 'Alumni/Mentor', image: '/team_members/cipil_men.jpg' },
      { name: 'Saliha', role: 'Alumni/Mentor', image: '/team_members/saliha_men.jpg' },
      { name: 'Ali', role: 'Mentor', image: '/team_members/ali_men.jpg' },
      { name: 'Alp Necati', role: 'Mentor', image: '/team_members/necati_men.jpg' },
      { name: 'Furkan', role: 'Mentor', image: '/team_members/furkan_men.jpg' },
    ],
  },
  {
    title: 'Yazılım',
    members: [
      { name: 'Hamza', role: 'Software', image: '/team_members/hamza.jpg' },
      { name: 'Yahya', role: 'Software Captain / Driver', image: '/team_members/yahya_yaz.jpg' },
    ],
  },
  {
    title: 'Mechanic',
    members: [
      { name: 'Efe', role: 'Mechanic / Technician', image: '/team_members/efe_mek.jpg' },
      { name: 'Samed', role: 'Mechanic / Driver / Team Captain', image: '/team_members/samet_mek.jpg' },
      { name: 'Burak', role: 'Mechanic', image: '/team_members/burak_mek.jpg' },
      { name: 'Akın', role: 'Mechanic', image: '/team_members/akin_mek.jpg' },
      { name: 'Kayra', role: 'Mechanic', image: '/team_members/kayra_mek.jpg' },
    ],
  },
  {
    title: 'PR',
    members: [
      { name: 'Mina', role: 'PR', image: '/team_members/mina_pr.jpg' },
      { name: 'Ecesu', role: 'PR', image: '/team_members/ecesu_pr.jpg' },
      { name: 'Esra ', role: 'PR', image: '/team_members/esra_pr.jpg' },
      { name: 'Sevde', role: 'PR', image: '/team_members/sevde_pr.jpg' },
      { name: 'Kaan', role: 'PR', image: '/team_members/kaan_pr.jpg' },
      { name: 'Zilan', role: 'PR', image: '/team_members/zilan_pr.jpg' },
      { name: 'Zeynep', role: 'PR', image: '/team_members/zeynep_pr.jpg' },
      { name: 'Zeynep', role: 'PR', image: '/team_members/zeynep_g_pr.jpg' },
    ],
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      {/* ═══ HERO: Large text + Counter ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/mainfoto.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-bg/90" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
          <div>
            <p className="text-neon-cyan text-sm font-medium tracking-widest uppercase mb-3 animate-fade-in-up">Our Team</p>
            <h1 className="text-5xl md:text-7xl font-black text-white animate-fade-in-up">
              Team <span className="gradient-text">Members</span>
            </h1>
            <p className="text-gray-400 text-lg mt-3 animate-fade-in-up-delay-1">Our team members. We are a family.</p>
          </div>
          {/* Total count */}
          <div className="glass neon-glow p-6 text-center animate-fade-in-up-delay-2">
            <Star className="h-6 w-6 text-neon-purple mx-auto mb-2" />
            <p className="text-4xl font-black gradient-text">
              {teamData.reduce((sum, s) => sum + s.members.length, 0)}
            </p>
            <p className="text-gray-400 text-xs mt-1">Total Members</p>
          </div>
        </div>
      </div>

      {/* ═══ TEAM SECTIONS: Each with unique layout ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {teamData.map((section, sIdx) => (
          <div key={section.title} className="mb-20">
            {/* Section Header - Left aligned with accent */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-10 bg-gradient-to-b from-neon-purple to-neon-cyan rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                <p className="text-xs text-gray-500">{section.members.length} members</p>
              </div>
            </div>

            {/* Cards - responsive grid, 2-member sections side by side, larger sections in 3/4 col */}
            <div
              className={`grid gap-6 ${section.members.length <= 2
                  ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl'
                  : section.members.length <= 5
                    ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
                    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }`}
            >
              {section.members.map((member, mIdx) => (
                <div
                  key={`${member.name}-${mIdx}`}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${mIdx * 0.05}s` }}
                >
                  <TeamCard name={member.name} role={member.role} image={member.image} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
