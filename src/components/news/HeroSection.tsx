'use client';

import NewsCard from './NewsCard';

interface Article {
    title: string;
    description: string;
    urlToImage: string;
    source: { name: string };
    publishedAt: string;
    url: string;
}

export default function HeroSection({
    articles,
    bookmarkedUrls = []
}: {
    articles: Article[];
    bookmarkedUrls?: string[];
}) {
    if (!articles || articles.length === 0) return null;

    const mainArticle = articles[0];
    const sideArticles = articles.slice(1, 4);

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2">
                <NewsCard
                    article={mainArticle}
                    size="large"
                    priority={true}
                    isBookmarkedInitially={bookmarkedUrls.includes(mainArticle.url)}
                />
            </div>
            <div className="flex flex-col gap-6">
                {sideArticles.map((article: Article, i: number) => (
                    <NewsCard
                        key={i}
                        article={article}
                        size="small"
                        isBookmarkedInitially={bookmarkedUrls.includes(article.url)}
                    />
                ))}
            </div>
        </section>
    );
}
