import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware() {
        // Custom logic if needed
        return NextResponse.next()
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                // If there's a token, the user is authorized
                if (token) return true;

                // If not authorized, NextAuth will redirect based on the pages config
                return false;
            },
        },
        pages: {
            signIn: '/welcome', // Redirect unauthenticated users to welcome page
        },
    }
)

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (all API routes including auth)
         * - welcome (public welcome page)
         * - login (custom login page)
         * - register (custom register page)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public images/assets
         */
        '/((?!api|welcome|login|register|_next/static|_next/image|favicon.ico|public).*)',
    ],
}

