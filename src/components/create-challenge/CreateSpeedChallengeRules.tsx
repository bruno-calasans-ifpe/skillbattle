import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "../ui/input";

const createSpeedChallengeRulesSchema = z
  .object({
    classifications: z.number().min(2).nonnegative(),
    maxPlayerNum: z.number().min(2).nonnegative(),
    startDate: z.date().min(new Date(Date.now())),
    endDate: z.date(),
  })
  .required();

type CreateSpeedChallengeRulesInputs = z.infer<
  typeof createSpeedChallengeRulesSchema
>;

type CreateSpeedChallengeRulesProps = {};

export default function CreateSpeedChallengeRules({}: CreateSpeedChallengeRulesProps) {
  const form = useForm<CreateSpeedChallengeRulesInputs>({
    resolver: zodResolver(createSpeedChallengeRulesSchema),
    defaultValues: {
      classifications: 2,
      maxPlayerNum: 2,
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  function onSubmit(values: CreateSpeedChallengeRulesInputs) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        id="rules"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Número máximo de classificações*/}
        <FormField
          control={form.control}
          name="classifications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Classificações</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="speed-challenge-classifications"
                  type="number"
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Quantos jogadores serão classificados (mínimo é 2)
              </FormDescription>
            </FormItem>
          )}
        />

        {/* Número máximo de jogadores */}
        <FormField
          control={form.control}
          name="maxPlayerNum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número máximo de jogadores</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="speed-challenge-max-player-numbers"
                  type="number"
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
        {/* Data Inicial */}
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de Início</FormLabel>
              <FormControl>
                <Input
                  id="speed-challenge-start-date"
                  type="date"
                  min={Date.now()}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>Quando o desafio vai começar</FormDescription>
            </FormItem>
          )}
        />

        {/* Data Final */}
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de Fim</FormLabel>
              <FormControl>
                <Input
                  id="speed-challenge-end-date"
                  type="date"
                  min={Date.now()}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>Quando o desafio vai terminar</FormDescription>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
