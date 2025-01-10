import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

export default function RegisterButton() {
  return (
    <Link href='/register'>
      <Button
        variant='ghost'
        size='sm'
        className='bg-purple-600 hover:bg-purple-500 group font-bold'
      >
        <User className='text-white ' />
        <p className='text-white font-bold '>Entrar</p>
      </Button>
    </Link>
  );
}
