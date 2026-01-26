'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import NewsCard from './NewsCard';
import { Loader2 } from 'lucide-react';

interface Article {
    title: string;
    description: string;
    urlToImage: string;
    source: { name: string };
    publishedAt: string;
    url: string;
}

export default function InfiniteFeed({ category }: { category?: string }) {
    const [articles, setArticles] = useState<Article[]>([]);
    const [page, setPage] = useState(2); // Start from page 2 as page 1 is often Hero
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef<HTMLDivElement>(null);
    const loadingRef = useRef(false);
    const hasMoreRef = useRef(true);
    const pageRef = useRef(2);

    // Keep refs in sync with state
    useEffect(() => {
        loadingRef.current = loading;
        hasMoreRef.current = hasMore;
        pageRef.current = page;
    }, [loading, hasMore, page]);

    const fetchMore = useCallback(async () => {
        if (loadingRef.current || !hasMoreRef.current) return;
        
        loadingRef.current = true;
        setLoading(true);

        try {
            const currentPage = pageRef.current;
            const categoryParam = category || 'general';
            
            const response = await fetch(`/api/news?category=${categoryParam}&page=${currentPage}`);
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
            
            const data = await response.json();
            const newArticles = data.articles || [];

            if (newArticles.length === 0) {
                hasMoreRef.current = false;
                setHasMore(false);
                return;
            }

            setArticles(prev => [...prev, ...newArticles]);
            setPage(prev => {
                const nextPage = prev + 1;
                pageRef.current = nextPage;
                return nextPage;
            });
        } catch (error) {
            console.error('Failed to fetch more news:', error);
            hasMoreRef.current = false;
            setHasMore(false);
        } finally {
            loadingRef.current = false;
            setLoading(false);
        }
    }, [category]);

    useEffect(() => {
        const currentLoader = loaderRef.current;
        if (!currentLoader) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loadingRef.current && hasMoreRef.current) {
                fetchMore();
            }
        }, {
            threshold: 0.1
        });

        observer.observe(currentLoader);

        return () => {
            observer.disconnect();
        };
    }, [fetchMore]);

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-600 rounded-full" />
                {category ? `More ${category.charAt(0).toUpperCase() + category.slice(1)} News` : 'For You'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {articles.map((article, i) => (
                    <NewsCard key={`${article.url}-${i}`} article={article} />
                ))}
            </div>
            <div ref={loaderRef} className="py-10 flex justify-center">
                {loading && <Loader2 className="w-8 h-8 animate-spin text-blue-600" />}
            </div>
        </section>
    );
}
