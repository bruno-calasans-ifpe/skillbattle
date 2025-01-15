'use client';

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
import { redirect, useSearchParams } from 'next/navigation';

type ErrorDataMessage = {
  title: string;
  text: React.ReactNode;
};

const ERROR_MSGS_DATA: { [key in string]: ErrorDataMessage } = {
  Configuration: {
    title: 'Erro de Configuração',
    text: 'Algum erro de configuração ocorreu. Contate os administradores.',
  },
  AccessDenied: {
    title: 'Acesso Negado',
    text: 'Você não tem autorização para fazer isso.',
  },
  Verification: {
    title: 'Token Inválido',
    text: 'O token expirou ou já foi utilizado',
  },
  Default: {
    title: 'Erro Desconhecido',
    text: 'Desculpe, mas algo deu errado. Contate os administradores.',
  },
};

export default function AuthErrorPage() {
  const params = useSearchParams();

  const error = params.get('error');
  if (!error) return redirect('/');

  const getErrorData = () => {
    const errorData =
      ERROR_MSGS_DATA[
        error.trim().toLowerCase() as keyof typeof ERROR_MSGS_DATA
      ];

    for (let key in ERROR_MSGS_DATA) {
      if (key.toLowerCase() === error.toLowerCase())
        return ERROR_MSGS_DATA[key];
    }

    return ERROR_MSGS_DATA.Default;
  };

  const errorData = getErrorData();

  return (
    <section className='fixed z-100 top-0 h-full w-full flex justify-center items-center bg-black'>
      <Card className='flex gap-2 border-purple-500 border-2'>
        <div className='flex flex-col'>
          <CardHeader>
            <CardTitle className='text-4xl text-purple-600'>
              {errorData.title}
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-1'>
            <p className='text-lg'>{errorData.text}</p>
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
