import { useState, useEffect } from 'react';

interface Article {
    title: string;
    description: string;
    urlToImage: string;
    source: { name: string };
    publishedAt: string;
    url: string;
}

export function useNews(category: string = 'general') {
    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch(`/api/news?category=${category}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                
                const data = await response.json();
                setNews(data.articles || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                setNews([]);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category]);

    return { news, loading, error };
}
