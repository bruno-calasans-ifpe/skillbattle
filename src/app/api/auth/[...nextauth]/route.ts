import { FirestoreAdapter } from '@auth/firebase-adapter';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';

import { GOOGLE_CLIENT_ID, GOOGLE_SECRET_ID } from '@/config/enviroment';
import firebaseApp from '@/services/firebase/app';
import { updateUserAfterSignIn } from '@/services/firebase/collections/users';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_SECRET_ID,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 5 * 60, // 5 minutes
    }),
  ],
  adapter: FirestoreAdapter(firebaseApp),
  events: {
    async createUser({ user }) {
      await updateUserAfterSignIn(user);
    },
  },
  callbacks: {
    async jwt({ token, session, user }) {
      session = {
        user,
      };
      return token;
    },
    async session(params) {
      console.log('session callback = ', params);
      return params.session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, // 1 days
  },
  pages: {
    signIn: '/',
    verifyRequest: '/verify-email',
    error: '/auth-error',
  },
});

export { handler as GET, handler as POST };
