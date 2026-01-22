'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Link as LinkIcon, Twitter, Facebook, Linkedin, MessageCircle, X, Mail } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/components/ui/Toast';

interface ShareMenuProps {
    title: string;
    text: string;
    url: string;
    className?: string;
    trigger?: React.ReactNode;
}

export default function ShareMenu({ title, text, url, className = '', trigger }: ShareMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { showToast } = useToast();
    const menuRef = useRef<HTMLDivElement>(null);

    const shareData = {
        title,
        text,
        url: typeof window !== 'undefined' ? (url.startsWith('http') ? url : window.location.origin + url) : url,
    };

    const handleWebShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share(shareData);
                // Only show success if share was completed (not aborted)
                showToast('Shared successfully', 'success');
                setIsOpen(false);
            } catch (err) {
                // Don't show error for user cancellation (AbortError)
                if ((err as Error).name !== 'AbortError') {
                    console.error('Error sharing:', err);
                    showToast('Failed to share', 'error');
                }
                // If user cancels, just close without showing any message
            }
        } else {
            setIsOpen(true);
        }
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shareData.url);
            showToast('Link copied to clipboard', 'success');
            setIsOpen(false);
        } catch (err) {
            showToast('Failed to copy link', 'error');
        }
    };

    const socialPlatforms = [
        {
            name: 'WhatsApp',
            icon: <MessageCircle className="w-4 h-4" />,
            color: 'text-green-500',
            bg: 'hover:bg-green-50 dark:hover:bg-green-900/20',
            url: `https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`,
        },
        {
            name: 'X (Twitter)',
            icon: <Twitter className="w-4 h-4" />,
            color: 'text-black dark:text-white',
            bg: 'hover:bg-gray-100 dark:hover:bg-gray-800',
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`,
        },
        {
            name: 'Facebook',
            icon: <Facebook className="w-4 h-4" />,
            color: 'text-blue-600',
            bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`,
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-4 h-4" />,
            color: 'text-blue-700',
            bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`,
        },
        {
            name: 'Email',
            icon: <Mail className="w-4 h-4" />,
            color: 'text-gray-600 dark:text-gray-300',
            bg: 'hover:bg-gray-100 dark:hover:bg-gray-800',
            url: `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text + '\n\n' + shareData.url)}`,
        },
    ];

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`relative ${className}`} ref={menuRef}>
            {trigger ? (
                <div onClick={handleWebShare}>
                    {trigger}
                </div>
            ) : (
                <button
                    onClick={handleWebShare}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl font-medium hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors w-full"
                >
                    <Share2 className="w-5 h-5" /> Share
                </button>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                            <h4 className="font-bold text-sm">Share Story</h4>
                            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="p-2 grid grid-cols-2 gap-1">
                            {socialPlatforms.map((platform) => (
                                <a
                                    key={platform.name}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                        setIsOpen(false);
                                        // Note: We can't detect if user actually shared via these links,
                                        // so we don't show a success message
                                    }}
                                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${platform.bg}`}
                                >
                                    <div className={platform.color}>{platform.icon}</div>
                                    <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">{platform.name}</span>
                                </a>
                            ))}
                        </div>

                        <div className="p-2 border-t border-gray-100 dark:border-gray-800">
                            <button
                                onClick={copyToClipboard}
                                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-sm font-medium"
                            >
                                <LinkIcon className="w-4 h-4" /> Copy Link
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
