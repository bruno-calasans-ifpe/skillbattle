'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { signIn } from 'next-auth/react';
import { getUserByEmail } from '@/services/firebase/collections/users';
import DontHaveAccount from './DontHaveAccount';

type RegisterFormProps = {
  onGoBack: () => void;
};

const formSchema = z.object({
  email: z.string().email('Email inválido'),
});

export default function EmailLoginForm({ onGoBack }: RegisterFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const [loading, setLoading] = useState(false);

  const submitHandler = async ({ email }: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const foundUser = await getUserByEmail(email);
      if (!foundUser) {
        form.setError('email', {
          message: 'Usuário não cadastrado',
        });
        return setLoading(false);
      }

      await signIn('email', { email });
      toast({
        title: 'Login',
        description: 'Logado com sucesso!',
        className: 'bg-emerald-200 font-bold text-black',
      });
    } catch (error) {
      toast({
        title: 'Login Falhou',
        description: 'Não foi possível realziar o login',
        className: 'bg-red-200 font-bold text-black',
      });
    }
    setLoading(false);
  };

  return (
    <Card className='flex gap-2 h-max'>
      <div className='flex flex-col'>
        <CardHeader>
          <Button
            onClick={onGoBack}
            className='self-start mb-3 bg-purple-600 flex hover:bg-purple-500 font-bold items-center justify-start group'
            size='sm'
          >
            <ChevronLeft className='font-bold group-hover:-translate-x-1 transition-all' />
            <p>Voltar</p>
          </Button>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>
            Você está entrando na sua conta com seu email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitHandler)}
              className='space-y-8'
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold text-purple-600'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='example@email.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={loading}
                type='submit'
                className='w-full bg-purple-500 font-bold hover:bg-purple-600'
              >
                {loading ? (
                  <div className='flex gap-1'>
                    <Loader2 className='animate-spin' />
                    Entrando...
                  </div>
                ) : (
                  'Entrar'
                )}
              </Button>
            </form>
          </Form>
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
  );
}
