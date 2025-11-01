import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, TrendingUp, DollarSign, Clock, Award } from "lucide-react";

const Staking = () => {
  const stakingPools = [
    {
      name: "XT Pool",
      token: "XT",
      apr: "28.5%",
      lockPeriod: "Flexible",
      totalStaked: "$125M",
      yourStake: "0.0000",
      rewards: "0.0000",
      type: "flexible"
    },
    {
      name: "XT Pool - 52 Week Lock",
      token: "XT",
      apr: "45.2%",
      lockPeriod: "52 weeks",
      totalStaked: "$89M",
      yourStake: "0.0000",
      rewards: "0.0000",
      type: "locked",
      boost: "1.8x"
    },
    {
      name: "BTC Pool",
      token: "BTC",
      apr: "12.8%",
      lockPeriod: "30 days",
      totalStaked: "$45M",
      yourStake: "0.0000",
      rewards: "0.0000",
      type: "locked"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Staking</h1>
          <p className="text-muted-foreground">
            Stake tokens to earn rewards and participate in governance
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Lock className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Staked</p>
                  <p className="text-2xl font-bold text-foreground">$259M</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Avg APR</p>
                  <p className="text-2xl font-bold text-foreground">28.8%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-yellow-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Your Staked</p>
                  <p className="text-2xl font-bold text-foreground">$0.00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Your Rewards</p>
                  <p className="text-2xl font-bold text-foreground">0.0 XT</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Staking Pools */}
        <div className="space-y-6">
          {stakingPools.map((pool, index) => (
            <Card key={index} className="knightsbridge-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full mr-3"></div>
                    {pool.name}
                    {pool.boost && (
                      <Badge variant="secondary" className="ml-2 bg-gradient-to-r from-primary to-secondary">
                        {pool.boost} Boost
                      </Badge>
                    )}
                  </CardTitle>
                  <Badge variant={pool.type === 'flexible' ? 'secondary' : 'default'}>
                    {pool.lockPeriod}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Pool Info */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground">APR</div>
                        <div className="text-2xl font-bold text-green-500">{pool.apr}</div>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground">Total Staked</div>
                        <div className="text-lg font-bold text-foreground">{pool.totalStaked}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground">Your Stake</div>
                        <div className="text-lg font-bold text-foreground">{pool.yourStake} {pool.token}</div>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground">Rewards</div>
                        <div className="text-lg font-bold text-foreground">{pool.rewards} {pool.token}</div>
                      </div>
                    </div>
                  </div>

                  {/* Staking Interface */}
                  <div className="space-y-4">
                    <Tabs defaultValue="stake" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="stake">Stake</TabsTrigger>
                        <TabsTrigger value="unstake">Unstake</TabsTrigger>
                      </TabsList>
                      <TabsContent value="stake" className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Amount</span>
                            <span className="text-muted-foreground">Balance: 0.0 {pool.token}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-muted rounded-xl p-3">
                            <Input
                              type="number"
                              placeholder="0.0"
                              className="border-none bg-transparent text-lg font-semibold p-0 focus-visible:ring-0"
                            />
                            <Button variant="outline" size="sm">MAX</Button>
                          </div>
                        </div>
                        <Button className="knightsbridge-button w-full">
                          Stake {pool.token}
                        </Button>
                      </TabsContent>
                      <TabsContent value="unstake" className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Amount</span>
                            <span className="text-muted-foreground">Staked: {pool.yourStake} {pool.token}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-muted rounded-xl p-3">
                            <Input
                              type="number"
                              placeholder="0.0"
                              className="border-none bg-transparent text-lg font-semibold p-0 focus-visible:ring-0"
                            />
                            <Button variant="outline" size="sm">MAX</Button>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          Unstake {pool.token}
                        </Button>
                      </TabsContent>
                    </Tabs>
                    
                    <Button variant="secondary" className="w-full">
                      Harvest Rewards
                    </Button>
                  </div>
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

export default Staking;