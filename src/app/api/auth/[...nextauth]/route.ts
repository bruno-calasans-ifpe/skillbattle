import { FirestoreAdapter } from '@auth/firebase-adapter';
import NextAuth from 'next-auth';
// import Nodemailer from "next-auth/providers/email";
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';

import { GOOGLE_CLIENT_ID, GOOGLE_SECRET_ID } from '@/config/env';
import firebaseApp from '@/services/firebase/app';

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
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async session({ session, token, user }) {
      console.log(session);
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/',
    verifyRequest: '/verify-email',
  },
});

export { handler as GET, handler as POST };
