import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Challenge } from '@/types/Challenge';
import { SendHorizonal, X } from 'lucide-react';

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
