import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                await dbConnect();
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    return null;
                }

                // Check if user has a password (google users might not)
                if (!user.password) {
                    return null;
                }

                const isMatch = await bcrypt.compare(credentials.password, user.password);

                if (!isMatch) {
                    return null;
                }

                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    image: user.image,
                };
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            try {
                if (account?.provider === 'google') {
                    await dbConnect();
                    const email = user.email;
                    if (!email) {
                        console.error("No email found in google profile");
                        return false;
                    }

                    const existingUser = await User.findOne({ email });
                    if (!existingUser) {
                        await User.create({
                            name: user.name || 'Google User',
                            email: email,
                            image: user.image || '',
                            password: '', // No password for google users
                        });
                        console.log("New Google user created:", email);
                    }
                }
                return true;
            } catch (error) {
                console.error("Error in signIn callback:", error);
                return false;
            }
        },
        async redirect({ url, baseUrl }) {
            // After sign in, redirect to home page
            if (url.startsWith(baseUrl)) {
                return url;
            }
            // Default redirect to home
            return baseUrl;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
        async jwt({ token, user, account }) {
            // For OAuth providers (like Google), fetch the MongoDB user by email
            // to get the correct _id
            if (account?.provider === 'google' && token.email) {
                await dbConnect();
                const dbUser = await User.findOne({ email: token.email });
                if (dbUser) {
                    token.id = dbUser._id.toString();
                }
            } else if (user) {
                // For credentials provider or when user object exists
                token.id = user.id;
            }
            return token;
        }
    },
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login', // Custom login page
    },
    secret: process.env.NEXTAUTH_SECRET,
};
