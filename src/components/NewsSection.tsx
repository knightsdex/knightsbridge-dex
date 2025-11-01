
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "Knightsbridge V3 is Live!",
      description: "Experience concentrated liquidity and improved capital efficiency on our latest version.",
      date: "Dec 15, 2024",
      category: "Product Update",
      image: "🚀",
    },
    {
      title: "New Syrup Pool: Earn BTC",
      description: "Stake XT to earn BTC tokens with up to 89% APY in our latest syrup pool.",
      date: "Dec 12, 2024",
      category: "Farming",
      image: "🍯",
    },
    {
      title: "Trading Competition",
      description: "Join our $100K trading competition and win amazing prizes. Limited time only!",
      date: "Dec 10, 2024",
      category: "Competition",
      image: "🏆",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Latest News & Updates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest developments, features, and opportunities on Knightsbridge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="pancake-card hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">
                  {item.image}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary/10 transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="pancake-button">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
