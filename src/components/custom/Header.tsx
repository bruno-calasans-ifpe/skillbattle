"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Menu, LogIn } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/AppSideBard";
import { Session } from "next-auth";
import UserAvatar from "./UserAvatar";
import CodeBtn from "./CodeBtn";
import CreateChallengeBtn from "./CreateChallengeBtn";
import { Input } from "../ui/input";

type HeaderProps = {
  session: Session | null;
};

export default function Header({ session }: HeaderProps) {
  const [open, setOpenSideBar] = useState(false);

  const toggleSideBar = () => {
    setOpenSideBar((current) => !current);
  };

  return (
    <>
      <header className=" text-white flex items-center justify-between p-4 bg-primary h-28 border-b-2 border-purple-600 gap-10">
        <SidebarProvider className={open ? "absolute" : "hidden"} open={open}>
          <AppSidebar onCloseMenu={toggleSideBar} />
        </SidebarProvider>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 cursor-pointer group"
            onClick={toggleSideBar}
          >
            <Menu className="text-white " />
          </Button>
          <Link href="/">
            <div>Logo</div>
          </Link>
        </div>
        {/* <div className="flex-1">
          <Input
            type="search"
            className="bg-white text-black"
            placeholder="Pesquise por desafios"
          />
        </div> */}
        {!session && (
          <div className="flex gap-2">
            <CodeBtn />

            <div className="flex gap-1">
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
          </div>
        )}
        {session && session.user && (
          <div className="flex items-center">
            <CreateChallengeBtn />
            <UserAvatar user={session.user} />
          </div>
        )}
      </header>
    </>
  );
}
