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

const createChallengeSchema = z
  .object({
    url: z.string().url("Url inválida"),
    name: z.string(),
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
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagem</FormLabel>
              <FormControl>
                <Input id="challenge-pic" type="file" />
              </FormControl>
              <FormDescription>
                Uma imagem para representar o desafio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagem</FormLabel>
              <FormControl>
                <Input id="challenge-pic" type="file" />
              </FormControl>
              <FormDescription>
                Uma imagem para representar o desafio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
