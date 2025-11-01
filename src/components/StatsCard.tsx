
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, Activity } from "lucide-react";

const StatsCard = () => {
  const stats = [
    {
      title: "Total Value Locked",
      value: "$5.2B",
      change: "+2.3%",
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      title: "24h Volume",
      value: "$84.5M",
      change: "+15.7%",
      icon: TrendingUp,
      color: "text-blue-500",
    },
    {
      title: "Active Users",
      value: "2.4M",
      change: "+8.9%",
      icon: Users,
      color: "text-purple-500",
    },
    {
      title: "Total Transactions",
      value: "156M",
      change: "+12.4%",
      icon: Activity,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="pancake-card hover:shadow-xl transition-shadow duration-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className={`text-sm ${stat.color} flex items-center mt-1`}>
              <span>{stat.change}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCard;
