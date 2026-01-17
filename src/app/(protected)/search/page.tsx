'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import NewsCard from '@/components/news/NewsCard';
import { Loader2, SearchX } from 'lucide-react';
import { getEverything } from '@/lib/newsApi';

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!query) {
            setLoading(false);
            return;
        }

        setLoading(true);
        getEverything(query)
            .then((data) => {
                setArticles(data.articles || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError('Failed to fetch search results');
                setLoading(false);
            });
    }, [query]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <Loader2 className="w-12 h-12 animate-spin text-blue-600 mb-4" />
                <p className="text-gray-500">Searching...</p>
            </div>
        );
    }

    if (!query) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <SearchX className="w-16 h-16 text-gray-300 mb-4" />
                <h2 className="text-2xl font-bold mb-2">No search query</h2>
                <p className="text-gray-500">Please enter a search term in the search bar</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <SearchX className="w-16 h-16 text-red-300 mb-4" />
                <h2 className="text-2xl font-bold mb-2 text-red-600">{error}</h2>
                <p className="text-gray-500">Please try again later</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Search Results</h1>
                <p className="text-gray-500">
                    Found {articles.length} results for "<span className="text-blue-600 font-medium">{query}</span>"
                </p>
            </div>

            {articles.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
                    <SearchX className="w-16 h-16 text-gray-300 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">No results found</h2>
                    <p className="text-gray-500">Try searching with different keywords</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article: any, i: number) => (
                        <NewsCard key={i} article={article} />
                    ))}
                </div>
            )}
        </div>
    );
}
