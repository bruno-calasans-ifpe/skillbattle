import { SiDiscord, SiInstagram, SiX } from '@icons-pack/react-simple-icons';
import {
  Component,
  Headset,
  Home,
  Info,
  MessageCircleQuestion,
  Smartphone,
  Telescope,
  Trophy,
  Users,
  X,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { Button } from '../ui/button';

type AppSidebarProps = {
  onCloseMenu: () => void;
};

export default function AppSidebar({ onCloseMenu }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader />
      <div className='flex items-center justify-between p-2'>
        <div className='flex items-center gap-1'>
          <Component className='text-purple-600 group-hover/btn:text-red-600' />
          <p className='text-xl text-purple-600'>SkillBattle</p>
        </div>
        <Button
          onClick={onCloseMenu}
          variant='ghost'
          className='group/btn hover:bg-transparent cursor-pointer rotate-90 hover:rotate-12 transition-all ease-in-out duration-300'
          size='icon'
          asChild
        >
          <X size={20} className='group-hover/btn:text-red-600 ' />
        </Button>
      </div>

      <SidebarContent>
        {/* Principal */}
        <SidebarGroup />
        <SidebarGroupLabel>Principal</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href='/'>
                  <Home />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href='/explore'>
                  <Telescope />
                  <span>Explore</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href='/ranking'>
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
                <a href='/suport'>
                  <Headset />
                  <span>Suporte</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href='/help-center'>
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
                <a href='/about-us'>
                  <Info />
                  <span>Sobre nós</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href='/our-team'>
                  <Users />
                  <span>Nossa Equipe</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href='/contact'>
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
                <a href='http://www.discord.com/asdasdsa'>
                  <SiDiscord />
                  <span>Discord</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href='http://www.instagram.com/asdasdsa'>
                  <SiInstagram />
                  <span>Instagram</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href='http://www.x.com/asdasdsa'>
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
