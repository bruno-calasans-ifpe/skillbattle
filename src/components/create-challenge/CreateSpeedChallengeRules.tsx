import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import BackButton from '@/components/create-challenge/BackButton';
import ConfirmButton from '@/components/create-challenge/CreateButton';
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
import NextButton from './NextButton';

const createSpeedChallengeRulesSchema = z
  .object({
    classifications: z.coerce
      .number()
      .min(
        DEFAULT_SPEED_RULES.classifications,
        `Número máximo de classificações deve ser maior ou igual a ${DEFAULT_SPEED_RULES.classifications}`,
      ),
    maxPlayerNum: z.coerce
      .number()
      .min(
        DEFAULT_SPEED_RULES.maxPlayerNum,
        `Número máximo de jogadores deve ser maior ou igual a ${DEFAULT_SPEED_RULES.maxPlayerNum}`,
      ),
    maxTime: z.coerce
      .number()
      .min(
        DEFAULT_SPEED_RULES.maxTime,
        `Tempo máximo deve ser maior ou igual a ${DEFAULT_SPEED_RULES.maxTime}`,
      ),
  })
  .required();

type CreateSpeedChallengeRulesInputs = z.infer<
  typeof createSpeedChallengeRulesSchema
>;

export default function CreateSpeedChallengeRules() {
  const { challenge, setChallengeRules, setTab } = useCreateChallengeStore();
  const { rules } = challenge;

  const form = useForm<CreateSpeedChallengeRulesInputs>({
    resolver: zodResolver(createSpeedChallengeRulesSchema),
    defaultValues: {
      maxPlayerNum: rules.maxPlayerNum || DEFAULT_SPEED_RULES.maxPlayerNum,
      maxTime: rules.maxTime || DEFAULT_SPEED_RULES.maxTime,
      classifications:
        rules.classifications || DEFAULT_SPEED_RULES.classifications,
    },
  });

  const changeRulesHandler = () => {
    setTab('rules', false);
    const { maxPlayerNum, classifications, maxTime } = form.getValues();
    setChallengeRules({
      maxPlayerNum: Number(maxPlayerNum),
      classifications: Number(classifications),
      maxTime: Number(maxTime),
    });
  };

  function onSubmit(values: CreateSpeedChallengeRulesInputs) {
    console.log(values);
    setTab('rules', true);
  }

  return (
    <Form {...form}>
      <form
        id='create-challenge-speed-rules'
        className='space-y-8'
        onSubmit={form.handleSubmit(onSubmit)}
        onChange={changeRulesHandler}
      >
        {/* Número máximo de classificações*/}
        <FormField
          control={form.control}
          name='classifications'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Classificações*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='speed-challenge-classifications'
                  type='number'
                  min={DEFAULT_SPEED_RULES.classifications}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Quantos jogadores serão classificados (mínimo é{' '}
                {DEFAULT_SPEED_RULES.classifications})
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
                Número máximo de jogadores*
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='speed-challenge-max-player-numbers'
                  type='number'
                  min={DEFAULT_SPEED_RULES.maxPlayerNum}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Quantos jogadores poderá ter no desafio (mínimo é{' '}
                {DEFAULT_SPEED_RULES.maxPlayerNum})
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
                Tempo máximo do desafio (minutos)*
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='speed-challenge-max-challenge-time'
                  type='number'
                  min={DEFAULT_SPEED_RULES.maxTime}
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
        <div className='flex justify-end gap-2'>
          <BackButton />
          <NextButton />
        </div>
      </form>
    </Form>
  );
}
