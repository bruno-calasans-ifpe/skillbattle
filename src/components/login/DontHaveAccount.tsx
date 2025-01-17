import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function DontHaveAccount() {
  return (
    <div className='flex items-center'>
      <p>Não tem conta?</p>
      <Button
        variant='link'
        size='sm'
        className='text-purple-600 hover:text-purple-800'
      >
        <Link href='/register'>Criar conta</Link>
      </Button>
    </div>
  );
}
