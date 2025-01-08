'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Challenge } from '@/types/Challenge';

import FileUploadDropZone from '../custom/FileUploadDropZone';
import { Button } from '../ui/button';
import GiveUpButton from '../custom/GiveUpButton';
import SendButton from '../custom/SendButton';

const formSchema = z.object({
  title: z.string(),
  url: z.string().url(),
});

type PlayChallengeFormProps = {
  challenge: Challenge;
};

export default function PlayChallengeForm({
  challenge,
}: PlayChallengeFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      url: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className='flex-1'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-bold'>Título</FormLabel>
                <FormControl>
                  <Input placeholder='Título do envio' {...field} />
                </FormControl>
                <FormDescription>
                  Dê um título ao que você irá enviar
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='url'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-bold'>Envio</FormLabel>
                <FormControl>
                  <FileUploadDropZone />
                </FormControl>
                <FormDescription className='flex flex-col gap-1'>
                  <span>Tamanho máximo: 4Mb</span>
                  <span>Arquivos permitidos: jpg, png</span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex justify-end items-center gap-2'>
            <GiveUpButton />
            <SendButton challenge={challenge} />
          </div>
        </form>
      </Form>
    </div>
  );
}
