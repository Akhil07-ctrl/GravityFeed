const NEWS_API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async (category: string = 'general', country: string = 'us', pageSize: number = 20, page: number = 1) => {
    if (!NEWS_API_KEY) throw new Error('NEWS_API_KEY is not defined');

    const res = await fetch(`${BASE_URL}/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${NEWS_API_KEY}`, {
        next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!res.ok) {
        throw new Error('Failed to fetch news');
    }

    return res.json();
};

export const getEverything = async (query: string, pageSize: number = 20, page: number = 1) => {
    if (!NEWS_API_KEY) throw new Error('NEWS_API_KEY is not defined');

    const res = await fetch(`${BASE_URL}/everything?q=${query}&pageSize=${pageSize}&page=${page}&apiKey=${NEWS_API_KEY}`, {
        next: { revalidate: 3600 }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch news');
    }

    return res.json();
};
