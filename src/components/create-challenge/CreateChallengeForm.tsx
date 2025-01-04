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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CreateChallengeImageUpload from "./CreateChallengeImageUpload";

const createChallengeSchema = z
  .object({
    url: z
      .string({ required_error: "Url do desafio é obrigatório" })
      .url("Url inválida"),
    name: z.string({ required_error: "Nome do desafio é obrigatório" }),
    challenge: z.string(),
    category: z.string(),
    desc: z.string(),
  })
  .required();

type CreateChallengeInputs = z.infer<typeof createChallengeSchema>;

type CreateChallengeFormProps = {};

export default function CreateChallengeForm({}: CreateChallengeFormProps) {
  const form = useForm<CreateChallengeInputs>({
    resolver: zodResolver(createChallengeSchema),
    defaultValues: {
      url: "",
      name: "",
    },
  });

  function onSubmit(values: CreateChallengeInputs) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Imagem */}
        <FormField
          control={form.control}
          name="url"
          render={() => (
            <FormItem>
              <FormLabel>Imagem</FormLabel>
              <FormControl>
                <CreateChallengeImageUpload />
              </FormControl>
              <FormDescription>
                Uma imagem para representar o desafio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Nome */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  id="challenge-pic"
                  type="text"
                  placeholder="Nome do desafio"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*  Desafio*/}
        <FormField
          control={form.control}
          name="challenge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desafio</FormLabel>
              <FormControl>
                <Input
                  id="challenge-pic"
                  type="text"
                  placeholder="O desafio para os jogadores"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*  Decrição*/}
        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  className="h-32 resize-none"
                  placeholder="Descrição do desafio"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-1 gap-3">
          <Button
            type="submit"
            className="flex-1 bg-indigo-500 font-bold hover:bg-indigo-600"
          >
            Resetar
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-emerald-500 font-bold hover:bg-emerald-600"
          >
            Criar desafio
          </Button>
        </div>
      </form>
    </Form>
  );
}
