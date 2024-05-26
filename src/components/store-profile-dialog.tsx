import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { getManegedRestaurant } from "@/api/get-managed-restaurant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const storeProfileShema = z.object({
  name: z.string().min(1),
  description: z.string(),
});

type StoreProfile = z.infer<typeof storeProfileShema>;

export function StoreProfileDialog() {
  const { data: manegedRestaurant } = useQuery({
    queryKey: ["maneged-restaurant"],
    queryFn: getManegedRestaurant,
  });

  const { register, handleSubmit } = useForm<StoreProfile>({
    resolver: zodResolver(storeProfileShema),
    values: {
      name: manegedRestaurant?.name ?? "",
      description: manegedRestaurant?.description ?? "",
    },
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações da sua loja que serão visíveis para o seu
          cliente
        </DialogDescription>
      </DialogHeader>
      <form>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register("name")} />
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register("description")}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" type="button">
            Cancelar
          </Button>
          <Button type="submit" variant="sucess">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
