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
import { DEFAULT_SCORE_RULES } from "./defaultChallengeRules";
import useCreateChallengeStore from "@/store/createChallengeStore";

const createScoreChallengeRulesSchema = z
  .object({
    selectionType: z.enum(["order", "random"]),
    maxRounds: z.number().nonnegative(),
    maxRoundTime: z.number().nonnegative().min(1),
    maxPlayerNum: z.number().min(2).nonnegative(),
  })
  .required();

type CreateScoreChallengeRulesInputs = z.infer<
  typeof createScoreChallengeRulesSchema
>;

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

export default function CreateScoreChallengeRules() {
  const { setChallengeRules } = useCreateChallengeStore();
  const form = useForm<CreateScoreChallengeRulesInputs>({
    resolver: zodResolver(createScoreChallengeRulesSchema),
    defaultValues: {
      ...DEFAULT_SCORE_RULES,
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

  return (
    <Form {...form}>
      <form
        id="score-rules"
        className="space-y-8"
        onChange={changeRulesHandler}
      >
        {/* Seleção dos Desafios*/}
        <FormField
          control={form.control}
          name="selectionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Seleção dos Desafios</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
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
              <FormLabel className="font-bold">Rounds</FormLabel>
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
              <FormLabel className="font-bold">
                Tempo de Round (em minutos)
              </FormLabel>
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
              <FormLabel className="font-bold">
                Número máximo de jogadores
              </FormLabel>
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
      </form>
    </Form>
  );
}
