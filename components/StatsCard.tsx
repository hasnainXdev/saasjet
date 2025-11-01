import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export const StatsCard = ({ title, value, change, changeType = "neutral", icon: Icon }: StatsCardProps) => {
  const changeColor = {
    positive: "text-gray-300",
    negative: "text-gray-500",
    neutral: "text-gray-400",
  }[changeType];

  return (
    <Card className="bg-white/5 border-white/10 shadow-sm shadow-white/5">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        
        <div>
          <p className="text-sm text-gray-400 mb-1">{title}</p>
          <p className="text-3xl font-bold text-white mb-1">{value}</p>
          {change && (
            <p className={`text-sm ${changeColor}`}>
              {change}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
