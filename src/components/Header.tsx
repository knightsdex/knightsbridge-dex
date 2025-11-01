
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useTheme } from "./ThemeProvider";

import Logo_Light from '../assets/img/logo_w.png';
import Logo_Dark from '../assets/img/logo_b.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const navItems = [
    {
      name: "Trade",
      href: "/trade",
      subItems: [
        { name: "Swap", href: "/trade" },
        { name: "Buy Crypto", href: "/buy-crypto" },
        { name: "Bridge", href: "/bridge" },
      ]
    },
    { name: "Liquidity", href: "/liquidity" },
    {
      name: "Earn",
      href: "/farms",
      subItems: [
        { name: "Farms", href: "/farms" },
        { name: "Staking", href: "/staking" },
      ]
    },
    { name: "Pools", href: "/pools" },
    { name: "ICO", href: "/ico" },
    { name: "Charts", href: "/charts" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"> */}
            <img
              src={isDark ? Logo_Light : Logo_Dark}
              alt="Logo"
              className="w-12 h-12 lg:w-16 lg:h-16"
            />
            {/* </div> */}
            <span className="text-2xl font-bold text-foreground">
              KXCO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              item.subItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className={`flex items-center transition-colors duration-200 font-medium px-3 py-2 ${item.subItems.some(sub => isActive(sub.href))
                    ? 'text-primary font-semibold border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                    }`}>
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border border-border">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          to={subItem.href}
                          className={`w-full px-3 py-2 transition-colors ${isActive(subItem.href)
                            ? 'text-primary font-semibold border-l-2 border-primary'
                            : 'text-foreground hover:bg-accent'
                            }`}
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 font-medium px-3 py-2 ${isActive(item.href)
                    ? 'text-primary font-semibold border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                    }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Connect Wallet Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden sm:block">
              <ConnectButton />
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.subItems ? (
                  <div key={item.name} className="px-3">
                    <div className="font-medium text-foreground py-2">{item.name}</div>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`block px-4 py-2 transition-colors duration-200 ${isActive(subItem.href)
                          ? 'text-primary font-semibold border-l-2 border-primary'
                          : 'text-foreground hover:text-primary hover:bg-accent'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 transition-colors duration-200 font-medium ${isActive(item.href)
                      ? 'text-primary font-semibold border-l-2 border-primary'
                      : 'text-foreground hover:text-primary hover:bg-accent'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="flex items-center justify-between mx-3 mt-4">
                <ThemeToggle />
                <ConnectButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
