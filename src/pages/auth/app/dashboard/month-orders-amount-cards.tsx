import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function MonthOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos (mês){" "}
        </CardTitle>
        <Utensils className="h-4 w-4 gap-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">3837</span>
        <span className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400"> +10%</span>
          maior que o mês passado
        </span>
      </CardContent>
    </Card>
  );
}
