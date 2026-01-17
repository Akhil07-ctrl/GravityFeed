import Link from 'next/link';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black px-4 text-center">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-full mb-6">
                <FileQuestion className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                Sorry, we couldn't find the page you're looking for.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
