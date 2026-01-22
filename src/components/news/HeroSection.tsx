'use client';

import { motion } from 'framer-motion';
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
            <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                <NewsCard
                    article={mainArticle}
                    size="large"
                    priority={true}
                    isBookmarkedInitially={bookmarkedUrls.includes(mainArticle.url)}
                />
            </motion.div>
            <div className="flex flex-col gap-6">
                {sideArticles.map((article: Article, i: number) => (
                    <motion.div
                        key={article.url || i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    >
                        <NewsCard
                            article={article}
                            size="small"
                            isBookmarkedInitially={bookmarkedUrls.includes(article.url)}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
