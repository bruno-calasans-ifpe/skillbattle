import type { Metadata } from "next";
import "./globals.css";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, UserPlus, Forward, LogIn } from "lucide-react";

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
    <html lang="pt-br">
      <body>
        <header className=" text-white flex items-center justify-between p-4 bg-primary h-24 border-b-2 border-purple-600">
          <Link href="/">
            <div>Logo</div>
          </Link>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 group"
            >
              <Forward className="text-white " />
              <p className="text-white font-bold">Entrar com código</p>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="bg-purple-200 hover:bg-purple-300 group"
            >
              <Link href="login">
                <LogIn className="text-purple-600 " />
                <p className="text-purple-600 font-bold">Login</p>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="bg-purple-600 hover:bg-purple-500 group font-bold"
            >
              <Link href="register">
                <User className="text-white " />
                <p className="text-white font-bold ">Entrar</p>
              </Link>
            </Button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
