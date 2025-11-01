
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, Plus } from "lucide-react";

const PoolCard = () => {
  const pools = [
    {
      token: "XT",
      apy: "89.32%",
      totalStaked: "$425.6M",
      earned: "0.0000",
      staked: "0.0000",
      isAuto: true,
    },
    {
      token: "SYRUP",
      apy: "45.67%",
      totalStaked: "$156.3M",
      earned: "0.0000",
      staked: "0.0000",
      isAuto: false,
    },
    {
      token: "IFO",
      apy: "156.78%",
      totalStaked: "$89.4M",
      earned: "0.0000",
      staked: "0.0000",
      isAuto: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Pools</h2>
        <Button className="pancake-button">
          <Plus className="w-4 h-4 mr-2" />
          Create Pool
        </Button>
      </div>
      
      <div className="grid gap-4">
        {pools.map((pool, index) => (
          <Card key={index} className="pancake-card hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{pool.token}</CardTitle>
                    <p className="text-sm text-gray-600">Stake {pool.token}</p>
                  </div>
                </div>
                {pool.isAuto && (
                  <Badge className="bg-green-500 text-white">
                    Auto
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">APY</p>
                  <p className="text-lg font-semibold text-green-500">{pool.apy}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Staked</p>
                  <p className="text-lg font-semibold">{pool.totalStaked}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Earned</p>
                  <p className="text-lg font-semibold">{pool.earned}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Staked</p>
                  <p className="text-lg font-semibold">{pool.staked}</p>
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

export default PoolCard;
