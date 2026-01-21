'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, User, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { toggleBookmark } from '@/actions/bookmark.actions';
import { useState } from 'react';
import ShareMenu from '@/components/news/ShareMenu';

export default function ArticlePage() {
    const searchParams = useSearchParams();

    // Reconstruct article object from params
    const article = {
        title: searchParams.get('title') || 'Article Title',
        description: searchParams.get('description') || 'No description available',
        urlToImage: searchParams.get('image'),
        source: { name: searchParams.get('source') || 'Unknown Source' },
        publishedAt: searchParams.get('date') || new Date().toISOString(),
        url: searchParams.get('url') || '#',
        content: searchParams.get('content') || '',
    };

    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmark = async () => {
        const res = await toggleBookmark(article);
        if (res && res.isBookmarked !== undefined) {
            setIsBookmarked(res.isBookmarked);
        }
    };

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Feed
            </Link>

            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800"
            >
                <div className="relative h-[400px] md:h-[500px] w-full">
                    <Image
                        src={article.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop'}
                        alt={article.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        className="object-cover"
                        onError={(e) => {
                            // @ts-expect-error - Image element type mismatch
                            e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 mb-4 text-sm font-bold uppercase tracking-wider"
                        >
                            <span className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full">{article.source.name}</span>
                            <span className="flex items-center gap-1 text-gray-300">
                                <Calendar className="w-4 h-4" />
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-5xl font-bold leading-tight mb-4"
                        >
                            {article.title}
                        </motion.h1>
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex-1">
                            <p className="text-xl md:text-2xl font-serif text-gray-600 dark:text-gray-300 leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                                {article.description}
                            </p>

                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-loose">
                                {/* NewsAPI content is usually truncated. We display what we have and link out. */}
                                {article.content ? (
                                    <p>{article.content.replace(/\[\+\d+ chars\]/, '')}...</p>
                                ) : (
                                    <p>Read the full story on the original publication&apos;s website to get all the details/analysis...</p>
                                )}
                            </div>

                            <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 text-center">
                                <h3 className="text-xl font-bold mb-4">Continue Reading</h3>
                                <p className="text-gray-500 mb-6">Read the full article at {article.source.name}</p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
                                >
                                    Read Full Article <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Sidebar Actions */}
                        <div className="md:w-64 flex flex-col gap-4">
                            <button
                                onClick={handleBookmark}
                                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-medium transition-all ${isBookmarked ? 'bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-900/20 dark:border-blue-800' : 'bg-white border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'}`}
                            >
                                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                                {isBookmarked ? 'Saved' : 'Save Article'}
                            </button>

                            <ShareMenu
                                title={article.title}
                                text={article.description}
                                url={typeof window !== 'undefined' ? window.location.href : article.url}
                            />

                            <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
                                <h4 className="font-bold mb-4 text-sm uppercase text-gray-400">Published By</h4>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="font-bold">{article.source.name}</p>
                                        <p className="text-xs text-gray-500">Editorial Team</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.article>
        </div>
    );
}
