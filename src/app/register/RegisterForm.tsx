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

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, "Usuário deve ter 3 caracteres no mínimo")
      .max(16, "Usuário deve ter 20 caracteres no máximo")
      .refine(
        (value) => {
          return /^[a-zA-Z_]+$/.test(value);
        },
        {
          message: "Usário deve conter apenas letras ou _",
        }
      ),
    email: z.string().email("Email inválido"),
    password: z
      .string()
      .min(6, "Senha deve ter 6 caracteres no mínimo")
      .max(8, "Senha deve ter 8 caracteres no máximo"),
    passwordConfirmation: z
      .string()
      .min(6, "Confirmação de Senha deve ter 6 caracteres no mínimo")
      .max(8, "Confirmação de Senha deve ter 8 caracteres no máximo"),
  })
  .refine(
    (values) => {
      return values.password === values.passwordConfirmation;
    },
    {
      message: "Senhas são diferentes",
      path: ["passwordConfirmation"],
    }
  );

export default function RegisterForm({ onGoBack }: RegisterFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const submitHandler = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    console.log(values);
    toast({
      title: "Registro",
      description: "Conta criada com sucesso",
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
          <CardTitle>Criar conta</CardTitle>
          <CardDescription>
            Você está criando uma conta com seu email.
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-purple-600">
                      Usuário
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="usuário" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordConfirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-purple-600">
                      Confirmação de Senha
                    </FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
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
                    Criando...
                  </div>
                ) : (
                  "Criar conta"
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
