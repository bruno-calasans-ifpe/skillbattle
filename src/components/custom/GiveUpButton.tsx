import { Flag } from 'lucide-react';

import { Button } from '@/components/ui/button';

type GiveUpButtonProps = {};

export default function GiveUpButton({}: GiveUpButtonProps) {
  return (
    <Button
      size='sm'
      className='bg-red-500 hover:bg-red-600 font-bold self-start'
    >
      Desistir
      <Flag />
    </Button>
  );
}
