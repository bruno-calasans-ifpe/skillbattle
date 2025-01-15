import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function VerifyEmail() {
  return (
    <section className='fixed z-100 top-0 h-full w-full flex justify-center items-center bg-black'>
      <Card className='flex gap-2 border-purple-500 border-2'>
        <div className='flex flex-col'>
          <CardHeader>
            <CardTitle className='text-lg text-purple-600'>
              Email de verificação
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-1'>
            <p>Um email de verificação foi enviado para o email fornecido.</p>
            <p>Verifique-o para pode acessar a aplicação.</p>
            <p className='font-bold italic mt-2 text-purple-400'>
              Obrigado(a) pela atenção. Equipe Skillbattle
            </p>
          </CardContent>
          <CardFooter className='flex flex-grow items-end'>
            <Link href='/'>
              <Button
                size='sm'
                variant='outline'
                className='font-bold p-2 group'
              >
                <ChevronLeft
                  size={18}
                  className='group-hover:translate-x-[-3px] transition-all'
                />
                Voltar para página inicial
              </Button>
            </Link>
          </CardFooter>
        </div>
      </Card>
    </section>
  );
}
