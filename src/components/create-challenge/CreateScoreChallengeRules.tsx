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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectScrollDownButton,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DEFAULT_SCORE_RULES } from '@/config/defaultRules';
import useCreateChallengeStore from '@/store/createChallengeStore';

import NextButton from './NextButton';

const createScoreChallengeRulesSchema = z
  .object({
    selectionType: z.enum(['order', 'random']),
    maxRounds: z.coerce
      .number()
      .min(
        1,
        `Número máximo de rounds deve ser maior ou igual a ${DEFAULT_SCORE_RULES.maxRounds}`,
      ),
    maxRoundTime: z.coerce
      .number()
      .min(
        DEFAULT_SCORE_RULES.maxRoundTime,
        `Tempo máximo deve ser maior ou igual a ${DEFAULT_SCORE_RULES.maxRoundTime}`,
      ),
    maxPlayerNum: z.coerce
      .number()
      .min(
        DEFAULT_SCORE_RULES.maxPlayerNum,
        `Número máximo de jogadores deve ser maior ou igual a ${DEFAULT_SCORE_RULES.maxPlayerNum}`,
      ),
  })
  .required();

type CreateScoreChallengeRulesInputs = z.infer<
  typeof createScoreChallengeRulesSchema
>;

const challengeSelectionData = [
  {
    label: 'Ordem',
    value: 'order',
  },
  {
    label: 'Aleatória',
    value: 'random',
  },
];

export default function CreateScoreChallengeRules() {
  const { challenge, setChallengeRules, setTab, goNextTab } =
    useCreateChallengeStore();
  const { rules } = challenge;

  const form = useForm<CreateScoreChallengeRulesInputs>({
    resolver: zodResolver(createScoreChallengeRulesSchema),
    defaultValues: {
      maxPlayerNum: rules.maxPlayerNum || DEFAULT_SCORE_RULES.maxPlayerNum,
      maxRounds: rules.maxRounds || DEFAULT_SCORE_RULES.maxRounds,
      maxRoundTime: rules.maxRoundTime || DEFAULT_SCORE_RULES.maxRoundTime,
      selectionType: rules.selectionType || DEFAULT_SCORE_RULES.selectionType,
    },
  });

  const changeRulesHandler = () => {
    const { maxPlayerNum, maxRounds, maxRoundTime, selectionType } =
      form.getValues();
    setChallengeRules({
      maxPlayerNum: Number(maxPlayerNum),
      maxRounds: Number(maxRounds),
      maxRoundTime: Number(maxRoundTime),
      selectionType,
    });
  };

  function onSubmit(values: CreateScoreChallengeRulesInputs) {
    setTab('rules', true);
    goNextTab();
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        id='create-challenge-score-rules-form'
        className='space-y-8'
        onSubmit={form.handleSubmit(onSubmit)}
        onChange={changeRulesHandler}
      >
        {/* Seleção dos Desafios*/}
        <FormField
          control={form.control}
          name='selectionType'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Seleção dos Desafios*</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className='w-full'>
                    <SelectValue
                      defaultValue={field.value}
                      onChange={field.onChange}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {challengeSelectionData.map(({ label, value }) => (
                      <SelectItem key={label} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                    <SelectScrollDownButton className='' />
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
              <FormDescription>
                Como os desafios serão selecionados.
              </FormDescription>
            </FormItem>
          )}
        />

        {/* Número de rodadas */}
        <FormField
          control={form.control}
          name='maxRounds'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Rounds*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='score-challenge-max-rounds'
                  type='number'
                  min={2}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Número máximo de rounds (mínimo é{' '}
                {DEFAULT_SCORE_RULES.maxRounds})
              </FormDescription>
            </FormItem>
          )}
        />

        {/* Tempo para cada round */}
        <FormField
          control={form.control}
          name='maxRoundTime'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>
                Tempo de Round (em minutos)*
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='score-challenge-max-round-time'
                  type='number'
                  min={DEFAULT_SCORE_RULES.maxRoundTime}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Quantos minutos cada rodada terá. (mínimo é{' '}
                {DEFAULT_SCORE_RULES.maxRoundTime})
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
                  id='score-challenge-max-player-numbers'
                  type='number'
                  min={2}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Quantos jogadores poderá ter no desafio (mínimo é{' '}
                {DEFAULT_SCORE_RULES.maxPlayerNum})
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
