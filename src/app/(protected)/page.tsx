import { getTopHeadlines } from '@/lib/newsApi';
import HeroSection from '@/components/news/HeroSection';
import NewsCard from '@/components/news/NewsCard';
import InfiniteFeed from '@/components/news/InfiniteFeed';
import { Suspense } from 'react';

export default async function NewsFeed({ searchParams }: { searchParams: { category?: string } }) {
    const category = searchParams.category || 'general';

    let articles = [];
    try {
        const data = await getTopHeadlines(category);
        articles = data.articles || [];
    } catch (error) {
        console.error("Failed to fetch news", error);
        // Fallback or empty state
    }

    return (
        <div className="space-y-12">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold capitalize">{category === 'general' ? 'Top Stories' : category}</h1>
                <span className="text-sm text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>

            <Suspense fallback={<div className="h-96 bg-gray-100 rounded-2xl animate-pulse" />}>
                <HeroSection articles={articles} />
            </Suspense>

            {/* Rows for specific categories if on home */}
            {category === 'general' && (
                <div className="space-y-12">
                    {['Technology', 'Business', 'Sports', 'Entertainment'].map((cat) => (
                        <CategoryRow key={cat} category={cat} />
                    ))}
                    <InfiniteFeed />
                </div>
            )}
        </div>
    );
}

async function CategoryRow({ category }: { category: string }) {
    let articles = [];
    try {
        const data = await getTopHeadlines(category.toLowerCase(), 'us', 4);
        articles = data.articles || [];
    } catch (e) {
        return null;
    }

    if (articles.length === 0) return null;

    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-600 rounded-full" />
                    {category}
                </h2>
                <a href={`/?category=${category.toLowerCase()}`} className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {articles.map((article: any, i: number) => (
                    <NewsCard key={i} article={article} />
                ))}
            </div>
        </section>
    )
}
