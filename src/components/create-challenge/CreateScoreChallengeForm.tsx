import { zodResolver } from '@hookform/resolvers/zod';
import { Reorder } from 'framer-motion';
import { X } from 'lucide-react';
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
import { cn } from '@/lib/utils';
import useCreateChallengeStore from '@/store/createChallengeStore';

import CreateChallengeImageUpload from './CreateChallengeImageUpload';

const createScoreChallengeSchema = z
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

type CreateScoreChallengeInputs = z.infer<typeof createScoreChallengeSchema>;

export default function CreateScoreChallengeForm() {
  const {
    challenges,
    updateChallenge,
    addChallenge,
    removeChallenge,
    setChallenges,
  } = useCreateChallengeStore();
  const form = useForm<CreateScoreChallengeInputs>({
    resolver: zodResolver(createScoreChallengeSchema),
    defaultValues: {
      url: '',
      title: '',
    },
  });

  function onSubmit(values: CreateScoreChallengeInputs) {
    console.log(values);
  }

  const changeFormHandler = () => {
    const { challenge, ...input } = form.getValues();
    updateChallenge({ ...input, challenges });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onChange={changeFormHandler}
        className='space-y-8'
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
        {/* Título */}
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
              <FormLabel className='font-bold'>Desafios</FormLabel>
              <FormControl>
                {/* Challenge List */}
                <div className='flex flex-col gap-2'>
                  <Reorder.Group values={challenges} onReorder={setChallenges}>
                    <div
                      className={cn(
                        'flex flex-col gap-3 border-2 border-purple-500 p-2 rounded-md',
                        challenges.length === 0 && 'hidden',
                      )}
                    >
                      {challenges.map((challenge, index) => (
                        <Reorder.Item value={challenge} key={challenge}>
                          <p className='text-sm italic font-bold flex justify-between items-center text-purple-700 bg-purple-300 p-2 rounded-md hover:bg-purple-600 cursor-move transition-all hover:text-purple-100'>
                            Desafio {index + 1}: {challenge}{' '}
                            <span>
                              <X
                                className='hover:text-red-600 cursor-pointer text-red-500'
                                onClick={() => removeChallenge(challenge)}
                                size={20}
                              />
                            </span>
                          </p>
                        </Reorder.Item>
                      ))}
                    </div>
                  </Reorder.Group>
                  {/* Add challenge */}
                  <div className='flex gap-1'>
                    <Input
                      {...field}
                      id='challenge'
                      type='search'
                      placeholder='Os desafios para os jogadores'
                    />

                    <Button
                      type='button'
                      onClick={() => addChallenge(form.getValues().challenge)}
                      className='bg-purple-500 hover:bg-purple-600'
                    >
                      Adicionar
                    </Button>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
              <FormDescription>
                Adicione quantos desafios você quiser. Dica: você pode arrastar
                o desafio para alterar a ordem que serão feitos, caso escolha
                seleção em &apos;ordem&apos; (em regras).
              </FormDescription>
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
            type='reset'
            className='flex-1 bg-indigo-500 font-bold hover:bg-indigo-600'
          >
            Limpar
          </Button>
          <Button
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
