import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this user.'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email for this user.'],
        unique: true,
    },
    password: {
        type: String,
        // Required only for credentials provider, not google
        required: false,
    },
    image: {
        type: String,
    },
    preferences: {
        categories: [String],
        theme: String,
    },
    role: {
        type: String,
        default: 'user',
    },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
