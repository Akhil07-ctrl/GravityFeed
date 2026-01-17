'use client';

import { CloudSun, TrendingUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
    const router = useRouter();

    const handleCategoryClick = (category: string) => {
        router.push(`/?category=${category.toLowerCase()}`);
    };

    return (
        <aside className="w-80 hidden lg:block h-[calc(100vh-4rem)] sticky top-20 overflow-y-auto pl-6 pb-10">
            {/* Weather Widget Placeholder */}
            <a
                href="https://weather.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 text-white shadow-lg mb-8 hover:scale-[1.02] transition-transform cursor-pointer"
            >
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="font-bold text-lg">San Francisco</h3>
                        <p className="text-blue-100 text-sm">Sunny</p>
                    </div>
                    <CloudSun className="w-10 h-10" />
                </div>
                <div className="text-4xl font-bold mb-2">72°</div>
                <div className="text-sm text-blue-100 flex justify-between">
                    <span>H: 78°</span>
                    <span>L: 65°</span>
                </div>
            </a>

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
                            <button
                                onClick={() => handleCategoryClick(item.tag)}
                                className="group block w-full text-left cursor-pointer"
                            >
                                <span className="font-medium group-hover:text-blue-600 transition-colors">#{item.tag}</span>
                                <p className="text-xs text-gray-500">{item.posts} posts</p>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                    <li>
                        <Link href="/bookmarks" className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer group">
                            Bookmarks <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/?category=technology" className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer group">
                            Technology <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/?category=business" className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer group">
                            Business <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
