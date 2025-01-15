import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HaveAccount() {
  return (
    <div className='flex items-center'>
      <p>Já tem conta?</p>
      <Button
        variant='link'
        size='sm'
        className='text-purple-600 hover:text-purple-800'
      >
        <Link href='/login'>Fazer login</Link>
      </Button>
    </div>
  );
}
