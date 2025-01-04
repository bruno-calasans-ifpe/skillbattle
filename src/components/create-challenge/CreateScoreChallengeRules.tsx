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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectScrollDownButton,
} from "@/components/ui/select";
import { Input } from "../ui/input";

const createScoreChallengeRulesSchema = z
  .object({
    selectionType: z.enum(["order", "random"]),
    maxRounds: z.number().nonnegative(),
    maxRoundTime: z.number().nonnegative().min(1), // in minutes
    maxPlayerNum: z.number().min(2).nonnegative(),
    startDate: z.date().min(new Date(Date.now())),
    endDate: z.date(),
  })
  .required();

type CreateScoreChallengeRulesInputs = z.infer<
  typeof createScoreChallengeRulesSchema
>;

type CreatescoreChallengeRulesProps = {};

const challengeSelectionData = [
  {
    label: "Ordem",
    value: "order",
  },
  {
    label: "Aleatória",
    value: "random",
  },
];

export default function CreateScoreChallengeRules({}: CreatescoreChallengeRulesProps) {
  const form = useForm<CreateScoreChallengeRulesInputs>({
    resolver: zodResolver(createScoreChallengeRulesSchema),
    defaultValues: {
      selectionType: "order",
      maxRounds: 2,
      maxRoundTime: 1,
      maxPlayerNum: 2,
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now()),
    },
  });

  function onSubmit(values: CreateScoreChallengeRulesInputs) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        id="score-rules"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Seleção dos Desafios*/}
        <FormField
          control={form.control}
          name="selectionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seleção dos Desafios</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {challengeSelectionData.map(({ label, value }) => (
                      <SelectItem key={label} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                    <SelectScrollDownButton className="" />
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
          name="maxRounds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rounds</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="score-challenge-max-rounds"
                  type="number"
                  min={2}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Número máximo de rounds (mínimo é 2)
              </FormDescription>
            </FormItem>
          )}
        />

        {/* Tempo para cada round */}
        <FormField
          control={form.control}
          name="maxRoundTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tempo de Round (em minutos)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="score-challenge-max-round-time"
                  type="number"
                  min={2}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Quantos minutos cada rodada terá. (mínimo é 1)
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
                  id="score-challenge-max-player-numbers"
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
                <Input id="score-challenge-start-date" type="date" />
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
                  id="score-challenge-end-date"
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
