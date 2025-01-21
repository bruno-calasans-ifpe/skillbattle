'use client';

import { Menu } from 'lucide-react';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import AppSidebar from '@/components/custom/AppSideBard';
import RegisterButton from '@/components/header/RegisterButton';
import { Button } from '@/components/ui/button';
import { SidebarProvider } from '@/components/ui/sidebar';

import LoginButton from '../header/LoginButton';
import Logo from '../header/Logo';
import CodeButton from './CodeButton';
import CreateChallengeButton from './CreateChallengeButton';
import UserAvatar from './UserAvatar';
import { User } from '@/types/User';
import useAuthStore from '@/store/authStore';

type HeaderProps = {
  session: Session | null;
  user: User | null;
};

export default function Header({ session, user }: HeaderProps) {
  const [open, setOpenSideBar] = useState(false);
  const { setUser } = useAuthStore();

  const toggleSideBar = () => {
    setOpenSideBar((current) => !current);
  };

  useEffect(() => {
    setUser(user);
  }, [session, user]);

  return (
    <>
      <header className='text-white flex items-center justify-between p-4 bg-primary h-20 border-b-2 border-purple-600 gap-10'>
        <SidebarProvider className={open ? 'absolute' : 'hidden'} open={open}>
          <AppSidebar onCloseMenu={toggleSideBar} />
        </SidebarProvider>

        <div className='flex items-center gap-2'>
          <Button
            variant='ghost'
            size='sm'
            className='bg-purple-600 hover:bg-purple-700 cursor-pointer group'
            onClick={toggleSideBar}
          >
            <Menu className='text-white ' />
          </Button>
          <Logo />
        </div>
        {/* SignIn User */}
        {!session && (
          <div className='flex gap-2'>
            <CreateChallengeButton />
            <CodeButton />

            <div className='flex gap-1'>
              <LoginButton />
              <RegisterButton />
            </div>
          </div>
        )}
        {/* SignIn User */}
        {session && session.user && (
          <div className='flex gap-1 items-center'>
            <CodeButton />
            <CreateChallengeButton />
            <UserAvatar user={session.user} />
          </div>
        )}
      </header>
    </>
  );
}
