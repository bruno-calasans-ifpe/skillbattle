import { Plus } from 'lucide-react';
import Link from 'next/link';

import { Button } from '../ui/button';

type CreateChallengeButtonProps = {};

export default function CreateChallengeButton({}: CreateChallengeButtonProps) {
  return (
    <Link href='/create-challenge'>
      <Button
        variant='ghost'
        size='sm'
        className='bg-emerald-500 hover:bg-emerald-600 group'
      >
        <Plus className='text-white ' />
        <p className='text-white font-bold'>Criar</p>
      </Button>
    </Link>
  );
}
