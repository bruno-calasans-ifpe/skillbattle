import { DoorOpen } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Challenge } from '@/types/Challenge';

type ExitButtonProps = {
  challenge: Challenge;
};

export default function ExitButton({ challenge }: ExitButtonProps) {
  return (
    <Link href={`/challenge/${challenge.id}`}>
      <Button
        id='lobby-exit-button'
        size='sm'
        className='bg-red-500 hover:bg-red-600 font-bold flex justify-start'
      >
        <DoorOpen />
        Sair
      </Button>
    </Link>
  );
}
