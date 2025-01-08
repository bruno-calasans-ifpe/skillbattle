import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
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
import { DEFAULT_SPEED_RULES } from '@/config/defaultRules';
import useCreateChallengeStore from '@/store/createChallengeStore';

import { Input } from '../ui/input';

const createSpeedChallengeRulesSchema = z
  .object({
    classifications: z
      .number()
      .min(DEFAULT_SPEED_RULES.classifications)
      .nonnegative(),
    maxPlayerNum: z
      .number()
      .min(DEFAULT_SPEED_RULES.maxPlayerNum)
      .nonnegative(),
    maxTime: z.number().min(DEFAULT_SPEED_RULES.maxTime).nonnegative(),
  })
  .required();

type CreateSpeedChallengeRulesInputs = z.infer<
  typeof createSpeedChallengeRulesSchema
>;

export default function CreateSpeedChallengeRules() {
  const { type, setChallengeRules, resetDefaultRules } =
    useCreateChallengeStore();
  const form = useForm<CreateSpeedChallengeRulesInputs>({
    resolver: zodResolver(createSpeedChallengeRulesSchema),
    defaultValues: {
      ...DEFAULT_SPEED_RULES,
    },
  });

  const changeRulesHandler = () => {
    const { maxPlayerNum, classifications } = form.getValues();
    setChallengeRules({
      maxPlayerNum: Number(maxPlayerNum),
      classifications: Number(classifications),
    });
  };

  useEffect(() => {
    if (type == 'speed') resetDefaultRules('speed');
  }, [type]);

  return (
    <Form {...form}>
      <form id='rules' className='space-y-8' onChange={changeRulesHandler}>
        {/* Número máximo de classificações*/}
        <FormField
          control={form.control}
          name='classifications'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Classificações</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='speed-challenge-classifications'
                  type='number'
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Quantos jogadores serão classificados (mínimo é 1)
              </FormDescription>
            </FormItem>
          )}
        />

        {/* Número máximo de jogadores */}
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
                  id='speed-challenge-max-player-numbers'
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

        {/* Tempo máximo do desafio */}
        <FormField
          control={form.control}
          name='maxTime'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>
                Tempo máximo do desafio
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='speed-challenge-max-challenge-time'
                  type='number'
                  min={2}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Quanto tempo os jogadores terão para fazer o desafio (mínimo{' '}
                {DEFAULT_SPEED_RULES.maxTime})
              </FormDescription>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
