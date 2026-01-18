'use client';

import { useEffect, useState } from 'react';
import NewsCard from '@/components/news/NewsCard';
import { Loader2 } from 'lucide-react';

interface Bookmark {
    _id: string;
    articleUrl: string;
    title: string;
    description: string;
    urlToImage: string;
    source: string;
    publishedAt: string;
}

export default function BookmarksPage() {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/bookmarks')
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setBookmarks(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin" /></div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">My Bookmarks</h1>

            {bookmarks.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                    You haven&apos;t saved any articles yet.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookmarks.map((b) => (
                        // Map bookmark data structure back to article structure expected by NewsCard
                        <NewsCard key={b._id} article={{
                            url: b.articleUrl,
                            title: b.title,
                            description: b.description,
                            urlToImage: b.urlToImage,
                            source: { name: b.source },
                            publishedAt: b.publishedAt
                        }} />
                    ))}
                </div>
            )}
        </div>
    );
}
