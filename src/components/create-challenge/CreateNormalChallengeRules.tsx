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
import BackButton from './BackButton';
import CreateButton from './CreateButton';
import NextButton from './NextButton';

const createNormalChallengeRulesSchema = z
  .object({
    maxPlayerNum: z.coerce
      .number()
      .min(
        2,
        `Número máximo de jogadores deve ser maior ou igual a ${DEFAULT_NORMAL_RULES.maxPlayerNum}`,
      ),
    maxTime: z.coerce
      .number()
      .min(
        DEFAULT_NORMAL_RULES.maxTime,
        `Tempo máximo do desafio deve ser maior ou igual a ${DEFAULT_NORMAL_RULES.maxTime}`,
      ),
  })
  .required();

type CreateNormalChallengeRulesInputs = z.infer<
  typeof createNormalChallengeRulesSchema
>;

export default function CreateNormalChallengeRules() {
  const { challenge, setChallengeRules, setTab, goNextTab } =
    useCreateChallengeStore();
  const { rules } = challenge;

  const form = useForm<CreateNormalChallengeRulesInputs>({
    resolver: zodResolver(createNormalChallengeRulesSchema),
    defaultValues: {
      maxPlayerNum: rules.maxPlayerNum || DEFAULT_NORMAL_RULES.maxPlayerNum,
      maxTime: rules.maxTime || DEFAULT_NORMAL_RULES.maxTime,
    },
  });

  const changeRulesHandler = () => {
    const { maxPlayerNum, maxTime } = form.getValues();
    setTab('rules', false);
    setChallengeRules({
      maxPlayerNum: Number(maxPlayerNum),
      maxTime: Number(maxTime),
    });
  };

  const submitHandler = (values: CreateNormalChallengeRulesInputs) => {
    setTab('rules', true);
    goNextTab();
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        id='create-challenge-normal-rules-form'
        onSubmit={form.handleSubmit(submitHandler)}
        onChange={changeRulesHandler}
        className='space-y-8 mt-4'
      >
        {/* Max players number */}
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
                  id='normal-challenge-max-player-numbers'
                  type='number'
                  min={DEFAULT_NORMAL_RULES.maxPlayerNum}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Quantos jogadores poderá ter no desafio (mínimo é{' '}
                {DEFAULT_NORMAL_RULES.maxPlayerNum})
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='maxTime'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>
                Tempo máximo do desafio (minuto)*
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='normal-challenge-rule-max-time'
                  type='number'
                  min={DEFAULT_NORMAL_RULES.maxTime}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Quanto tempo os jogadores terão para fazer o desafio (mínimo{' '}
                {DEFAULT_NORMAL_RULES.maxTime})
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
