import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts";
import colors from 'tailwindcss/colors';

export function RevenueChart() {
  const data = [
    {
      date: "10/12",
      revenue: 4000,
    },
    {
      date: "11/12",
      revenue: 3000,
    },
    {
      date: "13/12",
      revenue: 2000,
    },
    {
      date: "14/12",
      revenue: 2780,
    },
    {
      date: "15/12",
      revenue: 1890,
    },
    {
      date: "16/12",
      revenue: 2390,
    },
    {
      date: "17/12",
      revenue: 3490,
    },
  ];
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diário no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16}/>
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors['violet']['500']}/>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
