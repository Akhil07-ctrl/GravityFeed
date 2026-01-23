'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Bookmark as BookmarkIcon, Share2 } from 'lucide-react';
import { toggleBookmark } from '@/actions/bookmark.actions';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/Toast';
import ShareMenu from './ShareMenu';

interface Article {
    title: string;
    description: string;
    urlToImage: string;
    source: { name: string };
    publishedAt: string;
    url: string;
}

export default function NewsCard({
    article,
    size = 'medium',
    priority = false,
    isBookmarkedInitially = false,
    onBookmarkToggle
}: {
    article: Article;
    size?: 'small' | 'medium' | 'large';
    priority?: boolean;
    isBookmarkedInitially?: boolean;
    onBookmarkToggle?: (isBookmarked: boolean) => void;
}) {
    const router = useRouter();
    const { showToast } = useToast();
    const isLarge = size === 'large';
    const isSmall = size === 'small';
    
    // Add touch detection for mobile devices
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    
    useEffect(() => {
        // Check if the device supports touch events
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(isTouch);
    }, []);
    const [isBookmarked, setIsBookmarked] = useState(isBookmarkedInitially);
    const [imageError, setImageError] = useState(false);

    // Sync state if prop changes (e.g. server re-fetch)
    useEffect(() => {
        setIsBookmarked(isBookmarkedInitially);
    }, [isBookmarkedInitially]);

    if (!article) return null;

    const handleBookmark = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const res = await toggleBookmark(article);

        if (res && res.error) {
            showToast(res.error, 'error');
            return;
        }

        if (res && res.isBookmarked !== undefined) {
            setIsBookmarked(res.isBookmarked);
            if (onBookmarkToggle) onBookmarkToggle(res.isBookmarked);
            router.refresh();
            showToast(
                res.isBookmarked ? 'Added to Bookmarks' : 'Removed from Bookmarks',
                'success'
            );
        }
    };

    // Construct internal URL with query params
    const slug = encodeURIComponent(
        article.title
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '') || 'article'
    );

    const params = new URLSearchParams({
        title: article.title || '',
        description: article.description || '',
        image: article.urlToImage || '',
        source: article.source?.name || '',
        date: article.publishedAt || '',
        url: article.url || '', // Original URL for "Read More"
        content: (article as unknown as { content?: string }).content || ''
    });

    const articleHref = `/news/${slug}?${params.toString()}`;

    return (
        <motion.div
            className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all block ${isLarge ? 'h-full min-h-[400px]' : isSmall ? 'h-24 flex gap-4' : 'h-full min-h-[300px]'
                }`}
            whileHover={{ y: -4 }}
        >
            <Link href={articleHref} className="absolute inset-0 z-0" />

            <div className={`relative ${isLarge ? 'h-2/3' : isSmall ? 'w-24 h-24 shrink-0' : 'h-48'}`}>
                <Image
                    src={imageError || !article.urlToImage 
                        ? 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop'
                        : article.urlToImage}
                    alt={article.title}
                    fill
                    priority={priority}
                    sizes={isLarge ? '(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px' : isSmall ? '100px' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'}
                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${!isSmall && 'rounded-t-2xl'}`}
                    onError={() => {
                        setImageError(true);
                    }}
                    unoptimized={imageError}
                />
                {isLarge && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                )}

                <div className="absolute top-2 right-2 z-10 flex flex-col gap-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={handleBookmark}
                        className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
                        aria-label={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
                    >
                        <BookmarkIcon className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                    <ShareMenu
                        title={article.title}
                        text={article.description}
                        url={articleHref}
                        trigger={
                            <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors cursor-pointer">
                                <Share2 className="w-4 h-4" />
                            </div>
                        }
                    />
                </div>
            </div>

            <div className={`p-4 relative z-10 pointer-events-none ${isLarge ? 'absolute bottom-0 left-0 right-0 text-gray-900 dark:text-white' : ''}`}>
                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    <span>{article.source?.name}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400" suppressHydrationWarning>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <h3 className={`font-bold leading-tight group-hover:text-blue-500 transition-colors ${isLarge ? 'text-2xl mb-2 text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-300' : isSmall ? 'text-sm' : 'text-lg mb-2'}`}>
                    {article.title}
                </h3>
                {!isSmall && (
                    <p className={`text-sm line-clamp-2 ${isLarge ? 'text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>
                        {article.description}
                    </p>
                )}
            </div>
        </motion.div>
    );
}
