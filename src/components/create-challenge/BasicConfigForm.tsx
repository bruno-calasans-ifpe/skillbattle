'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import CreateChallengeUploadDropZone from '@/components/create-challenge/CreateChallengeUploadDropZone';
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
import { Textarea } from '@/components/ui/textarea';
import useCustomToast from '@/hooks/use-custom-toast';
import useCreateChallengeStore from '@/store/createChallengeStore';

import NextButton from './NextButton';

const createChallengeSchema = z
  .object({
    image: z.string(),
    title: z
      .string({ required_error: 'Título é obrigatório' })
      .min(1, 'Título não pode estar vazio'),
    desc: z
      .string({ required_error: 'Descrição é obrigatório' })
      .min(1, 'Descrição não pode estar vazia'),
  })
  .required();

type CreateChallengeInputs = z.infer<typeof createChallengeSchema>;

export default function BasicConfigForm() {
  const { successToast, errorToast } = useCustomToast();
  const { challenge, updateChallenge, setTab, goNextTab } =
    useCreateChallengeStore();

  const form = useForm<CreateChallengeInputs>({
    resolver: zodResolver(createChallengeSchema),
    defaultValues: {
      title: challenge.title,
      image: challenge.image,
      desc: challenge.desc,
    },
  });

  const onSubmit = async (inputs: CreateChallengeInputs) => {
    setTab('basic', true);
    goNextTab();
  };

  const changeFormHandler = () => {
    const input = form.getValues();
    updateChallenge(input);
  };

  const uploadCompleteHandler = (fileUrl: string) => {
    form.setValue('image', fileUrl);
    form.clearErrors('image');
  };

  return (
    <Form {...form}>
      <form
        id='create-challenge-form'
        className='space-y-8'
        onSubmit={form.handleSubmit(onSubmit)}
        onChange={changeFormHandler}
      >
        {/* Imagem */}
        <FormField
          control={form.control}
          name='image'
          render={() => (
            <FormItem>
              <FormLabel className='font-bold'>Imagem</FormLabel>
              <FormControl>
                <CreateChallengeUploadDropZone
                  onUploadComplete={uploadCompleteHandler}
                />
              </FormControl>
              <FormDescription>
                Uma imagem para representar o desafio que você quer criar. Se
                nenhuma imagem for enviada, usará uma imagem pré-definida.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Title */}
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Título*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='title-input'
                  type='text'
                  placeholder='Título do desafio'
                />
              </FormControl>
              <FormDescription>
                Um título para resumir o desafio com poucas palavras
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*  Decrição*/}
        <FormField
          control={form.control}
          name='desc'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Descrição*</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  id='challenge-desc'
                  className='h-32 resize-none'
                  placeholder='Descrição do desafio'
                />
              </FormControl>
              <FormDescription>
                Descrição breve e clara para que os outros jogadores possam
                entender como funcionará o desafio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Create Buttons */}
        <div id='create-challenge-buttons' className='flex justify-end'>
          {/* <Button
            id='reset-challenge-button'
            type='reset'
            className='flex-1 bg-indigo-500 font-bold hover:bg-indigo-600'
          >
            Limpar
          </Button>
          <Button
            id='submit-challenge-button'
            type='submit'
            className='flex-1 bg-emerald-500 font-bold hover:bg-emerald-600'
          >
            Criar desafio
          </Button> */}
          <NextButton />
        </div>
      </form>
    </Form>
  );
}
