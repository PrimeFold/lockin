import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, TrendingUp, Timer } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: "clock" | "trending" | "shield" | "timer";
}

const iconMap = {
  clock: Clock,
  trending: TrendingUp,
  shield: Shield,
  timer: Timer,
};

export const StatsCard = ({ title, value, subtitle, icon }: StatCardProps) => {
  const IconComponent = iconMap[icon];
  
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-zinc-400 flex items-center gap-2">
          <IconComponent className="h-4 w-4" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{value}</div>
        <p className="text-xs text-zinc-500 mt-1">{subtitle}</p>
      </CardContent>
    </Card>
  );
};