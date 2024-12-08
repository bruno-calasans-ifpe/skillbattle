import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
  Home,
  Trophy,
  Telescope,
  Headset,
  MessageCircleQuestion,
  Smartphone,
  Users,
  Info,
  X,
} from "lucide-react";

import { SiInstagram, SiDiscord, SiX } from "@icons-pack/react-simple-icons";
import { Button } from "../ui/button";

type AppSidebarProps = {
  onCloseMenu: () => void;
};

export default function AppSidebar({ onCloseMenu }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader />
      <div className="flex items-center justify-between p-2">
        <p className="text-xl text-purple-600">SkillBattle</p>
        <Button
          onClick={onCloseMenu}
          variant="ghost"
          className="self-end group/btn"
          size="icon"
        >
          <X className="group-hover/btn:text-red-600" />
        </Button>
      </div>

      <SidebarContent>
        {/* Principal */}
        <SidebarGroup />
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/">
                  <Home />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/explore">
                  <Telescope />
                  <span>Explore</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/ranking">
                  <Trophy />
                  <span>Ranking</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />

        {/* Comunidade */}
        <SidebarGroup />
        <SidebarGroupLabel>Comunidade</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/suport">
                  <Headset />
                  <span>Suporte</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/help-center">
                  <MessageCircleQuestion />
                  <span>Central de ajuda</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />

        {/* Comunidade */}
        <SidebarGroup />
        <SidebarGroupLabel>Outros</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/about-us">
                  <Info />
                  <span>Sobre nós</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/our-team">
                  <Users />
                  <span>Nossa Equipe</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/contact">
                  <Smartphone />
                  <span>Contate-nos</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />

        {/* Social Media */}
        <SidebarGroup />
        <SidebarGroupLabel>Redes Sociais</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="http://www.discord.com/asdasdsa">
                  <SiDiscord />
                  <span>Discord</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="http://www.instagram.com/asdasdsa">
                  <SiInstagram />
                  <span>Instagram</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="http://www.x.com/asdasdsa">
                  <SiX />
                  <span>Twitter</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
