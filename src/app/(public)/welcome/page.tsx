'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Globe, Layers, Zap } from 'lucide-react';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

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
        <>
            <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 bg-gray-50/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Gravity Feed
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Link
                            href="/login"
                            className="px-4 py-2 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform"
                            prefetch={true}
                        >
                            Log In
                        </Link>
                        <Link
                            href="/register"
                            className="hidden sm:block px-4 py-2 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform"
                            prefetch={true}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            <div ref={containerRef} className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 relative">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-50" />
                </div>

                <main className="relative z-10 pt-20 pb-32 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 ref={textRef} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        The World&apos;s Pulse, <br />
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
                        <Link
                            href="/login"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
                            prefetch={true}
                        >
                            Start Reading
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
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

                {/* How It Works Section */}
                <div className="mt-40">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                        <p className="text-gray-500">Get started in three simple steps</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Create Your Account",
                                desc: "Sign up with Google or email in seconds. No credit card required."
                            },
                            {
                                step: "02",
                                title: "Personalize Your Feed",
                                desc: "Select your interests and favorite topics. Our AI learns from your reading habits."
                            },
                            {
                                step: "03",
                                title: "Stay Informed",
                                desc: "Get real-time updates, save articles, and discover stories that matter to you."
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-bold text-blue-600/10 dark:text-blue-400/10 mb-4">{item.step}</div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                                {i < 2 && (
                                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-8">
                                        <ArrowRight className="w-full h-full text-blue-600/30" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="mt-40">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
                        <h2 className="text-4xl font-bold mb-12">Trusted by Readers Worldwide</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { value: "10K+", label: "Active Users" },
                                { value: "500+", label: "News Sources" },
                                { value: "1M+", label: "Articles Read" },
                                { value: "50+", label: "Countries" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="text-5xl font-bold">{stat.value}</div>
                                    <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Preview Section - Locked/Blurred */}
                <div className="mt-40 relative">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Trending Stories</h2>
                        <p className="text-gray-500 dark:text-gray-400">Log in to unlock full access</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 opacity-40 blur-[2px] select-none pointer-events-none">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="bg-gray-300 dark:bg-gray-800 h-64 rounded-2xl animate-pulse" />
                        ))}
                        {[1, 2, 3, 4].map((n) => (
                            <div key={`b-${n}`} className="bg-gray-300 dark:bg-gray-800 h-64 rounded-2xl animate-pulse" />
                        ))}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="bg-white/95 dark:bg-black/90 backdrop-blur-lg p-8 rounded-3xl border border-gray-200 dark:border-gray-700 text-center shadow-2xl">
                            <p className="text-xl font-bold mb-4">Join Gravity Feed</p>
                            <Link
                                href="/login"
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                                prefetch={true}
                            >
                                Unlock All News
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            </div>
            <Footer />
        </>
    );
}
