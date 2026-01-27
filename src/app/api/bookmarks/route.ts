import { auth } from '@clerk/nextjs/server';
import dbConnect from '@/lib/db';
import Bookmark from '@/models/Bookmark';
import { NextResponse } from 'next/server';

export async function GET() {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const bookmarks = await Bookmark.find({ userId }).sort({ createdAt: -1 });

    return NextResponse.json(bookmarks);
}

export async function POST(req: Request) {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { article } = body;

    if (!article) {
        return NextResponse.json({ error: 'Missing article data' }, { status: 400 });
    }

    await dbConnect();

    try {
        const newBookmark = await Bookmark.create({
            userId,
            articleUrl: article.url,
            title: article.title,
            description: article.description,
            urlToImage: article.urlToImage,
            source: article.source?.name,
            publishedAt: article.publishedAt,
        });

        return NextResponse.json(newBookmark);
    } catch (err: unknown) {
        const error = err as { code?: number };
        if (error.code === 11000) {
            return NextResponse.json({ error: 'Already bookmarked' }, { status: 409 });
        }
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    await dbConnect();
    await Bookmark.findOneAndDelete({ _id: id, userId });

    return NextResponse.json({ success: true });
}
