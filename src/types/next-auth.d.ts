import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';

declare module 'next-auth' {
  // Extend session to hold the access_token
  interface Session {
    user: DefaultSession['user'] & { id: string; username: string };
  }

  //   interface User extends DefaultUser {
  //     test: false;
  //   }

  // interface DefaultUser {
  //   id: string;
  //   username: string;
  // }
}
