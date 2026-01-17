'use client';
import NewsCard from './NewsCard';

export default function HeroSection({ articles }: { articles: any[] }) {
    if (!articles || articles.length === 0) return null;

    const mainArticle = articles[0];
    const sideArticles = articles.slice(1, 4);

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2">
                <NewsCard article={mainArticle} size="large" />
            </div>
            <div className="flex flex-col gap-6">
                {sideArticles.map((article: any, i: number) => (
                    <NewsCard key={i} article={article} size="small" />
                ))}
            </div>
        </section>
    );
}
