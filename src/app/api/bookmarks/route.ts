import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/db';
import Bookmark from '@/models/Bookmark';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const bookmarks = await Bookmark.find({ userId: session.user.id }).sort({ createdAt: -1 });

    return NextResponse.json(bookmarks);
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
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
            userId: session.user.id,
            articleUrl: article.url,
            title: article.title,
            description: article.description,
            urlToImage: article.urlToImage,
            source: article.source?.name,
            publishedAt: article.publishedAt,
        });

        return NextResponse.json(newBookmark);
    } catch (err: any) {
        if (err.code === 11000) {
            return NextResponse.json({ error: 'Already bookmarked' }, { status: 409 });
        }
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    await dbConnect();
    await Bookmark.findOneAndDelete({ _id: id, userId: session.user.id });

    return NextResponse.json({ success: true });
}
