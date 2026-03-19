import React from 'react';

const JoinUs: React.FC = () => {
    return (
        <div className="min-h-screen bg-dark-bg pt-20">
            {/* ═══ COMPACT HEADER ═══ */}
            <div className="max-w-4xl mx-auto px-4 py-12 text-center animate-fade-in-up">
                <p className="text-neon-purple text-sm font-medium tracking-widest uppercase mb-3">Join Us</p>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
                    Takımımıza <span className="gradient-text">Katılın!</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-lg mx-auto">
                    Takımımıza katılmak için başvuru formunu doldur. Tutkunla aramıza katıl!
                </p>
            </div>

            {/* ═══ FORM EMBED ═══ */}
            <div className="max-w-3xl mx-auto px-4 pb-16">
                <div className="glass neon-glow p-2 sm:p-4 animate-fade-in-up-delay-1">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScWsl7UvbRif2k6XIg52r7seGluzOwgQPxbzdMVbWyGnKcXFA/viewform?embedded=true"
                        style={{
                            width: '100%',
                            height: '100vh',
                            border: 'none',
                            borderRadius: '0.75rem',
                        }}
                        title="ITOBOT 6038 Başvuru Formu"
                    >
                        Yükleniyor…
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
