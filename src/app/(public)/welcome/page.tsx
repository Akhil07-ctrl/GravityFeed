'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, Globe, Layers, Zap } from 'lucide-react';
import { signIn } from 'next-auth/react';

gsap.registerPlugin(ScrollTrigger);

export default function WelcomePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        gsap.fromTo(
            textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );

        gsap.fromTo(
            '.feature-card',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.feature-grid',
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 overflow-hidden relative">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-50" />
            </div>

            <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Gravity Feed
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => signIn()}
                        className="px-4 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
                    >
                        Log In
                    </button>
                    <button
                        onClick={() => signIn()}
                        className="px-4 py-2 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform"
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            <main className="relative z-10 pt-20 pb-32 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 ref={textRef} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        The World's Pulse, <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Personalized for You.
                        </span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-600 dark:text-gray-400 mb-8"
                    >
                        Curated news from thousands of sources. Powered by AI, designed for clarity.
                        The modern way to stay informed.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button
                            onClick={() => signIn()}
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
                        >
                            Start Reading
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* Feature Grid with Blurry Cards Effect */}
                <div className="feature-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    {[
                        {
                            icon: Globe,
                            title: "Global Coverage",
                            desc: "Access stories from top publishers worldwide, all in one place."
                        },
                        {
                            icon: Zap,
                            title: "Instant Updates",
                            desc: "Real-time breaking news alerts so you never miss a beat."
                        },
                        {
                            icon: Layers,
                            title: "Smart Curation",
                            desc: "Our algorithms learn what you love to bring you the stories that matter."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="feature-card p-8 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 text-white text-xl">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Preview Section - Locked/Blurred */}
                <div className="mt-40 relative">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Trending Stories</h2>
                        <p className="text-gray-500">Log in to unlock full access</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 opacity-50 blur-sm select-none pointer-events-none">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="bg-gray-200 dark:bg-gray-800 h-64 rounded-2xl animate-pulse" />
                        ))}
                        {[1, 2, 3, 4].map((n) => (
                            <div key={`b-${n}`} className="bg-gray-200 dark:bg-gray-800 h-64 rounded-2xl animate-pulse" />
                        ))}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center shadow-2xl">
                            <p className="text-xl font-bold mb-4">Join Gravity Feed</p>
                            <button
                                onClick={() => signIn()}
                                className="px-6 py-3 bg-white dark:bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
                            >
                                Unlock All News
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
