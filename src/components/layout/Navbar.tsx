'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Search, Bell, Menu, LogOut, User as UserIcon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CATEGORIES } from '@/utils/constants';

export default function Navbar() {
    const { data: session } = useSession();
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

                {/* Logo & Mobile Menu */}
                <div className="flex items-center gap-4">
                    <button className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <Menu className="w-5 h-5" />
                    </button>
                    <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Gravity
                    </Link>
                </div>

                {/* Categories - Desktop */}
                <div className="hidden md:flex items-center gap-6 overflow-x-auto no-scrollbar">
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
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search news..."
                            className="pl-9 pr-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 transition-all focus:w-64"
                        />
                    </div>

                    <button className="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 rounded-full">
                        <Bell className="w-5 h-5" />
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center gap-2 p-1 pl-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all"
                        >
                            <span className="text-sm font-medium hidden sm:block max-w-[100px] truncate">
                                {session?.user?.name || 'User'}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden flex items-center justify-center text-white text-xs">
                                {session?.user?.image ? (
                                    <img src={session.user.image} alt="Avatar" className="w-full h-full object-cover" />
                                ) : (
                                    <UserIcon className="w-4 h-4" />
                                )}
                            </div>
                        </button>

                        <AnimatePresence>
                            {isProfileOpen && (
                                <motion.div
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
        </nav>
    );
}
