import { getEverything } from '@/lib/newsApi';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get('q');
        const pageSize = searchParams.get('pageSize') || '20';
        const page = searchParams.get('page') || '1';

        if (!query) {
            return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
        }

        const data = await getEverything(
            query,
            parseInt(pageSize),
            parseInt(page)
        );

        return NextResponse.json(data);
    } catch (error) {
        console.error('Search API error:', error);
        return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
    }
}
