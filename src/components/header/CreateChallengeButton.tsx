import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

type CreateChallengeButtonProps = {};

export default function CreateChallengeButton({}: CreateChallengeButtonProps) {
  return (
    <Button
      variant='ghost'
      size='sm'
      asChild
      className='bg-purple-600 hover:bg-purple-500 group font-bold'
    >
      <Link href='/create-challenge'>
        <Plus className='text-white ' />
        <p className='text-white font-bold '>Criar</p>
      </Link>
    </Button>
  );
}
