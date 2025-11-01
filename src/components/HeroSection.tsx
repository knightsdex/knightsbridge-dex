
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import SwapInterface from "@/components/SwapInterface";

const HeroSection = () => {
	return (
		<section className="relative overflow-hidden">
			{/* Background decorative elements */}
			{/* <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" /> */}

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left content */}
					<div className="space-y-8">
						<div className="space-y-6">
							<h1 className="text-5xl lg:text-7xl font-bold leading-tight">
								<span className="text-foreground">Innovative </span>
								<span className="bg-gradient-to-l from-gray-700 via-gray-500 to-gray-300 bg-clip-text text-transparent">
									Knightsbridge DEX
								</span>
							</h1>

							<p className="text-xl text-muted-foreground max-w-lg">
								Trade, earn, and own crypto on the all-in-one multichain DEX
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" className="knightsbridge-button text-lg px-8 py-6" asChild>
								<Link to="/trade">
									Connect Wallet
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>

							<Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2" asChild>
								<Link to="/trade">
									<Play className="mr-2 h-5 w-5" />
									Trade Now
								</Link>
							</Button>
						</div>

						<div className="flex items-center space-x-6 pt-4">
							<div className="text-center">
								<div className="text-2xl font-bold text-foreground">$5.2B</div>
								<div className="text-sm text-muted-foreground">Total Value Locked</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-foreground">156M</div>
								<div className="text-sm text-muted-foreground">Total Users</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-green-500">+12.4%</div>
								<div className="text-sm text-muted-foreground">24h Volume</div>
							</div>
						</div>
					</div>

					{/* Right content - Swap Interface */}
					<div className="relative">
						<SwapInterface />

						{/* Floating decorative elements */}
						<div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
						<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
