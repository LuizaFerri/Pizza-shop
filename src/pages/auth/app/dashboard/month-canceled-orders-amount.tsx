import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos cancelados (mês){" "}
        </CardTitle>
        <DollarSign className="h-4 w-4 gap-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">12</span>
        <span className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400"> +4%</span> em
          relação ao mês passado
        </span>
      </CardContent>
    </Card>
  );
}
