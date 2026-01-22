'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
    value: string; // e.g., "10K+", "500+", "1M+", "50+"
    duration?: number; // Animation duration in milliseconds
    className?: string;
}

export default function AnimatedCounter({ value, duration = 2000, className = '' }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    // Parse the value string to extract number and suffix
    const parseValue = (val: string) => {
        const match = val.match(/^([\d.]+)([KMB]?)\+?$/);
        if (!match) return { number: 0, suffix: '' };

        const num = parseFloat(match[1]);
        const suffix = match[2] || '';

        // Convert to actual number
        let actualNumber = num;
        if (suffix === 'K') actualNumber = num * 1000;
        else if (suffix === 'M') actualNumber = num * 1000000;
        else if (suffix === 'B') actualNumber = num * 1000000000;

        return { number: actualNumber, suffix, original: num };
    };

    const { number: targetNumber, suffix, original } = parseValue(value);

    useEffect(() => {
        const currentRef = counterRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
            observer.disconnect();
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = Date.now();
        const startValue = 0;
        const endValue = targetNumber;

        const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, targetNumber, duration]);

    // Format the display value
    const formatDisplay = (num: number) => {
        if (suffix === 'K') {
            const kValue = num / 1000;
            if (kValue >= 1) {
                // Show as K format (e.g., 1K, 2K, 10K)
                return `${Math.floor(kValue)}K`;
            } else {
                // Show as regular number until it reaches 1K
                return Math.floor(num).toString();
            }
        } else if (suffix === 'M') {
            const mValue = num / 1000000;
            if (mValue >= 1) {
                // Show as M format
                return `${Math.floor(mValue)}M`;
            } else {
                // Show as K format until it reaches 1M
                const kValue = num / 1000;
                if (kValue >= 1) {
                    return `${Math.floor(kValue)}K`;
                }
                return Math.floor(num).toString();
            }
        } else if (suffix === 'B') {
            const bValue = num / 1000000000;
            if (bValue >= 1) {
                return `${Math.floor(bValue)}B`;
            } else {
                const mValue = num / 1000000;
                if (mValue >= 1) {
                    return `${Math.floor(mValue)}M`;
                }
                const kValue = num / 1000;
                if (kValue >= 1) {
                    return `${Math.floor(kValue)}K`;
                }
                return Math.floor(num).toString();
            }
        }
        // No suffix, just show the number
        return Math.floor(num).toString();
    };

    return (
        <div ref={counterRef} className={className}>
            {formatDisplay(count)}{value.includes('+') && '+'}
        </div>
    );
}
