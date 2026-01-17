'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

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

    return <SessionProvider>{children}</SessionProvider>;
};
