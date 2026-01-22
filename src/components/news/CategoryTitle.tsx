'use client';

import { motion } from 'framer-motion';

interface CategoryTitleProps {
    category: string;
}

export default function CategoryTitle({ category }: CategoryTitleProps) {
    return (
        <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
        >
            <h1 className="text-3xl font-bold capitalize">
                {category === 'general' ? 'Top Stories' : category}
            </h1>
        </motion.div>
    );
}
