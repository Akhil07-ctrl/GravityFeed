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
            className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 block ${isLarge ? 'h-full min-h-[500px]' : isSmall ? 'h-24 flex gap-4' : 'h-full min-h-[380px]'
                }`}
            whileHover={{ y: -4 }}
        >
            <Link href={articleHref} className="absolute inset-0 z-0" />

            <div className={`relative ${isLarge ? 'h-[60%]' : isSmall ? 'w-24 h-24 shrink-0' : 'h-52'}`}>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                )}

                <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={handleBookmark}
                        className="p-2.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:scale-110"
                        aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                    >
                        <BookmarkIcon className={`w-4 h-4 ${isBookmarked ? 'fill-current text-blue-600 dark:text-blue-400' : ''}`} />
                    </button>
                    <ShareMenu
                        title={article.title}
                        text={article.description}
                        url={articleHref}
                        trigger={
                            <div className="p-2.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer">
                                <Share2 className="w-4 h-4" />
                            </div>
                        }
                    />
                </div>
            </div>

            <div className={`relative z-10 pointer-events-none ${isLarge ? 'absolute bottom-0 left-0 right-0 p-6 pb-8 text-white' : isSmall ? 'p-3 flex-1 flex flex-col justify-center' : 'p-5'}`}>
                <div className={`flex items-center gap-2 mb-3 ${isLarge ? 'text-xs' : 'text-xs'} font-semibold uppercase tracking-wide ${isLarge ? 'text-white/90' : 'text-blue-600 dark:text-blue-400'}`}>
                    <span className="truncate">{article.source?.name}</span>
                    <span className={`${isLarge ? 'text-white/60' : 'text-gray-400'}`}>•</span>
                    <span className={`${isLarge ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`} suppressHydrationWarning>
                        {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                </div>
                <h3 className={`font-bold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${isLarge ? 'text-2xl md:text-3xl mb-3 text-white group-hover:text-blue-200 line-clamp-3' : isSmall ? 'text-sm line-clamp-2' : 'text-xl mb-3 line-clamp-2'}`}>
                    {article.title}
                </h3>
                {!isSmall && (
                    <p className={`leading-relaxed ${isLarge ? 'text-base text-white/90 line-clamp-4' : 'text-sm text-gray-600 dark:text-gray-300 line-clamp-3'}`}>
                        {article.description || 'No description available.'}
                    </p>
                )}
            </div>
        </motion.div>
    );
}
