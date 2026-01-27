import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
    '/welcome(.*)',
    '/login(.*)',
    '/register(.*)',
    '/api/webhooks(.*)',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/about(.*)',
    '/contact(.*)',
    '/cookie-policy(.*)',
    '/creator(.*)',
    '/disclaimer(.*)',
    '/privacy-policy(.*)',
    '/sources(.*)',
    '/terms(.*)',
]);

export default clerkMiddleware(async (auth, request) => {
    const { userId } = await auth();

    // Redirect unauthenticated users from root to welcome page
    if (request.nextUrl.pathname === '/' && !userId) {
        return NextResponse.redirect(new URL('/welcome', request.url));
    }

    // Protect all routes except public ones
    if (!isPublicRoute(request)) {
        await auth.protect();
    }

    // Define CSP
    const cspHeader = `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.clerk.accounts.dev https://clerk.com https://*.clerk.com https://challenges.cloudflare.com;
        connect-src 'self' https://*.clerk.accounts.dev https://clerk.com https://*.clerk.com https://newsapi.org https://challenges.cloudflare.com;
        img-src 'self' blob: data: https://*.clerk.com https://images.unsplash.com https://*.newsapi.org https://*.googleusercontent.com;
        worker-src 'self' blob:;
        style-src 'self' 'unsafe-inline';
        font-src 'self' data:;
        frame-src 'self' https://*.clerk.com https://challenges.cloudflare.com;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    const response = NextResponse.next();
    response.headers.set('Content-Security-Policy', cspHeader);
    return response;
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
