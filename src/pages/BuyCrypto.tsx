import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Banknote, Shield, Clock } from "lucide-react";

const BuyCrypto = () => {
  const paymentMethods = [
    { name: "Credit Card", icon: CreditCard, fee: "3.5%" },
    { name: "Bank Transfer", icon: Banknote, fee: "0.5%" },
  ];

  const popularTokens = [
    { symbol: "BTC", name: "Bitcoin", price: "$42,850" },
    { symbol: "ETH", name: "Ethereum", price: "$2,156" },
    { symbol: "BTC", name: "BTC", price: "$315" },
    { symbol: "USDT", name: "Tether", price: "$1.00" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Buy Crypto</h1>
          <p className="text-muted-foreground">
            Purchase cryptocurrencies with fiat currency
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Buy Form */}
          <div className="lg:col-span-2">
            <Card className="knightsbridge-card">
              <CardHeader>
                <CardTitle>Buy Cryptocurrency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Input */}
                <div className="space-y-2">
                  <Label>You Pay</Label>
                  <div className="flex items-center space-x-2 bg-muted rounded-xl p-3">
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="border-none bg-transparent text-2xl font-semibold p-0 focus-visible:ring-0"
                    />
                    <Button variant="outline" size="sm">USD</Button>
                  </div>
                </div>

                {/* Token Selection */}
                <div className="space-y-2">
                  <Label>You Get</Label>
                  <div className="flex items-center space-x-2 bg-muted rounded-xl p-3">
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="border-none bg-transparent text-2xl font-semibold p-0 focus-visible:ring-0"
                      readOnly
                    />
                    <Button variant="outline" size="sm">BTC</Button>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3">
                  <Label>Payment Method</Label>
                  <div className="grid gap-3">
                    {paymentMethods.map((method, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-xl hover:bg-muted/80 cursor-pointer border-2 border-transparent hover:border-primary/20">
                        <div className="flex items-center space-x-3">
                          <method.icon className="w-5 h-5" />
                          <span className="font-medium">{method.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Fee: {method.fee}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="knightsbridge-button w-full py-6 text-lg font-semibold">
                  Continue
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Popular Tokens */}
            <Card className="knightsbridge-card">
              <CardHeader>
                <CardTitle>Popular Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {popularTokens.map((token, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 cursor-pointer">
                      <div>
                        <div className="font-semibold">{token.symbol}</div>
                        <div className="text-sm text-muted-foreground">{token.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{token.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="knightsbridge-card">
              <CardHeader>
                <CardTitle>Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-medium">Secure & Safe</div>
                      <div className="text-sm text-muted-foreground">Bank-grade security</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Instant Purchase</div>
                      <div className="text-sm text-muted-foreground">Get crypto instantly</div>
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

export default BuyCrypto;