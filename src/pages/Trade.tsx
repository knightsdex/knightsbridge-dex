
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SwapInterface from "@/components/SwapInterface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Settings, History } from "lucide-react";

const Trade = () => {
  const tradingPairs = [
    { pair: "XT/BTC", price: "$2.45", change: "+5.2%", volume: "$1.2M" },
    { pair: "BUSD/BTC", price: "$1.00", change: "+0.1%", volume: "$890K" },
    { pair: "ETH/BTC", price: "$2,156", change: "+3.8%", volume: "$2.1M" },
    { pair: "BTC/BTC", price: "$42,850", change: "+2.1%", volume: "$1.8M" },
  ];

  const recentTrades = [
    { pair: "XT/BTC", type: "Buy", amount: "150 XT", price: "$2.45", time: "2 min ago" },
    { pair: "BUSD/BTC", type: "Sell", amount: "500 BUSD", price: "$1.00", time: "5 min ago" },
    { pair: "ETH/BTC", type: "Buy", amount: "0.5 ETH", price: "$2,156", time: "8 min ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Trade</h1>
          <p className="text-muted-foreground">
            Swap tokens instantly with institutional-grade security
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Swap Interface */}
          <div className="xl:col-span-1">
            <SwapInterface />
          </div>

          {/* Trading Info */}
          <div className="xl:col-span-2 space-y-6">
            {/* Market Overview */}
            <Card className="knightsbridge-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Market Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tradingPairs.map((pair, index) => (
                    <div key={index} className="bg-muted rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold text-foreground">{pair.pair}</div>
                        <div className={`text-sm ${pair.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {pair.change}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-foreground mb-1">{pair.price}</div>
                      <div className="text-sm text-muted-foreground">Vol: {pair.volume}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chart and Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="knightsbridge-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Price Chart
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Interactive chart coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="knightsbridge-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <History className="w-5 h-5 mr-2" />
                    Recent Trades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTrades.map((trade, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <div className="font-semibold text-sm">{trade.pair}</div>
                          <div className="text-xs text-muted-foreground">{trade.time}</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-semibold ${trade.type === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>
                            {trade.type}
                          </div>
                          <div className="text-xs text-muted-foreground">{trade.amount}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Trade;
