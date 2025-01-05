import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  if (!session) return redirect('/login');

  return children;
}
