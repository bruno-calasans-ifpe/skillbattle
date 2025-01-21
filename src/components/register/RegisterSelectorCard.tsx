'use client';

import { SiGoogle } from '@icons-pack/react-simple-icons';
import { ArrowRight, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

import EmailRegisterForm from './EmailRegisterForm';
import HaveAccount from './HaveAccount';
import useCustomToast from '@/hooks/use-custom-toast';

export default function RegisterSelectorCard() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [loggingWithGoogle, setLoggingWithGoogle] = useState(false);
  const { successToast, errorToast } = useCustomToast();

  const emailLoginFormToggle = () => {
    setShowEmailForm((current) => !current);
  };

  const googleRegisterHandler = async () => {
    try {
      setLoggingWithGoogle(true);
      await signIn('google');
      successToast(
        'Login com Google com sucesso',
        'Login com conta do Google realizado com sucesso',
      );
    } catch (error) {
      errorToast(
        'Login com Google falhou',
        'Não foi possível realizar o login com sua conta do Google',
      );
    }
    setLoggingWithGoogle(false);
  };

  return (
    <>
      {showEmailForm && <EmailRegisterForm onGoBack={emailLoginFormToggle} />}
      {!showEmailForm && (
        <Card className={cn('flex gap-2 h-[400px]', showEmailForm && 'hidden')}>
          <div className='flex flex-col'>
            <CardHeader>
              <CardTitle>
                Bem-vindo ao{' '}
                <span className='text-purple-600'>SkillBattle</span>!
              </CardTitle>
              <CardDescription>
                Crie sua conta para pode participar dos desafios.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                disabled={loggingWithGoogle}
                onClick={googleRegisterHandler}
                className='flex justify-between w-full bg-white text-black font-bold hover:bg-[#D62D20] hover:text-white group transition-all'
              >
                <div className='flex gap-2 items-center'>
                  <SiGoogle className='text-[#D62D20] group-hover:text-white transition-all' />
                  Entrar com Google
                </div>
                <ArrowRight className='group-hover:translate-x-2 transition-all' />
              </Button>
            </CardContent>
            <CardContent>
              <Button
                onClick={emailLoginFormToggle}
                className='flex justify-between w-full bg-white text-black font-bold hover:bg-black hover:text-white group transition-all'
              >
                <div className='flex items-center gap-2 '>
                  <Mail className='text-blue-600 group-hover:text-white transition-all' />
                  Entrar com email
                </div>
                <ArrowRight className='group-hover:translate-x-2 transition-all' />
              </Button>
            </CardContent>
            <CardFooter className='flex flex-grow items-end'>
              <HaveAccount />
            </CardFooter>
          </div>
          <Image
            width={300}
            height={30}
            src='/imgs/register.svg'
            alt='welcome-register'
          />
        </Card>
      )}
    </>
  );
}
