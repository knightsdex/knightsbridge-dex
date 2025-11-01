import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Plus, ArrowDown } from "lucide-react";

interface AddLiquidityModalProps {
  children: React.ReactNode;
}

const AddLiquidityModal = ({ children }: AddLiquidityModalProps) => {
  const [tokenAAmount, setTokenAAmount] = useState("");
  const [tokenBAmount, setTokenBAmount] = useState("");
  const [tokenA, setTokenA] = useState("XT");
  const [tokenB, setTokenB] = useState("BTC");

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Liquidity</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Token A Input */}
          <div className="space-y-2">
            <Label>Token A</Label>
            <div className="flex items-center space-x-2 bg-muted rounded-xl p-3">
              <div className="flex-1">
                <Input
                  type="number"
                  placeholder="0.0"
                  value={tokenAAmount}
                  onChange={(e) => setTokenAAmount(e.target.value)}
                  className="border-none bg-transparent text-lg font-semibold p-0 focus-visible:ring-0"
                />
              </div>
              <Button variant="outline" size="sm" className="bg-card hover:bg-muted">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                  <span className="font-semibold">{tokenA}</span>
                </div>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">Balance: 0.0 {tokenA}</div>
          </div>

          {/* Plus Icon */}
          <div className="flex justify-center">
            <div className="bg-muted rounded-full p-2">
              <Plus className="w-4 h-4" />
            </div>
          </div>

          {/* Token B Input */}
          <div className="space-y-2">
            <Label>Token B</Label>
            <div className="flex items-center space-x-2 bg-muted rounded-xl p-3">
              <div className="flex-1">
                <Input
                  type="number"
                  placeholder="0.0"
                  value={tokenBAmount}
                  onChange={(e) => setTokenBAmount(e.target.value)}
                  className="border-none bg-transparent text-lg font-semibold p-0 focus-visible:ring-0"
                />
              </div>
              <Button variant="outline" size="sm" className="bg-card hover:bg-muted">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  <span className="font-semibold">{tokenB}</span>
                </div>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">Balance: 0.0 {tokenB}</div>
          </div>

          {/* Pool Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pool Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Share of Pool</span>
                <span>0%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{tokenA} per {tokenB}</span>
                <span>-</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{tokenB} per {tokenA}</span>
                <span>-</span>
              </div>
            </CardContent>
          </Card>

          {/* Add Liquidity Button */}
          <Button className="knightsbridge-button w-full py-6 text-lg font-semibold">
            Add Liquidity
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddLiquidityModal;