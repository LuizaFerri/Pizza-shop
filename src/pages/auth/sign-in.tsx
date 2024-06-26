import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

const SignInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof SignInForm>;

export function SignIn() {
  const [searchParms] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParms.get("email") ?? "",
    },
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email });
      toast.success("Enviamos um link de acesso para o seu e-mail.", {
        action: {
          label: "reenviar",
          onClick: () => authenticate({ email: data.email }),
        },
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar o link de acesso.");
    }
  }
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button asChild variant="ghost">
          <Link to="/sign-up" className="absolute right-8 top-8">
            Novo estabelecimento
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email"
                type="email"
                className="input"
                {...register("email")}
              />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
