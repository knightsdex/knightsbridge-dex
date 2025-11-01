
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Droplets, TrendingUp, Info } from "lucide-react";
import AddLiquidityModal from "@/components/AddLiquidityModal";

const Liquidity = () => {
  const liquidityPools = [
    {
      pair: "XT/BTC",
      liquidity: "$128.5M",
      volume24h: "$12.4M",
      fees24h: "$31.2K",
      apr: "45.67%",
      myLiquidity: "0.0000",
    },
    {
      pair: "BUSD/BTC",
      liquidity: "$89.2M",
      volume24h: "$8.9M",
      fees24h: "$22.3K",
      apr: "23.45%",
      myLiquidity: "0.0000",
    },
    {
      pair: "ETH/BTC",
      liquidity: "$45.8M",
      volume24h: "$6.2M",
      fees24h: "$15.6K",
      apr: "67.89%",
      myLiquidity: "0.0000",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Liquidity</h1>
          <p className="text-muted-foreground">
            Add liquidity to receive LP tokens and earn fees from trades proportional to your share of the pool.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Liquidity</p>
                  <p className="text-2xl font-bold text-foreground">$5.2B</p>
                </div>
                <Droplets className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">24h Volume</p>
                  <p className="text-2xl font-bold text-foreground">$84.5M</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">24h Fees</p>
                  <p className="text-2xl font-bold text-foreground">$211.2K</p>
                </div>
                <Info className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Liquidity Section */}
        <Card className="knightsbridge-card mb-8">
          <CardHeader>
            <CardTitle>Your Liquidity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <Droplets className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-6">
                No liquidity found. Add liquidity to get started.
              </p>
              <AddLiquidityModal>
                <Button className="knightsbridge-button">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Liquidity
                </Button>
              </AddLiquidityModal>
            </div>
          </CardContent>
        </Card>

        {/* Liquidity Pools */}
        <Card className="knightsbridge-card">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Top Liquidity Pools</CardTitle>
              <Button variant="outline">
                View All Pools
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {liquidityPools.map((pool, index) => (
                <div key={index} className="border border-border rounded-lg p-4 hover:bg-muted transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                      <div className="flex -space-x-1">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-background"></div>
                        <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{pool.pair}</h3>
                        <p className="text-sm text-muted-foreground">LP Token</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Liquidity</p>
                        <p className="font-semibold text-foreground">{pool.liquidity}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Volume (24h)</p>
                        <p className="font-semibold text-foreground">{pool.volume24h}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Fees (24h)</p>
                        <p className="font-semibold text-foreground">{pool.fees24h}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">APR</p>
                        <p className="font-semibold text-green-500">{pool.apr}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4 md:mt-0">
                      <Button size="sm" variant="outline">
                        Add
                      </Button>
                      <Button size="sm" variant="outline">
                        Remove
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

export default Liquidity;
