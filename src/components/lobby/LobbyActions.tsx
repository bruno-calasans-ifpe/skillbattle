import { DoorOpen, Pencil, Play, SendHorizonal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Challenge } from '@/types/Challenge';

type LobbyActionsProps = {
  challenge: Challenge;
};

export default function LobbyActions({ challenge }: LobbyActionsProps) {
  return (
    <div className='flex flex-col gap-1'>
      <Button
        id='lobby-exit-button'
        size='sm'
        className='bg-red-500 hover:bg-red-600 font-bold flex justify-start'
      >
        <DoorOpen />
        Sair
      </Button>
      <Button
        id='lobby-invite-button'
        size='sm'
        className='bg-indigo-500 hover:bg-indigo-600 font-bold flex justify-start'
      >
        <SendHorizonal className='rotate-180' />
        Convidar
      </Button>
      <Button
        id='lobby-edit-button'
        size='sm'
        className='bg-amber-500 hover:bg-amber-600 font-bold flex justify-start'
      >
        <Pencil />
        Editar
      </Button>
      <Link href={`/play-challenge/${challenge.id}`}>
        <Button
          id='lobby-start-button'
          size='sm'
          className='bg-emerald-500 hover:bg-emerald-600 font-bold flex justify-start w-full'
        >
          <Play />
          Iniciar
        </Button>
      </Link>
    </div>
  );
}
