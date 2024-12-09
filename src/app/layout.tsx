import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/custom/Header";

export const metadata: Metadata = {
  title: "Skillbattle",
  description: "Desafie. Aprenda. Evolua.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full">
      <body className="flex flex-col h-full">
        <Header />
        <main className="flex flex-1">{children}</main>
      </body>
    </html>
  );
}
