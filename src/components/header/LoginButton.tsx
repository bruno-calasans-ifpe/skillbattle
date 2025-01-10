import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

export default function LoginButton() {
  return (
    <Link href='/login'>
      <Button
        variant='ghost'
        size='sm'
        className='bg-purple-200 hover:bg-purple-300 group'
      >
        <LogIn className='text-purple-600' />
        <p className='text-purple-600 font-bold'>Login</p>
      </Button>
    </Link>
  );
}
