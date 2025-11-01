
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";

const StatsSection = () => {
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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Used by millions. Trusted with billions.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Knightsbridge has the most users of any decentralized platform, ever.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="pancake-card text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{stat.title}</div>
                <div className={`text-sm font-medium ${stat.color}`}>
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
