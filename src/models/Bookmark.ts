import mongoose from 'mongoose';

const BookmarkSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    articleUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: String,
    urlToImage: String,
    source: String,
    publishedAt: Date,
}, { timestamps: true });

// Compound index to prevent duplicate bookmarks for same user/article
BookmarkSchema.index({ userId: 1, articleUrl: 1 }, { unique: true });

export default mongoose.models.Bookmark || mongoose.model('Bookmark', BookmarkSchema);
