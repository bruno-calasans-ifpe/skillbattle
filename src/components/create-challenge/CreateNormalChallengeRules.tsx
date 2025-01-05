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
import { DEFAULT_NORMAL_RULES } from '@/config/defaultRules';
import useCreateChallengeStore from '@/store/createChallengeStore';

import { Input } from '../ui/input';

const createNormalChallengeRulesSchema = z
  .object({
    maxPlayerNum: z.number().min(2).nonnegative(),
  })
  .required();

type CreateNormalChallengeRulesInputs = z.infer<
  typeof createNormalChallengeRulesSchema
>;

export default function CreateNormalChallengeRules() {
  const { setChallengeRules } = useCreateChallengeStore();
  const form = useForm<CreateNormalChallengeRulesInputs>({
    resolver: zodResolver(createNormalChallengeRulesSchema),
    defaultValues: {
      ...DEFAULT_NORMAL_RULES,
    },
  });

  const changeRulesHandler = () => {
    const { maxPlayerNum } = form.getValues();
    setChallengeRules({
      maxPlayerNum: Number(maxPlayerNum),
    });
  };

  return (
    <Form {...form}>
      <form id='rules' onChange={changeRulesHandler} className='space-y-8 mt-4'>
        {/* Imagem */}
        <FormField
          control={form.control}
          name='maxPlayerNum'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>
                Número máximo de jogadores
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='normal-challenge-max-player-numbers'
                  type='number'
                  min={2}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Quantos jogadores poderá ter no desafio (mínimo é 2)
              </FormDescription>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
