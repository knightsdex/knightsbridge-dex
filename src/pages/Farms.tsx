import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sprout, TrendingUp, DollarSign, Clock } from "lucide-react";

const Farms = () => {
  const farms = [
    {
      pair: "XT-ETH LP",
      apr: "45.2%",
      multiplier: "40X",
      liquidity: "$12.5M",
      earned: "0.0000",
      staked: "0.0000",
      status: "Active"
    },
    {
      pair: "BUSD-BTC LP",
      apr: "32.8%",
      multiplier: "25X",
      liquidity: "$8.2M",
      earned: "0.0000",
      staked: "0.0000",
      status: "Active"
    },
    {
      pair: "ETH-BTC LP",
      apr: "28.5%",
      multiplier: "20X",
      liquidity: "$15.7M",
      earned: "0.0000",
      staked: "0.0000",
      status: "Active"
    },
    {
      pair: "USDT-BUSD LP",
      apr: "18.2%",
      multiplier: "10X",
      liquidity: "$25.1M",
      earned: "0.0000",
      staked: "0.0000",
      status: "Active"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Farms</h1>
          <p className="text-muted-foreground">
            Stake LP tokens to earn XT rewards
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Sprout className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Active Farms</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Avg APR</p>
                  <p className="text-2xl font-bold text-foreground">31.2%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-yellow-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Staked</p>
                  <p className="text-2xl font-bold text-foreground">$61.5M</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Your Rewards</p>
                  <p className="text-2xl font-bold text-foreground">0.0 XT</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Farms List */}
        <Card className="knightsbridge-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sprout className="w-5 h-5 mr-2" />
              Available Farms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {farms.map((farm, index) => (
                <div key={index} className="bg-muted rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-background"></div>
                          <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-background"></div>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{farm.pair}</div>
                          <Badge variant="secondary" className="text-xs">
                            {farm.multiplier}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-bold text-green-500">{farm.apr}</div>
                      <div className="text-sm text-muted-foreground">APR</div>
                    </div>

                    <div className="text-center">
                      <div className="font-semibold text-foreground">{farm.liquidity}</div>
                      <div className="text-sm text-muted-foreground">Liquidity</div>
                    </div>

                    <div className="text-center">
                      <div className="font-semibold text-foreground">{farm.earned}</div>
                      <div className="text-sm text-muted-foreground">XT Earned</div>
                    </div>

                    <div className="text-center">
                      <div className="font-semibold text-foreground">{farm.staked}</div>
                      <div className="text-sm text-muted-foreground">LP Staked</div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Harvest
                      </Button>
                      <Button size="sm" className="knightsbridge-button">
                        Stake
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Farms;