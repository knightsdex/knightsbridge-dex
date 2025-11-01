
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe, Coins, TrendingUp, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Trade",
      description: "Instantly swap crypto tokens: no registration or account needed.",
      color: "from-yellow-400 to-orange-500",
      buttonText: "Trade Now",
    },
    {
      icon: Coins,
      title: "Earn",
      description: "Earn XT and other tokens for free with super high interest rates.",
      color: "from-green-400 to-blue-500",
      buttonText: "Earn Now",
    },
    {
      icon: TrendingUp,
      title: "Win",
      description: "Knightsbridge makes making money fun. You can win big with our games.",
      color: "from-purple-400 to-pink-500",
      buttonText: "Play Now",
    },
    {
      icon: Users,
      title: "NFT",
      description: "Win collectibles and trade them on our NFT market.",
      color: "from-pink-400 to-red-500",
      buttonText: "Collect Now",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Make every trade count
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trade, earn, and own crypto on the all-in-one multichain DEX
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="pancake-card hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  {feature.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Shield className="w-6 h-6 text-green-500" />
            <span className="text-lg font-semibold text-foreground">
              Audited by leading security firms
            </span>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <Globe className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-semibold text-foreground">
              Available on multiple chains
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
