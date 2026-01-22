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

export default function InfiniteFeed() {
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
            await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay

            // Mock data for infinite scroll demo since we might hit API limits quickly
            const currentPage = pageRef.current;
            const newArticles: Article[] = Array(4).fill(null).map((_, i) => ({
                title: `More News Story ${currentPage}-${i}`,
                description: "This is a dynamically loaded story to demonstrate infinite scrolling capabilities.",
                urlToImage: `https://picsum.photos/seed/${currentPage}-${i}/400/300`,
                source: { name: "Gravity Feed" },
                publishedAt: new Date().toISOString(),
                url: "#"
            }));

            setArticles(prev => [...prev, ...newArticles]);
            setPage(prev => {
                const nextPage = prev + 1;
                pageRef.current = nextPage;
                return nextPage;
            });
        } catch {
            hasMoreRef.current = false;
            setHasMore(false);
        } finally {
            loadingRef.current = false;
            setLoading(false);
        }
    }, []); // Empty dependencies - using refs instead

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
                For You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {articles.map((article, i) => (
                    <NewsCard key={`${article.title}-${i}`} article={article} />
                ))}
            </div>
            <div ref={loaderRef} className="py-10 flex justify-center">
                {loading && <Loader2 className="w-8 h-8 animate-spin text-blue-600" />}
            </div>
        </section>
    );
}
