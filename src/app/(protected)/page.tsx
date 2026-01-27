import { getTopHeadlines } from '@/lib/newsApi';
import HeroSection from '@/components/news/HeroSection';
import NewsCard from '@/components/news/NewsCard';
import InfiniteFeed from '@/components/news/InfiniteFeed';
import TimeGreeting from '@/components/layout/TimeGreeting';
import CategoryTransition from '@/components/news/CategoryTransition';
import CategoryTitle from '@/components/news/CategoryTitle';
import { Suspense } from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import dbConnect from '@/lib/db';
import Bookmark from '@/models/Bookmark';

interface BookmarkDoc {
    articleUrl: string;
}

interface Article {
    title: string;
    description: string;
    urlToImage: string;
    source: { name: string };
    publishedAt: string;
    url: string;
}

export default async function NewsFeed({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    const resolvedParams = await searchParams;
    const category = resolvedParams.category || 'general';
    const { userId } = await auth();
    const user = await currentUser();

    let articles = [];
    let bookmarkedUrls: string[] = [];

    try {
        const data = await getTopHeadlines(category);
        articles = data.articles || [];

        if (userId) {
            try {
                await dbConnect();
                const bookmarks = await Bookmark.find({ userId })
                    .select('articleUrl')
                    .lean() as BookmarkDoc[];
                bookmarkedUrls = bookmarks.map(b => b.articleUrl);
            } catch (err) {
                console.error("Error fetching bookmarks:", err);
            }
        }
    } catch (error) {
        console.error("Failed to fetch news or bookmarks", error);
    }

    return (
        <div>
            <TimeGreeting username={user?.firstName || user?.fullName || 'User'} />

            <CategoryTransition category={category}>
                <CategoryTitle category={category} />

                <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse" />}>
                    <HeroSection articles={articles} bookmarkedUrls={bookmarkedUrls} />
                </Suspense>

                {/* Show more news for specific categories */}
                {category !== 'general' && (
                    <InfiniteFeed category={category} />
                )}

                {/* Rows for specific categories if on home */}
                {category === 'general' && (
                    <div className="space-y-12">
                        {['Technology', 'Business', 'Sports', 'Entertainment'].map((cat) => (
                            <CategoryRow key={cat} category={cat} bookmarkedUrls={bookmarkedUrls} />
                        ))}
                        <InfiniteFeed />
                    </div>
                )}
            </CategoryTransition>
        </div>
    );
}

async function CategoryRow({ category, bookmarkedUrls = [] }: { category: string, bookmarkedUrls?: string[] }) {
    let articles = [];
    try {
        const data = await getTopHeadlines(category.toLowerCase(), 'us', 4);
        articles = data.articles || [];
    } catch {
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
                <a href={`/?category=${category.toLowerCase()}`} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {articles.map((article: Article, i: number) => (
                    <NewsCard
                        key={i}
                        article={article}
                        isBookmarkedInitially={bookmarkedUrls.includes(article.url)}
                    />
                ))}
            </div>
        </section>
    )
}
