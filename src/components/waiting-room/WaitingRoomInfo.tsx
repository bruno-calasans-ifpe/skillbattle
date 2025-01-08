import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Challenge } from '@/types/Challenge';

type WaitingRoomInfoProps = {
  challenge: Challenge;
};

export default function WaitingRoomInfo({ challenge }: WaitingRoomInfoProps) {
  return (
    <div className='flex items-center justify-between'>
      <Button
        size='sm'
        className='bg-red-500 hover:bg-red-600 font-bold self-start'
      >
        <ChevronLeft />
        Desistir
      </Button>
      <div className='flex flex-col justify-end items-end'>
        <p className='text-sm font-semibold text-stone-800'>
          Tempo restante: <span className='text-emerald-500'>50 minutos</span>
        </p>
        {challenge.type === 'score' && (
          <>
            <p className='text-sm font-semibold text-stone-800'>
              Round atual: <span className='text-emerald-500'>2</span>
            </p>
            <p className='text-sm font-semibold text-stone-800'>
              Pontos ganhos: <span className='text-emerald-500'>1</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
