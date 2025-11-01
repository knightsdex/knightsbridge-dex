import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Bar, Cell } from 'recharts';

const Charts = () => {
  // Sample OHLCV data for candlestick chart
  const candlestickData = [
    { time: '09:00', open: 2.32, high: 2.35, low: 2.30, close: 2.34, volume: 1200000 },
    { time: '09:15', open: 2.34, high: 2.38, low: 2.28, close: 2.28, volume: 950000 },
    { time: '09:30', open: 2.28, high: 2.42, low: 2.26, close: 2.35, volume: 1800000 },
    { time: '09:45', open: 2.35, high: 2.45, low: 2.33, close: 2.42, volume: 2100000 },
    { time: '10:00', open: 2.42, high: 2.44, low: 2.36, close: 2.39, volume: 1600000 },
    { time: '10:15', open: 2.39, high: 2.48, low: 2.38, close: 2.45, volume: 1400000 },
    { time: '10:30', open: 2.45, high: 2.50, low: 2.43, close: 2.47, volume: 1100000 },
    { time: '10:45', open: 2.47, high: 2.52, low: 2.45, close: 2.49, volume: 1300000 },
    { time: '11:00', open: 2.49, high: 2.53, low: 2.46, close: 2.51, volume: 1150000 },
    { time: '11:15', open: 2.51, high: 2.55, low: 2.48, close: 2.52, volume: 1050000 },
  ];

  const topTokens = [
    { 
      symbol: "XT", 
      name: "Knightsbridge", 
      price: "$2.45", 
      change: "+5.2%", 
      volume: "$12.5M",
      marketCap: "$245M",
      trend: "up"
    },
    { 
      symbol: "BTC", 
      name: "BTC", 
      price: "$315.24", 
      change: "+2.8%", 
      volume: "$89.2M",
      marketCap: "$48.5B",
      trend: "up"
    },
    { 
      symbol: "ETH", 
      name: "Ethereum", 
      price: "$2,156.00", 
      change: "-1.2%", 
      volume: "$156.7M",
      marketCap: "$259.8B",
      trend: "down"
    },
    { 
      symbol: "BTC", 
      name: "Bitcoin", 
      price: "$42,850.00", 
      change: "+3.1%", 
      volume: "$1.2B",
      marketCap: "$841.2B",
      trend: "up"
    },
  ];

  const tradingPairs = [
    { pair: "XT/BTC", price: "$2.45", change: "+5.2%", volume: "$1.2M", liquidity: "$5.8M" },
    { pair: "BUSD/BTC", price: "$1.00", change: "+0.1%", volume: "$890K", liquidity: "$12.3M" },
    { pair: "ETH/BTC", price: "$2,156", change: "+3.8%", volume: "$2.1M", liquidity: "$18.7M" },
    { pair: "BTC/BTC", price: "$42,850", change: "+2.1%", volume: "$1.8M", liquidity: "$25.4M" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Charts & Analytics</h1>
          <p className="text-muted-foreground">
            Real-time market data and trading analytics
          </p>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Volume (24h)</p>
                  <p className="text-2xl font-bold text-foreground">$1.26B</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Activity className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Liquidity</p>
                  <p className="text-2xl font-bold text-foreground">$5.2B</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Active Pairs</p>
                  <p className="text-2xl font-bold text-foreground">1,247</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="knightsbridge-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-orange-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Transactions (24h)</p>
                  <p className="text-2xl font-bold text-foreground">2.4M</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Chart Area */}
          <div className="xl:col-span-2">
            <Card className="knightsbridge-card">
              <CardHeader>
                <CardTitle>Price Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">XT/BTC</h3>
                    <p className="text-2xl font-bold text-green-500">$2.52</p>
                    <p className="text-sm text-green-500">+8.6% (+$0.20)</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex gap-2">
                      {['1m', '5m', '15m', '1H', '4H', '1D'].map((interval) => (
                        <Button
                          key={interval}
                          variant={interval === '15m' ? 'default' : 'ghost'}
                          size="sm"
                          className="h-7 px-2 text-xs"
                        >
                          {interval}
                        </Button>
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">24h Volume</p>
                      <p className="text-lg font-semibold text-foreground">$12.5M</p>
                    </div>
                  </div>
                </div>
                
                {/* Main Price Chart */}
                <div className="h-96 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={candlestickData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="time" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      />
                      <YAxis 
                        yAxisId="price"
                        domain={['dataMin - 0.02', 'dataMax + 0.02']}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                        orientation="right"
                      />
                      <Tooltip 
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                                <p className="text-muted-foreground text-sm">{label}</p>
                                <div className="space-y-1 text-sm">
                                  <div className="flex justify-between gap-4">
                                    <span className="text-muted-foreground">Open:</span>
                                    <span className="font-medium">${data.open}</span>
                                  </div>
                                  <div className="flex justify-between gap-4">
                                    <span className="text-muted-foreground">High:</span>
                                    <span className="font-medium text-green-500">${data.high}</span>
                                  </div>
                                  <div className="flex justify-between gap-4">
                                    <span className="text-muted-foreground">Low:</span>
                                    <span className="font-medium text-red-500">${data.low}</span>
                                  </div>
                                  <div className="flex justify-between gap-4">
                                    <span className="text-muted-foreground">Close:</span>
                                    <span className="font-medium">${data.close}</span>
                                  </div>
                                  <div className="flex justify-between gap-4">
                                    <span className="text-muted-foreground">Volume:</span>
                                    <span className="font-medium">{(data.volume / 1000000).toFixed(2)}M</span>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      {/* Candlestick representation using Line charts */}
                      <Line
                        yAxisId="price"
                        type="linear"
                        dataKey="high"
                        stroke="hsl(var(--muted-foreground))"
                        strokeWidth={1}
                        dot={false}
                        connectNulls={false}
                      />
                      <Line
                        yAxisId="price"
                        type="linear"
                        dataKey="low"
                        stroke="hsl(var(--muted-foreground))"
                        strokeWidth={1}
                        dot={false}
                        connectNulls={false}
                      />
                      <Line
                        yAxisId="price"
                        type="linear"
                        dataKey="close"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--primary))', strokeWidth: 0, r: 3 }}
                        activeDot={{ r: 5, fill: 'hsl(var(--primary))' }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                {/* Volume Chart */}
                <div className="h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={candlestickData}>
                      <XAxis 
                        dataKey="time" 
                        axisLine={false}
                        tickLine={false}
                        tick={false}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                        orientation="right"
                      />
                      <Tooltip
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            const volume = payload[0].value as number;
                            return (
                              <div className="bg-background border border-border rounded-lg p-2 shadow-lg">
                                <p className="text-muted-foreground text-xs">{label}</p>
                                <p className="text-sm font-medium">
                                  Volume: {(volume / 1000000).toFixed(2)}M
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="volume" fill="hsl(var(--muted))" opacity={0.7}>
                        {candlestickData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.close >= entry.open ? "hsl(var(--chart-2))" : "hsl(var(--chart-1))"}
                          />
                        ))}
                      </Bar>
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            <Tabs defaultValue="tokens" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tokens">Top Tokens</TabsTrigger>
                <TabsTrigger value="pairs">Trading Pairs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tokens">
                <Card className="knightsbridge-card">
                  <CardHeader>
                    <CardTitle>Top Tokens by Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topTokens.map((token, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold">{token.symbol}</span>
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">{token.symbol}</div>
                              <div className="text-sm text-muted-foreground">{token.name}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-foreground">{token.price}</div>
                            <div className={`text-sm flex items-center ${
                              token.trend === 'up' ? 'text-green-500' : 'text-red-500'
                            }`}>
                              {token.trend === 'up' ? 
                                <TrendingUp className="w-3 h-3 mr-1" /> : 
                                <TrendingDown className="w-3 h-3 mr-1" />
                              }
                              {token.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="pairs">
                <Card className="knightsbridge-card">
                  <CardHeader>
                    <CardTitle>Top Trading Pairs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tradingPairs.map((pair, index) => (
                        <div key={index} className="p-3 bg-muted rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-semibold text-foreground">{pair.pair}</div>
                            <div className={`text-sm ${
                              pair.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                            }`}>
                              {pair.change}
                            </div>
                          </div>
                          <div className="text-lg font-bold text-foreground mb-2">{pair.price}</div>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Vol: {pair.volume}</span>
                            <span>Liq: {pair.liquidity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Charts;