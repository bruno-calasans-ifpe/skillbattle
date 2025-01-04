import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";

const createNormalChallengeRulesSchema = z
  .object({
    maxPlayerNum: z.number().min(2).nonnegative(),
    startDate: z.date().min(new Date(Date.now())),
    endDate: z.date(),
  })
  .required();

type CreateNormalChallengeRulesInputs = z.infer<
  typeof createNormalChallengeRulesSchema
>;

type CreateNormalChallengeRulesProps = {};

export default function CreateNormalChallengeRules({}: CreateNormalChallengeRulesProps) {
  const form = useForm<CreateNormalChallengeRulesInputs>({
    resolver: zodResolver(createNormalChallengeRulesSchema),
    defaultValues: {
      maxPlayerNum: 2,
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  function onSubmit(values: CreateNormalChallengeRulesInputs) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        id="rules"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Imagem */}
        <FormField
          control={form.control}
          name="maxPlayerNum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número máximo de jogadores</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="normal-challenge-max-player-numbers"
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
                  id="normal-challenge-start-date"
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
                  id="normal-challenge-end-date"
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
