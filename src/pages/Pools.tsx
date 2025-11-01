import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, TrendingUp, DollarSign, Users, Award } from "lucide-react";

const Pools = () => {
  const pools = [
    {
      name: "XT Pool",
      description: "Stake XT, earn XT",
      token: "XT",
      apr: "28.5%",
      totalStaked: "$125M",
      participants: "145,234",
      yourStake: "0.0000",
      pendingRewards: "0.0000",
      category: "Hot"
    },
    {
      name: "BTC Pool",
      description: "Stake BTC, earn multiple tokens",
      token: "BTC",
      apr: "15.2%",
      totalStaked: "$89M",
      participants: "89,567",
      yourStake: "0.0000",
      pendingRewards: "0.0000",
      category: "Core"
    },
    {
      name: "BUSD Pool",
      description: "Stake BUSD, earn XT",
      token: "BUSD",
      apr: "12.8%",
      totalStaked: "$67M",
      participants: "67,890",
      yourStake: "0.0000",
      pendingRewards: "0.0000",
      category: "Stable"
    },
    {
      name: "ETH Pool",
      description: "Stake ETH, earn multiple rewards",
      token: "ETH",
      apr: "18.7%",
      totalStaked: "$156M",
      participants: "123,456",
      yourStake: "0.0000",
      pendingRewards: "0.0000",
      category: "Hot"
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Hot": return "bg-red-500";
      case "Core": return "bg-blue-500";
      case "Stable": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pools</h1>
          <p className="text-muted-foreground">
            Stake single tokens to earn rewards
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Droplets className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Active Pools</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Value Locked</p>
                  <p className="text-2xl font-bold text-foreground">$437M</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Participants</p>
                  <p className="text-2xl font-bold text-foreground">426,147</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-yellow-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Your Rewards</p>
                  <p className="text-2xl font-bold text-foreground">0.0 XT</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pools.map((pool, index) => (
            <Card key={index} className="knightsbridge-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="font-bold text-sm">{pool.token}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{pool.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{pool.description}</p>
                    </div>
                  </div>
                  <Badge className={`${getCategoryColor(pool.category)} text-white`}>
                    {pool.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Pool Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">APR</span>
                    </div>
                    <div className="text-xl font-bold text-green-500">{pool.apr}</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-muted-foreground">Total Staked</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{pool.totalStaked}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">Your Stake</div>
                    <div className="text-lg font-bold text-foreground">{pool.yourStake} {pool.token}</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">Pending Rewards</div>
                    <div className="text-lg font-bold text-foreground">{pool.pendingRewards}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{pool.participants} participants</span>
                  <span>Manual harvest</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button className="knightsbridge-button flex-1">
                    Stake
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Harvest
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pools;