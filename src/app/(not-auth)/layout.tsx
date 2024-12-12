import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function NotAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  if (session) return redirect("/");

  return children;
}
