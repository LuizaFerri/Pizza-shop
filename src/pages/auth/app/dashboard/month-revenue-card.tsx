import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês){" "}
        </CardTitle>
        <DollarSign className="h-4 w-4 gap-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 2.500,00</span>
        <span className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400"> +20% </span>
          maior que o mês passado
        </span>
      </CardContent>
    </Card>
  );
}
