'use client';

import { useEffect } from 'react';

export default function Loading() {
    useEffect(() => {
        // Add animation styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shimmer {
                0% { background-position: -1000px 0; }
                100% { background-position: 1000px 0; }
            }
            
            @keyframes float-in {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes pulse-glow {
                0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
                50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
            }
            
            @keyframes scroll-text {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
            
            .skeleton {
                background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
                background-size: 1000px 100%;
                animation: shimmer 2s infinite;
            }
            
            .skeleton-dark {
                background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
                background-size: 1000px 100%;
                animation: shimmer 2s infinite;
            }
        `;
        document.head.appendChild(style);
        
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 overflow-hidden">
            {/* Header Skeleton */}
            <div className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="skeleton dark:skeleton-dark h-8 w-32 rounded-lg"></div>
                </div>
            </div>

            {/* Main Loading Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Animated Logo/Text */}
                <div className="flex flex-col items-center justify-center py-20 gap-8">
                    <div style={{ animation: 'float-in 0.6s ease-out' }}>
                        <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                            Gravity Feed
                        </div>
                    </div>

                    {/* Loading Dots */}
                    <div className="flex gap-3">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="w-3 h-3 rounded-full bg-blue-600"
                                style={{
                                    animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`
                                }}
                            ></div>
                        ))}
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                        Fetching stories for you...
                    </p>
                </div>

                {/* Skeleton News Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            style={{ animation: `float-in 0.6s ease-out ${i * 0.1}s both` }}
                            className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                        >
                            {/* Image Skeleton */}
                            <div className="skeleton dark:skeleton-dark h-48 w-full"></div>

                            {/* Content Skeleton */}
                            <div className="p-4 space-y-3">
                                <div className="skeleton dark:skeleton-dark h-6 w-3/4 rounded"></div>
                                <div className="skeleton dark:skeleton-dark h-4 w-full rounded"></div>
                                <div className="skeleton dark:skeleton-dark h-4 w-5/6 rounded"></div>

                                {/* Meta Skeleton */}
                                <div className="flex gap-2 pt-2">
                                    <div className="skeleton dark:skeleton-dark h-4 w-24 rounded"></div>
                                    <div className="skeleton dark:skeleton-dark h-4 w-20 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Bounce Keyframes */}
            <style>{`
                @keyframes bounce {
                    0%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-12px);
                    }
                }
            `}</style>
        </div>
    );
}
