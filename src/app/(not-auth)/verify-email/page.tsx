'use client';

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type VerifyEmailProps = {};

export default function VerifyEmail({}: VerifyEmailProps) {
  const params = useParams();
  console.log(params);
  return (
    <section className='fixed z-100 top-0 h-full w-full flex justify-center items-center bg-black'>
      <Card className='flex gap-2 border-purple-500 border-2'>
        <div className='flex flex-col'>
          <CardHeader>
            <CardTitle className='text-purple-600'>
              Email de verificação
            </CardTitle>
          </CardHeader>
          <CardContent>
            Um email de verificação foi enviado para seu email.
          </CardContent>
          <CardContent>
            Cheque seu email para pode acessar a aplicação
          </CardContent>
          <CardFooter className='flex flex-grow items-end'>
            <div className='flex gap-1 items-center'>
              <Link href='/'>
                <Button size='sm' variant='outline' className='font-bold'>
                  <ChevronLeft />
                  Voltar para página inicial
                </Button>
              </Link>
            </div>
          </CardFooter>
        </div>
      </Card>
    </section>
  );
}
