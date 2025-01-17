import {
  CircleX,
  DoorOpen,
  LibraryBig,
  Medal,
  Settings,
  Trophy,
  User,
} from 'lucide-react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import useCustomToast from '@/hooks/use-custom-toast';

type UserAvatarProps = { user: Session['user'] };

export default function UserAvatar({ user }: UserAvatarProps) {
  const { successToast, errorToast } = useCustomToast();

  const logoutHandler = async () => {
    try {
      await signOut({ callbackUrl: '/' });
      successToast('Logout', 'Deslogado com sucesso!');
    } catch {
      errorToast('Logout falhou', 'Erro ao deslogar');
    }
  };

  const showCharaterName = () => {
    return showUserName()[0].toUpperCase();
  };

  const showUserName = () => {
    if (!user) return 'user';
    if (user.name) return user.name.split(' ')[0];
    if (user.email) return user.email.split('@')[0];
    return '';
  };

  return (
    <Menubar className='bg-transparent border-0'>
      <MenubarMenu>
        <MenubarTrigger
          className='bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white focus:bg-transparent
    '
        >
          <Avatar>
            <AvatarImage src={user?.image ?? 'image'} alt={showUserName()} />
            <AvatarFallback className='bg-purple-600 text-white font-bold'>
              {showCharaterName()}
            </AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent align='end'>
          <MenubarItem className='flex flex-col items-start gap-1 focus:bg-transparent'>
            <div className='flex gap-2'>
              <p className='font-bold text-lg'>{showUserName()}</p>
            </div>

            <div className='flex flex-col items-start gap-2 '>
              <div className='flex gap-1 text-blue-600'>
                <Trophy size={20} />
                Ranking global: 5
              </div>

              <div className='flex gap-1 text-emerald-600 '>
                <Medal size={20} />
                Vitórias: 5
              </div>

              <div className='flex gap-1 text-red-600'>
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
          <MenubarItem className='flex gap-1'>
            <LibraryBig />
            Minha biblioteca
          </MenubarItem>
          <MenubarItem className='flex gap-1'>
            <Settings />
            Configurações
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem
            onClick={logoutHandler}
            className='flex gap-1 text-red-400 focus:text-red-500'
          >
            <DoorOpen />
            <p>Sair</p>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
