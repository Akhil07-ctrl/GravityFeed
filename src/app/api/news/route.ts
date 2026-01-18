import { getTopHeadlines, getEverything } from '@/lib/newsApi';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type') || 'top'; // top or everything
    const query = searchParams.get('q') || '';
    const category = searchParams.get('category') || 'general';
    const page = searchParams.get('page') || '1';

    try {
        let data;
        const pageNum = parseInt(page);
        if (type === 'everything') {
            data = await getEverything(query, 20, pageNum);
        } else {
            data = await getTopHeadlines(category, 'us', 20, pageNum);
        }

        return NextResponse.json(data);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}
