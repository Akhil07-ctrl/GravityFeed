import { NextResponse } from 'next/server';

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get('q');
        const pageSize = searchParams.get('pageSize') || '20';
        const page = searchParams.get('page') || '1';

        if (!query) {
            return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
        }

        if (!NEWS_API_KEY) {
            console.error('NEWS_API_KEY is not defined');
            return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
        }

        const res = await fetch(
            `${BASE_URL}/everything?q=${encodeURIComponent(query)}&pageSize=${pageSize}&page=${page}&apiKey=${NEWS_API_KEY}`,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) {
            throw new Error('Failed to fetch from News API');
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Search API error:', error);
        return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
    }
}
