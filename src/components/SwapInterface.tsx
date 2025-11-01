
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, Settings, RefreshCw, ChevronDown } from "lucide-react";
import { useState } from "react";

const SwapInterface = () => {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromToken, setFromToken] = useState("ETH");
  const [toToken, setToToken] = useState("XT");

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <Card className="knightsbridge-card w-full max-w-md mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">Swap</CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2">
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* From Token */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>From</span>
            <span>Balance: 0.0</span>
          </div>
          <div className="flex items-center space-x-2 bg-muted rounded-xl p-3">
            <div className="flex-1">
              <Input
                type="number"
                placeholder="0.0"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="border-none bg-transparent text-2xl font-semibold p-0 focus-visible:ring-0 text-foreground"
              />
            </div>
            <Select value={fromToken} onValueChange={setFromToken}>
              <SelectTrigger className="w-auto bg-card hover:bg-muted border-muted">
                <div className="flex items-center space-x-2">
                  <div className={`w-6 h-6 rounded-full ${fromToken === 'ETH' ? 'bg-blue-500' : 'bg-orange-400'}`}></div>
                  <span className="font-semibold">{fromToken}</span>
                  {/* <ChevronDown className="w-4 h-4" /> */}
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ETH">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <span>ETH</span>
                  </div>
                </SelectItem>
                <SelectItem value="BTC">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                    <span>BTC</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSwapTokens}
            className="rounded-full w-10 h-10 p-0 border-2 hover:border-primary bg-card hover:bg-muted"
          >
            <ArrowUpDown className="w-4 h-4" />
          </Button>
        </div>

        {/* To Token */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>To</span>
            <span>Balance: 0.0</span>
          </div>
          <div className="flex items-center space-x-2 bg-muted rounded-xl p-3">
            <div className="flex-1">
              <Input
                type="number"
                placeholder="0.0"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="border-none bg-transparent text-2xl font-semibold p-0 focus-visible:ring-0 text-foreground"
              />
            </div>
            <Button variant="outline" className="bg-card hover:bg-muted">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                <span className="font-semibold">{toToken}</span>
              </div>
            </Button>
          </div>
        </div>

        {/* Price Info */}
        <div className="bg-muted rounded-xl p-3 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Price</span>
            <span className="text-foreground">1 {fromToken} = 15.234 {toToken}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Slippage Tolerance</span>
            <span className="text-foreground">0.5%</span>
          </div>
        </div>

        {/* Swap Button */}
        <Button className="knightsbridge-button w-full py-6 text-lg font-semibold">
          Connect Wallet
        </Button>
      </CardContent>
    </Card>
  );
};

export default SwapInterface;
