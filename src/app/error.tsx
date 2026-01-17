'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black px-4 text-center">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-full mb-6">
                <AlertCircle className="w-12 h-12 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                We encountered an error while loading this page. Please try again or return home.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                    Try again
                </button>
                <button
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
}
