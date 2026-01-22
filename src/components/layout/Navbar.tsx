'use client';

import Link from 'next/link';
import { useSession, signOut, signIn } from 'next-auth/react';
import { Search, Menu, LogOut, User as UserIcon, X, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

import { CATEGORIES } from '@/utils/constants';
import { ThemeToggle } from './ThemeToggle';
import { getEverything } from '@/lib/newsApi';

interface SearchSuggestion {
    title: string;
    query: string;
}

const SEARCH_PLACEHOLDERS = [
    'Search news...',
    'Find breaking news...',
    'Explore stories...',
    'Discover headlines...',
    'Search by topic...',
    'Find trending topics...',
];

export default function Navbar() {
    const { data: session } = useSession();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
    const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
    const router = useRouter();
    const pathname = usePathname();
    const searchInputRef = useRef<HTMLInputElement>(null);
    const suggestionsRef = useRef<HTMLDivElement>(null);
    const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
    const placeholderTimerRef = useRef<NodeJS.Timeout | null>(null);
    const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const profileButtonRef = useRef<HTMLButtonElement>(null);
    const profileDropdownRef = useRef<HTMLDivElement>(null);

    const handleSearch = (e: React.FormEvent | string) => {
        if (typeof e === 'string') {
            // Handle suggestion click
            const query = e;
            router.push(`/search?q=${encodeURIComponent(query)}`);
            setSearchQuery('');
            setSuggestions([]);
            setShowSuggestions(false);
            setSelectedSuggestionIndex(-1);
        } else {
            // Handle form submit
            e.preventDefault();
            if (searchQuery.trim()) {
                router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                setSearchQuery('');
                setSuggestions([]);
                setShowSuggestions(false);
                setSelectedSuggestionIndex(-1);
            }
        }
    };

    const fetchSuggestions = async (query: string) => {
        if (query.length < 2) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }

        setIsLoadingSuggestions(true);
        try {
            const data = await getEverything(query, 5);
            const articles = data.articles || [];

            // Extract unique titles as suggestions
            const uniqueTitles = new Set<string>();
            const suggestionsList: SearchSuggestion[] = [];

            for (const article of articles) {
                if (uniqueTitles.size >= 5) break;
                if (article.title && !uniqueTitles.has(article.title)) {
                    uniqueTitles.add(article.title);
                    suggestionsList.push({
                        title: article.title.length > 50 ? article.title.substring(0, 50) + '...' : article.title,
                        query: query
                    });
                }
            }

            setSuggestions(suggestionsList);
            setShowSuggestions(true);
            setSelectedSuggestionIndex(-1);
        } catch (error) {
            console.error('Failed to fetch suggestions:', error);
            setSuggestions([]);
        } finally {
            setIsLoadingSuggestions(false);
        }
    };

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        setSelectedSuggestionIndex(-1);

        // Clear previous debounce timer
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }

        // Set new debounce timer
        debounceTimerRef.current = setTimeout(() => {
            fetchSuggestions(query);
        }, 300);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!showSuggestions || suggestions.length === 0) {
            if (e.key === 'Enter') {
                if (searchQuery.trim()) {
                    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                    setSearchQuery('');
                    setSuggestions([]);
                    setShowSuggestions(false);
                    setSelectedSuggestionIndex(-1);
                }
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedSuggestionIndex(prev =>
                    prev < suggestions.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedSuggestionIndex >= 0) {
                    handleSearch(searchQuery);
                } else if (searchQuery.trim()) {
                    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                    setSearchQuery('');
                    setSuggestions([]);
                    setShowSuggestions(false);
                    setSelectedSuggestionIndex(-1);
                }
                break;
            case 'Escape':
                e.preventDefault();
                setShowSuggestions(false);
                setSuggestions([]);
                break;
            default:
                break;
        }
    };

    // Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchInputRef.current &&
                suggestionsRef.current &&
                !searchInputRef.current.contains(event.target as Node) &&
                !suggestionsRef.current.contains(event.target as Node)
            ) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu and profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            // Close mobile menu if clicking outside
            if (
                isMobileMenuOpen &&
                mobileMenuButtonRef.current &&
                mobileMenuRef.current &&
                !mobileMenuButtonRef.current.contains(target) &&
                !mobileMenuRef.current.contains(target)
            ) {
                setIsMobileMenuOpen(false);
            }

            // Close profile dropdown if clicking outside
            if (
                isProfileOpen &&
                profileButtonRef.current &&
                profileDropdownRef.current &&
                !profileButtonRef.current.contains(target) &&
                !profileDropdownRef.current.contains(target)
            ) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen, isProfileOpen]);

    // Rotate search placeholder
    useEffect(() => {
        placeholderTimerRef.current = setInterval(() => {
            setCurrentPlaceholderIndex((prev) => (prev + 1) % SEARCH_PLACEHOLDERS.length);
        }, 3000); // Change placeholder every 3 seconds

        return () => {
            if (placeholderTimerRef.current) {
                clearInterval(placeholderTimerRef.current);
            }
        };
    }, []);

    const handleMobileMenuItemClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

                {/* Logo & Mobile Menu */}
                <div className="flex items-center gap-4">
                    <button
                        ref={mobileMenuButtonRef}
                        onClick={() => {
                            const newState = !isMobileMenuOpen;
                            setIsMobileMenuOpen(newState);
                            if (newState) setIsProfileOpen(false);
                        }}
                        className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                    <Link
                        href="/"
                        onClick={(e) => {
                            if (pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                router.refresh();
                            }
                        }}
                        className="flex items-center gap-2"
                        aria-label="Gravity Feed"
                    >
                        <Image
                            src="/logo.svg"
                            alt="Gravity Feed logo"
                            width={28}
                            height={28}
                            className="shrink-0"
                            priority
                        />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Gravity Feed
                        </span>
                    </Link>
                </div>

                {/* Categories - Desktop */}
                <div className="hidden lg:flex items-center gap-6 overflow-x-auto no-scrollbar">
                    {CATEGORIES.map((cat) => (
                        <Link
                            key={cat}
                            href={cat === 'Home' ? '/' : `/?category=${cat.toLowerCase()}`}
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
                        >
                            {cat}
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <div className="relative hidden sm:block">
                        <form onSubmit={handleSearch} className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                onKeyDown={handleKeyDown}
                                onFocus={() => searchQuery.length >= 2 && setShowSuggestions(true)}
                                className="pl-9 pr-10 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 transition-all focus:w-64"
                                autoComplete="off"
                            />
                            {!searchQuery && (
                                <div className="absolute left-9 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden h-5 right-10">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentPlaceholderIndex}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="text-sm text-gray-400 absolute left-0 whitespace-nowrap"
                                        >
                                            {SEARCH_PLACEHOLDERS[currentPlaceholderIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            )}
                            {isLoadingSuggestions && (
                                <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-gray-400 pointer-events-none" />
                            )}
                        </form>

                        {/* Search Suggestions Dropdown */}
                        <AnimatePresence>
                            {showSuggestions && suggestions.length > 0 && (
                                <motion.div
                                    ref={suggestionsRef}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg z-50 overflow-hidden"
                                >
                                    <div className="max-h-64 overflow-y-auto">
                                        {suggestions.map((suggestion, index) => (
                                            <motion.button
                                                key={index}
                                                onClick={() => {
                                                    handleSearch(searchQuery);
                                                    setShowSuggestions(false);
                                                }}
                                                onMouseEnter={() => setSelectedSuggestionIndex(index)}
                                                className={`w-full text-left px-4 py-3 text-sm transition-colors border-b border-gray-100 dark:border-gray-800 last:border-b-0 ${selectedSuggestionIndex === index
                                                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                                    }`}
                                            >
                                                <div className="flex items-start gap-2">
                                                    <Search className="w-3 h-3 mt-1 flex-shrink-0" />
                                                    <span className="truncate">{suggestion.title}</span>
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <ThemeToggle />

                    <div className="relative">
                        <button
                            ref={profileButtonRef}
                            onClick={() => {
                                const newState = !isProfileOpen;
                                setIsProfileOpen(newState);
                                if (newState) setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-2 p-1 pl-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all"
                        >
                            <span className="text-sm font-medium hidden sm:block max-w-[100px] truncate">
                                {session?.user?.name || 'User'}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden flex items-center justify-center text-white text-xs">
                                {session?.user?.image ? (
                                    <Image src={session.user.image} alt="Avatar" width={32} height={32} className="w-full h-full object-cover" />
                                ) : (
                                    <UserIcon className="w-4 h-4" />
                                )}
                            </div>
                        </button>

                        <AnimatePresence>
                            {isProfileOpen && (
                                <motion.div
                                    ref={profileDropdownRef}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden p-2"
                                >
                                    <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 mb-2">
                                        <p className="text-sm font-bold">{session?.user?.name}</p>
                                        <p className="text-xs text-gray-500 truncate">{session?.user?.email}</p>
                                    </div>
                                    <Link href="/bookmarks" className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <span className="w-4 h-4">🔖</span> Bookmarks
                                    </Link>
                                    <button
                                        onClick={() => signOut({ callbackUrl: '/welcome' })}
                                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                                    >
                                        <LogOut className="w-4 h-4" /> Sign Out
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        ref={mobileMenuRef}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-4 py-4 max-w-7xl mx-auto">
                            {/* Search in Mobile */}
                            <div className="mb-4 relative">
                                <form onSubmit={handleSearch} className="relative">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={handleSearchInputChange}
                                            onKeyDown={handleKeyDown}
                                            className="w-full pl-9 pr-10 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            autoComplete="off"
                                        />
                                        {!searchQuery && (
                                            <div className="absolute left-9 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden h-5 right-10">
                                                <AnimatePresence mode="wait">
                                                    <motion.span
                                                        key={currentPlaceholderIndex}
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -20, opacity: 0 }}
                                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                                        className="text-sm text-gray-400 absolute left-0 whitespace-nowrap"
                                                    >
                                                        {SEARCH_PLACEHOLDERS[currentPlaceholderIndex]}
                                                    </motion.span>
                                                </AnimatePresence>
                                            </div>
                                        )}
                                        {isLoadingSuggestions && (
                                            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-gray-400 pointer-events-none" />
                                        )}
                                    </div>
                                </form>

                                {/* Mobile Search Suggestions */}
                                <AnimatePresence>
                                    {showSuggestions && suggestions.length > 0 && (
                                        <motion.div
                                            ref={suggestionsRef}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg z-50 overflow-hidden"
                                        >
                                            <div className="max-h-64 overflow-y-auto">
                                                {suggestions.map((suggestion, index) => (
                                                    <motion.button
                                                        key={index}
                                                        onClick={() => {
                                                            handleSearch(searchQuery);
                                                            setShowSuggestions(false);
                                                            handleMobileMenuItemClick();
                                                        }}
                                                        className={`w-full text-left px-4 py-3 text-sm transition-colors border-b border-gray-100 dark:border-gray-800 last:border-b-0 ${selectedSuggestionIndex === index
                                                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                                            }`}
                                                    >
                                                        <div className="flex items-start gap-2">
                                                            <Search className="w-3 h-3 mt-1 flex-shrink-0" />
                                                            <span className="truncate">{suggestion.title}</span>
                                                        </div>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Categories in Mobile */}
                            <div className="space-y-2 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 py-2">Categories</div>
                                {CATEGORIES.map((cat) => (
                                    <Link
                                        key={cat}
                                        href={cat === 'Home' ? '/' : `/?category=${cat.toLowerCase()}`}
                                        onClick={handleMobileMenuItemClick}
                                        className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile Menu Actions */}
                            <div className="space-y-2">
                                {!session && (
                                    <button
                                        onClick={() => {
                                            signIn();
                                            handleMobileMenuItemClick();
                                        }}
                                        className="w-full flex items-center gap-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Sign In
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
