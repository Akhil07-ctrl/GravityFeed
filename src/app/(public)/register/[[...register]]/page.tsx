'use client';

import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md z-10"
            >
                <div className="text-center mb-8">
                    <Link href="/welcome" className="inline-block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                        Gravity Feed
                    </Link>
                    <p className="text-gray-500 text-sm">Create your account to get started.</p>
                </div>

                <div className="flex justify-center">
                    <SignUp
                        routing="path"
                        path="/register"
                        forceRedirectUrl="/"
                        appearance={{
                            elements: {
                                rootBox: "w-full",
                                card: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl",
                            }
                        }}
                    />
                </div>

                <p className="text-center mt-6 text-sm text-gray-500">
                    Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Sign in</Link>
                </p>
            </motion.div>
        </div>
    );
}
