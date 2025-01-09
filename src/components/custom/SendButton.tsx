import { SendHorizonal, X } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Challenge } from '@/types/Challenge';

type SendButtonProps = {
  challenge: Challenge;
};

export default function SendButton({ challenge }: SendButtonProps) {
  return (
    <Link href={`/waiting-room/${challenge.id}`}>
      <Button
        size='sm'
        className='bg-emerald-500 hover:bg-emerald-600 font-bold self-start'
      >
        Enviar
        <SendHorizonal />
      </Button>
    </Link>
  );
}
