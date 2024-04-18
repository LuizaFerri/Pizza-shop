import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const signUpForm = z.object({
  restaurantName: z.string(),
  manegerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type signUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signUpForm>();

  async function handlesignUp(data: signUpForm) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Restaurante cadastrado com sucesso!", {
      action: {
        label: "Acessar painel",
        onClick: () => {
          navigation("/sign-in");
        },
      },
    });
  }
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild variant="ghost">
          <Link to="/sign-in" className="absolute right-8 top-8">
            Fazer login
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handlesignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                className="input"
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="manegerName">Seu nome</Label>
              <Input
                id="manegerName"
                type="text"
                className="input"
                {...register("email")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input
                id="phone"
                type="tel"
                className="input"
                {...register("phone")}
              />
            </div>
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
              Finalizar cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <a href="" className="underline">
                Termos de Serviço{" "}
              </a>{" "}
              e{" "}
              <a href="" className="underline">
                Política de Privacidade
              </a>{" "}
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
