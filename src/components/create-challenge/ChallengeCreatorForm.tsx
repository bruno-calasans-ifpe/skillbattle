import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
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
import useCreateChallengeStore from '@/store/createChallengeStore';

import BackButton from './BackButton';
import CategorySelector from './CategorySelector';
import ChallengeCreator from './ChallengeCreator';
import NextButton from './NextButton';

const formSchema = z.object({
  challlenge: z.string(),
  category: z.string(),
});

type ChallengeCreatorInput = z.infer<typeof formSchema>;

type ChallengeCreatorFormProps = {};

let firstTimeRender = true;

export default function ChallengeCreatorForm({}: ChallengeCreatorFormProps) {
  const { challenge, setTab, goNextTab } = useCreateChallengeStore();

  const form = useForm<ChallengeCreatorInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      challlenge: '',
      category: '',
    },
  });

  const onSubmit = (values: ChallengeCreatorInput) => {
    const isFormError = checkErrors();
    if (isFormError) return setTab('challenge', false);
    setTab('challenge', true);
    goNextTab();
  };

  const checkErrors = () => {
    let formError = false;

    if (challenge.challenges.length === 0) {
      form.setError('challlenge', {
        message: 'Você deve adicionar 1 ou mais desafio(s)',
      });
      formError = true;
    } else {
      form.clearErrors('challlenge');
      formError = false;
    }

    if (challenge.categories.length === 0) {
      form.setError('category', {
        message: 'Você deve escolher 1 ou mais categorias',
      });
      formError = true;
    } else {
      form.clearErrors('category');
      formError = false;
    }
    return formError;
  };

  useEffect(() => {
    // if (!firstTimeRender) checkErrors();
    if (firstTimeRender) firstTimeRender = false;
  }, [challenge.categories.length, challenge.challenges.length]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        {/* Challenge */}
        <FormField
          control={form.control}
          name='challlenge'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Desafio</FormLabel>
              <FormControl>
                <ChallengeCreator />
              </FormControl>
              <FormDescription>
                Crie 1 ou mais desafios. Se o desafio for Speed ou Normal, você
                só pode adicionar 1 desafio. Caso seja Score, você pode
                adicionar vários.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Category */}
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Categoria</FormLabel>
              <FormControl>
                <CategorySelector />
              </FormControl>
              <FormDescription>
                Selecione 1 ou mais categorias. Se o desafio for Speed ou
                Normal, você só pode adicionar 1 categoria. Caso seja Score,
                você pode adicionar várias.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div id='tab-buttons' className='flex justify-end gap-2'>
          <BackButton />
          <NextButton />
        </div>
      </form>
    </Form>
  );
}
