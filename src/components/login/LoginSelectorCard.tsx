import { SiGoogle } from '@icons-pack/react-simple-icons';
import { ArrowRight, Mail } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import EmailLoginForm from './EmailLoginForm';
import Image from 'next/image';
import DontHaveAccount from './DontHaveAccount';

export default function LoginSelectorCard() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const emailLoginFormToggle = () => {
    setShowEmailForm((current) => !current);
  };

  const googleLoginHandler = async () => {
    await signIn('google');
  };

  return (
    <>
      {showEmailForm && <EmailLoginForm onGoBack={emailLoginFormToggle} />}
      {!showEmailForm && (
        <Card className='flex gap-2 h-[400px]'>
          <div className='flex flex-col'>
            <CardHeader>
              <CardTitle>
                Bem-vindo de volta ao{' '}
                <span className='text-purple-600'>SkillBattle</span>!
              </CardTitle>
              <CardDescription>
                Entre na sua conta para desafiar outros jogadores!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={googleLoginHandler}
                className='flex justify-between w-full bg-white text-black font-bold hover:bg-[#D62D20] hover:text-white group transition-all'
              >
                <div className='flex gap-2 items-center'>
                  <SiGoogle className='text-[#D62D20] group-hover:text-white transition-all' />
                  Continuar com Google
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
                  Continuar com email
                </div>
                <ArrowRight className='group-hover:translate-x-2 transition-all' />
              </Button>
            </CardContent>
            <CardFooter className='flex flex-grow items-end'>
              <DontHaveAccount />
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
