"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
type RegisterFormProps = {
  onGoBack: () => void;
};

const formSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .min(6, "Senha deve ter 6 caracteres no mínimo")
    .max(8, "Senha deve ter 8 caracteres no máximo"),
});

export default function LoginForm({ onGoBack }: RegisterFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const submitHandler = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    console.log(values);
    toast({
      title: "Login",
      description: "Logado com sucesso!",
      className: "bg-green-200 font-bold text-black",
    });
    setLoading(false);
  };

  return (
    <Card className={cn("flex gap-2 h-max")}>
      <div className="flex flex-col">
        <CardHeader>
          <Button
            onClick={onGoBack}
            className="self-start mb-3 bg-purple-600 flex hover:bg-purple-500 font-bold items-center justify-start group"
            size="sm"
          >
            <ChevronLeft className="font-bold group-hover:-translate-x-1 transition-all" />
            <p>Voltar</p>
          </Button>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>
            Você está entrando na sua conta com seu email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitHandler)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-purple-600">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="example@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-purple-600">
                      Senha
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Sua senha"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={loading}
                type="submit"
                className="w-full bg-purple-500 font-bold hover:bg-purple-600"
              >
                {loading ? (
                  <div className="flex gap-1">
                    <Loader2 className="animate-spin" />
                    Entrando...
                  </div>
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-grow items-end"></CardFooter>
      </div>
      <Image
        width={300}
        height={30}
        src="/imgs/register.svg"
        alt="welcome-register"
      />
    </Card>
  );
}
