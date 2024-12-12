import type { Metadata } from "next";
import "./globals.css";

import { getServerSession } from "next-auth/next";
import Header from "@/components/custom/Header";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Skillbattle",
  description: "Desafie. Aprenda. Evolua.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="pt-br" className="h-full">
      <body className="flex flex-col h-full">
        <Header session={session} />
        <main className="flex flex-1">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
