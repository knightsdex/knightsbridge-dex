
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { config } from './lib/wagmi';
import '@rainbow-me/rainbowkit/styles.css';

import Index from "./pages/Index";
import Trade from "./pages/Trade";
import Liquidity from "./pages/Liquidity";
import BuyCrypto from "./pages/BuyCrypto";
import Bridge from "./pages/Bridge";
import Farms from "./pages/Farms";
import Staking from "./pages/Staking";
import Pools from "./pages/Pools";
import ICO from "./pages/ICO";
import Charts from "./pages/Charts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RainbowKitWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  return (
    <RainbowKitProvider
      theme={isDark ? darkTheme() : lightTheme()}
    >
      {children}
    </RainbowKitProvider>
  );
};

const App = () => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="knightsbridge-ui-theme">
        <RainbowKitWrapper>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/trade" element={<Trade />} />
                <Route path="/liquidity" element={<Liquidity />} />
                <Route path="/buy-crypto" element={<BuyCrypto />} />
                <Route path="/bridge" element={<Bridge />} />
                <Route path="/farms" element={<Farms />} />
                <Route path="/staking" element={<Staking />} />
                <Route path="/pools" element={<Pools />} />
                <Route path="/ico" element={<ICO />} />
                <Route path="/charts" element={<Charts />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </RainbowKitWrapper>
      </ThemeProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

export default App;
