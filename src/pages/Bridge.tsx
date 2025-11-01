import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpDown, Network, Clock, Shield } from "lucide-react";

const Bridge = () => {
  const supportedChains = [
    { name: "Ethereum", symbol: "ETH", color: "bg-blue-500" },
    { name: "BTC Chain", symbol: "BTC", color: "bg-yellow-500" },
    { name: "Polygon", symbol: "MATIC", color: "bg-purple-500" },
    { name: "Arbitrum", symbol: "ARB", color: "bg-cyan-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Bridge</h1>
          <p className="text-muted-foreground">
            Transfer tokens across different blockchains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bridge Interface */}
          <div className="lg:col-span-2">
            <Card className="knightsbridge-card">
              <CardHeader>
                <CardTitle>Cross-Chain Bridge</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* From Chain */}
                <div className="space-y-2">
                  <Label>From</Label>
                  <div className="flex items-center space-x-2 bg-muted rounded-xl p-3">
                    <div className="flex-1">
                      <Input
                        type="number"
                        placeholder="0.0"
                        className="border-none bg-transparent text-2xl font-semibold p-0 focus-visible:ring-0"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                        <span>Ethereum</span>
                      </div>
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">Balance: 0.0 ETH</div>
                </div>

                {/* Swap Direction */}
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full w-10 h-10 p-0 border-2 hover:border-primary bg-card hover:bg-muted"
                  >
                    <ArrowUpDown className="w-4 h-4" />
                  </Button>
                </div>

                {/* To Chain */}
                <div className="space-y-2">
                  <Label>To</Label>
                  <div className="flex items-center space-x-2 bg-muted rounded-xl p-3">
                    <div className="flex-1">
                      <Input
                        type="number"
                        placeholder="0.0"
                        className="border-none bg-transparent text-2xl font-semibold p-0 focus-visible:ring-0"
                        readOnly
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <span>BTC Chain</span>
                      </div>
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">Balance: 0.0 BTC</div>
                </div>

                {/* Bridge Info */}
                <div className="bg-muted rounded-xl p-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Bridge Fee</span>
                    <span>0.1%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Time</span>
                    <span>~5 minutes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">You Will Receive</span>
                    <span>≈ 0.0 BTC</span>
                  </div>
                </div>

                <Button className="knightsbridge-button w-full py-6 text-lg font-semibold">
                  Bridge Tokens
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Supported Chains */}
            <Card className="knightsbridge-card">
              <CardHeader>
                <CardTitle>Supported Chains</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {supportedChains.map((chain, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                      <div className={`w-8 h-8 ${chain.color} rounded-full`}></div>
                      <div>
                        <div className="font-semibold">{chain.name}</div>
                        <div className="text-sm text-muted-foreground">{chain.symbol}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bridge Features */}
            <Card className="knightsbridge-card">
              <CardHeader>
                <CardTitle>Bridge Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Network className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Multi-Chain</div>
                      <div className="text-sm text-muted-foreground">Support for major chains</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-medium">Fast Transfers</div>
                      <div className="text-sm text-muted-foreground">Complete in minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-purple-500" />
                    <div>
                      <div className="font-medium">Secure</div>
                      <div className="text-sm text-muted-foreground">Audited smart contracts</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bridge;