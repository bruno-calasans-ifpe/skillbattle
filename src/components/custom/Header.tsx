"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  User,
  Menu,
  Forward,
  LogIn,
  DoorOpen,
  Settings,
  LibraryBig,
  Medal,
  Trophy,
  CircleX,
} from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/AppSideBard";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useToast } from "@/hooks/use-toast";

type HeaderProps = {
  session: Session | null;
};

export default function Header({ session }: HeaderProps) {
  const [open, setOpenSideBar] = useState(false);
  const { toast } = useToast();

  const toggleSideBar = () => {
    setOpenSideBar((current) => !current);
  };

  const logoutHandler = async () => {
    try {
      await signOut({ callbackUrl: "/" });
      toast({
        title: "Logout",
        description: "Deslogado com sucesso!",
        className: "bg-green-200 font-bold text-black",
      });
    } catch (error) {
      toast({
        title: "Logout",
        description: "Erro ao deslogar",
        className: "bg-red-200 font-bold text-black",
      });
    }
  };

  return (
    <>
      <header className=" text-white flex items-center justify-between p-4 bg-primary h-24 border-b-2 border-purple-600">
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
        {!session && (
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 group"
            >
              <Forward className="text-white " />
              <p className="text-white font-bold">Entrar com código</p>
            </Button>

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
          <Menubar className="bg-transparent border-0">
            <MenubarMenu>
              <MenubarTrigger
                className="bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white focus:bg-transparent
              "
              >
                <Avatar>
                  <AvatarImage
                    src={session.user.image ?? "image"}
                    alt={session.user.name ?? "user"}
                  />
                  <AvatarFallback>
                    {session.user.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </MenubarTrigger>
              <MenubarContent align="end">
                <MenubarItem className="flex flex-col items-start gap-1 focus:bg-transparent">
                  <div className="flex gap-2">
                    <p className="font-bold text-lg">
                      {session.user.name?.split(" ")[0]}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-2 ">
                    <div className="flex gap-1 text-blue-600">
                      <Trophy size={20} />
                      Ranking global: 5
                    </div>

                    <div className="flex gap-1 text-emerald-600 ">
                      <Medal size={20} />
                      Vitórias: 5
                    </div>

                    <div className="flex gap-1 text-red-600">
                      <CircleX size={20} />
                      Derrotas: 2
                    </div>
                  </div>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <User />
                  Meu perfil
                </MenubarItem>
                <MenubarItem className="flex gap-1">
                  <LibraryBig />
                  Minha biblioteca
                </MenubarItem>
                <MenubarItem className="flex gap-1">
                  <Settings />
                  Configurações
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem
                  onClick={logoutHandler}
                  className="flex gap-1 text-red-400 focus:text-red-500"
                >
                  <DoorOpen />
                  <p>Sair</p>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        )}
      </header>
    </>
  );
}
