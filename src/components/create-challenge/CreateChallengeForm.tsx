import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
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
import useCreateChallengeStore from '@/store/createChallengeStore';

import CreateChallengeImageUpload from './CreateChallengeImageUpload';

const createChallengeSchema = z
  .object({
    url: z
      .string({ required_error: 'Url do desafio é obrigatório' })
      .url('Url inválida'),
    title: z.string({ required_error: 'Nome do desafio é obrigatório' }),
    challenge: z.string(),
    category: z.string(),
    desc: z.string(),
  })
  .required();

type CreateChallengeInputs = z.infer<typeof createChallengeSchema>;

export default function CreateChallengeForm() {
  const { updateChallenge } = useCreateChallengeStore();

  const form = useForm<CreateChallengeInputs>({
    resolver: zodResolver(createChallengeSchema),
    defaultValues: {
      url: '',
      title: '',
    },
  });

  function onSubmit(values: CreateChallengeInputs) {
    console.log(values);
  }

  const changeFormHandler = () => {
    const values = form.getValues();
    updateChallenge(values);
  };

  return (
    <Form {...form}>
      <form
        id='create-challenge'
        className='space-y-8'
        onSubmit={form.handleSubmit(onSubmit)}
        onChange={changeFormHandler}
      >
        {/* Imagem */}
        <FormField
          control={form.control}
          name='url'
          render={() => (
            <FormItem>
              <FormLabel className='font-bold'>Imagem</FormLabel>
              <FormControl>
                <CreateChallengeImageUpload />
              </FormControl>
              <FormDescription>
                Uma imagem para representar o desafio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Nome */}
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Título</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='challenge-title'
                  type='text'
                  placeholder='Título do desafio'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*  Desafio*/}
        <FormField
          control={form.control}
          name='challenge'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Desafio</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='challenge'
                  type='text'
                  placeholder='O desafio para os jogadores'
                />
              </FormControl>
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
              <FormLabel className='font-bold'>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  id='challenge-desc'
                  className='h-32 resize-none'
                  placeholder='Descrição do desafio'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex flex-1 gap-3'>
          <Button
            id='reset-challenge'
            type='reset'
            className='flex-1 bg-indigo-500 font-bold hover:bg-indigo-600'
          >
            Limpar
          </Button>
          <Button
            id='submit-challenge'
            type='submit'
            className='flex-1 bg-emerald-500 font-bold hover:bg-emerald-600'
          >
            Criar desafio
          </Button>
        </div>
      </form>
    </Form>
  );
}
