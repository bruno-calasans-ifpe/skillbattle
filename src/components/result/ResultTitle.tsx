import { DoorOpen } from 'lucide-react';

import ChallengeMoreInfoButton from '@/components/challenge-info/ChallengeMoreInfoButton';
import Title from '@/components/custom/Title';
import { Button } from '@/components/ui/button';
import { Challenge } from '@/types/Challenge';

type ResultTitleProps = {
  challenge: Challenge;
};

export default function ResultTitle({ challenge }: ResultTitleProps) {
  return (
    <header className='flex flex-col gap-3'>
      <Title className='flex items-center justify-between pb-1'>
        <div className='flex items-center gap-1'>
          <p>
            Resultado:{' '}
            <span className='text-md font-semibold italic'>
              {challenge.title}
            </span>
          </p>
          <ChallengeMoreInfoButton />
        </div>
        <Button
          id='lobby-exit-button'
          size='sm'
          className='bg-red-500 hover:bg-red-600 font-bold flex justify-start'
        >
          <DoorOpen />
          Sair
        </Button>
      </Title>
    </header>
  );
}
