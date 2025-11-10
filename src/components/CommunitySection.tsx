
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Users, Twitter, Send } from "lucide-react";

const CommunitySection = () => {
	const communityStats = [
		{
		
		{
			icon: MessageCircle,
			count: "500K+",
			label: "Daily Messages",
			color: "text-green-500",
		},
		{
			icon: Twitter,
			count: "1M+",
			label: "Twitter Followers",
			color: "text-purple-500",
		},
	];

	const socialLinks = [
		{
			name: "Twitter",
			icon: Twitter,
			url: "#",
			color: "hover:bg-blue-500",
		},
		{
			name: "Telegram",
			icon: Send,
			url: "#",
			color: "hover:bg-blue-400",
		},
		{
			name: "Discord",
			icon: MessageCircle,
			url: "#",
			color: "hover:bg-purple-500",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-foreground mb-6">
						Join our Community
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Be part of the largest DeFi community. Connect with fellow traders, developers, and DeFi enthusiasts.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{communityStats.map((stat, index) => (
						<Card key={index} className="pancake-card text-center hover:shadow-xl transition-all duration-300">
							<CardContent className="p-8">
								<div className={`inline-flex p-4 rounded-full bg-gray-100 ${stat.color} mb-4`}>
									<stat.icon className="w-8 h-8" />
								</div>
								<div className="text-3xl font-bold text-foreground mb-2">{stat.count}</div>
								<div className="text-gray-600">{stat.label}</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center">
					<h3 className="text-2xl font-bold text-foreground mb-8">
						Follow us on social media
					</h3>

					<div className="flex flex-col md:flex-row gap-2 justify-center md:space-x-6 mb-8">
						{socialLinks.map((social, index) => (
							<Button
								key={index}
								variant="outline"
								size="lg"
								className={`${social.color} hover:text-white transition-all duration-300 border-2`}
							>
								<social.icon className="w-5 h-5 mr-2" />
								{social.name}
							</Button>
						))}
					</div>

					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
						<h4 className="text-xl font-bold text-gray-900 mb-4">
							Stay Updated
						</h4>
						<p className="text-gray-600 mb-6">
							Get the latest news, updates, and exclusive offers directly in your inbox.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 items-center">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
							/>
							<Button className="pancake-button px-8">
								Subscribe
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CommunitySection;
