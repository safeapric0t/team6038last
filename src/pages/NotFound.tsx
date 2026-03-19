import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Bot } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 gradient-mesh opacity-20" />
            <div className="absolute inset-0 bg-grid opacity-10" />

            {/* ═══ SPLIT LAYOUT ═══ */}
            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left: Animated Visual */}
                <div className="flex flex-col items-center justify-center animate-fade-in-up">
                    <div className="relative">
                        <div className="w-48 h-48 rounded-full bg-neon-purple/5 border border-neon-purple/20 flex items-center justify-center animate-float">
                            <div className="w-36 h-36 rounded-full bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center">
                                <Bot className="h-16 w-16 text-neon-purple/60" />
                            </div>
                        </div>
                        {/* Orbiting dot */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-cyan animate-spin" style={{ animation: 'spin 4s linear infinite', transformOrigin: '0 100px' }} />
                    </div>
                    <p className="text-8xl font-black gradient-text-pink mt-8">404</p>
                </div>

                {/* Right: Text + Actions */}
                <div className="animate-fade-in-up-delay-1 text-center md:text-left">
                    <p className="text-gray-500 text-sm font-mono mb-2">
                        team6038.com{window.location.pathname}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Page <span className="gradient-text">Not Found</span>
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Oops! Looks like our robot encountered an error. The page you're looking for has been moved, deleted, or never existed.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
                        <Link to="/" className="btn-gradient inline-flex items-center justify-center">
                            <Home className="h-5 w-5 mr-2" /> Back to Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="btn-outline-neon inline-flex items-center justify-center"
                        >
                            <ArrowLeft className="h-5 w-5 mr-2" /> Go Back
                        </button>
                    </div>

                    <div className="mt-8 glass neon-border-hover p-5 text-left">
                        <p className="text-gray-400 text-sm mb-2">Need help?</p>
                        <Link
                            to="/contact"
                            className="text-neon-purple hover:text-neon-cyan font-medium transition-colors text-sm"
                        >
                            Contact Support →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;