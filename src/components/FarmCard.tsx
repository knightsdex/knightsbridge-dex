
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Plus } from "lucide-react";

const FarmCard = () => {
  const farms = [
    {
      pair: "XT-ETH",
      apr: "45.67%",
      liquidity: "$128.5M",
      multiplier: "10X",
      earned: "0.0000",
      staked: "0.0000",
      isHot: true,
    },
    {
      pair: "BUSD-BTC",
      apr: "23.45%",
      liquidity: "$89.2M",
      multiplier: "5X",
      earned: "0.0000",
      staked: "0.0000",
      isHot: false,
    },
    {
      pair: "ETH-BTC",
      apr: "67.89%",
      liquidity: "$45.8M",
      multiplier: "15X",
      earned: "0.0000",
      staked: "0.0000",
      isHot: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Farms</h2>
        <Button className="pancake-button">
          <Plus className="w-4 h-4 mr-2" />
          Add Liquidity
        </Button>
      </div>
      
      <div className="grid gap-4">
        {farms.map((farm, index) => (
          <Card key={index} className="pancake-card hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-1">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{farm.pair}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {farm.multiplier}
                    </Badge>
                  </div>
                </div>
                {farm.isHot && (
                  <Badge className="bg-red-500 text-white">
                    <Flame className="w-3 h-3 mr-1" />
                    Hot
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">APR</p>
                  <p className="text-lg font-semibold text-green-500">{farm.apr}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Liquidity</p>
                  <p className="text-lg font-semibold">{farm.liquidity}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">XT Earned</p>
                  <p className="text-lg font-semibold">{farm.earned}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Staked</p>
                  <p className="text-lg font-semibold">{farm.staked}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="hover:bg-gray-50">
                  Details
                </Button>
                <Button className="pancake-button">
                  Enable
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FarmCard;
