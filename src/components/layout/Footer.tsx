'use client';

import { useToast } from '@/components/ui/Toast';
import { useRouter } from 'next/navigation';

export default function Footer() {
    const { showToast } = useToast();
    const router = useRouter();

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


    const handleLinkClick = (linkName: string, href: string) => {
        // Check if it's an external link
        if (href.startsWith('http')) {
            window.open(href, '_blank', 'noopener,noreferrer');
        } else if (href.startsWith('/careers') || href.startsWith('/app') || href.startsWith('/rss')) {
            // Pages not yet implemented - show coming soon toast
            showToast(`${linkName} page is coming soon!`, 'info');
        } else if (href.startsWith('/privacy-policy') || href.startsWith('/terms') || href.startsWith('/cookie-policy') || href.startsWith('/disclaimer') || href.startsWith('/sources') || href.startsWith('/about') || href.startsWith('/creator') || href.startsWith('/contact')) {
            // Legal pages, resource pages, and company pages - navigate directly
            router.push(href);
        } else if (href === '/' || href.startsWith('/?category=')) {
            // News links - navigate to news page with category
            router.push(href);
        } else {
            // Other pages - show coming soon toast
            showToast(`${linkName} page is coming soon!`, 'info');
        }
    };

    return (
        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                <div className="xl:col-span-1">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                        Gravity Feed
                    </div>
                    <p className="text-sm text-gray-500">
                        The world&apos;s pulse, personalized for you. Powered by modern web technologies.
                    </p>
                </div>

                {Object.entries(footerLinks).map(([col, links]) => (
                    <div key={col} className="xl:col-span-1">
                        <h4 className="font-bold mb-4">{col}</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => handleLinkClick(link.name, link.href)}
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left w-full"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Gravity Feed. All rights reserved.
            </div>
        </footer>
    );
}
