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
import { SpeedChallengeRules } from "@/types/Challenge";
import { useEffect } from "react";
import { DEFAULT_SPEED_RULES } from "./defaultChallengeRules";
import useCreateChallengeStore from "@/store/createChallengeStore";

const createSpeedChallengeRulesSchema = z
  .object({
    classifications: z.number().min(1).nonnegative(),
    maxPlayerNum: z.number().min(2).nonnegative(),
    // startDate: z.date().min(new Date(Date.now())),
    // endDate: z.date(),
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
    if (type == "speed") resetDefaultRules("speed");
  }, [type]);

  return (
    <Form {...form}>
      <form id="rules" className="space-y-8" onChange={changeRulesHandler}>
        {/* Número máximo de classificações*/}
        <FormField
          control={form.control}
          name="classifications"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Classificações</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="speed-challenge-classifications"
                  type="number"
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
          name="maxPlayerNum"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">
                Número máximo de jogadores
              </FormLabel>
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
        {/* <FormField
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
        /> */}

        {/* Data Final */}
        {/* <FormField
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
        /> */}
      </form>
    </Form>
  );
}
