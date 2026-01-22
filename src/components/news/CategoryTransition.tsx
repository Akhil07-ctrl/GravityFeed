'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface CategoryTransitionProps {
    category: string;
    children: ReactNode;
}

export default function CategoryTransition({ category, children }: CategoryTransitionProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                }}
                className="space-y-12"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
