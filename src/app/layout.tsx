import './globals.css';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';

import Header from '@/components/custom/Header';
import { Toaster } from '@/components/ui/toaster';
import { getUserByEmail } from '@/services/firebase/collections/users';

export const metadata: Metadata = {
  title: 'Skillbattle',
  description: 'Desafie. Aprenda. Evolua.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  const user =
    (session &&
      session.user &&
      session.user.email &&
      (await getUserByEmail(session.user.email))) ||
    null;

  return (
    <html lang='pt-br' className='h-full'>
      <body className='flex flex-col h-full'>
        <Header session={session} user={user} />
        <main className='flex flex-1'>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
