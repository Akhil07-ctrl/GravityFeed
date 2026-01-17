import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {
        // Custom logic if needed
        return NextResponse.next()
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
        pages: {
            signIn: '/welcome', // Redirect to welcome if not authenticated, or /login
        },
    }
)

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/auth (auth API routes)
         * - welcome (public welcome page)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
          * - public images/assets
         */
        '/((?!api/auth|welcome|login|register|_next/static|_next/image|favicon.ico).*)',
    ],
}
