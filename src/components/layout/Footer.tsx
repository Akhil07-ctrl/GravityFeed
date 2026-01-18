export default function Footer() {
    const footerLinks = {
        Company: [
            { name: 'About Us', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Blog', href: '#' },
        ],
        Resources: [
            { name: 'Help Center', href: '#' },
            { name: 'Documentation', href: '#' },
            { name: 'API', href: '#' },
        ],
        Legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
        ],
    };

    return (
        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                        Gravity Feed
                    </div>
                    <p className="text-sm text-gray-500">
                        The world&apos;s pulse, personalized for you. Powered by modern web technologies.
                    </p>
                </div>

                {Object.entries(footerLinks).map(([col, links]) => (
                    <div key={col}>
                        <h4 className="font-bold mb-4">{col}</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {link.name}
                                    </a>
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
