import Link from 'next/link';

import { Challenge } from '@/types/Challenge';

import { Button } from '../ui/button';

type JoinButtonProps = {
  challenge: Challenge;
};

export default function JoinButton({ challenge }: JoinButtonProps) {
  return (
    <Link href={`/lobby/${challenge.title}`}>
      <Button className='w-full bg-emerald-500 hover:bg-emerald-600 font-bold my-4'>
        Entrar
      </Button>
    </Link>
  );
}
