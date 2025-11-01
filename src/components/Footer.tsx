
import { Button } from "@/components/ui/button";
import { Twitter, Send, MessageCircle, Github, Globe, Shield } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "./ThemeProvider";

import Logo_Light from '../assets/img/logo_w.png';
import Logo_Dark from '../assets/img/logo_b.png';

const Footer = () => {

  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const footerLinks = {
    About: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press Kit", href: "#" },
    ],
    Support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Security", href: "#" },
      { name: "Feedback", href: "#" },
    ],
    Developers: [
      { name: "Documentation", href: "#" },
      { name: "API", href: "#" },
      { name: "Security Audits", href: "#" },
      { name: "Bug Bounty", href: "#" },
    ],
    Products: [
      { name: "Trading", href: "#" },
      { name: "Liquidity", href: "#" },
      { name: "Staking", href: "#" },
      { name: "Analytics", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Send, href: "#", label: "Telegram" },
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Globe, href: "#", label: "Website" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={isDark ? Logo_Light : Logo_Dark}
                alt="Logo"
                className="w-12 h-12 lg:w-18 lg:h-18"
              />
              <span className="text-2xl font-bold text-foreground">KXCO</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Advanced DeFi trading platform with institutional-grade security. Trade, stake, and provide liquidity with confidence on the most secure decentralized exchange.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-accent hover:border-accent transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 KXCO. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Security Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
