'use client';

import { TrendingUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import WeatherWidget from './WeatherWidget';

export default function Sidebar() {
    const sidebarRef = useRef<HTMLElement>(null);
    const [topOffset, setTopOffset] = useState(96); // 96px = top-24
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sidebarRef.current) return;

            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const sidebarHeight = sidebarRef.current.offsetHeight;
            const stickyTop = 96; // Offset from top of viewport

            // If sidebar is shorter than viewport, just stay at top-24
            if (sidebarHeight + stickyTop <= viewportHeight) {
                setTopOffset(stickyTop);
                prevScrollY.current = scrollY;
                return;
            }

            const scrollDelta = scrollY - prevScrollY.current;
            const minTop = viewportHeight - sidebarHeight - 40; // pb-10 = 40px
            const maxTop = stickyTop;

            setTopOffset((prev) => {
                const newOffset = prev - scrollDelta;
                return Math.min(Math.max(newOffset, minTop), maxTop);
            });

            prevScrollY.current = scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <aside
            ref={sidebarRef}
            className="w-80 hidden lg:block sticky self-start pl-6 pb-10"
            style={{ top: `${topOffset}px` }}
        >
            <WeatherWidget className="mb-8" />


            {/* Trending Topics */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm mb-8">
                <div className="flex items-center gap-2 mb-4 text-gray-500 text-sm font-bold uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" /> Trending Now
                </div>
                <ul className="space-y-4">
                    {[
                        { tag: 'Technology', posts: '15k' },
                        { tag: 'Business', posts: '12k' },
                        { tag: 'Sports', posts: '10k' },
                        { tag: 'Entertainment', posts: '8k' },
                        { tag: 'Science', posts: '6k' }
                    ].map((item, i) => (
                        <li key={i}>
                            <Link
                                href={`/?category=${item.tag.toLowerCase()}`}
                                className="group block w-full text-left"
                            >
                                <span className="font-medium group-hover:text-blue-600 transition-colors">#{item.tag}</span>
                                <p className="text-xs text-gray-500">{item.posts} posts</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                    <li>
                        <Link href="/bookmarks" className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group">
                            Bookmarks <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/?category=technology" className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group">
                            Technology <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/?category=business" className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group">
                            Business <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
