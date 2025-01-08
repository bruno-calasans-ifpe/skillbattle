import { DoorOpen, SendHorizonal, Pencil, Play } from 'lucide-react';

import { Button } from '@/components/ui/button';

type LobbyActionsProps = {};

export default function LobbyActions({}: LobbyActionsProps) {
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
        <Pencil className='rotate-180' />
        Editar
      </Button>
      <Button
        id='lobby-edit-button'
        size='sm'
        className='bg-emerald-500 hover:bg-emerald-600 font-bold flex justify-start'
      >
        <Play className='rotate-180' />
        Iniciar
      </Button>
    </div>
  );
}
