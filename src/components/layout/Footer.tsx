'use client';

import { useToast } from '@/components/ui/Toast';

import { useUser, useClerk } from '@clerk/nextjs';
import Link from 'next/link';

export default function Footer() {
    const { showToast } = useToast();

    const { user } = useUser();
    const { openSignIn } = useClerk();

    const footerLinks = {
        Company: [
            { name: 'About Us', href: '/about' },
            { name: 'Creator', href: '/creator' },
            { name: 'Careers', href: '/careers' },
            { name: 'Contact Us', href: '/contact' },
        ],
        News: [
            { name: 'Top Headlines', href: '/' },
            { name: 'Breaking News', href: '/?category=general' },
            { name: 'Trending', href: '/?category=technology' },
            { name: 'Editor’s Picks', href: '/?category=business' },
        ],
        Resources: [
            { name: 'API Credits', href: 'https://newsapi.org' },
            { name: 'Data Sources', href: '/sources' },
            { name: 'RSS Feeds', href: '/rss' },
            { name: 'Mobile App', href: '/app' },
        ],
        Legal: [
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms & Conditions', href: '/terms' },
            { name: 'Cookie Policy', href: '/cookie-policy' },
            { name: 'Disclaimer', href: '/disclaimer' },
        ],
    };


    const renderLink = (linkLink: { name: string; href: string }) => {
        const { name, href } = linkLink;

        // External Links
        if (href.startsWith('http')) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left w-full block"
                >
                    {name}
                </a>
            );
        }

        // Coming SOon
        if (href.startsWith('/careers') || href.startsWith('/app') || href.startsWith('/rss')) {
            return (
                <button
                    onClick={() => showToast(`${name} page is coming soon!`, 'info')}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left w-full"
                >
                    {name}
                </button>
            );
        }

        // News Links (Protected)
        if (href === '/' || href.startsWith('/?category=')) {
            return (
                <Link
                    href={href}
                    onClick={(e) => {
                        if (!user) {
                            e.preventDefault();
                            openSignIn({ forceRedirectUrl: '/' });
                        }
                    }}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left w-full block"
                >
                    {name}
                </Link>
            );
        }

        // Standard Public Links
        return (
            <Link
                href={href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left w-full block"
            >
                {name}
            </Link>
        );
    };

    return (
        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12 mt-auto" suppressHydrationWarning>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
                {/* Logo & Description */}
                <div className="lg:col-span-1">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                        Gravity Feed
                    </div>
                    <p className="text-sm text-gray-500">
                        The world&apos;s pulse, personalized for you. Powered by modern web technologies.
                    </p>
                </div>

                {/* Categories */}
                {Object.entries(footerLinks).map(([col, links]) => (
                    <div key={col}>
                        <h4 className="font-bold mb-4">{col}</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            {links.map((link) => (
                                <li key={link.name}>
                                    {renderLink(link)}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-400">
                <p suppressHydrationWarning>© {new Date().getFullYear()} Gravity Feed. All rights reserved.</p>
            </div>
        </footer>
    );
}
