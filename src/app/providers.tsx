'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ToastProvider } from '@/components/ui/Toast';

export const Providers = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            // Cleanup if needed
            lenis.destroy();
        };
    }, []);

    return (
        <ClerkProvider>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
                <ToastProvider>
                    {children}
                </ToastProvider>
            </NextThemesProvider>
        </ClerkProvider>
    );
};
