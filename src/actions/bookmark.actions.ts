'use server';

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/db";
import Bookmark from "@/models/Bookmark";
import { revalidatePath } from "next/cache";

export async function toggleBookmark(article: any) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return { error: "Unauthorized" };
    }

    await dbConnect();

    try {
        const existing = await Bookmark.findOne({
            userId: session.user.id,
            articleUrl: article.url,
        });

        if (existing) {
            await Bookmark.findByIdAndDelete(existing._id);
            revalidatePath('/bookmarks');
            return { isBookmarked: false };
        } else {
            await Bookmark.create({
                userId: session.user.id,
                articleUrl: article.url,
                title: article.title,
                description: article.description,
                urlToImage: article.urlToImage,
                source: article.source?.name,
                publishedAt: article.publishedAt,
            });
            revalidatePath('/bookmarks');
            return { isBookmarked: true };
        }
    } catch (error) {
        console.error("Bookmark error:", error);
        return { error: "Something went wrong" };
    }
}
